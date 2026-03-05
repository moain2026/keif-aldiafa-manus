import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { PageSEO } from "../components/Layout";

const WA = "966535636933";

const coffeeImg =
  "https://images.unsplash.com/photo-1670351230643-27f874d17025?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";
const teaImg =
  "https://images.unsplash.com/photo-1667305200758-fae1f7586b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";
const heroImg =
  "https://images.unsplash.com/photo-1749517841197-76792f2b0cd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";
const equipImg =
  "https://images.unsplash.com/photo-1771830933605-ffbae3e3d1b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";
const datesImg =
  "https://images.unsplash.com/photo-1733594113118-add313effd2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";
const foodImg =
  "https://images.unsplash.com/photo-1667185486143-a2d5609f5229?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";

const categories = [
  {
    id: "hot",
    label: "مشروبات حارة",
    icon: "☕",
    desc: "قهوة سعودية أصيلة وشاي فاخر",
    items: [
      { name: "القهوة السعودية", desc: "بهارات مميزة وأصالة سعودية أصيلة", img: coffeeImg },
      { name: "القهوة العربية", desc: "بالهيل والزعفران الإيراني", img: heroImg },
      { name: "الشاي الكرك", desc: "بالحليب الطازج والبهارات", img: teaImg },
      { name: "الشاي الأخضر", desc: "بالنعناع الطازج والعود", img: teaImg },
    ],
  },
  {
    id: "cold",
    label: "مشروبات باردة",
    icon: "🧊",
    desc: "مشروبات منعشة وطبيعية",
    items: [
      { name: "عصير الليمون", desc: "بالنعناع الطازج - منعش", img: heroImg },
      { name: "عصائر الفواكه الطازجة", desc: "تشكيلة متنوعة موسمية", img: coffeeImg },
      { name: "مشروبات فاخرة مثلجة", desc: "بنكهات متعددة", img: teaImg },
    ],
  },
  {
    id: "dates",
    label: "تمر فاخر",
    icon: "🌴",
    desc: "أجود أنواع التمر السعودي",
    items: [
      { name: "تمر مجدول أصيل", desc: "أجود أنواع التمر السعودي", img: datesImg },
      { name: "تمر بالمكسرات", desc: "محشو بالجوز والبادام الطازج", img: datesImg },
      { name: "تمر بشوكولاتة بلجيكية", desc: "مكسو بأجود شوكولاتة بلجيكية", img: foodImg },
      { name: "صواني التمر الفاخرة", desc: "تشكيلات راقية للمناسبات", img: datesImg },
    ],
  },
  {
    id: "sweets",
    label: "حلويات راقية",
    icon: "🍫",
    desc: "أرقى الحلويات والشوكولاتة",
    items: [
      { name: "شوكولاتة بلجيكية فاخرة", desc: "تشكيلة من أجود الأنواع", img: foodImg },
      { name: "معمول مميز", desc: "بالتمر والمكسرات الفاخرة", img: coffeeImg },
      { name: "كنافة نابلسية", desc: "بعجينة الكنافة الأصيلة", img: teaImg },
      { name: "بسبوسة فاخرة", desc: "بطعم البلح والقشطة الطبيعية", img: heroImg },
    ],
  },
  {
    id: "pastry",
    label: "معجنات",
    icon: "🥐",
    desc: "معجنات طازجة يومياً",
    items: [
      { name: "سمبوسة فاخرة", desc: "بحشوات متنوعة طازجة", img: coffeeImg },
      { name: "كروسان بالجبن", desc: "طازج ومقرمش يومياً", img: heroImg },
      { name: "مناقيش زعتر", desc: "على الطريقة الشامية الأصيلة", img: teaImg },
    ],
  },
  {
    id: "equipment",
    label: "معدات التقديم",
    icon: "✨",
    desc: "دلال وأطقم فاخرة",
    items: [
      { name: "دلال ذهبية فاخرة", desc: "لتقديم القهوة بأسلوب ملكي", img: equipImg },
      { name: "أطقم قهوة بورسلين", desc: "مزخرفة بتصاميم عربية راقية", img: heroImg },
      { name: "صوانٍ فضية فاخرة", desc: "لتقديم التمر والحلويات", img: coffeeImg },
    ],
  },
];

export function OfferingsPage() {
  const [activeCategory, setActiveCategory] = useState("hot");
  const [selectedItem, setSelectedItem] = useState<null | {
    name: string;
    desc: string;
    img: string;
  }>(null);

  const currentCategory = categories.find((c) => c.id === activeCategory)!;

  return (
    <>
      <PageSEO
        title="تقديماتنا | كيف الضيافة - قهوة وشاي وحلويات فاخرة"
        desc="تشكيلة واسعة من أرقى التقديمات - قهوة سعودية، شاي، تمر فاخر، حلويات ومعجنات لمناسباتكم الفاخرة."
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
              ✦ أرقى التقديمات ✦
            </p>
            <h1
              className="text-[#F5F5DC] mb-4"
              style={{
                fontSize: "clamp(2.2rem, 7vw, 3.5rem)",
                fontWeight: 900,
                fontFamily: "'Tajawal', 'IBM Plex Sans Arabic', sans-serif",
              }}
            >
              تقديماتنا وتوزيعاتنا
            </h1>
            <div
              className="mx-auto mb-5"
              style={{ width: 80, height: 2, background: "linear-gradient(90deg, transparent, #B8860B, #D4A017, transparent)" }}
            />
            <p className="text-[#F5F5DC]/50 max-w-lg mx-auto text-sm leading-relaxed">
              تشكيلة واسعة من أرقى المشروبات والحلويات والتقديمات لإضفاء لمسة مميزة على مناسباتكم
            </p>
          </motion.div>
        </div>

        {/* ── Category Tabs ── */}
        <div className="max-w-7xl mx-auto px-4 mb-10">
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm transition-all duration-300"
                style={{
                  background:
                    activeCategory === cat.id
                      ? "linear-gradient(135deg, #B8860B, #D4A017)"
                      : "rgba(25,20,8,0.6)",
                  border:
                    activeCategory === cat.id
                      ? "none"
                      : "1px solid rgba(184,134,11,0.15)",
                  color: activeCategory === cat.id ? "#0f0f0f" : "rgba(245,245,220,0.55)",
                  fontWeight: activeCategory === cat.id ? 700 : 400,
                  boxShadow: activeCategory === cat.id ? "0 4px 15px rgba(184,134,11,0.3)" : "none",
                }}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </motion.button>
            ))}
          </div>
          {/* Category description */}
          <AnimatePresence mode="wait">
            <motion.p
              key={activeCategory}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center text-[#B8860B]/60 text-xs mt-4"
              style={{ letterSpacing: "0.1em" }}
            >
              {currentCategory.desc}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* ── Items Grid ── */}
        <div className="max-w-7xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {currentCategory.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.93 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setSelectedItem(item)}
                  className="rounded-2xl overflow-hidden cursor-pointer group card-luxury"
                >
                  <div className="relative overflow-hidden" style={{ aspectRatio: "1/1" }}>
                    <ImageWithFallback
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 img-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex items-center justify-center">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-[#B8860B]"
                        style={{ background: "rgba(10,8,2,0.8)", border: "1px solid rgba(184,134,11,0.4)" }}
                      >
                        <span className="text-lg">✦</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="text-[#F5F5DC]" style={{ fontSize: "0.85rem", fontWeight: 700 }}>
                      {item.name}
                    </h3>
                    <p className="text-[#F5F5DC]/45 text-xs mt-0.5 line-clamp-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── Item Detail Modal ── */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
              onClick={() => setSelectedItem(null)}
            >
              <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100%", opacity: 0 }}
                transition={{ type: "spring", damping: 28, stiffness: 280 }}
                className="relative w-full sm:max-w-sm rounded-t-3xl sm:rounded-3xl overflow-hidden"
                style={{
                  background: "linear-gradient(160deg, #1a1508 0%, #0f0f0f 100%)",
                  border: "1px solid rgba(184,134,11,0.25)",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sm:hidden w-10 h-1 bg-[#B8860B]/30 rounded-full mx-auto mt-4" />
                <div className="relative h-52">
                  <ImageWithFallback
                    src={selectedItem.img}
                    alt={selectedItem.name}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(to bottom, transparent 30%, #0f0f0f 100%)" }}
                  />
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-4 left-4 w-9 h-9 rounded-full flex items-center justify-center text-[#F5F5DC]/60 hover:text-[#B8860B] transition-colors"
                    style={{ background: "rgba(10,8,2,0.85)", border: "1px solid rgba(184,134,11,0.25)" }}
                  >
                    ✕
                  </button>
                </div>
                <div className="p-6">
                  <h2 className="text-[#F5F5DC] mb-2" style={{ fontSize: "1.3rem", fontWeight: 800 }}>
                    {selectedItem.name}
                  </h2>
                  <p className="text-[#F5F5DC]/55 text-sm mb-6 leading-relaxed">
                    {selectedItem.desc}
                  </p>
                  <a
                    href={`https://wa.me/${WA}?text=${encodeURIComponent(`مرحباً، أود الاستفسار عن ${selectedItem.name}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl text-[#0f0f0f] transition-all duration-300 hover:shadow-lg hover:shadow-[#B8860B]/25 hover:-translate-y-0.5"
                    style={{ background: "linear-gradient(135deg, #B8860B, #D4A017)", fontWeight: 800, fontSize: "0.9rem" }}
                  >
                    استفسر عن هذا المنتج
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
