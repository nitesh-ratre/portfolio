"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function FollowingCursor() {
  const [isClient, setIsClient] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  const springConfig = { damping: 25, stiffness: 500, mass: 0.1 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    setIsClient(true);
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      if (e.target instanceof Element) {
        const targetElement = e.target as Element;
        if (
          targetElement.closest('button') ||
          targetElement.closest('a') ||
          targetElement.closest('[role="button"]') ||
          targetElement.closest('input') ||
          targetElement.closest('textarea') ||
          targetElement.style.cursor === 'pointer'
        ) {
          setIsHoveringInteractive(true);
        }
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
       if (e.target instanceof Element) {
        const targetElement = e.target as Element;
         if (
          targetElement.closest('button') ||
          targetElement.closest('a') ||
          targetElement.closest('[role="button"]') ||
          targetElement.closest('input') ||
          targetElement.closest('textarea') ||
          targetElement.style.cursor === 'pointer'
        ) {
          setIsHoveringInteractive(false);
        }
      }
    };
    
    window.addEventListener("mousemove", moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [cursorX, cursorY]);

  if (!isClient) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 z-[9999] rounded-full pointer-events-none hidden md:block"
      style={{
        translateX: springX,
        translateY: springY,
        width: isHoveringInteractive ? 32 : 16,
        height: isHoveringInteractive ? 32 : 16,
        x: "-50%",
        y: "-50%",
        backgroundColor: isHoveringInteractive ? "hsla(var(--primary) / 0.3)" : "hsl(var(--primary))",
        border: isHoveringInteractive ? "2px solid hsl(var(--primary))" : "none",
        transition: "width 0.2s ease-out, height 0.2s ease-out, background-color 0.2s ease-out",
      }}
    />
  );
}
