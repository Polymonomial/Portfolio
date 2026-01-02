import { useEffect, useState } from "react";
import type { ReactNode } from "react";

interface FlameIntroProps {
  children: ReactNode;
}

export default function FlameIntro({ children }: FlameIntroProps) {
  const [done, setDone] = useState(false);

useEffect(() => {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (mq.matches) setDone(true);

  const t = setTimeout(() => setDone(true), 1600); // fallback
  return () => clearTimeout(t);
}, []);


  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <div
        className={`relative z-10 transition-opacity duration-700 ${
          done ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>

      {!done && (
        <div
          className="fire-hole-overlay fixed inset-0 z-50 pointer-events-none"
          onAnimationEnd={() => setDone(true)}
        />
      )}
    </div>
  );
}