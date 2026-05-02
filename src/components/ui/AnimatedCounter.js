"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export default function AnimatedCounter({ value, direction = "up", duration = 2.5 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  // Extract number and suffix (like "50+")
  const stringValue = value.toString();
  const numericValue = parseInt(stringValue.replace(/[^0-9]/g, ""));
  const suffix = stringValue.replace(/[0-9]/g, "");

  const motionValue = useMotionValue(direction === "down" ? numericValue * 2 : 0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
    duration: duration * 1000,
  });

  const [displayValue, setDisplayValue] = useState(motionValue.get());

  useEffect(() => {
    if (inView) {
      motionValue.set(numericValue);
    }
  }, [inView, numericValue, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  );
}
