import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 180, damping: 22, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 180, damping: 22, mass: 0.6 });
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const trailRef = useRef<{ id: number; x: number; y: number }[]>([]);
  const [, force] = useState(0);

  useEffect(() => {
    // Disable on touch devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;
    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    let idc = 0;
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = trailRef.current;
      t.push({ id: ++idc, x: e.clientX, y: e.clientY });
      if (t.length > 8) t.shift();
      force((n) => (n + 1) % 1000);

      const el = e.target as HTMLElement;
      const interactive = el.closest("a,button,[role='button'],input,textarea,select,label");
      setHovering(!!interactive);
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* Trail */}
      {trailRef.current.map((p, i) => (
        <span
          key={p.id}
          className="pointer-events-none fixed z-[9998] rounded-full"
          style={{
            left: p.x,
            top: p.y,
            width: 6,
            height: 6,
            transform: "translate(-50%,-50%)",
            background: "var(--gold, #d4af37)",
            opacity: (i / trailRef.current.length) * 0.35,
            filter: "blur(2px)",
          }}
        />
      ))}

      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed z-[9999] rounded-full border"
        style={{
          left: ringX,
          top: ringY,
          x: "-50%",
          y: "-50%",
          width: hovering ? 56 : 34,
          height: hovering ? 56 : 34,
          borderColor: "var(--gold, #d4af37)",
          mixBlendMode: "difference",
          scale: pressed ? 0.85 : 1,
          transition: "width .2s, height .2s, scale .15s",
          background: hovering ? "rgba(212,175,55,0.08)" : "transparent",
          backdropFilter: hovering ? "blur(2px)" : undefined,
        }}
      />
      {/* Dot */}
      <motion.div
        className="pointer-events-none fixed z-[9999] rounded-full"
        style={{
          left: x,
          top: y,
          x: "-50%",
          y: "-50%",
          width: 6,
          height: 6,
          background: "var(--gold, #d4af37)",
          boxShadow: "0 0 12px var(--gold, #d4af37)",
        }}
      />
    </>
  );
}
