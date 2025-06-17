'use client';

import { ReactNode } from 'react';
import PageTransition from './components/PageTransition';
import { ErrorBoundary } from './components/ErrorBoundary';

export default function Template({ children }: { children: ReactNode }) {
  return (
    <ErrorBoundary>
      <PageTransition>{children}</PageTransition>
    </ErrorBoundary>
  );
}