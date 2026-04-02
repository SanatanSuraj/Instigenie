import './globals.css';
import MetadataScript from '@/app/components/Metadata';
import LayoutShell from '@/app/components/LayoutShell';
import CustomCursor from '@/app/components/CustomCursor';
import { ThemeProvider } from 'next-themes';
import { ChatProvider } from './context/ChatContext';
import { Space_Grotesk, DM_Sans, Playfair_Display, Lora, Inter } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
});

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
      className={`${spaceGrotesk.variable} ${dmSans.variable} ${playfair.variable} ${lora.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <MetadataScript />
        <meta httpEquiv="Permissions-Policy" content="microphone=*, camera=*, geolocation=*, payment=*" />
      </head>
      <body className="min-h-screen bg-clinic-white dark:bg-soft-charcoal">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ChatProvider>
            <CustomCursor />
            <LayoutShell>{children}</LayoutShell>
          </ChatProvider>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
