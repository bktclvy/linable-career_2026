"use client";
import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  target: number;
  unit?: string;
  plus?: boolean;
}

export default function CountUp({ target, unit, plus }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1200;
          const frameRate = 30;
          const step = target / (duration / (1000 / frameRate));
          let val = 0;
          const timer = setInterval(() => {
            val += step;
            if (val >= target) { val = target; clearInterval(timer); }
            setCurrent(Math.floor(val));
          }, 1000 / frameRate);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="stat-number">
      {current}
      {plus && <span className="plus">+</span>}
      {unit && <span className="unit">{unit}</span>}
    </span>
  );
}
