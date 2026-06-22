import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send, Sparkles, Download, Phone, Mail } from "lucide-react";

const PHONE = "919369088265";
const EMAIL = "kkaushlendra023@gmail.com";

const WELCOME: UIMessage = {
  id: "welcome",
  role: "assistant",
  parts: [
    {
      type: "text",
      text: "👋 Hey there! I'm **Kartik AI** — Kaushlendra's personal assistant. I can tell you about his work, services, projects, or help you get in touch. What brings you here today — exploring, hiring, or looking for marketing help?",
    },
  ],
};

const QUICK_PROMPTS = [
  "I'm a recruiter — tell me about Kartik",
  "What services do you offer?",
  "Show me your best projects",
  "How can I contact Kartik?",
];

function messageText(m: UIMessage) {
  return m.parts.map((p) => (p.type === "text" ? p.text : "")).join("");
}

// Lightweight markdown: **bold** and bullet lines
function renderText(text: string) {
  return text.split("\n").map((line, i) => {
    const trimmed = line.trim();
    const isBullet = trimmed.startsWith("- ") || trimmed.startsWith("• ");
    const content = (isBullet ? trimmed.slice(2) : line).split(/(\*\*[^*]+\*\*)/g).map((seg, j) =>
      seg.startsWith("**") && seg.endsWith("**") ? (
        <strong key={j} className="font-semibold text-[hsl(45,90%,70%)]">{seg.slice(2, -2)}</strong>
      ) : (
        <span key={j}>{seg}</span>
      )
    );
    return (
      <div key={i} className={isBullet ? "flex gap-2 pl-1" : ""}>
        {isBullet && <span className="text-[hsl(45,90%,60%)]">•</span>}
        <span>{content}</span>
      </div>
    );
  });
}

export default function KartikAI() {
  const [open, setOpen] = useState(false);
  const [pulse, setPulse] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [input, setInput] = useState("");

  const { messages, sendMessage, status, error } = useChat({
    id: "kartik-ai-session",
    messages: [WELCOME],
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  const isLoading = status === "submitted" || status === "streaming";

  useEffect(() => {
    if (open) {
      setPulse(false);
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isLoading]);

  const send = async (text: string) => {
    const value = text.trim();
    if (!value || isLoading) return;
    setInput("");
    await sendMessage({ text: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    void send(input);
  };

  const lastIsAssistant = messages[messages.length - 1]?.role === "assistant";
  const lastText = lastIsAssistant ? messageText(messages[messages.length - 1]).toLowerCase() : "";
  const showRecruiterActions =
    lastIsAssistant &&
    /(recruit|hire|resume|cv|opportunit|role|job|position)/.test(lastText);

  return (
    <>
      {/* Floating button */}
      <motion.button
        aria-label="Open Kartik AI assistant"
        onClick={() => setOpen((v) => !v)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 18 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="fixed bottom-5 right-5 z-[60] h-14 w-14 sm:h-16 sm:w-16 rounded-full flex items-center justify-center shadow-[0_10px_40px_-10px_rgba(212,175,55,0.6)] text-[#0b1226]"
        style={{
          background: "linear-gradient(135deg, hsl(45,95%,65%), hsl(38,90%,52%))",
        }}
      >
        {pulse && !open && (
          <motion.span
            className="absolute inset-0 rounded-full"
            style={{ background: "hsl(45,95%,65%)" }}
            animate={{ scale: [1, 1.5, 1.5], opacity: [0.5, 0, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="h-6 w-6" strokeWidth={2.5} />
            </motion.div>
          ) : (
            <motion.div key="msg" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} className="relative">
              <MessageCircle className="h-6 w-6" strokeWidth={2.5} />
              <Sparkles className="absolute -top-2 -right-2 h-3 w-3" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="fixed z-[59] bottom-24 right-3 left-3 sm:left-auto sm:right-5 sm:w-[400px] max-h-[78vh] flex flex-col rounded-2xl overflow-hidden border border-[hsl(45,80%,55%)]/30 shadow-[0_25px_80px_-20px_rgba(0,0,0,0.7)]"
            style={{
              background:
                "linear-gradient(160deg, rgba(11,18,38,0.92), rgba(7,12,26,0.96))",
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Header */}
            <div
              className="relative px-4 py-3 flex items-center gap-3 border-b border-white/10"
              style={{ background: "linear-gradient(90deg, rgba(212,175,55,0.18), rgba(212,175,55,0.04))" }}
            >
              <div
                className="h-10 w-10 rounded-full flex items-center justify-center text-[#0b1226] font-bold text-sm shadow-lg"
                style={{ background: "linear-gradient(135deg, hsl(45,95%,68%), hsl(38,90%,52%))" }}
              >
                K<span className="opacity-80">AI</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-white flex items-center gap-2 text-sm">
                  Kartik AI
                  <span className="inline-flex items-center gap-1 text-[10px] font-normal text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online
                  </span>
                </div>
                <div className="text-[11px] text-white/60">Personal assistant • Replies instantly</div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="h-8 w-8 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-3 py-4 space-y-3 text-sm"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 0%, rgba(212,175,55,0.08), transparent 50%), radial-gradient(circle at 80% 100%, rgba(59,130,246,0.08), transparent 50%)",
              }}
            >
              {messages.map((m) => {
                const isUser = m.role === "user";
                const text = messageText(m);
                if (!text) return null;
                return (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-relaxed ${
                        isUser
                          ? "rounded-br-sm text-[#0b1226] font-medium"
                          : "rounded-bl-sm text-white/95 border border-white/10"
                      }`}
                      style={
                        isUser
                          ? { background: "linear-gradient(135deg, hsl(45,95%,68%), hsl(38,90%,55%))" }
                          : { background: "rgba(255,255,255,0.06)" }
                      }
                    >
                      <div className="space-y-1">{renderText(text)}</div>
                    </div>
                  </motion.div>
                );
              })}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="rounded-2xl rounded-bl-sm px-4 py-3 bg-white/10 border border-white/10">
                    <div className="flex gap-1.5">
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          className="h-2 w-2 rounded-full bg-[hsl(45,90%,65%)]"
                          animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {error && (
                <div className="text-xs text-red-300 bg-red-500/10 border border-red-500/30 rounded-lg px-3 py-2">
                  Something went wrong. Please try again.
                </div>
              )}

              {messages.length <= 1 && !isLoading && (
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {QUICK_PROMPTS.map((q) => (
                    <button
                      key={q}
                      onClick={() => void send(q)}
                      className="text-[11px] px-2.5 py-1.5 rounded-full border border-[hsl(45,80%,55%)]/40 text-[hsl(45,90%,75%)] hover:bg-[hsl(45,90%,60%)]/10 transition"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              {showRecruiterActions && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-wrap gap-2 pt-1"
                >
                  <a
                    href={`https://wa.me/${PHONE}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-full text-[#0b1226]"
                    style={{ background: "linear-gradient(135deg, hsl(45,95%,68%), hsl(38,90%,55%))" }}
                  >
                    <Phone className="h-3.5 w-3.5" /> Hire Me
                  </a>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-full text-white border border-white/20 hover:bg-white/10"
                  >
                    <Mail className="h-3.5 w-3.5" /> Contact
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-full text-white border border-white/20 hover:bg-white/10"
                  >
                    <Download className="h-3.5 w-3.5" /> Resume
                  </a>
                </motion.div>
              )}
            </div>

            {/* Composer */}
            <form
              onSubmit={handleSubmit}
              className="border-t border-white/10 p-2.5 flex items-end gap-2"
              style={{ background: "rgba(7,12,26,0.6)" }}
            >
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    void send(input);
                  }
                }}
                rows={1}
                placeholder="Ask me anything about Kartik…"
                className="flex-1 resize-none max-h-28 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[hsl(45,80%,55%)]/60 focus:bg-white/10 transition"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                aria-label="Send"
                className="h-10 w-10 rounded-xl flex items-center justify-center text-[#0b1226] disabled:opacity-40 disabled:cursor-not-allowed transition"
                style={{ background: "linear-gradient(135deg, hsl(45,95%,68%), hsl(38,90%,55%))" }}
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
            <div className="text-center text-[10px] text-white/40 pb-2">
              Powered by Kartik AI
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
