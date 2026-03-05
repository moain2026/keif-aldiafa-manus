import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { PageSEO } from "../components/Layout";

const heroImg =
  "https://images.unsplash.com/photo-1749517841197-76792f2b0cd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900";
const teamImg =
  "https://images.unsplash.com/photo-1770739576489-cd201676b898?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";
const galaImg =
  "https://images.unsplash.com/photo-1764358868789-400fb3d39fb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";
const confImg =
  "https://images.unsplash.com/photo-1685990063942-6cd34a1e0065?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: "الجودة أولاً",
    desc: "نلتزم بأعلى معايير الجودة في كل تفصيلة من تفاصيل خدماتنا",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "الأصالة والهوية",
    desc: "نفخر بتراثنا العربي الأصيل ونعكسه في كل لحظة ضيافة",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: "الاحترافية",
    desc: "فريقنا مدرب على أعلى مستوى من الاحترافية والتميز في الخدمة",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    title: "الابتكار",
    desc: "ندمج الأصالة بالحداثة لنقدم تجارب ضيافة فريدة ومبتكرة",
  },
];

const milestones = [
  { year: "2016", event: "تأسيس كيف الضيافة بمدينة الرياض" },
  { year: "2018", event: "توسع الخدمات لتشمل المنطقة الغربية والشرقية" },
  { year: "2020", event: "تجاوزنا ١٠٠ مناسبة ناجحة وحصلنا على ثقة كبرى الشركات" },
  { year: "2022", event: "المشاركة في موسم الرياض الكبير وفعاليات نيوم" },
  { year: "2024", event: "+٥٠٠ مناسبة وعملاء في جميع أرجاء المملكة" },
  { year: "2026", event: "إطلاق المنصة الرقمية الفاخرة ورؤية التوسع الخليجي" },
];

const team = [
  { name: "محمد العمري", role: "المدير التنفيذي والمؤسس", img: teamImg },
  { name: "سعود الشمري", role: "مدير العمليات والجودة", img: galaImg },
  { name: "خالد الزهراني", role: "مدير تطوير الأعمال", img: confImg },
];

export function AboutPage() {
  return (
    <>
      <PageSEO
        title="من نحن | كيف الضيافة - قصتنا ورؤيتنا"
        desc="تعرف على كيف الضيافة - رحلة من الشغف نحو الفخامة. منذ 2016 ونحن نقدم أرقى خدمات الضيافة في المملكة العربية السعودية."
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
              ✦ قصتنا ✦
            </p>
            <h1
              className="text-[#F5F5DC] mb-4"
              style={{
                fontSize: "clamp(2.2rem, 7vw, 3.5rem)",
                fontWeight: 900,
                fontFamily: "'Tajawal', 'IBM Plex Sans Arabic', sans-serif",
              }}
            >
              من نحن
            </h1>
            <div
              className="mx-auto"
              style={{
                width: 80,
                height: 2,
                background: "linear-gradient(90deg, transparent, #B8860B, #D4A017, transparent)",
              }}
            />
          </motion.div>
        </div>

        {/* ── Story ── */}
        <section className="max-w-7xl mx-auto px-4 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <ImageWithFallback
                  src={heroImg}
                  alt="كيف الضيافة - رحلتنا"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 img-overlay" />
                {/* Gold frame */}
                <div className="absolute top-4 right-4 bottom-4 left-4 border border-[#B8860B]/15 rounded-2xl pointer-events-none" />
                {/* Year badge */}
                <div
                  className="absolute bottom-6 right-6 px-4 py-3 rounded-xl text-center"
                  style={{
                    background: "rgba(10,8,2,0.9)",
                    border: "1px solid rgba(184,134,11,0.3)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <p className="gold-gradient-text" style={{ fontSize: "1.5rem", fontWeight: 900 }}>
                    ٢٠١٦
                  </p>
                  <p className="text-[#F5F5DC]/50 text-xs">سنة التأسيس</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="text-[#B8860B] mb-3" style={{ fontSize: "0.75rem", letterSpacing: "0.3em" }}>
                ✦ رؤيتنا ✦
              </p>
              <h2
                className="text-[#F5F5DC] mb-6"
                style={{
                  fontSize: "clamp(1.5rem, 3.5vw, 2.1rem)",
                  fontWeight: 800,
                  lineHeight: 1.35,
                  fontFamily: "'Tajawal', 'IBM Plex Sans Arabic', sans-serif",
                }}
              >
                رحلة من الشغف
                <br />
                <span className="gold-gradient-text">نحو الفخامة</span>
              </h2>
              <div className="space-y-4 text-[#F5F5DC]/60 text-sm leading-8">
                <p>
                  انطلقت «كيف الضيافة» من رؤية واضحة: تحويل كل مناسبة إلى تجربة لا تُنسى تجمع
                  بين الأصالة العربية الأصيلة وأرقى معايير الفخامة المعاصرة.
                </p>
                <p>
                  منذ تأسيسنا عام ٢٠١٦، قدمنا خدماتنا لأكثر من ٥٠٠ مناسبة في مختلف أرجاء
                  المملكة العربية السعودية، من حفلات الزفاف الفاخرة إلى الفعاليات الحكومية
                  الكبرى.
                </p>
                <p>
                  فلسفتنا بسيطة: «البساطة هي قمة التعقيد» — نؤمن بأن التفاصيل الدقيقة هي التي
                  تصنع الفارق وتترك الأثر العميق في نفوس ضيوفكم.
                </p>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { n: "+500", l: "مناسبة" },
                  { n: "8+", l: "سنوات" },
                  { n: "+200", l: "عميل" },
                  { n: "100%", l: "رضا" },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl text-center"
                    style={{
                      background: "rgba(184,134,11,0.05)",
                      border: "1px solid rgba(184,134,11,0.12)",
                    }}
                  >
                    <p className="gold-gradient-text" style={{ fontSize: "1.5rem", fontWeight: 900 }}>
                      {s.n}
                    </p>
                    <p className="text-[#F5F5DC]/50 text-xs mt-0.5">{s.l}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Values ── */}
        <section
          className="py-20 px-4"
          style={{ background: "linear-gradient(180deg, #0d0b04 0%, #0f0f0f 100%)" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[#B8860B] mb-3" style={{ fontSize: "0.75rem", letterSpacing: "0.3em" }}>
                ✦ ما يميزنا ✦
              </p>
              <h2
                className="text-[#F5F5DC]"
                style={{
                  fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
                  fontWeight: 800,
                  fontFamily: "'Tajawal', 'IBM Plex Sans Arabic', sans-serif",
                }}
              >
                قيمنا ومبادئنا
              </h2>
              <div
                className="mx-auto mt-4"
                style={{
                  width: 70,
                  height: 2,
                  background: "linear-gradient(90deg, transparent, #B8860B, transparent)",
                }}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-luxury p-6 rounded-2xl text-center group"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-[#B8860B] mx-auto mb-5 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: "linear-gradient(135deg, rgba(184,134,11,0.15), rgba(184,134,11,0.05))",
                      border: "1px solid rgba(184,134,11,0.2)",
                    }}
                  >
                    {v.icon}
                  </div>
                  <h3 className="text-[#F5F5DC] mb-3" style={{ fontSize: "1rem", fontWeight: 700 }}>
                    {v.title}
                  </h3>
                  <p className="text-[#F5F5DC]/50 text-sm leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Timeline ── */}
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[#B8860B] mb-3" style={{ fontSize: "0.75rem", letterSpacing: "0.3em" }}>
                ✦ مسيرتنا ✦
              </p>
              <h2
                className="text-[#F5F5DC]"
                style={{
                  fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
                  fontWeight: 800,
                  fontFamily: "'Tajawal', 'IBM Plex Sans Arabic', sans-serif",
                }}
              >
                محطات مضيئة
              </h2>
              <div
                className="mx-auto mt-4"
                style={{
                  width: 70,
                  height: 2,
                  background: "linear-gradient(90deg, transparent, #B8860B, transparent)",
                }}
              />
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute right-[28px] top-0 bottom-0 w-px bg-gradient-to-b from-[#B8860B]/60 via-[#B8860B]/20 to-transparent" />

              <div className="space-y-7">
                {milestones.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-6 pr-16 relative"
                  >
                    {/* Dot */}
                    <div className="absolute right-5 top-2 w-6 h-6 rounded-full bg-[#0f0f0f] border-2 border-[#B8860B] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#B8860B]" />
                    </div>

                    <div
                      className="p-4 rounded-xl flex-1 group hover:border-[#B8860B]/30 transition-all duration-300"
                      style={{
                        background: "rgba(25,20,8,0.4)",
                        border: "1px solid rgba(184,134,11,0.12)",
                      }}
                    >
                      <span
                        className="gold-gradient-text block mb-1.5"
                        style={{ fontSize: "0.8rem", fontWeight: 800, letterSpacing: "0.1em" }}
                      >
                        {m.year}
                      </span>
                      <p className="text-[#F5F5DC]/70 text-sm leading-relaxed">{m.event}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Team ── */}
        <section
          className="py-20 px-4"
          style={{ background: "linear-gradient(180deg, #0d0b04 0%, #0f0f0f 100%)" }}
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[#B8860B] mb-3" style={{ fontSize: "0.75rem", letterSpacing: "0.3em" }}>
                ✦ خبراء الضيافة ✦
              </p>
              <h2
                className="text-[#F5F5DC]"
                style={{
                  fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
                  fontWeight: 800,
                  fontFamily: "'Tajawal', 'IBM Plex Sans Arabic', sans-serif",
                }}
              >
                فريق القيادة
              </h2>
              <div
                className="mx-auto mt-4"
                style={{
                  width: 70,
                  height: 2,
                  background: "linear-gradient(90deg, transparent, #B8860B, transparent)",
                }}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {team.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="text-center group"
                >
                  <div
                    className="relative w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden transition-all duration-400"
                    style={{
                      border: "2px solid rgba(184,134,11,0.25)",
                      boxShadow: "0 0 0 0 rgba(184,134,11,0.3)",
                    }}
                  >
                    <ImageWithFallback
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-[#F5F5DC]" style={{ fontSize: "1rem", fontWeight: 700 }}>
                    {member.name}
                  </h3>
                  <p className="text-[#B8860B]/70 text-sm mt-1">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Certifications ── */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-[#B8860B] mb-3" style={{ fontSize: "0.75rem", letterSpacing: "0.3em" }}>
              ✦ موثوقيتنا ✦
            </p>
            <h2
              className="text-[#F5F5DC] mb-10"
              style={{
                fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
                fontWeight: 800,
                fontFamily: "'Tajawal', 'IBM Plex Sans Arabic', sans-serif",
              }}
            >
              شهادات وإنجازات
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: "🏆", title: "ISO 9001:2015", sub: "شهادة الجودة العالمية" },
                { icon: "⭐", title: "شهادة التميز", sub: "التميز السعودي 2024" },
                { icon: "🤝", title: "الغرفة التجارية", sub: "عضو فاعل" },
                { icon: "🇸🇦", title: "شريك رؤية 2030", sub: "معتمد رسمياً" },
              ].map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 rounded-2xl card-luxury"
                >
                  <div className="text-3xl mb-3">{cert.icon}</div>
                  <p className="text-[#B8860B] text-sm font-bold mb-1">{cert.title}</p>
                  <p className="text-[#F5F5DC]/45 text-xs">{cert.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
