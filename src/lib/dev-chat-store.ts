import { randomUUID } from "crypto"

const DEMO_USER_ID = "demo-user"
const DEMO_USERNAME = "testuser"
const DEMO_PASSWORD = "testpass"

type MemoryMessage = {
  id: string
  role: "user" | "ai"
  content: string
  timestamp: Date
}

type MemoryStore = Record<string, MemoryMessage[]>

declare global {
  var __memoryChatStore: MemoryStore | undefined
  var __memoryChatFallbackActive: boolean | undefined
}

function getMemoryStore(): MemoryStore {
  if (!global.__memoryChatStore) {
    global.__memoryChatStore = {}
  }

  return global.__memoryChatStore
}

export function addMessageToMemory(
  userId: string,
  message: Omit<MemoryMessage, "id">
): MemoryMessage {
  const store = getMemoryStore()
  const withId: MemoryMessage = { id: randomUUID(), ...message }
  store[userId] = [...(store[userId] ?? []), withId]
  return withId
}

export function getMessagesFromMemory(userId: string): MemoryMessage[] {
  const store = getMemoryStore()
  return store[userId] ?? []
}

export function clearMessagesFromMemory(userId: string) {
  const store = getMemoryStore()
  delete store[userId]
}

export function getDemoCredentials() {
  return {
    username: DEMO_USERNAME,
    password: DEMO_PASSWORD,
    userId: DEMO_USER_ID,
  }
}

export function isMongoConnectionError(error: unknown) {
  return (
    error instanceof Error &&
    (error.name === "MongooseServerSelectionError" ||
      error.message.includes("ECONNREFUSED"))
  )
}

export function isMemoryFallbackActive() {
  return Boolean(global.__memoryChatFallbackActive)
}

export function activateMemoryFallback(error?: unknown) {
  if (global.__memoryChatFallbackActive) {
    return
  }

  global.__memoryChatFallbackActive = true

  const message =
    "MongoDB connection failed. Falling back to in-memory storage for demo mode."

  if (process.env.NODE_ENV === "production") {
    console.error(message, error)
  } else {
    console.warn(message, error)
  }
}
