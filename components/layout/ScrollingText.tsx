"use client";
import { useEffect, useRef, useState } from "react";

export function ScrollingText() {
  const text = "SAYYED MUDASSIR • SWE • ";
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      if (typeof document !== 'undefined') {
        setIsDark(document.documentElement.classList.contains('dark'));
      }
    };

    updateTheme(); // Initial check

    // Listen for theme changes
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateWidth = () => {
      const textElements = container.querySelectorAll('.scrolling-text');
      if (textElements.length === 0) return;

      const singleTextWidth = (textElements[0] as HTMLElement).offsetWidth;
      // Container width = total width of all repeated texts
      container.style.width = `${singleTextWidth * textElements.length}px`;

      // Restart animation after width change
      container.style.animation = 'none';
      void container.offsetWidth; // force reflow
      container.style.animation = 'scroll-left 20s linear infinite';
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [isDark]); // Re-run when theme changes

  const strokeColor = isDark 
    ? "1px rgba(255, 255, 255, 0.8)" 
    : "1px rgba(0, 0, 0, 0.8)";

  return (
    <div className="w-full overflow-hidden bg-gray-50 dark:bg-[#0f001a] py-15">
      <div ref={containerRef} className="scrolling-container">
        {/* Repeat text twice for seamless scrolling */}
        {Array.from({ length: 2 }).map((_, blockIndex) =>
          Array.from({ length: 4 }).map((_, i) => (
            <span
              key={`${blockIndex}-${i}`}
              className="scrolling-text text-9xl font-bold tracking-wider"
              style={{
                color: "transparent",
                WebkitTextStroke: strokeColor,
                // textStroke: strokeColor,
                whiteSpace: "nowrap",
                display: "inline-block",
              }}
            >
              {text}
            </span>
          ))
        )}
      </div>
    </div>
  );
}