import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { PageSEO } from "../components/Layout";

const WA = "966535636933";

const heroImg =
  "https://images.unsplash.com/photo-1749517841197-76792f2b0cd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800";
const coffeeImg =
  "https://images.unsplash.com/photo-1670351230643-27f874d17025?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";
const cateringImg =
  "https://images.unsplash.com/photo-1764380746366-f4d8cc52e1e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";
const teaImg =
  "https://images.unsplash.com/photo-1667305200758-fae1f7586b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";
const eventImg =
  "https://images.unsplash.com/photo-1740131006875-52c21f216e7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";
const waiterImg =
  "https://images.unsplash.com/photo-1770739576489-cd201676b898?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";
const equipImg =
  "https://images.unsplash.com/photo-1771830933605-ffbae3e3d1b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";
const portfolioImg =
  "https://images.unsplash.com/photo-1764358868789-400fb3d39fb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";
const kitchenImg =
  "https://images.unsplash.com/photo-1685990063942-6cd34a1e0065?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";
const datesImg =
  "https://images.unsplash.com/photo-1733594113118-add313effd2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";
const foodImg =
  "https://images.unsplash.com/photo-1667185486143-a2d5609f5229?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";

type FilterType = "all" | "events" | "hospitality" | "food" | "behind";

const projects = [
  { id: 1, img: portfolioImg, title: "حفل أرامكو السعودية السنوي", desc: "ضيافة فاخرة بحضور +٥٠٠ ضيف", category: "events" as FilterType, tags: ["حفلات كبرى", "شركات"] },
  { id: 2, img: coffeeImg, title: "حفل قهوة تراثي أصيل", desc: "عرض صب القهوة بالطريقة التقليدية الأصيلة", category: "hospitality" as FilterType, tags: ["قهوة", "تراثي"] },
  { id: 3, img: eventImg, title: "حفل زفاف فاخر", desc: "ضيافة متكاملة بمنطقة الرياض", category: "events" as FilterType, tags: ["زفاف", "رياض"] },
  { id: 4, img: cateringImg, title: "مؤتمر رجال الأعمال الدولي", desc: "تجهيز وضيافة متميزة للمستثمرين", category: "events" as FilterType, tags: ["مؤتمرات", "أعمال"] },
  { id: 5, img: teaImg, title: "جلسة شاي فاخرة", desc: "تقديم الشاي الفاخر بأسلوب إبداعي", category: "food" as FilterType, tags: ["شاي", "نسائي"] },
  { id: 6, img: waiterImg, title: "خدمة الضيافة الرجالية", desc: "فريق المضيفين في حفل ملكي", category: "hospitality" as FilterType, tags: ["خدمة", "رجالي"] },
  { id: 7, img: kitchenImg, title: "خلف الكواليس - التجهيز", desc: "لحظات التحضير قبل فعاليات الكبرى", category: "behind" as FilterType, tags: ["كواليس", "تحضير"] },
  { id: 8, img: datesImg, title: "تقديمات التمر الفاخرة", desc: "أرقى أنواع التمر في عروض استثنائية", category: "food" as FilterType, tags: ["تمر", "فاخر"] },
  { id: 9, img: equipImg, title: "معدات التقديم الذهبية", desc: "أرقى المعدات في الفعاليات الملكية", category: "food" as FilterType, tags: ["معدات", "ذهبي"] },
  { id: 10, img: heroImg, title: "تقديمات موسم الرياض", desc: "مشاركتنا في موسم الرياض الكبير", category: "events" as FilterType, tags: ["موسم الرياض", "فعاليات"] },
  { id: 11, img: foodImg, title: "الحلويات الفاخرة", desc: "عروض الحلويات والشوكولاتة البلجيكية", category: "food" as FilterType, tags: ["حلويات", "شوكولاتة"] },
  { id: 12, img: portfolioImg, title: "حفل حكومي رسمي", desc: "ضيافة بحضور كبار المسؤولين", category: "events" as FilterType, tags: ["حكومي", "رسمي"] },
];

const filters: { id: FilterType; label: string; icon: string }[] = [
  { id: "all", label: "الكل", icon: "◻" },
  { id: "events", label: "الفعاليات", icon: "◈" },
  { id: "hospitality", label: "الضيافة", icon: "☕" },
  { id: "food", label: "التقديمات", icon: "✦" },
  { id: "behind", label: "خلف الكواليس", icon: "◇" },
];

function PortfolioItem({ project }: { project: (typeof projects)[0] }) {
  const [pressed, setPressed] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const pressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseDown = () => {
    pressTimer.current = setTimeout(() => {
      setPressed(true);
      setShowDetail(true);
    }, 400);
  };
  const handleMouseUp = () => {
    if (pressTimer.current) clearTimeout(pressTimer.current);
    setPressed(false);
  };
  const handleTouchStart = () => {
    pressTimer.current = setTimeout(() => {
      setPressed(true);
      setShowDetail(true);
    }, 400);
  };
  const handleTouchEnd = () => {
    if (pressTimer.current) clearTimeout(pressTimer.current);
    setPressed(false);
  };

  useEffect(() => () => { if (pressTimer.current) clearTimeout(pressTimer.current); }, []);

  return (
    <>
      <motion.div
        className="relative rounded-2xl overflow-hidden cursor-pointer group mb-4"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        whileHover={{ scale: 1.015 }}
        animate={pressed ? { scale: 0.96 } : {}}
        onClick={() => setShowDetail(true)}
        style={{ border: "1px solid rgba(184,134,11,0.08)" }}
      >
        <ImageWithFallback
          src={project.img}
          alt={project.title}
          className="w-full object-cover transition-transform duration-600 group-hover:scale-108"
          loading="lazy"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/95 via-[#0f0f0f]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-350" />
        {/* Content on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-350">
          <h3 className="text-[#F5F5DC]" style={{ fontSize: "0.9rem", fontWeight: 700 }}>
            {project.title}
          </h3>
          <div className="flex gap-1 mt-1.5 flex-wrap">
            {project.tags.map((t) => (
              <span
                key={t}
                className="text-[#B8860B] px-2 py-0.5 rounded-full"
                style={{ fontSize: "0.6rem", background: "rgba(10,8,2,0.8)", border: "1px solid rgba(184,134,11,0.3)" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        {/* Long press indicator */}
        {pressed && (
          <div className="absolute inset-0 flex items-center justify-center bg-[#B8860B]/15">
            <div className="text-[#B8860B] text-3xl">✦</div>
          </div>
        )}
      </motion.div>

      {/* Detail Modal */}
      <AnimatePresence>
        {showDetail && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
            onClick={() => setShowDetail(false)}
          >
            <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="relative w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl overflow-hidden"
              style={{
                background: "linear-gradient(160deg, #1a1508 0%, #0f0f0f 100%)",
                border: "1px solid rgba(184,134,11,0.25)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sm:hidden w-10 h-1 bg-[#B8860B]/30 rounded-full mx-auto mt-4" />
              <div className="relative h-56">
                <ImageWithFallback
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to bottom, transparent 40%, #0f0f0f 100%)" }}
                />
                <button
                  onClick={() => setShowDetail(false)}
                  className="absolute top-4 left-4 w-9 h-9 rounded-full flex items-center justify-center text-[#F5F5DC]/60 hover:text-[#B8860B] transition-colors"
                  style={{ background: "rgba(10,8,2,0.85)", border: "1px solid rgba(184,134,11,0.25)" }}
                >
                  ✕
                </button>
              </div>
              <div className="p-6">
                <div className="flex gap-2 flex-wrap mb-3">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-[#B8860B]"
                      style={{ fontSize: "0.65rem", background: "rgba(184,134,11,0.08)", border: "1px solid rgba(184,134,11,0.25)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h2 className="text-[#F5F5DC] mb-2" style={{ fontSize: "1.25rem", fontWeight: 800 }}>
                  {project.title}
                </h2>
                <p className="text-[#F5F5DC]/55 text-sm leading-relaxed mb-6">{project.desc}</p>
                <a
                  href={`https://wa.me/${WA}?text=${encodeURIComponent("مرحباً، رأيت أعمالكم وأود الاستفسار عن خدمات الضيافة لديكم.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl text-[#0f0f0f] transition-all duration-300 hover:shadow-lg hover:shadow-[#B8860B]/25 hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(135deg, #B8860B, #D4A017)", fontWeight: 800, fontSize: "0.9rem" }}
                >
                  احجز خدمة مماثلة
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filtered =
    activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <PageSEO
        title="معرض أعمالنا | كيف الضيافة - لحظات الفخامة"
        desc="استعرض معرض أعمال كيف الضيافة - مئات المناسبات الفاخرة من حفلات الزفاف إلى الفعاليات الحكومية في المملكة."
      />

      <div className="pt-24 pb-32 min-h-screen">
        {/* ── Header ── */}
        <div className="relative py-16 px-4 text-center overflow-hidden">
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(184,134,11,0.1) 0%, transparent 65%)" }}
          />
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            <p className="text-[#B8860B] mb-3" style={{ fontSize: "0.75rem", letterSpacing: "0.35em" }}>
              ✦ الدليل البصري ✦
            </p>
            <h1
              className="text-[#F5F5DC] mb-4"
              style={{
                fontSize: "clamp(2.2rem, 7vw, 3.5rem)",
                fontWeight: 900,
                fontFamily: "'Tajawal', 'IBM Plex Sans Arabic', sans-serif",
              }}
            >
              معرض أعمالنا
            </h1>
            <div
              className="mx-auto mb-5"
              style={{ width: 80, height: 2, background: "linear-gradient(90deg, transparent, #B8860B, #D4A017, transparent)" }}
            />
            <p className="text-[#F5F5DC]/50 max-w-lg mx-auto text-sm leading-relaxed">
              لحظات من إبداعاتنا في عالم الضيافة الفاخرة — اضغط مطولاً لمعاينة أي صورة
            </p>
          </motion.div>
        </div>

        {/* ── Filters ── */}
        <div className="max-w-7xl mx-auto px-4 mb-8">
          <div className="flex gap-2 flex-wrap justify-center">
            {filters.map((f) => (
              <motion.button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm transition-all duration-300"
                style={{
                  background:
                    activeFilter === f.id
                      ? "linear-gradient(135deg, #B8860B, #D4A017)"
                      : "rgba(25,20,8,0.6)",
                  border:
                    activeFilter === f.id
                      ? "none"
                      : "1px solid rgba(184,134,11,0.18)",
                  color: activeFilter === f.id ? "#0f0f0f" : "rgba(245,245,220,0.55)",
                  fontWeight: activeFilter === f.id ? 700 : 400,
                  boxShadow: activeFilter === f.id ? "0 4px 15px rgba(184,134,11,0.3)" : "none",
                }}
              >
                <span className="text-xs">{f.icon}</span>
                <span>{f.label}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* ── Masonry Grid ── */}
        <div className="max-w-7xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ResponsiveMasonry columnsCountBreakPoints={{ 320: 2, 750: 3, 1100: 4 }}>
                <Masonry>
                  {filtered.map((project) => (
                    <PortfolioItem key={project.id} project={project} />
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── CTA ── */}
        <div className="max-w-2xl mx-auto px-4 mt-14 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl"
            style={{
              background: "linear-gradient(135deg, rgba(25,20,8,0.7), rgba(15,12,5,0.9))",
              border: "1px solid rgba(184,134,11,0.18)",
            }}
          >
            <p className="text-[#B8860B] mb-3" style={{ fontSize: "0.75rem", letterSpacing: "0.3em" }}>
              ✦ انضم إلى قائمة عملائنا ✦
            </p>
            <h3 className="text-[#F5F5DC] mb-4" style={{ fontSize: "1.3rem", fontWeight: 800 }}>
              هل تريد مناسبتك في معرضنا؟
            </h3>
            <p className="text-[#F5F5DC]/50 text-sm mb-6">
              تواصل معنا الآن ودعنا نحوّل مناسبتك إلى لحظة فخامة خالدة
            </p>
            <a
              href={`https://wa.me/${WA}?text=${encodeURIComponent("مرحباً، أود حجز خدمات الضيافة لديكم.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl text-[#0f0f0f] transition-all duration-300 hover:shadow-xl hover:shadow-[#B8860B]/25 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #B8860B, #D4A017)",
                fontWeight: 800,
                boxShadow: "0 4px 20px rgba(184,134,11,0.3)",
              }}
            >
              احجز الآن عبر واتساب
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
}
