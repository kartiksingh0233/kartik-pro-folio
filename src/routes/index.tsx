import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, animate, useMotionValue } from "motion/react";
import kartikImg from "@/assets/kartik-new.png.asset.json";
import { ResumeButton } from "@/components/ResumeButton";
import { CustomCursor } from "@/components/CustomCursor";
import { WelcomePopup } from "@/components/WelcomePopup";
import { BusinessCardBanner } from "@/components/BusinessCardBanner";
import GlobalClickSound from "@/components/GlobalClickSound";
import KartikAI from "@/components/KartikAI";
import VisitorCounter from "@/components/VisitorCounter";
import PremiumTestimonials from "@/components/PremiumTestimonials";
import { submitLead } from "@/lib/leads.functions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kaushlendra Kartik — Digital Marketer & Business Analytics" },
      {
        name: "description",
        content:
          "Digital Marketer, Business Analytics Specialist & Growth Strategist. Helping schools, startups and businesses generate leads, grow revenue and make smarter decisions.",
      },
      { property: "og:title", content: "Kaushlendra Kartik — Digital Marketer & Business Analytics" },
      {
        property: "og:description",
        content:
          "Helping schools, startups and businesses generate leads, grow revenue and make smarter decisions through marketing & analytics.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://kartik-pro-folio.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://kartik-pro-folio.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Kaushlendra Kartik",
          jobTitle: "Digital Marketer & Business Analytics Specialist",
          url: "https://kartik-pro-folio.lovable.app/",
          review: [
            {
              "@type": "Review",
              author: { "@type": "Person", name: "Dr. Sindhu Mol", jobTitle: "Principal, Royal Academy" },
              reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
              reviewBody:
                "Kaushlendra has been instrumental in strengthening our school's digital presence. From social media campaigns and admission marketing to website improvements and branding, his work has consistently delivered outstanding results.",
            },
            {
              "@type": "Review",
              author: { "@type": "Person", name: "Mr. Rakesh Sinha", jobTitle: "Principal, SDPS International School" },
              reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
              reviewBody:
                "Kaushlendra is a highly skilled digital marketing professional with excellent technical knowledge. He contributed effectively in digital promotion, website management, ERP support, and online branding.",
            },
            {
              "@type": "Review",
              author: { "@type": "Person", name: "Mrs. Akriti Jain", jobTitle: "HR, SDPS International School" },
              reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
              reviewBody:
                "Kaushlendra consistently demonstrated professionalism, responsibility, and a positive work ethic. His communication skills, commitment, and technical expertise make him an excellent freelancer and digital marketing consultant.",
            },
            {
              "@type": "Review",
              author: { "@type": "Person", name: "Mr. Mohit Samadhiya", jobTitle: "Shiksha Adviser" },
              reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
              reviewBody:
                "Kaushlendra possesses an excellent combination of digital marketing expertise, analytical thinking, and technical knowledge. He is dependable, innovative, and always focused on achieving the best possible results for his clients.",
            },
            {
              "@type": "Review",
              author: { "@type": "Person", name: "Mr. KL", jobTitle: "MD, DriveFuture Classes" },
              reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
              reviewBody:
                "Kaushlendra delivered professional digital marketing and growth support for our institute with dedication and measurable results.",
            },
          ],
        }),
      },
    ],
  }),
  staticData: { sitemap: true },
  component: Index,
});

const ROLES = [
  "TGT - IT Educator",
  "Digital Marketer",
  "Business Analytics Specialist",
  "Growth Strategist",
  "Web Developer",
  "AI Automation Consultant",
  "Technology Innovator",
];

const PHONE = "919369088265";
const EMAIL = "kkaushlendra023@gmail.com";

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-clip">
      <Nav />
      <BusinessCardBanner />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Skills />
      <Services />
      <Portfolio />
      <Certifications />
      <Education />
      <PremiumTestimonials />
      <Contact />
      <Footer />
      <FloatingActions />
      <CustomCursor />
      <GlobalClickSound />
      <WelcomePopup />
      <KartikAI />
    </main>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["About", "#about"],
    ["Experience", "#experience"],
    ["Skills", "#skills"],
    ["Services", "#services"],
    ["Work", "#portfolio"],
    ["Contact", "#contact"],
  ];
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-5 py-3 transition-all ${
            scrolled ? "glass-strong" : "bg-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5 group">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--gradient-gold)] text-primary-foreground font-bold shadow-[var(--shadow-glow)]">
              K
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">
              Kaushlendra<span className="text-gradient-gold">.</span>
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-xl btn-premium px-4 py-2 text-sm shine"
            >
              Hire Me
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden grid h-10 w-10 place-items-center rounded-xl glass"
              aria-label="Menu"
            >
              <span className="block h-[2px] w-5 bg-foreground" />
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-2">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-sm rounded-xl hover:bg-white/5"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 2200);
    return () => clearInterval(id);
  }, []);

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 noise overflow-hidden">
      <div className="aurora" />
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-0 data-stream" />
      <div className="absolute inset-x-0 top-0 h-[600px] pointer-events-none"
           style={{ background: "var(--gradient-radial-gold)" }} />
      <Particles />

      <motion.div style={{ y, opacity }} className="relative mx-auto max-w-7xl px-5 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs text-muted-foreground"
          >
            <span className="relative grid place-items-center h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" />
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for new projects · Based in India
          </motion.div>

          <h1 className="mt-6 text-[40px] leading-[1.05] sm:text-6xl lg:text-7xl font-semibold tracking-tight">
            <span className="block">Kaushlendra</span>
            <span className="block text-gradient-gold">Kartik.</span>
            <span className="mt-4 block text-lg sm:text-xl lg:text-2xl font-medium tracking-normal text-[#A8D8FF]">
              Digital Marketer &amp; Business Analytics Specialist
            </span>
          </h1>

          <div className="mt-5 h-9 sm:h-10 overflow-hidden">
            <motion.div
              key={roleIdx}
              initial={{ y: 28, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -28, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 16 }}
              className="text-lg sm:text-2xl font-display text-foreground/90"
            >
              <span className="text-muted-foreground">I am a </span>
              <span className="text-gradient-gold font-semibold">{ROLES[roleIdx]}</span>
            </motion.div>
          </div>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Helping schools, startups and businesses generate more leads, increase revenue,
            improve digital presence and make smarter business decisions through marketing & analytics.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl btn-premium px-5 py-3 text-sm shine">
              Hire Me
            </a>
            <a href={`https://wa.me/${PHONE}?text=Hi%20Kaushlendra%2C%20I%27d%20like%20to%20book%20a%20consultation`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl glass-strong px-5 py-3 text-sm font-semibold hover:bg-white/10 transition-colors">
              Book Consultation
            </a>
            <ResumeButton label="Download Resume" />
            <a href="#portfolio" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
              View Portfolio →
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-5 gap-4">
            <Counter value={120} suffix="+" label="Projects Completed" />
            <Counter value={80} suffix="+" label="Campaigns Managed" />
            <Counter value={50} suffix="K+" label="Leads Generated" />
            <Counter value={35} suffix="+" label="Websites Built" />
            <Counter value={98} suffix="%" label="Client Satisfaction" />
          </div>
        </div>

        <div className="lg:col-span-5">
          <HeroPortrait />
        </div>
      </motion.div>
    </section>
  );
}

function HeroPortrait() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full max-w-md"
    >
      {/* Animated rotating gradient halo */}
      <motion.div
        className="absolute -inset-10 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(255,215,0,0.6), rgba(0,229,255,0.5), rgba(255,215,0,0.6))",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      {/* Orbiting sparkles */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const r = 180;
        return (
          <motion.span
            key={i}
            className="absolute left-1/2 top-1/2 h-2 w-2 rounded-full bg-[var(--gold)]"
            style={{
              boxShadow: "0 0 14px rgba(255,215,0,0.9)",
              x: Math.cos(angle) * r - 4,
              y: Math.sin(angle) * r - 4,
            }}
            animate={{
              scale: [0.6, 1.3, 0.6],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        );
      })}

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.03, rotateY: 6, rotateX: -3 }}
        className="relative aspect-[4/5] rounded-[2rem] overflow-hidden glass-strong p-1.5"
        style={{ transformStyle: "preserve-3d", perspective: 1000 }}
      >
        {/* Animated border beam */}
        <motion.div
          className="absolute inset-0 rounded-[2rem] pointer-events-none"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(255,215,0,0.9) 60deg, rgba(0,229,255,0.8) 120deg, transparent 180deg, transparent 360deg)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
        <div className="relative h-full w-full rounded-[1.7rem] overflow-hidden bg-[#0a0f1f]">
          <motion.img
            src={kartikImg.url}
            alt="Kaushlendra Kartik"
            className="h-full w-full object-cover"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Warm sun glow overlay (less techy, more human) */}
          <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_20%,rgba(255,215,0,0.18),transparent_70%)]" />
          {/* Shimmer sweep */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(115deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%)",
            }}
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 2.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between glass-strong rounded-2xl px-4 py-3">
            <div>
              <div className="text-[11px] uppercase tracking-widest text-muted-foreground">Currently</div>
              <div className="text-sm font-semibold text-foreground">Royal Academy · TGT - IT + Digital + Analytics</div>
            </div>
            <motion.span
              animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-gradient-gold font-display text-2xl"
            >
              ★
            </motion.span>
          </div>
        </div>
      </motion.div>

      {/* Floating cards */}
      <motion.div
        animate={{ y: [0, -12, 0], rotate: [-2, 2, -2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-6 top-12 glass-strong rounded-2xl px-4 py-3 hidden sm:block"
      >
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">ROI</div>
        <div className="font-display text-xl text-gradient-gold">+312%</div>
      </motion.div>
      <motion.div
        animate={{ y: [0, 12, 0], rotate: [2, -2, 2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-4 bottom-24 glass-strong rounded-2xl px-4 py-3 hidden sm:block"
      >
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Active campaigns</div>
        <div className="font-display text-xl text-foreground">12 live</div>
      </motion.div>
    </motion.div>
  );
}

function Counter({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState("0");
  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, value, { duration: 1.8, ease: [0.16, 1, 0.3, 1] });
    const unsub = mv.on("change", (v) => setDisplay(Math.round(v).toString()));
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, value, mv]);
  return (
    <div ref={ref} className="glass rounded-2xl p-4">
      <div className="font-display text-2xl sm:text-3xl text-gradient-gold">
        {display}
        {suffix}
      </div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

function Particles() {
  const dots = Array.from({ length: 28 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((_, i) => {
        const left = (i * 37) % 100;
        const top = (i * 53) % 100;
        const delay = (i % 7) * 0.4;
        const dur = 6 + (i % 5);
        return (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-[var(--gold)]/50"
            style={{ left: `${left}%`, top: `${top}%` }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 0.9, 0.2] }}
            transition={{ duration: dur, repeat: Infinity, ease: "easeInOut", delay }}
          />
        );
      })}
    </div>
  );
}

/* ---------------- MARQUEE ---------------- */
function Marquee() {
  const items = [
    "Google Ads", "Meta Ads", "SEO", "Power BI", "Google Analytics",
    "HubSpot", "SEMRush", "Lead Generation", "AI Automation", "Web Development",
    "Looker Studio", "Marketing Automation", "Branding",
  ];
  return (
    <section className="relative py-10 border-y border-white/5 bg-black/20">
      <div className="overflow-hidden">
        <div className="marquee flex gap-12 whitespace-nowrap">
          {[...items, ...items].map((it, i) => (
            <div key={i} className="flex items-center gap-12 text-muted-foreground/70">
              <span className="font-display text-2xl sm:text-3xl">{it}</span>
              <span className="text-gradient-gold">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SECTION HEADER ---------------- */
function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: { eyebrow: string; title: React.ReactNode; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl"
    >
      <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
        <span className="h-1 w-1 rounded-full bg-[var(--gold)]" /> {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl sm:text-5xl font-semibold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground leading-relaxed">{subtitle}</p>}
    </motion.div>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  const pillars = [
    { title: "TGT - IT Educator", desc: "Teaching IT / Computer Science across Royal Academy and SDPS International School, managing labs, student projects and technology-driven classrooms." },
    { title: "Digital Marketer", desc: "Performance marketing, SEO, social and lead generation across schools, startups and SMBs." },
    { title: "Business Analytics", desc: "Power BI dashboards, Google Analytics, KPI tracking and data-driven decision systems." },
    { title: "Web Developer", desc: "Modern websites, school portals, ID & report card systems and no-code platforms." },
    { title: "AI & Cybersecurity", desc: "AI automation, prompt engineering and ethical hacking — CISCO certified Ethical Hacker." },
  ];
  return (
    <section id="about" className="relative py-28 px-5 overflow-hidden">
      <div className="absolute inset-0 data-grid pointer-events-none opacity-60" />
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="About"
          title={<>A marketer, educator & analyst <span className="text-gradient-gold">in one</span>.</>}
          subtitle="I'm Kaushlendra Kartik — a TGT - IT educator, digital marketer and business analytics professional with 4+ years of hands-on experience scaling private schools and education businesses across India. I sit at the intersection of teaching, marketing, data and technology — running classrooms, campaigns, dashboards, websites and AI-driven operations."
        />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-5 gap-5">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass rounded-2xl p-6 hover:bg-white/[0.06] transition-colors"
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--gradient-gold)] text-primary-foreground font-semibold">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-4 font-display text-xl">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- EXPERIENCE TIMELINE ---------------- */
const EXPERIENCE = [
  {
    org: "Royal Academy",
    role: "TGT - IT · Digital Marketer · Developer Team Incharge · Business Analytics",
    period: "Jan 2025 — Present",
    desc: "Teaching IT / Computer Science as TGT faculty while leading digital growth, web product team and analytics. Building dashboards for admissions, marketing performance and operations. A truly valuable hands-on teaching experience combined with technology leadership.",
  },
  {
    org: "SDPS International School",
    role: "TGT - IT · Digital Marketing Manager",
    period: "Jul 2024 — Jan 2025",
    desc: "Served as TGT - IT faculty while owning brand, paid media and the admission funnel. Delivered IT lessons, managed labs and student projects, and scaled social presence and inquiry pipeline across Meta and Google. A rich and rewarding teaching experience.",
  },
  {
    org: "Central Global Academy",
    role: "Office Executive · Digital Marketer",
    period: "Jul 2022 — Jul 2024",
    desc: "Managed school operations and digital marketing — websites, social, lead capture and parent communications.",
  },
  {
    org: "Deep Cambridge Academy",
    role: "Admin Executive · Software In-Charge · Digital Marketer",
    period: "Jul 2021 — Jul 2022",
    desc: "First role — handled admin operations, school software, ID/report card systems and early digital campaigns.",
  },
];

function Experience() {
  return (
    <section id="experience" className="relative py-28 px-5">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Experience"
          title={<>A timeline of <span className="text-gradient-gold">measurable</span> growth.</>}
        />
        <div className="mt-14 relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--gold)]/40 to-transparent" />
          <div className="space-y-10">
            {EXPERIENCE.map((e, i) => (
              <motion.div
                key={e.org}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`relative grid sm:grid-cols-2 gap-6 items-center`}
              >
                <span className="absolute left-4 sm:left-1/2 -translate-x-1/2 grid place-items-center h-4 w-4 rounded-full bg-[var(--gradient-gold)] ring-4 ring-background" />
                <div className={`pl-12 sm:pl-0 ${i % 2 === 0 ? "sm:pr-12 sm:text-right" : "sm:order-2 sm:pl-12"}`}>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{e.period}</div>
                  <h3 className="font-display text-2xl mt-1">{e.org}</h3>
                  <div className="mt-1 text-gradient-gold text-sm font-medium">{e.role}</div>
                </div>
                <div className={`pl-12 sm:pl-0 ${i % 2 === 0 ? "sm:pl-12" : "sm:order-1 sm:pr-12 sm:text-right"}`}>
                  <div className="glass rounded-2xl p-5 text-sm text-muted-foreground leading-relaxed">
                    {e.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SKILLS ---------------- */
const SKILL_GROUPS = [
  {
    title: "Digital Marketing",
    items: [
      ["SEO", 92], ["Social Media Marketing", 95], ["Google Ads", 88], ["Meta Ads", 90],
      ["Instagram Marketing", 93], ["Facebook Marketing", 92], ["Email Marketing", 85],
      ["Lead Generation", 94], ["Content Marketing", 88],
    ] as [string, number][],
  },
  {
    title: "Business Analytics",
    items: [
      ["Power BI", 88], ["Google Analytics", 92], ["Looker Studio", 86], ["Advanced Excel", 90],
      ["Dashboard Creation", 89], ["Data Visualization", 87], ["Business Intelligence", 84],
    ] as [string, number][],
  },
  {
    title: "Technology",
    items: [
      ["Web Development", 86], ["AI Automation", 90], ["Prompt Engineering", 92],
      ["Ethical Hacking", 80], ["Cybersecurity", 78], ["Cloud (AWS/GCP)", 75],
      ["No-Code (Bubble)", 84],
    ] as [string, number][],
  },
];

function Skills() {
  return (
    <section id="skills" className="relative py-28 px-5 overflow-hidden">
      <div className="absolute inset-0 data-grid pointer-events-none" />
      <div className="absolute inset-0 data-stream" />
      <div className="mx-auto max-w-7xl relative">
        <SectionHeader
          eyebrow="Skills"
          title={<>Marketing, analytics and <span className="text-gradient-gold">technology</span>.</>}
          subtitle="A full-stack growth toolkit — from campaign launch to dashboard, from landing page to automation."
        />
        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((g) => (
            <div key={g.title} className="glass-strong rounded-3xl p-6">
              <h3 className="font-display text-2xl">{g.title}</h3>
              <div className="mt-6 space-y-4">
                {g.items.map(([name, val]) => (
                  <SkillBar key={name} name={name} value={val} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillBar({ name, value }: { name: string; value: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <div ref={ref}>
      <div className="flex items-center justify-between text-sm">
        <span>{name}</span>
        <span className="text-muted-foreground font-mono text-xs">{value}%</span>
      </div>
      <div className="mt-2 h-1.5 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : { width: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full bg-[var(--gradient-gold)]"
        />
      </div>
    </div>
  );
}

/* ---------------- SERVICES ---------------- */
const SERVICES = [
  ["Digital Marketing Strategy", "End-to-end strategy: positioning, channel mix, budget plan and KPI roadmap."],
  ["Social Media Management", "Content systems, calendars and creative for Instagram, Facebook, LinkedIn, YouTube."],
  ["Lead Generation Systems", "High-intent funnels on Meta and Google with CRM & WhatsApp follow-up automation."],
  ["SEO Optimization", "Technical SEO, content clusters and authority building to win category keywords."],
  ["Performance Marketing", "Profitable Google & Meta ads with conversion tracking, CRO and weekly reporting."],
  ["Business Analytics Reporting", "Power BI / Looker dashboards for marketing, sales, ops and leadership."],
  ["Marketing Automation", "Email, WhatsApp and chatbot flows that nurture leads while you sleep."],
  ["Website Development", "Fast, modern sites and school portals — built to convert and rank."],
  ["School Digital Transformation", "Admission funnels, ID/report card systems, parent comms and ops digitisation."],
  ["AI Consultation", "Practical AI workflows — content, support, ops and decision-making."],
];

function Services() {
  return (
    <section id="services" className="relative py-28 px-5 overflow-hidden">
      <div className="aurora opacity-60" />
      <div className="mx-auto max-w-7xl relative">
        <SectionHeader
          eyebrow="Services"
          title={<>What I can <span className="text-gradient-gold">build for you</span>.</>}
          subtitle="Pick a service or combine a few — most clients start with strategy + lead generation, then scale into analytics and automation."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map(([title, desc], i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
              className="group relative glass rounded-2xl p-6 hover:-translate-y-1 transition-transform"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                   style={{ background: "linear-gradient(135deg, oklch(0.82 0.14 84 / 0.08), transparent 60%)" }} />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-muted-foreground">/ {String(i + 1).padStart(2, "0")}</span>
                  <span className="text-gradient-gold opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
                <h3 className="mt-4 font-display text-xl">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PORTFOLIO ---------------- */
const PROJECTS = [
  {
    name: "RKB India Services",
    tag: "Flagship Project · 2021–2024",
    summary: "An end-to-end services platform for educational institutions — websites & apps, school management software, ID cards, report cards and admit card systems.",
    problem: "Schools were juggling disconnected tools for admissions, attendance, ID & report cards, and had no professional digital presence.",
    strategy: "Build one umbrella brand offering web, app and school management solutions tailored to Indian K-12 institutions.",
    execution: "Designed and shipped websites, custom school management modules, automated ID/report/admit card systems, and onboarded multiple academies.",
    result: "Powering operations and digital presence for several private schools, reducing admin overhead and lifting admission inquiries.",
    impact: "A repeatable productised offer that schools can adopt in days, not months.",
    link: "https://www.rkbindia.com",
  },
  {
    name: "School Branding Campaign",
    tag: "SDPS International School",
    summary: "Repositioning a private school as the premium choice in its region through brand, content and paid social.",
    problem: "Generic positioning and inconsistent visual identity were limiting trust during admission season.",
    strategy: "Sharp positioning around academic excellence + modern facilities, paired with cinematic creative.",
    execution: "Brand refresh, reels-first content engine, parent testimonials, geo-targeted Meta & Google campaigns.",
    result: "Sharp lift in inquiries, walk-ins and brand recall through the peak admission window.",
    impact: "A repeatable playbook now used across multiple school clients.",
  },
  {
    name: "Admission Growth Campaign",
    tag: "Multi-school · Performance",
    summary: "Performance marketing program designed specifically for K-12 admissions across multiple academies.",
    problem: "Cost per inquiry was high and quality of leads was low across paid channels.",
    strategy: "Audience-first creative, intent-based keywords, WhatsApp-based qualification flow.",
    execution: "Built Meta & Google funnels, landing pages with instant WhatsApp handoff, and weekly performance reviews.",
    result: "Dropped cost-per-lead meaningfully while raising lead quality and admission conversion.",
    impact: "Replicable funnel template across schools and tuition centres.",
  },
  {
    name: "Lead Generation Engine",
    tag: "SMB · Cross-vertical",
    summary: "An always-on lead engine combining SEO, paid ads, content and automation for small business clients.",
    problem: "Founders had no predictable pipeline of qualified inquiries.",
    strategy: "Channel mix tailored per business, with one CRM-backed source of truth.",
    execution: "Set up landing pages, Meta + Google campaigns, email + WhatsApp nurture, weekly reporting.",
    result: "Consistent monthly lead flow with clear cost-per-lead and conversion metrics.",
    impact: "Founders finally trust marketing as a growth lever, not a cost centre.",
  },
  {
    name: "Digital Transformation Project",
    tag: "Royal Academy",
    summary: "Full-stack digital upgrade — marketing, admissions, ops, analytics and AI-assisted workflows.",
    problem: "Manual operations and scattered data made decision-making slow.",
    strategy: "Standardise data, automate repetitive tasks, surface KPIs to leadership in real time.",
    execution: "Built marketing & ops dashboards, integrated AI assistants, modernised the web stack.",
    result: "Faster decisions, cleaner data and a team that ships campaigns weekly instead of monthly.",
    impact: "Institution is now AI-ready and analytics-driven.",
  },
  {
    name: "Business Analytics Dashboard",
    tag: "Power BI · Looker Studio",
    summary: "Executive dashboards unifying marketing, sales and operations into one decision surface.",
    problem: "Leadership reviewed multiple spreadsheets weekly with no single source of truth.",
    strategy: "One semantic layer, one dashboard, role-based views.",
    execution: "Built Power BI / Looker Studio dashboards with automated refresh, alerts and drill-downs.",
    result: "Weekly reviews dropped from hours to minutes; key metrics now reviewed daily.",
    impact: "Culture shift from reporting to decision-making.",
  },
];

function Portfolio() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="portfolio" className="relative py-28 px-5 overflow-hidden">
      <div className="absolute inset-0 data-grid pointer-events-none" />
      <div className="absolute inset-0 data-stream" />
      <div className="mx-auto max-w-7xl relative">
        <SectionHeader
          eyebrow="Selected Work"
          title={<>Case studies that <span className="text-gradient-gold">moved the needle</span>.</>}
          subtitle="Click any project to view the problem, strategy, execution, result and impact."
        />
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.button
              key={p.name}
              onClick={() => setOpen(i)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.06 }}
              className="group text-left relative overflow-hidden glass-strong rounded-3xl p-7 hover:-translate-y-1 transition-transform"
            >
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-30 group-hover:opacity-50 transition-opacity"
                   style={{ background: "var(--gradient-gold)", filter: "blur(60px)" }} />
              <div className="relative">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{p.tag}</div>
                <h3 className="mt-3 font-display text-2xl sm:text-3xl">{p.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.summary}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm text-gradient-gold">
                  View case study <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {open !== null && (
        <CaseStudyModal project={PROJECTS[open]} onClose={() => setOpen(null)} />
      )}
    </section>
  );
}

function CaseStudyModal({
  project,
  onClose,
}: {
  project: (typeof PROJECTS)[number];
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);
  const rows: [string, string][] = [
    ["Problem", project.problem],
    ["Strategy", project.strategy],
    ["Execution", project.execution],
    ["Result", project.result],
    ["Impact", project.impact],
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      className="fixed inset-0 z-[80] grid place-items-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 30, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl glass-strong p-8"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 h-9 w-9 grid place-items-center rounded-full glass hover:bg-white/10"
          aria-label="Close"
        >
          ×
        </button>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{project.tag}</div>
        <h3 className="mt-2 font-display text-3xl sm:text-4xl">{project.name}</h3>
        <p className="mt-4 text-muted-foreground">{project.summary}</p>
        <div className="mt-8 space-y-5">
          {rows.map(([label, body]) => (
            <div key={label} className="border-l-2 border-[var(--gold)]/40 pl-5">
              <div className="text-[11px] uppercase tracking-widest text-gradient-gold">{label}</div>
              <p className="mt-1 text-sm sm:text-base leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
        {project.link && (
          <a href={project.link} target="_blank" rel="noreferrer"
             className="mt-8 inline-flex items-center gap-2 rounded-xl btn-premium px-5 py-3 text-sm shine">
            Visit project ↗
          </a>
        )}
      </motion.div>
    </motion.div>
  );
}

/* ---------------- CERTIFICATIONS ---------------- */
const CERTS = [
  ["Google", "Digital Marketing & Ads"],
  ["Meta", "Certified Digital Marketing Associate"],
  ["HubSpot Academy", "Inbound & Marketing"],
  ["SEMRush Academy", "SEO & Content"],
  ["LinkedIn Learning", "Marketing & Analytics"],
  ["Microsoft", "Digital Skills"],
  ["Reliance Foundation", "Digital Marketing"],
  ["IDDE / NIIT / OHSC", "Digital Marketing"],
  ["CISCO", "Ethical Hacker (Feb 2025)"],
  ["CISCO", "Computer Hardware"],
  ["CISCO", "Modern AI"],
  ["Tech Mahindra Foundation", "Cybersecurity"],
  ["OHSC", "Recruitment Skill (HR)"],
  ["STP Computer Center", "Web Development"],
  ["STP Computer Center", "Advanced Excel"],
  ["STP Computer Center", "Tally ERP 9"],
];

function Certifications() {
  return (
    <section id="certifications" className="relative py-28 px-5">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Certifications"
          title={<>Trained by the <span className="text-gradient-gold">best in the industry</span>.</>}
          subtitle="A continuously growing stack of certifications across marketing, analytics, AI and cybersecurity."
        />
        <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {CERTS.map(([issuer, title], i) => (
            <motion.div
              key={`${issuer}-${title}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
              className="glass rounded-2xl p-5 hover:bg-white/[0.06] transition-colors"
            >
              <div className="text-[10px] uppercase tracking-widest text-gradient-gold">{issuer}</div>
              <div className="mt-2 font-medium">{title}</div>
              <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                <span>Verified</span>
                <span>✓</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- EDUCATION ---------------- */
const EDUCATION = [
  { title: "Bachelor of Computer Applications (BCA)", org: "SDCM · Bundelkhand University, Jhansi", period: "2023 — Present" },
  { title: "Higher Secondary", org: "MSIC Talbehat", period: "2022 — 2023" },
  { title: "Secondary", org: "GHS Terai Fatak", period: "2018 — 2019" },
  { title: "Web Development Course", org: "STP Computer Center, Delhi", period: "2023 — 2024" },
  { title: "Advanced Excel", org: "STP Computer Center, Delhi", period: "2024" },
  { title: "Tally ERP 9", org: "STP Computer Center", period: "2023" },
];

function Education() {
  return (
    <section id="education" className="relative py-28 px-5">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Education"
          title={<>Academic & <span className="text-gradient-gold">technical</span> foundation.</>}
        />
        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {EDUCATION.map((e) => (
            <div key={e.title} className="glass-strong rounded-2xl p-6 flex items-start gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gradient-gold)] text-primary-foreground font-display text-lg shrink-0">
                🎓
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{e.period}</div>
                <div className="mt-1 font-display text-lg">{e.title}</div>
                <div className="text-sm text-muted-foreground">{e.org}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



/* ---------------- CONTACT ---------------- */
function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setError(null);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      await submitLead({
        name: String(data.get("name") ?? ""),
        email: String(data.get("email") ?? ""),
        company: String(data.get("company") ?? ""),
        projectType: String(data.get("projectType") ?? ""),
        message: String(data.get("message") ?? ""),
      });
      setSent(true);
      form.reset();
    } catch {
      setError("Message send nahi ho paya. Please WhatsApp ya email se contact karein.");
    } finally {
      setSending(false);
    }
  }
  return (
    <section id="contact" className="relative py-28 px-5 overflow-hidden">
      <div className="aurora opacity-70" />
      <div className="mx-auto max-w-7xl relative">
        <div className="relative overflow-hidden glass-strong rounded-[2rem] p-8 sm:p-14 glow-cyan">
          <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full opacity-40"
               style={{ background: "var(--gradient-blue-gold)", filter: "blur(80px)" }} />
          <div className="relative grid lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader
                eyebrow="Contact"
                title={<>Let's build your <span className="text-gradient-gold">growth engine</span>.</>}
                subtitle="Reply within 24 hours. Based in India, working with clients across the country."
              />
              <div className="mt-8 space-y-3">
                <ContactRow label="WhatsApp" value="+91 93690 88265"
                  href={`https://wa.me/${PHONE}`} />
                <ContactRow label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
                <ContactRow label="Website" value="www.rkbindia.com" href="https://www.rkbindia.com" />
                <ContactRow label="Location" value="Pisnari Bagh, Lalitpur (UP), India" />
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`https://wa.me/${PHONE}`} target="_blank" rel="noreferrer"
                   className="rounded-xl btn-premium px-5 py-3 text-sm shine">
                  WhatsApp Me
                </a>
                <a href={`tel:+${PHONE}`} className="rounded-xl glass px-5 py-3 text-sm font-semibold hover:bg-white/10">
                  Call Now
                </a>
                <ResumeButton label="Download Resume" />
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-6 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Name" id="contact-name" name="name" placeholder="Your full name" required />
                <Field label="Email" id="contact-email" name="email" type="email" placeholder="you@email.com" required />
              </div>
              <Field label="Company / Organization" id="contact-company" name="company" placeholder="Optional" />
              <div>
                <label htmlFor="contact-project-type" className="text-xs uppercase tracking-widest text-muted-foreground">Project Type</label>
                <select id="contact-project-type" name="projectType" className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40">
                  <option className="bg-background">Digital Marketing</option>
                  <option className="bg-background">Lead Generation</option>
                  <option className="bg-background">Business Analytics</option>
                  <option className="bg-background">Website Development</option>
                  <option className="bg-background">School Digital Transformation</option>
                  <option className="bg-background">AI Consultation</option>
                  <option className="bg-background">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="contact-message" className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea id="contact-message" name="message" required rows={4}
                  placeholder="Tell me about your project, goals and timeline..."
                  className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40" />
              </div>
              {error && <p className="text-sm text-red-400">{error}</p>}
              <button type="submit" disabled={sending}
                className="w-full rounded-xl btn-premium px-5 py-3.5 text-sm shine disabled:opacity-60">
                {sending ? "Sending..." : sent ? "Thanks — I'll be in touch." : "Send Message →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-center justify-between glass rounded-xl px-4 py-3 hover:bg-white/[0.07] transition-colors">
      <div>
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="text-sm font-medium">{value}</div>
      </div>
      {href && <span className="text-gradient-gold">↗</span>}
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noreferrer">{inner}</a> : inner;
}

function Field({ label, id, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor={id} className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        id={id}
        {...rest}
        className="mt-2 w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/40"
      />
    </div>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="relative py-12 px-5 border-t border-white/5">
      <div className="mx-auto max-w-7xl flex flex-col items-center gap-4">
        <VisitorCounter />
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>© {new Date().getFullYear()} Kaushlendra Kartik. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <a href={`mailto:${EMAIL}`} className="hover:text-foreground">Email</a>
            <a href={`https://wa.me/${PHONE}`} target="_blank" rel="noreferrer" className="hover:text-foreground">WhatsApp</a>
            <a href="https://www.rkbindia.com" target="_blank" rel="noreferrer" className="hover:text-foreground">RKB India</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- FLOATING ACTIONS ---------------- */
function FloatingActions() {
  return (
    <>
      <a
        href={`https://wa.me/${PHONE}?text=Hi%20Kaushlendra%2C%20I%20saw%20your%20portfolio`}
        target="_blank" rel="noreferrer"
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full text-white shadow-[0_20px_60px_-10px_rgba(37,211,102,0.6)] hover:scale-105 transition-transform"
        style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor">
          <path d="M19.11 17.39c-.28-.14-1.64-.81-1.9-.9-.25-.09-.44-.14-.62.14-.18.28-.71.9-.87 1.08-.16.18-.32.21-.6.07-.28-.14-1.17-.43-2.23-1.38-.82-.73-1.38-1.63-1.54-1.91-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.49.14-.17.18-.28.28-.46.09-.18.05-.35-.02-.49-.07-.14-.62-1.5-.85-2.06-.22-.54-.45-.47-.62-.48-.16-.01-.34-.01-.53-.01-.18 0-.49.07-.74.35-.25.28-.97.95-.97 2.32 0 1.37 1 2.69 1.14 2.87.14.18 1.96 3 4.74 4.21.66.29 1.17.46 1.57.59.66.21 1.26.18 1.74.11.53-.08 1.64-.67 1.87-1.31.23-.65.23-1.2.16-1.31-.07-.11-.25-.18-.53-.32M16.02 5.33C10.04 5.33 5.2 10.17 5.2 16.15c0 1.92.5 3.8 1.45 5.46L5.07 27.5l6.04-1.58a10.78 10.78 0 0 0 4.91 1.25h.01c5.97 0 10.82-4.85 10.82-10.82 0-2.89-1.13-5.61-3.17-7.66a10.78 10.78 0 0 0-7.66-3.16"/>
        </svg>
      </a>
    </>
  );
}
