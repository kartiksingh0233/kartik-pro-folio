import { motion, useAnimationControls } from "motion/react";
import { useRef, useState } from "react";
import resumeAsset from "@/assets/resume.pdf.asset.json";

let audioCtx: AudioContext | null = null;
function playClickSound() {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const ctx = audioCtx!;
    const now = ctx.currentTime;

    // Soft "tick" — short blip
    const o1 = ctx.createOscillator();
    const g1 = ctx.createGain();
    o1.type = "triangle";
    o1.frequency.setValueAtTime(880, now);
    o1.frequency.exponentialRampToValueAtTime(1320, now + 0.08);
    g1.gain.setValueAtTime(0.0001, now);
    g1.gain.exponentialRampToValueAtTime(0.18, now + 0.01);
    g1.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
    o1.connect(g1).connect(ctx.destination);
    o1.start(now);
    o1.stop(now + 0.2);

    // Sub-thump for premium feel
    const o2 = ctx.createOscillator();
    const g2 = ctx.createGain();
    o2.type = "sine";
    o2.frequency.setValueAtTime(220, now);
    o2.frequency.exponentialRampToValueAtTime(110, now + 0.15);
    g2.gain.setValueAtTime(0.0001, now);
    g2.gain.exponentialRampToValueAtTime(0.12, now + 0.01);
    g2.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);
    o2.connect(g2).connect(ctx.destination);
    o2.start(now);
    o2.stop(now + 0.28);
  } catch {}
}

type Ripple = { id: number; x: number; y: number };

export function ResumeButton({
  variant = "glass",
  label = "Download Resume",
  className = "",
}: {
  variant?: "glass" | "gold";
  label?: string;
  className?: string;
}) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [downloading, setDownloading] = useState(false);
  const iconControls = useAnimationControls();
  const idRef = useRef(0);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    playClickSound();
    const rect = e.currentTarget.getBoundingClientRect();
    const id = ++idRef.current;
    setRipples((r) => [...r, { id, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
    setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 700);

    iconControls.start({ y: [0, 4, -2, 0], transition: { duration: 0.5 } });

    if (downloading) return;
    setDownloading(true);
    try {
      // Fast download via blob — avoids tab navigation
      const res = await fetch(resumeAsset.url);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Kaushlendra-Kartik-Resume.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch {
      window.open(resumeAsset.url, "_blank");
    } finally {
      setTimeout(() => setDownloading(false), 800);
    }
  };

  const base =
    variant === "gold"
      ? "bg-[var(--gradient-gold)] text-primary-foreground shine ring-gold"
      : "glass-strong hover:bg-white/10 text-foreground";

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ y: -2, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={`relative overflow-hidden inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-colors cursor-none ${base} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {label}
        <motion.span animate={iconControls} className="inline-block">
          {downloading ? (
            <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" />
              <path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          ) : (
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3v12" />
              <path d="m6 11 6 6 6-6" />
              <path d="M5 21h14" />
            </svg>
          )}
        </motion.span>
      </span>

      {/* Shimmer sweep */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* Ripples */}
      {ripples.map((r) => (
        <motion.span
          key={r.id}
          initial={{ scale: 0, opacity: 0.55 }}
          animate={{ scale: 6, opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="pointer-events-none absolute rounded-full bg-white/40"
          style={{ left: r.x - 12, top: r.y - 12, width: 24, height: 24 }}
        />
      ))}
    </motion.button>
  );
}
