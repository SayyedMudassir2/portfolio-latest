// components/layout/CurveBackground.tsx
"use client";

interface CurveBackgroundProps {
  className?: string;
}

export default function CurveBackground({ className = "" }: CurveBackgroundProps) {
  return (
    <>
      {/* Subtle Glow Effect */}
      <div className="absolute inset-x-0 bottom-0 h-106 bg-linear-to-t from-purple-600/40 via-purple-500/10 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Smooth Elegant Curve */}
      <svg
        className={`absolute inset-x-0 bottom-0 w-full h-94 md:h-110 -z-10 ${className}`}
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="curveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#e9d5ff" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Main Curve Fill */}
        <path
          fill="url(#curveGradient)"
          fillOpacity="0.15"
          d="M0,160 C280,300 720,50 1440,160 L1440,320 L0,320 Z"
        />

        {/* Solid Bottom Layer */}
        <path
          fill="#f8fafc"
          className="dark:fill-[#0f001a]"
          d="M0,200 C360,100 1080,280 1440,200 L1440,320 L0,320 Z"
        />

        {/* Neon Edge Glow */}
        <path
          d="M0,200 C360,100 1080,280 1440,200"
          fill="none"
          stroke="#c084fc"
          strokeWidth="3"
          opacity="0.6"
          className="drop-shadow-[0_0_30px_rgba(192,132,252,0.8)]"
        />
      </svg>
    </>
  );
}