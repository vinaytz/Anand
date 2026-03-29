"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [text, setText] = useState("");
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Don't show on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        'a, button, [data-cursor="pointer"], input, textarea, select'
      );
      const cursorText = target.closest("[data-cursor-text]");

      if (cursorText) {
        setHovered(true);
        setText(
          (cursorText as HTMLElement).getAttribute("data-cursor-text") || ""
        );
      } else if (interactive) {
        setHovered(true);
        setText("");
      } else {
        setHovered(false);
        setText("");
      }
    };

    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseleave", leave);
    };
  }, [cursorX, cursorY, visible]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none mix-blend-difference"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            width: hovered ? (text ? 80 : 48) : 10,
            height: hovered ? (text ? 80 : 48) : 10,
            opacity: visible ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="rounded-full bg-[var(--th-cursor)] flex items-center justify-center"
        >
          {text && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-[var(--th-cursor-text)] text-[10px] font-bold uppercase tracking-wider"
            >
              {text}
            </motion.span>
          )}
        </motion.div>
      </motion.div>
    </>
  );
}
