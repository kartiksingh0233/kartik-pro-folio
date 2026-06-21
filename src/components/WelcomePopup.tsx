import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function playChime() {
  try {
    const Ctx = (window.AudioContext || (window as any).webkitAudioContext) as typeof AudioContext;
    const ctx = new Ctx();
    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.5]; // C E G C
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      const start = now + i * 0.09;
      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(0.15, start + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.7);
      osc.connect(gain).connect(ctx.destination);
      osc.start(start);
      osc.stop(start + 0.75);
    });
    setTimeout(() => ctx.close(), 1500);
  } catch {}
}

export function WelcomePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setOpen(true);
      playChime();
    }, 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] grid place-items-center p-4 bg-black/60 backdrop-blur-md"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.7, y: 40, opacity: 0, rotateX: -20 }}
            animate={{ scale: 1, y: 0, opacity: 1, rotateX: 0 }}
            exit={{ scale: 0.85, y: 20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 22 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-md w-full rounded-3xl overflow-hidden glass-strong p-1"
            style={{ perspective: 1000 }}
          >
            <div className="absolute -inset-20 bg-[var(--gradient-gold)] opacity-30 blur-3xl pointer-events-none" />
            <div className="relative rounded-[1.4rem] bg-[rgba(8,12,28,0.85)] p-7 sm:p-9 text-center">
              {/* Sparkles */}
              {Array.from({ length: 14 }).map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute h-1 w-1 rounded-full bg-[var(--gold)]"
                  style={{
                    left: `${10 + (i * 37) % 80}%`,
                    top: `${10 + (i * 53) % 80}%`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.4, 0],
                    y: [0, -20, -40],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    delay: i * 0.12,
                  }}
                />
              ))}

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: [0, -10, 10, 0] }}
                transition={{ delay: 0.2, type: "spring", stiffness: 180 }}
                className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-[var(--gradient-gold)] text-3xl shadow-[var(--shadow-glow)]"
              >
                👋
              </motion.div>

              <motion.h3
                initial={{ y: 14, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="mt-5 font-display text-2xl sm:text-3xl"
              >
                Welcome — I'm <span className="text-gradient-gold">Kartik</span>
              </motion.h3>
              <motion.p
                initial={{ y: 14, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed"
              >
                Helping schools grow with <span className="text-[var(--gold-soft)] font-semibold">more admissions</span> and a
                <span className="text-[var(--cyan-bright,#00e5ff)] font-semibold"> stronger digital presence</span> through marketing, analytics & AI.
              </motion.p>

              <motion.div
                initial={{ y: 14, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.65 }}
                className="mt-6 flex flex-wrap gap-3 justify-center"
              >
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-xl btn-premium px-5 py-2.5 text-sm shine"
                >
                  Let's Talk →
                </a>
                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-xl glass-strong px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-white/10 transition-colors"
                >
                  Explore Portfolio
                </button>
              </motion.div>

              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute top-3 right-3 grid h-9 w-9 place-items-center rounded-full glass text-muted-foreground hover:text-foreground"
              >
                ×
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
