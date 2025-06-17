declare module 'deepseek-api' {
  interface ChatSession {
    id: string;
    token: string;
  }

  export function createNewChat(params: { token: string }): Promise<ChatSession>;
}
