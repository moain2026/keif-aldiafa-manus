import { useState } from "react";
import { motion } from "motion/react";
import { PageSEO } from "../components/Layout";

const WA = "966535636933";

export function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const msg = `🌟 طلب ضيافة جديد من موقع كيف الضيافة

الاسم الكريم: ${form.name}
رقم الهاتف: ${form.phone}
البريد الإلكتروني: ${form.email || "—"}
الخدمة المطلوبة: ${form.service}
التاريخ المقترح: ${form.date || "—"}
تفاصيل إضافية: ${form.message || "—"}`;

    setTimeout(() => {
      window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, "_blank");
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const contactMethods = [
    {
      href: `https://wa.me/${WA}?text=${encodeURIComponent("مرحباً، أود الاستفسار عن خدمات الضيافة لديكم.")}`,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      color: "#25D366",
      title: "تواصل عبر واتساب",
      sub: "ردود فورية · متاح ٢٤/٧",
      detail: `+966 53 563 6933`,
    },
    {
      href: "tel:+966535636933",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      color: "#B8860B",
      title: "اتصل بنا مباشرة",
      sub: "من ٨ صباحاً حتى ١٢ منتصف الليل",
      detail: "+966 53 563 6933",
    },
    {
      href: "https://instagram.com/keifdiafa",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      color: "#E1306C",
      title: "تابعونا على إنستغرام",
      sub: "أحدث أعمالنا ومشاريعنا",
      detail: "@keifdiafa",
    },
    {
      href: "mailto:info@keifdiafa.com",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "#B8860B",
      title: "البريد الإلكتروني",
      sub: "للمراسلات الرسمية والعروض",
      detail: "info@keifdiafa.com",
    },
  ];

  const inputStyle = {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(184,134,11,0.18)",
    color: "#F5F5DC",
    borderRadius: "0.75rem",
    padding: "0.75rem 1rem",
    width: "100%",
    fontSize: "0.875rem",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "'IBM Plex Sans Arabic', 'Tajawal', sans-serif",
  };

  return (
    <>
      <PageSEO
        title="تواصل معنا | كيف الضيافة - استفسر عن خدماتنا"
        desc="تواصل مع كيف الضيافة للاستفسار عن باقات الضيافة الفاخرة. واتساب، هاتف، أو نموذج الاستفسار - نحن دائماً هنا لك."
      />

      <div className="pt-24 pb-32 min-h-screen">
        {/* ── Header ── */}
        <div className="relative py-16 px-4 text-center overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at 50% 0%, rgba(184,134,11,0.1) 0%, transparent 65%)",
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            <p className="text-[#B8860B] mb-3" style={{ fontSize: "0.75rem", letterSpacing: "0.35em" }}>
              ✦ نسعد بتواصلكم ✦
            </p>
            <h1
              className="text-[#F5F5DC] mb-4"
              style={{
                fontSize: "clamp(2.2rem, 7vw, 3.5rem)",
                fontWeight: 900,
                fontFamily: "'Tajawal', 'IBM Plex Sans Arabic', sans-serif",
              }}
            >
              تواصل معنا
            </h1>
            <div
              className="mx-auto mb-5"
              style={{
                width: 80,
                height: 2,
                background: "linear-gradient(90deg, transparent, #B8860B, #D4A017, transparent)",
              }}
            />
            <p className="text-[#F5F5DC]/50 max-w-lg mx-auto text-sm leading-relaxed">
              فريقنا جاهز لمساعدتكم في تصميم تجربة ضيافة مثالية لا تُنسى
            </p>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* ── Contact Methods ── */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[#F5F5DC] mb-7" style={{ fontSize: "1.2rem", fontWeight: 800 }}>
                طرق التواصل المباشر
              </h2>

              <div className="space-y-3 mb-10">
                {contactMethods.map((m, i) => (
                  <motion.a
                    key={i}
                    href={m.href}
                    target={m.href.startsWith("http") ? "_blank" : undefined}
                    rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    whileHover={{ x: -4 }}
                    className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 group"
                    style={{
                      background: `${m.color}06`,
                      border: `1px solid ${m.color}18`,
                    }}
                  >
                    <div
                      className="w-13 h-13 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                      style={{
                        width: 52,
                        height: 52,
                        background: `${m.color}15`,
                        border: `1px solid ${m.color}30`,
                        color: m.color,
                      }}
                    >
                      {m.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p style={{ color: m.color, fontWeight: 700, fontSize: "0.9rem" }}>
                        {m.title}
                      </p>
                      <p className="text-[#F5F5DC]/45 text-xs mt-0.5">{m.sub}</p>
                      <p className="text-[#F5F5DC]/30 text-xs mt-0.5" dir="ltr" style={{ textAlign: "right" }}>
                        {m.detail}
                      </p>
                    </div>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-4 h-4 flex-shrink-0 transition-transform duration-300 group-hover:-translate-x-1"
                      style={{ color: `${m.color}50` }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </motion.a>
                ))}
              </div>

              {/* Service Areas */}
              <div
                className="p-5 rounded-2xl"
                style={{
                  background: "rgba(25,20,8,0.5)",
                  border: "1px solid rgba(184,134,11,0.12)",
                }}
              >
                <h3
                  className="text-[#B8860B] mb-4"
                  style={{ fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.1em" }}
                >
                  ✦ مناطق التغطية
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["الرياض", "جدة", "مكة المكرمة", "المدينة المنورة", "الدمام", "الخبر", "أبها", "تبوك", "القصيم", "حائل"].map(
                    (city) => (
                      <span
                        key={city}
                        className="px-3 py-1.5 rounded-full text-[#F5F5DC]/55 text-xs transition-colors duration-200 hover:text-[#B8860B]"
                        style={{
                          background: "rgba(184,134,11,0.04)",
                          border: "1px solid rgba(184,134,11,0.12)",
                        }}
                      >
                        {city}
                      </span>
                    )
                  )}
                </div>
              </div>
            </motion.div>

            {/* ── Contact Form ── */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center p-10 rounded-3xl"
                  style={{
                    background: "rgba(25,20,8,0.5)",
                    border: "1px solid rgba(184,134,11,0.2)",
                    minHeight: 400,
                  }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.2 }}
                    className="w-20 h-20 rounded-full flex items-center justify-center text-[#B8860B] text-3xl mb-6"
                    style={{
                      background: "linear-gradient(135deg, rgba(184,134,11,0.15), rgba(184,134,11,0.05))",
                      border: "2px solid rgba(184,134,11,0.4)",
                    }}
                  >
                    ✓
                  </motion.div>
                  <h3 className="text-[#F5F5DC] mb-3" style={{ fontSize: "1.4rem", fontWeight: 800 }}>
                    شكراً لتواصلك!
                  </h3>
                  <p className="text-[#F5F5DC]/55 text-sm mb-7 leading-relaxed">
                    تم إرسال رسالتك عبر واتساب بنجاح.
                    <br />
                    سيتواصل معك فريقنا في أقرب وقت ممكن.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full text-[#B8860B] text-sm transition-all duration-200 hover:bg-[#B8860B]/10"
                    style={{ border: "1px solid rgba(184,134,11,0.3)", fontWeight: 600 }}
                  >
                    إرسال رسالة أخرى
                  </button>
                </motion.div>
              ) : (
                <div
                  className="p-6 sm:p-8 rounded-3xl"
                  style={{
                    background: "rgba(20,16,6,0.7)",
                    border: "1px solid rgba(184,134,11,0.15)",
                  }}
                >
                  <h2 className="text-[#F5F5DC] mb-1.5" style={{ fontSize: "1.2rem", fontWeight: 800 }}>
                    نموذج الاستفسار
                  </h2>
                  <p className="text-[#F5F5DC]/40 text-xs mb-6">
                    سيتم إرسال رسالتك مباشرة عبر واتساب لضمان الرد الفوري
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[#F5F5DC]/50 text-xs mb-1.5">الاسم الكريم *</label>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="محمد العمري"
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label className="block text-[#F5F5DC]/50 text-xs mb-1.5">رقم الهاتف *</label>
                        <input
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          placeholder="+966 5X XXX XXXX"
                          style={inputStyle}
                          dir="ltr"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#F5F5DC]/50 text-xs mb-1.5">البريد الإلكتروني</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="example@email.com"
                        style={inputStyle}
                        dir="ltr"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[#F5F5DC]/50 text-xs mb-1.5">الخدمة المطلوبة *</label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          required
                          style={{
                            ...inputStyle,
                            background: "#130f04",
                            color: form.service ? "#F5F5DC" : "rgba(245,245,220,0.3)",
                          }}
                        >
                          <option value="" disabled>اختر الخدمة</option>
                          <option value="ضيافة رجالية">ضيافة رجالية</option>
                          <option value="ضيافة نسائية">ضيافة نسائية</option>
                          <option value="خدمات فنية">خدمات فنية</option>
                          <option value="تأجير معدات">تأجير معدات</option>
                          <option value="باقة متكاملة">باقة متكاملة</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[#F5F5DC]/50 text-xs mb-1.5">التاريخ المقترح</label>
                        <input
                          name="date"
                          type="date"
                          value={form.date}
                          onChange={handleChange}
                          style={{ ...inputStyle, colorScheme: "dark" }}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#F5F5DC]/50 text-xs mb-1.5">تفاصيل إضافية</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="اكتب هنا أي تفاصيل عن مناسبتك، عدد الضيوف، المكان..."
                        style={{ ...inputStyle, resize: "none" }}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={{ scale: loading ? 1 : 1.02 }}
                      whileTap={{ scale: loading ? 1 : 0.98 }}
                      className="w-full py-4 rounded-2xl text-[#0f0f0f] flex items-center justify-center gap-3 transition-all duration-300"
                      style={{
                        background: loading
                          ? "rgba(184,134,11,0.5)"
                          : "linear-gradient(135deg, #B8860B, #D4A017)",
                        fontWeight: 800,
                        fontSize: "0.95rem",
                        boxShadow: loading ? "none" : "0 6px 25px rgba(184,134,11,0.3)",
                        cursor: loading ? "not-allowed" : "pointer",
                      }}
                    >
                      {loading ? (
                        <motion.div
                          className="w-5 h-5 rounded-full border-2 border-[#0f0f0f]/40 border-t-[#0f0f0f]"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        />
                      ) : (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                      )}
                      {loading ? "جاري الإرسال..." : "إرسال عبر واتساب"}
                    </motion.button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
