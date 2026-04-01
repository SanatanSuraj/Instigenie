'use client';

import { usePathname } from 'next/navigation';
import FloatingChatButton from '@/app/components/FloatingChatButton';
import HomeNavbar from '@/app/components/home/HomeNavbar';
import HomeFooter from '@/app/components/home/HomeFooter';

// Pages that render full-screen without navbar/footer/FAB
const BARE_PAGES = ['/login', '/chat'];

// Pages that get full-bleed layout (no content wrapper padding)
const FULLBLEED_PAGES = ['/'];

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Full-screen pages: login, chat — render children directly
  if (BARE_PAGES.includes(pathname)) {
    return <>{children}</>;
  }

  const isFullBleed = FULLBLEED_PAGES.includes(pathname);

  return (
    <div style={{ background: 'var(--ig-bg)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <HomeNavbar />
      <main style={{ flex: 1 }}>
        {isFullBleed ? (
          children
        ) : (
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              padding: '48px 24px 80px',
              width: '100%',
            }}
          >
            {children}
          </div>
        )}
      </main>
      <HomeFooter />
      <FloatingChatButton />
    </div>
  );
}
