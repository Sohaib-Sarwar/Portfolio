import { useEffect, useRef } from 'react';
import './CustomCursor.css';

const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Mouse/trackpad only, and never when the user prefers reduced motion
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!fine.matches || reduced.matches) return undefined;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return undefined;

    const root = document.documentElement;
    root.classList.add('has-custom-cursor');

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let raf = 0;

    // Ring eases toward the pointer; the loop stops once it has settled
    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;
      raf = Math.abs(mouseX - ringX) + Math.abs(mouseY - ringY) > 0.1
        ? requestAnimationFrame(animate)
        : 0;
    };

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      dot.style.opacity = '1';
      ring.style.opacity = '1';
      if (!raf) raf = requestAnimationFrame(animate);
    };

    // Event delegation: one listener instead of one per interactive element
    const onPointerOver = (e) => {
      const hovering = Boolean(e.target.closest?.(INTERACTIVE));
      dot.classList.toggle('cursor-dot--hover', hovering);
      ring.classList.toggle('cursor-ring--hover', hovering);
    };

    const onLeaveWindow = () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };

    document.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('pointerover', onPointerOver, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeaveWindow);

    return () => {
      cancelAnimationFrame(raf);
      root.classList.remove('has-custom-cursor');
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('pointerover', onPointerOver);
      document.documentElement.removeEventListener('mouseleave', onLeaveWindow);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
