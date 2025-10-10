'use client';

import { useEffect, useRef } from "react";

export default function MouseShadow() {
  const shadowRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });   // current shadow position
  const mouse = useRef({ x: 0, y: 0 }); // target mouse position
  const rafId = useRef(null);
  const initialized = useRef(false);

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (!initialized.current) {
        pos.current.x = mouse.current.x;
        pos.current.y = mouse.current.y;
        if (shadowRef.current) {
          shadowRef.current.style.transform = `translate3d(${pos.current.x - 10}px, ${pos.current.y - 10}px, 0)`;
        }
        initialized.current = true;
      }
    };
    

    window.addEventListener("mousemove", onMove);

    const animate = () => {
      const factor = 0.05; // faster smoothing
      const maxStep = 9;  // max pixels per frame

      const dx = mouse.current.x - pos.current.x;
      const dy = mouse.current.y - pos.current.y;

      let moveX = dx * factor;
      let moveY = dy * factor;

      // Cap move length
      const len = Math.hypot(moveX, moveY);
      if (len > maxStep) {
        const scale = maxStep / len;
        moveX *= scale;
        moveY *= scale;
      }

      pos.current.x += moveX;
      pos.current.y += moveY;

      if (shadowRef.current) {
        shadowRef.current.style.transform = `translate3d(${pos.current.x - 10}px, ${pos.current.y - 10}px, 0)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={shadowRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        background: "rgba(96, 182, 216, .25)",
        pointerEvents: "none",
        transform: "translate3d(-9999px,-9999px,0)",
        mixBlendMode: "screen",
        zIndex: 9999,
        willChange: "transform",
        boxShadow: "0 8px 20px rgba(96,182,216,0.15)",
        
      }}
    />
  );
}
