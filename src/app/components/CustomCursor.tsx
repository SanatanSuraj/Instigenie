'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // Track actual mouse position
  const mouse = useRef({ x: -100, y: -100 });
  // Ring lags behind
  const ring  = useRef({ x: -100, y: -100 });

  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const rafId = useRef<number>(0);

  useEffect(() => {
    /* ── Move handlers ── */
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const onDown = () => setIsClicking(true);
    const onUp   = () => setIsClicking(false);

    /* ── Hover state on interactive elements ── */
    const onEnter = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (
        t.closest('a, button, [role="button"], input, textarea, select, label, [data-cursor-hover]')
      ) setIsHovering(true);
    };
    const onLeave = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (
        t.closest('a, button, [role="button"], input, textarea, select, label, [data-cursor-hover]')
      ) setIsHovering(false);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup',   onUp);
    document.addEventListener('mouseover', onEnter);
    document.addEventListener('mouseout',  onLeave);

    /* ── RAF animation loop ── */
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const tick = () => {
      // Dot snaps instantly
      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${mouse.current.x}px, ${mouse.current.y}px)`;
      }
      // Ring lerps with lag (0.12 = gentle follow)
      ring.current.x = lerp(ring.current.x, mouse.current.x, 0.12);
      ring.current.y = lerp(ring.current.y, mouse.current.y, 0.12);
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }
      rafId.current = requestAnimationFrame(tick);
    };
    rafId.current = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup',   onUp);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout',  onLeave);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  /* ── Sizes & colours ── */
  const GOLD = '#C9A96E';
  const GOLD_DARK = '#A67C3D';

  const dotSize  = isClicking ? 8 : isHovering ? 10 : 8;
  const ringSize = isClicking ? 28 : isHovering ? 44 : 36;
  const ringOpacity = isHovering ? 0.85 : 0.65;

  return (
    <>
      {/* Outer ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width:  `${ringSize}px`,
          height: `${ringSize}px`,
          borderRadius: '50%',
          border: `1.5px solid ${GOLD}`,
          marginLeft: `-${ringSize / 2}px`,
          marginTop:  `-${ringSize / 2}px`,
          pointerEvents: 'none',
          zIndex: 99999,
          opacity: ringOpacity,
          transition:
            'width 0.25s ease, height 0.25s ease, margin 0.25s ease, opacity 0.25s ease, border-color 0.25s ease',
          willChange: 'transform',
          mixBlendMode: 'normal',
          boxShadow: isHovering
            ? `0 0 14px rgba(201,169,110,0.30)`
            : `0 0 6px rgba(201,169,110,0.12)`,
        }}
      />

      {/* Inner dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width:  `${dotSize}px`,
          height: `${dotSize}px`,
          borderRadius: '50%',
          background: isClicking
            ? GOLD_DARK
            : GOLD,
          marginLeft: `-${dotSize / 2}px`,
          marginTop:  `-${dotSize / 2}px`,
          pointerEvents: 'none',
          zIndex: 99999,
          transition:
            'width 0.15s ease, height 0.15s ease, margin 0.15s ease, background 0.15s ease, box-shadow 0.15s ease',
          willChange: 'transform',
          boxShadow: isHovering
            ? `0 0 10px rgba(201,169,110,0.60), 0 0 20px rgba(201,169,110,0.25)`
            : `0 0 6px rgba(201,169,110,0.40)`,
        }}
      />
    </>
  );
}
