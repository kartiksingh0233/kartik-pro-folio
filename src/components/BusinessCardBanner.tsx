import { motion } from "motion/react";
import cardImg from "@/assets/business-card.png.asset.json";

export function BusinessCardBanner() {
  return (
    <section className="relative pt-24 pb-10 px-5 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_30%,rgba(255,215,0,0.18),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_80%_70%,rgba(0,229,255,0.14),transparent_70%)]" />
        {/* Shooting stars */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-[2px] w-24 rounded-full"
            style={{
              left: `${-10 + (i * 19) % 100}%`,
              top: `${(i * 23) % 90}%`,
              background:
                "linear-gradient(90deg, transparent, rgba(255,215,0,0.9), rgba(0,229,255,0.7), transparent)",
              filter: "blur(0.5px)",
            }}
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 1400, opacity: [0, 1, 0] }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              delay: i * 0.6,
              ease: "easeOut",
            }}
          />
        ))}
        {/* Floating orbs */}
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.span
            key={`o-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${(i * 31) % 100}%`,
              top: `${(i * 47) % 100}%`,
              width: 4 + (i % 4) * 2,
              height: 4 + (i % 4) * 2,
              background:
                i % 2 ? "rgba(255,215,0,0.6)" : "rgba(0,229,255,0.6)",
              boxShadow:
                i % 2
                  ? "0 0 12px rgba(255,215,0,0.7)"
                  : "0 0 12px rgba(0,229,255,0.7)",
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 5 + (i % 5),
              repeat: Infinity,
              delay: (i % 7) * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto max-w-6xl"
      >
        <motion.div
          className="absolute -inset-4 sm:-inset-6 rounded-[2rem] opacity-60 blur-2xl"
          style={{
            background:
              "linear-gradient(120deg, rgba(255,215,0,0.5), rgba(0,229,255,0.5), rgba(255,215,0,0.5))",
            backgroundSize: "200% 200%",
          }}
          animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          whileHover={{ scale: 1.01, rotateX: 2, rotateY: -2 }}
          transition={{ type: "spring", stiffness: 180, damping: 18 }}
          className="relative rounded-[1.6rem] overflow-hidden glass-strong p-1.5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
          style={{ transformStyle: "preserve-3d", perspective: 1200 }}
        >
          <img
            src={cardImg.url}
            alt="Kaushlendra Kartik — Helping Schools Grow"
            className="w-full h-auto rounded-[1.4rem] block"
          />
          {/* Shimmer sweep */}
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-[1.4rem]"
            style={{
              background:
                "linear-gradient(115deg, transparent 35%, rgba(255,255,255,0.18) 50%, transparent 65%)",
            }}
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
