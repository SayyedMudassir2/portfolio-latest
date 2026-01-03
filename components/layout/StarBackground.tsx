"use client";

import { useEffect, useRef, useMemo } from "react";

export default function StarBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      containerRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Pre-generate star positions for each layer
  const starLayers = useMemo(() => {
    return [...Array(3)].map((_, layerIndex) => {
      return [...Array(60)].map(() => {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 3 + (layerIndex === 0 ? 0.5 : layerIndex === 1 ? 1.2 : 2);
        const duration = Math.random() * 5 + 3;
        const delay = Math.random() * 6;
        return { x, y, size, duration, delay };
      });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-20 overflow-hidden pointer-events-none select-none"
      style={{ transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)" }}
    >
      {/* Background gradient for light and dark mode */}
      <div className="absolute inset-0 bg-linear-to-b from-white/90 via-gray-100/50 to-white dark:from-black dark:via-purple-950/40 dark:to-black" />

      {/* Nebula clouds */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-600/30 dark:bg-purple-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-600/20 dark:bg-pink-400/20 rounded-full blur-3xl animate-pulse animation-delay-4000" />
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-fuchsia-500/25 dark:bg-fuchsia-400/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />
      </div>

      {/* Drifting star layers */}
      {starLayers.map((stars, layerIndex) => (
        <div
          key={layerIndex}
          className="absolute inset-0"
          style={{
            animationName: "drift",
            animationDuration: `${20 + layerIndex * 10}s`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDirection: layerIndex % 2 === 0 ? "normal" : "reverse",
            animationDelay: "0s",
          }}
        >
          {stars.map((star, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-black dark:bg-white"
              style={{
                width: `${star.size}px`,
                height: `${star.size}px`,
                top: `${star.y}%`,
                left: `${star.x}%`,
                boxShadow: `0 0 ${star.size * 4}px rgba(0,0,0,0.5) dark:rgba(255,255,255,0.9)`,
                animationName: "twinkle",
                animationDuration: `${star.duration}s`,
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
                animationDelay: `${star.delay}s`,
                animationDirection: "normal",
              }}
            />
          ))}
        </div>
      ))}

      {/* Shooting stars */}
      {[...Array(4)].map((_, i) => (
        <div
          key={`shooting-${i}`}
          className="absolute top-20 h-0.5 w-48 bg-linear-to-r from-transparent via-black to-transparent dark:via-white opacity-0"
          style={{
            left: "-50%",
            animationName: "shootingStar",
            animationDuration: `${10 + i * 3}s`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDelay: `${i * 3.5}s`,
            animationDirection: "normal",
            transform: `rotate(${i % 2 === 0 ? 45 : -45}deg)`,
          }}
        >
          <div className="h-full w-full bg-black dark:bg-white blur-md" />
          <div className="absolute inset-0 bg-black dark:bg-white blur-xl animate-ping" />
        </div>
      ))}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes drift {
          from { transform: translate(0, 0); }
          to { transform: translate(120px, 80px); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.6); }
        }
        @keyframes shootingStar {
          0% { transform: translateX(0) translateY(0); opacity: 0; }
          8% { opacity: 1; }
          20% { opacity: 1; }
          28% { opacity: 0; }
          100% { transform: translateX(220vw) translateY(220vh); opacity: 0; }
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
}
