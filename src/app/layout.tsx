import './globals.css';
import MetadataScript from '@/app/components/Metadata';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import FloatingChatButton from '@/app/components/FloatingChatButton';
import { ThemeProvider } from 'next-themes';
import { ChatProvider } from './context/ChatContext';
import { Playfair_Display, Lora, Inter } from 'next/font/google';
import ResponsiveContainer from './components/layout/ResponsiveContainer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lora.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <MetadataScript />
        <meta httpEquiv="Permissions-Policy" content="microphone=*, camera=*, geolocation=*, payment=*" />
      </head>
      <body className="min-h-screen bg-clinic-white dark:bg-soft-charcoal">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ChatProvider>
            <div className="flex flex-col min-h-screen">
              <Navigation />
              <ResponsiveContainer maxWidth="2xl" className="flex-grow">
                <main className="w-full py-4 sm:py-6 md:py-8 lg:py-12">
                  {children}
                </main>
              </ResponsiveContainer>
              <Footer />
              <FloatingChatButton />
            </div>
          </ChatProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
