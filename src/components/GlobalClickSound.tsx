import { useEffect } from "react";

export default function GlobalClickSound() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let ctx: AudioContext | null = null;
    const getCtx = () => {
      if (!ctx) {
        const AC = (window.AudioContext || (window as any).webkitAudioContext);
        if (!AC) return null;
        ctx = new AC();
      }
      if (ctx.state === "suspended") ctx.resume().catch(() => {});
      return ctx;
    };

    const playClick = () => {
      const c = getCtx();
      if (!c) return;
      const now = c.currentTime;

      // High-end "tactile" click: short blip + soft sub thump
      const blip = c.createOscillator();
      const blipGain = c.createGain();
      blip.type = "triangle";
      blip.frequency.setValueAtTime(1800, now);
      blip.frequency.exponentialRampToValueAtTime(900, now + 0.06);
      blipGain.gain.setValueAtTime(0.0001, now);
      blipGain.gain.exponentialRampToValueAtTime(0.18, now + 0.005);
      blipGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);
      blip.connect(blipGain).connect(c.destination);
      blip.start(now);
      blip.stop(now + 0.1);

      const sub = c.createOscillator();
      const subGain = c.createGain();
      sub.type = "sine";
      sub.frequency.setValueAtTime(220, now);
      sub.frequency.exponentialRampToValueAtTime(120, now + 0.08);
      subGain.gain.setValueAtTime(0.0001, now);
      subGain.gain.exponentialRampToValueAtTime(0.09, now + 0.008);
      subGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);
      sub.connect(subGain).connect(c.destination);
      sub.start(now);
      sub.stop(now + 0.13);
    };

    const handler = () => {
      try { playClick(); } catch {}
    };

    window.addEventListener("pointerdown", handler, { passive: true });
    return () => window.removeEventListener("pointerdown", handler);
  }, []);

  return null;
}
