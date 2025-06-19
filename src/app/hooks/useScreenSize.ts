import { useState, useEffect } from 'react';

export const breakpoints = {
  xs: 375,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

type Breakpoint = keyof typeof breakpoints;

export const useScreenSize = () => {
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isXs = screenWidth >= breakpoints.xs;
  const isSm = screenWidth >= breakpoints.sm;
  const isMd = screenWidth >= breakpoints.md;
  const isLg = screenWidth >= breakpoints.lg;
  const isXl = screenWidth >= breakpoints.xl;
  const is2Xl = screenWidth >= breakpoints['2xl'];

  const currentBreakpoint: Breakpoint = (() => {
    if (screenWidth >= breakpoints['2xl']) return '2xl';
    if (screenWidth >= breakpoints.xl) return 'xl';
    if (screenWidth >= breakpoints.lg) return 'lg';
    if (screenWidth >= breakpoints.md) return 'md';
    if (screenWidth >= breakpoints.sm) return 'sm';
    return 'xs';
  })();

  return {
    screenWidth,
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    is2Xl,
    currentBreakpoint,
  };
};

export default useScreenSize;
