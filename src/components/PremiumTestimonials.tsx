import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "motion/react";
import { Quote, Star, BadgeCheck, Phone, ChevronLeft, ChevronRight } from "lucide-react";

type Testimonial = {
  name: string;
  designation: string;
  organization?: string;
  phone: string;
  quote: string;
  initials: string;
  accent: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Dr. Sindhu Mol",
    designation: "Principal",
    organization: "Royal Academy",
    phone: "+91 72230 09919",
    initials: "SM",
    accent: "from-amber-400 to-yellow-600",
    quote:
      "Kaushlendra has been instrumental in strengthening our school's digital presence. From social media campaigns and admission marketing to website improvements and branding, his work has consistently delivered outstanding results. His creativity, professionalism, and dedication have significantly enhanced our online image and parent engagement. I highly recommend him for any digital marketing and educational branding project.",
  },
  {
    name: "Mr. Rakesh Sinha",
    designation: "Principal",
    organization: "SDPS International School",
    phone: "+91 98373 83167",
    initials: "RS",
    accent: "from-blue-400 to-indigo-600",
    quote:
      "Kaushlendra is a highly skilled digital marketing professional with excellent technical knowledge. During his association with our institution, he contributed effectively in digital promotion, website management, ERP support, and online branding. His ability to understand institutional goals and deliver impactful marketing strategies makes him a valuable professional. I confidently recommend him for digital marketing and technology-driven education projects.",
  },
  {
    name: "Mrs. Akriti Jain",
    designation: "HR",
    organization: "SDPS International School",
    phone: "+91 99535 11925",
    initials: "AJ",
    accent: "from-rose-400 to-pink-600",
    quote:
      "Kaushlendra consistently demonstrated professionalism, responsibility, and a positive work ethic. He collaborated effectively with different teams, completed projects within deadlines, and always maintained a solution-oriented approach. His communication skills, commitment, and technical expertise make him an excellent freelancer and digital marketing consultant.",
  },
  {
    name: "Mr. Mohit Samadhiya",
    designation: "Shiksha Adviser",
    phone: "+91 88718 39009",
    initials: "MS",
    accent: "from-cyan-400 to-sky-600",
    quote:
      "Kaushlendra possesses an excellent combination of digital marketing expertise, analytical thinking, and technical knowledge. His ability to create impactful branding strategies, optimize online campaigns, and deliver measurable business growth is truly impressive. He is dependable, innovative, and always focused on achieving the best possible results for his clients. I strongly recommend him for digital marketing, branding, website development, and educational consulting projects.",
  },
  {
    name: "Mr. KL",
    designation: "MD",
    organization: "DriveFuture Classes",
    phone: "+91 95598 96199",
    initials: "KL",
    accent: "from-emerald-400 to-teal-600",
    quote:
      "Working with Kaushlendra has been a remarkable experience for DriveFuture Classes. His strategic approach to digital marketing, branding, and lead generation helped us reach the right students at the right time. From campaign planning to creative execution, every deliverable reflected professionalism, clarity, and measurable results. He genuinely understands the education sector and consistently goes the extra mile. I highly recommend him for any institution looking to grow its digital presence.",
  },
];

const AUTOPLAY_MS = 10000;

function Particles() {
  const dots = useMemo(
    () =>
      Array.from({ length: 28 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        dur: Math.random() * 10 + 12,
        delay: Math.random() * 6,
      })),
    [],
  );
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {dots.map((d) => (
        <motion.span
          key={d.id}
          className="absolute rounded-full"
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: d.size,
            height: d.size,
            background:
              d.id % 3 === 0
                ? "radial-gradient(circle, rgba(255,215,0,0.9), transparent 70%)"
                : "radial-gradient(circle, rgba(168,216,255,0.7), transparent 70%)",
            filter: "blur(0.5px)",
          }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.9, 0.2] }}
          transition={{ duration: d.dur, delay: d.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

function Stars() {
  return (
    <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.1 + i * 0.08, type: "spring", stiffness: 220, damping: 14 }}
        >
          <Star
            className="h-4 w-4 sm:h-5 sm:w-5"
            style={{
              fill: "#ffd700",
              stroke: "#ffd700",
              filter: "drop-shadow(0 0 6px rgba(255,215,0,0.55))",
            }}
          />
        </motion.span>
      ))}
    </div>
  );
}

function TestimonialCard({ t, parallax }: { t: Testimonial; parallax: { rx: any; ry: any } }) {
  return (
    <motion.article
      style={{ rotateX: parallax.rx, rotateY: parallax.ry, transformPerspective: 1200 }}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="relative group"
    >
      {/* Animated gradient border */}
      <div
        className="absolute -inset-[1.5px] rounded-[2rem] opacity-80 group-hover:opacity-100 transition-opacity"
        style={{
          background:
            "conic-gradient(from var(--angle,0deg), #ffd700, #3b82f6, #00e5ff, #ffd700)",
          animation: "spinBorder 8s linear infinite",
          filter: "blur(0.5px)",
        }}
        aria-hidden
      />
      <style>{`
        @property --angle { syntax: '<angle>'; initial-value: 0deg; inherits: false; }
        @keyframes spinBorder { to { --angle: 360deg; transform: rotate(0deg);} }
        @keyframes floatY { 0%,100%{ transform: translateY(0);} 50%{ transform: translateY(-6px);} }
      `}</style>

      <div
        className="relative rounded-[2rem] p-7 sm:p-10 overflow-hidden"
        style={{
          animation: "floatY 7s ease-in-out infinite",
          background:
            "linear-gradient(160deg, rgba(8,20,50,0.96), rgba(4,10,28,0.98))",
          border: "1px solid rgba(255,215,0,0.18)",
          boxShadow:
            "0 30px 80px -30px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* Golden glow blob - subtle, behind content */}
        <div
          aria-hidden
          className="absolute -top-32 -right-32 h-72 w-72 rounded-full opacity-25 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(255,215,0,0.45), transparent 70%)",
            filter: "blur(70px)",
          }}
        />
        <div
          aria-hidden
          className="absolute -bottom-32 -left-32 h-72 w-72 rounded-full opacity-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(59,130,246,0.5), transparent 70%)",
            filter: "blur(70px)",
          }}
        />

        {/* Quote icon */}
        <div className="flex items-start justify-between">
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 14 }}
            className="relative"
          >
            <div
              className="absolute inset-0 rounded-2xl blur-xl"
              style={{ background: "radial-gradient(circle, rgba(255,215,0,0.6), transparent 70%)" }}
            />
            <div
              className="relative grid h-14 w-14 place-items-center rounded-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(255,215,0,0.25), rgba(59,130,246,0.18))",
                border: "1px solid rgba(255,215,0,0.45)",
                boxShadow: "0 0 30px rgba(255,215,0,0.35), inset 0 1px 0 rgba(255,255,255,0.15)",
              }}
            >
              <Quote className="h-6 w-6" style={{ color: "#ffd700" }} />
            </div>
          </motion.div>

          <div className="flex flex-col items-end gap-2">
            <Stars />
            <div
              className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wider"
              style={{
                background: "linear-gradient(135deg, rgba(34,197,94,0.18), rgba(59,130,246,0.18))",
                border: "1px solid rgba(34,197,94,0.4)",
                color: "#86efac",
              }}
            >
              <BadgeCheck className="h-3.5 w-3.5" />
              Verified
            </div>
          </div>
        </div>

        {/* Quote */}
        <p
          className="relative mt-6 text-[15px] sm:text-base lg:text-lg leading-[1.8] font-medium"
          style={{
            color: "#f5f7ff",
            textShadow: "0 1px 2px rgba(0,0,0,0.5)",
          }}
        >
          {t.quote}
        </p>

        {/* Divider */}
        <div
          className="my-7 h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,215,0,0.5), rgba(59,130,246,0.4), transparent)",
          }}
        />

        {/* Author */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-5 justify-between">
          <div className="flex items-center gap-4 min-w-0">
            <div className="relative shrink-0">
              <div
                className="absolute -inset-1 rounded-full opacity-70 blur"
                style={{ background: "linear-gradient(135deg,#ffd700,#3b82f6)" }}
              />
              <div
                className={`relative grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br ${t.accent} font-display text-lg font-bold text-white`}
                style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)" }}
              >
                {t.initials}
              </div>
            </div>
            <div className="min-w-0">
              <div className="font-display text-lg sm:text-xl font-semibold text-white truncate">
                {t.name}
              </div>
              <div className="text-xs sm:text-sm text-sky-soft truncate">
                {t.designation}
                {t.organization ? ` · ${t.organization}` : ""}
              </div>
            </div>
          </div>

          <a
            href={`tel:${t.phone.replace(/\s+/g, "")}`}
            className="group/phone inline-flex items-center gap-2.5 rounded-full px-4 py-2.5 text-sm font-semibold whitespace-nowrap transition-all hover:scale-[1.03]"
            style={{
              background: "linear-gradient(135deg, rgba(255,215,0,0.15), rgba(59,130,246,0.18))",
              border: "1px solid rgba(255,215,0,0.4)",
              color: "#ffe98a",
              boxShadow: "0 6px 20px -8px rgba(255,215,0,0.5)",
            }}
            aria-label={`Call ${t.name} at ${t.phone}`}
          >
            <Phone className="h-4 w-4" />
            {t.phone}
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function PremiumTestimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef<number | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const didMountRef = useRef(false);

  const total = TESTIMONIALS.length;

  // Subtle premium transition chime
  const playTransitionSound = useCallback(() => {
    if (typeof window === "undefined") return;
    try {
      const AC = window.AudioContext || (window as any).webkitAudioContext;
      if (!AC) return;
      if (!audioCtxRef.current) audioCtxRef.current = new AC();
      const c = audioCtxRef.current;
      if (c.state === "suspended") c.resume().catch(() => {});
      const now = c.currentTime;
      const master = c.createGain();
      master.gain.value = 0.22;
      master.connect(c.destination);

      const tones = [880, 1320]; // soft perfect-fifth shimmer
      tones.forEach((f, i) => {
        const osc = c.createOscillator();
        const g = c.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(f, now);
        g.gain.setValueAtTime(0.0001, now + i * 0.04);
        g.gain.exponentialRampToValueAtTime(0.18, now + i * 0.04 + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.04 + 0.45);
        osc.connect(g).connect(master);
        osc.start(now + i * 0.04);
        osc.stop(now + i * 0.04 + 0.5);
      });
    } catch {}
  }, []);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }
    playTransitionSound();
  }, [index, playTransitionSound]);


  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i + dir + total) % total),
    [total],
  );

  // Autoplay
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % total), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, total]);

  // Keyboard
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    const el = containerRef.current;
    el?.addEventListener("keydown", onKey as any);
    return () => el?.removeEventListener("keydown", onKey as any);
  }, [go]);

  // Mouse parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-50, 50], [6, -6]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [-50, 50], [-6, 6]), { stiffness: 120, damping: 18 });

  const onMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width - 0.5) * 100);
    my.set(((e.clientY - rect.top) / rect.height - 0.5) * 100);
  };
  const onMouseLeave = () => {
    mx.set(0);
    my.set(0);
    setPaused(false);
  };

  // Touch / swipe
  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
    touchStart.current = null;
  };

  const current = TESTIMONIALS[index];

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative py-28 px-5 overflow-hidden"
    >
      {/* Background layers */}
      <div className="aurora opacity-60" aria-hidden />
      <Particles />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(800px 500px at 50% 0%, rgba(59,130,246,0.18), transparent 60%), radial-gradient(700px 500px at 50% 100%, rgba(255,215,0,0.12), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] animate-pulse" />
            Client Testimonials
          </div>
          <h2
            id="testimonials-heading"
            className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold"
          >
            Words from <span className="text-gradient-gold">trusted partners</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-muted-foreground">
            Principals, HR leaders, and education advisers sharing their experience working with
            Kaushlendra.
          </p>
        </motion.div>

        {/* Carousel */}
        <div
          ref={containerRef}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={onMouseLeave}
          onMouseMove={onMouseMove}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          className="relative mt-14 outline-none focus-visible:ring-2 focus-visible:ring-[var(--gold)]/60 rounded-[2rem]"
        >
          <div className="relative min-h-[460px] sm:min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 60, filter: "blur(8px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: -60, filter: "blur(8px)" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <TestimonialCard t={current} parallax={{ rx, ry }} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="grid h-11 w-11 place-items-center rounded-full glass hover:bg-white/10 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2.5" role="tablist">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className="relative h-2 rounded-full transition-all"
                  style={{
                    width: i === index ? 32 : 8,
                    background:
                      i === index
                        ? "linear-gradient(90deg,#ffd700,#3b82f6)"
                        : "rgba(255,255,255,0.18)",
                    boxShadow: i === index ? "0 0 12px rgba(255,215,0,0.6)" : "none",
                  }}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="grid h-11 w-11 place-items-center rounded-full glass hover:bg-white/10 transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Progress bar */}
          <div className="mx-auto mt-5 h-[2px] w-44 overflow-hidden rounded-full bg-white/10">
            <motion.div
              key={`${index}-${paused}`}
              initial={{ width: "0%" }}
              animate={{ width: paused ? "0%" : "100%" }}
              transition={{ duration: paused ? 0 : AUTOPLAY_MS / 1000, ease: "linear" }}
              style={{ background: "linear-gradient(90deg,#ffd700,#3b82f6)" }}
              className="h-full"
            />
          </div>
        </div>
      </div>

      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Kaushlendra Digital Marketing Services",
            review: TESTIMONIALS.map((t) => ({
              "@type": "Review",
              reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
              author: {
                "@type": "Person",
                name: t.name,
                jobTitle: t.designation,
                ...(t.organization ? { worksFor: { "@type": "Organization", name: t.organization } } : {}),
              },
              reviewBody: t.quote,
            })),
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: TESTIMONIALS.length.toString(),
            },
          }),
        }}
      />
    </section>
  );
}
