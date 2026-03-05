import { Link } from "react-router";
import { motion } from "motion/react";

export function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 text-center"
      style={{
        background: "radial-gradient(ellipse at 50% 30%, rgba(184,134,11,0.06) 0%, transparent 70%)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[#B8860B] mb-4" style={{ fontSize: "0.75rem", letterSpacing: "0.4em" }}>
          ✦ خطأ ٤٠٤ ✦
        </p>
        <h1
          className="text-[#F5F5DC] mb-4"
          style={{
            fontSize: "clamp(4rem, 15vw, 8rem)",
            fontWeight: 900,
            fontFamily: "'Tajawal', 'IBM Plex Sans Arabic', sans-serif",
            background: "linear-gradient(135deg, #B8860B, #D4A017, #F0C040)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          ٤٠٤
        </h1>
        <p className="text-[#F5F5DC]" style={{ fontSize: "1.3rem", fontWeight: 700 }}>
          الصفحة غير موجودة
        </p>
        <p className="text-[#F5F5DC]/50 text-sm mt-3 mb-8 max-w-xs mx-auto">
          يبدو أن هذه الصفحة لا تنتمي لضيافتنا. دعنا نأخذك للبيت.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-[#0f0f0f] transition-all duration-300 hover:-translate-y-0.5"
          style={{
            background: "linear-gradient(135deg, #B8860B, #D4A017)",
            fontWeight: 700,
            boxShadow: "0 6px 25px rgba(184,134,11,0.3)",
          }}
        >
          العودة للرئيسية
          <span>←</span>
        </Link>
      </motion.div>
    </div>
  );
}

export default NotFound;
