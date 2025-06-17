import Link from 'next/link';
import './globals.css';
import AiraChat from '@/app/components/AiraChat';
import MetadataScript from '@/app/components/Metadata';
import Navigation from '@/app/components/Navigation';
import { ThemeProvider } from 'next-themes';
import { ChatProvider } from './context/ChatContext';
import { Playfair_Display, Lora, Inter } from 'next/font/google';

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
      </head>
      <body className="bg-base-50 dark:bg-base-900 text-base-900 dark:text-base-50">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ChatProvider>
            <Navigation />

            <main id="main-content" className="min-h-screen" tabIndex={-1}>
              {children}
            </main>

            <footer className="bg-base-800 dark:bg-base-900 text-base-50 py-16">
              <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
                <div>
                  <h3 className="font-playfair mb-6">Programs</h3>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        href="/physical-exam"
                        className="text-base-200 hover:text-accent-500 transition-colors"
                      >
                        Physical Examination
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/vision-hearing"
                        className="text-base-200 hover:text-accent-500 transition-colors"
                      >
                        Vision & Hearing
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/dental-care"
                        className="text-base-200 hover:text-accent-500 transition-colors"
                      >
                        Dental Care
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/mental-health"
                        className="text-base-200 hover:text-accent-500 transition-colors"
                      >
                        Mental Health
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-playfair mb-6">Pricing</h3>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        href="/pricing#basic"
                        className="text-base-200 hover:text-accent-500 transition-colors"
                      >
                        Basic Plan
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/pricing#silver"
                        className="text-base-200 hover:text-accent-500 transition-colors"
                      >
                        Silver Plan
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/pricing#gold"
                        className="text-base-200 hover:text-accent-500 transition-colors"
                      >
                        Gold Plan
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-playfair mb-6">Resources</h3>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        href="/blog"
                        className="text-base-200 hover:text-accent-500 transition-colors"
                      >
                        Health Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/faq"
                        className="text-base-200 hover:text-accent-500 transition-colors"
                      >
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about"
                        className="text-base-200 hover:text-accent-500 transition-colors"
                      >
                        About Us
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-playfair mb-6"></h3>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        href="/contact"
                        className="inline-flex items-center px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white rounded-lg transition-colors duration-200"
                      >
                        Contact Us
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <a
                        href="tel:+917050140340"
                        className="text-base-200 hover:text-accent-500 transition-colors flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        +91 7050140340
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:info@instigenie.com"
                        className="text-base-200 hover:text-accent-500 transition-colors flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        info@instigenie.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </footer>

            <AiraChat />
          </ChatProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
