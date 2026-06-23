import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate, useMotionValue } from "motion/react";
import { Users } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { trackVisit } from "@/lib/visitor-count.functions";

export default function VisitorCounter() {
  const [count, setCount] = useState<number>(10000);
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(10000);
  const [display, setDisplay] = useState("10,000");
  const track = useServerFn(trackVisit);

  useEffect(() => {
    const alreadyCounted = sessionStorage.getItem("visitor_counted") === "1";

    track({ data: { alreadyCounted } })
      .then((res) => {
        setCount(res.count);
        setLoaded(true);
        if (!alreadyCounted) {
          sessionStorage.setItem("visitor_counted", "1");
        }
      })
      .catch(() => {
        setLoaded(true);
      });
  }, [track]);

  useEffect(() => {
    if (!inView || !loaded) return;
    const controls = animate(mv, count, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
    });
    const unsub = mv.on("change", (v) => {
      setDisplay(Math.round(v).toLocaleString("en-IN"));
    });
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, loaded, count, mv]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6 }}
      className="flex items-center gap-2 rounded-full glass-strong px-4 py-2 border border-[var(--gold)]/20"
    >
      <Users className="h-4 w-4 text-[var(--gold)]" />
      <span className="text-xs text-muted-foreground uppercase tracking-widest">
        Visitors
      </span>
      <span className="font-display text-sm font-semibold text-gradient-gold tabular-nums">
        {display}
      </span>
    </motion.div>
  );
}
