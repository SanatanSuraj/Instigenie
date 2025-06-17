'use client';

import { useEffect } from 'react';

export function useKeyboardNav() {
  useEffect(() => {
    // Show focus outlines only when using keyboard
    function handleFirstTab(e: KeyboardEvent) {
      if (e.key === 'Tab') {
        document.body.classList.add('user-is-tabbing');
        window.removeEventListener('keydown', handleFirstTab);
      }
    }

    window.addEventListener('keydown', handleFirstTab);
    return () => {
      window.removeEventListener('keydown', handleFirstTab);
    };
  }, []);

  useEffect(() => {
    // Handle escape key for modals and menus
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        // Dispatch a custom event that components can listen to
        document.dispatchEvent(new CustomEvent('escapeKeyPressed'));
      }
    }

    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);
}