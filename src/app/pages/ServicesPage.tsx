import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { PageSEO } from "../components/Layout";

const WA = "966535636933";

/* ── Service Images ── */
const MALE_WAITER   = "https://images.unsplash.com/photo-1610845325460-493f99d21de9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900";
const ZAMZAM_IMG    = "https://images.unsplash.com/photo-1667305200758-fae1f7586b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900";
const BUTLER_IMG    = "https://images.unsplash.com/photo-1770739576489-cd201676b898?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900";
const PHOTO_ASST    = "https://images.unsplash.com/photo-1699413326258-07410efc467b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900";
const HOSTESS_IMG   = "https://images.unsplash.com/photo-1734314019859-1dd670248657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900";
const CALLIG_IMG    = "https://images.unsplash.com/photo-1605045183614-f7cb133de551?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900";
const ARTIST_IMG    = "https://images.unsplash.com/photo-1768726134675-54f289eff496?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900";
const FOLKBAND_IMG  = "https://images.unsplash.com/photo-1609332019377-c1d7744e0756?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900";
const TENT_IMG      = "https://images.unsplash.com/photo-1763544376867-7ad4e9e366cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900";
const COUNTER_IMG   = "https://images.unsplash.com/photo-1762417691650-f2e4bcca7eaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900";
const BOOTH_IMG     = "https://images.unsplash.com/photo-1627580158782-ecd7b8a16326?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900";
const BUFFET_IMG    = "https://images.unsplash.com/photo-1771154139725-f2b0b4891430?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900";
const MOB_TABLE     = "https://images.unsplash.com/photo-1724054084185-f0c92d629321?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900";

/* ── Outfit Images (real photos) ── */
const O_BLACK_SUIT  = "https://images.unsplash.com/photo-1592878897400-43fb1f1cc324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";
const O_TRAD_SAUDI  = "https://images.unsplash.com/photo-1756412066323-a336d2becc10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";
const O_NAVY_SUIT   = "https://images.unsplash.com/photo-1686628178426-74522bc5bc4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";
const O_BISHT       = "https://images.unsplash.com/photo-1756412066366-b46dafaca253?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";
const O_WHITE_THOBE = "https://images.unsplash.com/photo-1658066830454-619ebe6312a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";
const O_WHITE_WAITER= "https://images.unsplash.com/photo-1602810317536-5d5e8a552d15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";
const O_CAM_CREW    = "https://images.unsplash.com/photo-1587189831394-b8b29791508a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";
const O_BLACK_ABAYA = "https://images.unsplash.com/photo-1752794966299-1fd0ccade152?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";
const O_GULF_DRESS  = "https://images.unsplash.com/photo-1669075067061-30a7ef9528e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";
const O_PURPLE_GOWN = "https://images.unsplash.com/photo-1765229277058-177cd0dead2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";
const O_EMBR_DRESS  = "https://images.unsplash.com/photo-1703001523704-e6a9d32b3067?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";

/* ── Types ── */
interface OutfitItem {
  name: string;
  img: string;   // صورة حقيقية للزي
}

interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  description: string;
  features: string[];
  outfits: OutfitItem[];
}

interface ServiceCategory {
  id: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
  color: string;
  services: ServiceItem[];
}

/* ── Tab Icons ── */
const MaleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
  </svg>
);
const FemaleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <circle cx="12" cy="8" r="4" />
    <path strokeLinecap="round" d="M8 14c-3 1-4 3-4 5h16c0-2-1-4-4-5" />
  </svg>
);
const ArtIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
  </svg>
);

/* ── Categories Data ── */
const categories: ServiceCategory[] = [
  {
    id: "male",
    label: "الخدمات الرجالية",
    sublabel: "Male Hospitality",
    icon: <MaleIcon />,
    color: "#B8860B",
    services: [
      {
        id: "hosts",
        title: "مضيفون",
        subtitle: "Hosts",
        img: MALE_WAITER,
        description: "فريق من المضيفين المحترفين المدربين على أعلى مستوى، يرتدون أزياء رسمية وتقليدية مصممة خصيصاً تعكس هوية كيف الضيافة وتضفي طابعاً مميزاً على المناسبة.",
        features: [
          "أزياء كلاسيكية فاخرة بتصميم خاص",
          "زي تراثي سعودي أصيل",
          "زي رسمي أنيق لحفلات الأعمال",
          "تقديم القهوة السعودية والشاي بأسلوب أصيل",
          "استقبال وتوجيه الضيوف باحترافية",
          "مدربون على آداب الضيافة الدولية",
        ],
        outfits: [
          { name: "الزي الكلاسيكي الفاخر", img: O_BLACK_SUIT },
          { name: "الزي التراثي الأصيل",   img: O_TRAD_SAUDI },
          { name: "الزي الرسمي الأنيق",    img: O_NAVY_SUIT  },
          { name: "البشت التراثي المميز",   img: O_BISHT      },
        ],
      },
      {
        id: "zamzam",
        title: "سقيا زمزم",
        subtitle: "Zamzam Water Service",
        img: ZAMZAM_IMG,
        description: "خدمة سقيا زمزم المتميزة بأزياء خاصة تليق بمكانة هذه الخدمة المباركة، مع طريقة تقديم راقية تجمع بين الأصالة والاحترافية، مناسبة للمناسبات والحفلات الدينية والرسمية.",
        features: [
          "أزياء مميزة لمقدمي الخدمة",
          "أدوات تقديم فضية وذهبية فاخرة",
          "طريقة تقديم أصيلة ومحترمة",
          "مناسب للمناسبات الدينية والعائلية",
          "خدمة طاولات الضيوف بأسلوب هادئ",
        ],
        outfits: [
          { name: "الزي الأبيض الناصع",    img: O_WHITE_THOBE  },
          { name: "الزي التراثي المعتدل",  img: O_WHITE_WAITER },
        ],
      },
      {
        id: "safarjia",
        title: "خدمات السفرجيه",
        subtitle: "Safarjieh Services",
        img: BUTLER_IMG,
        description: "خدمة السفرجيه المتكاملة بأزياء احترافية تعكس مستوى الفخامة المطلوب، مع تدريب متقدم على أعلى معايير الخدمة الراقية وخدمة الطاولات في المناسبات الكبرى.",
        features: [
          "أزياء سفرجي احترافية بتفاصيل فاخرة",
          "خدمة طاولات بأسلوب المطاعم الراقية",
          "إعداد وتجهيز مائدة الطعام",
          "تقديم الوجبات والمشروبات بأناقة",
          "التنسيق مع طاقم المطبخ وإدارة الفعالية",
          "مؤهلون لخدمة كبار الشخصيات والوفود الرسمية",
        ],
        outfits: [
          { name: "البدلة السوداء الكلاسيكية", img: O_BLACK_SUIT  },
          { name: "الزي الأبيض الرسمي",        img: O_WHITE_WAITER},
          { name: "البدلة الرسمية الكحلية",     img: O_NAVY_SUIT   },
        ],
      },
      {
        id: "sawas",
        title: "سواس صور",
        subtitle: "Photography Assistants",
        img: PHOTO_ASST,
        description: "فريق متخصص في مساعدة المصورين وإدارة جلسات التصوير في المناسبات، مع توفير التنظيم الكامل للضيوف أمام الكاميرا، وإضافة لمسات جمالية لالتقاط اللحظات المميزة.",
        features: [
          "إدارة وتنظيم جلسات التصوير",
          "توجيه الضيوف للحصول على أفضل لقطة",
          "التنسيق مع فريق التصوير المتعاقد",
          "معالجة بيانات الصور وتنظيمها",
          "إعداد ألبومات رقمية للمناسبة",
        ],
        outfits: [
          { name: "الزي الأسود المريح",    img: O_CAM_CREW  },
          { name: "الزي الرسمي المناسب",   img: O_NAVY_SUIT },
        ],
      },
    ],
  },
  {
    id: "female",
    label: "الخدمات النسائية",
    sublabel: "Female Hospitality",
    icon: <FemaleIcon />,
    color: "#C49A3C",
    services: [
      {
        id: "hostesses",
        title: "مضيفات",
        subtitle: "Hostesses",
        img: HOSTESS_IMG,
        description: "مضيفات متميزات يجمعن بين الأناقة والاحتشام في أزياء راقية تعكس هوية كيف الضيافة، مدربات على تقديم تجربة ضيافة لا تُنسى في المناسبات النسائية والفعاليات الفاخرة بخصوصية تامة.",
        features: [
          "عباءات فاخرة كلاسيكية بتصميم خاص",
          "أزياء خليجية أنيقة ومحتشمة",
          "زي رسمي راقٍ لحفلات الأعمال",
          "تقديم المشروبات والحلويات الفاخرة",
          "استقبال وتوجيه الضيفات بأسلوب راقٍ",
          "تدريب متقدم على التميز في الخدمة",
          "خصوصية تامة في البيئات النسائية",
        ],
        outfits: [
          { name: "العباءة الفاخرة الكلاسيكية", img: O_BLACK_ABAYA },
          { name: "الزي الخليجي الأنيق",         img: O_GULF_DRESS  },
          { name: "الزي الرسمي الراقي",           img: O_PURPLE_GOWN },
          { name: "الزي الفاخر المطرز",           img: O_EMBR_DRESS  },
        ],
      },
    ],
  },
  {
    id: "artistic",
    label: "خدمات فنية وأخرى",
    sublabel: "Artistic & Extra Services",
    icon: <ArtIcon />,
    color: "#D4A017",
    services: [
      {
        id: "calligrapher",
        title: "خطاط",
        subtitle: "Calligrapher",
        img: CALLIG_IMG,
        description: "خطاط محترف يضفي لمسة فنية راقية على مناسبتك بكتابة بطاقات الدعوة والترحيب وأسماء الضيوف بخط عربي أصيل وجميل يجمع بين التراث والفن المعاصر.",
        features: [
          "كتابة بطاقات الدعوة بخط عربي أصيل",
          "لوحات ترحيب بأسماء الضيوف",
          "تصميم بطاقات مقاعد المائدة",
          "كتابة الإهداءات والتهاني",
          "خط ديواني، نسخ، ثلث وكوفي",
          "عرض مباشر أمام الضيوف",
        ],
        outfits: [],
      },
      {
        id: "artist",
        title: "رسام / رسامة",
        subtitle: "Live Artist",
        img: ARTIST_IMG,
        description: "رسام أو رسامة محترف يقدم عروض رسم حية مبهرة في المناسبات، رسم بورتريهات للضيوف أو لوحات فنية ذكرى تجعل مناسبتك تجربة إبداعية فريدة.",
        features: [
          "رسم بورتريهات فنية للضيوف",
          "لوحات تذكارية للمناسبة",
          "عروض رسم رقمي تفاعلي",
          "رسوم بالألوان المائية والزيتية",
          "شخصنة كاملة حسب ثيم المناسبة",
        ],
        outfits: [],
      },
      {
        id: "folkband",
        title: "فرقة شعبية",
        subtitle: "Folk Band",
        img: FOLKBAND_IMG,
        description: "فرقة شعبية تراثية تحيي المناسبات بعروض موسيقية وفنية أصيلة تعكس التراث السعودي العريق، وتضيف أجواء احتفالية لا تُنسى لأعراسك وحفلاتك.",
        features: [
          "عروض العرضة السعودية التراثية",
          "فرقة طبل وزامل وسامري",
          "مجموعات المزمار والرقص الشعبي",
          "استقبال الضيوف بالأناشيد التراثية",
          "عروض مخصصة حسب المنطقة والمناسبة",
        ],
        outfits: [],
      },
      {
        id: "heritage-tent",
        title: "خيمة تراثية استقبال",
        subtitle: "Heritage Reception Tent",
        img: TENT_IMG,
        description: "خيمة استقبال تراثية فاخرة مجهزة بالكامل بالفرش والديكورات الأصيلة، تخلق أجواء استقبال عربية أثيلة تنقل ضيوفك إلى عالم من الفخامة والأصالة.",
        features: [
          "خيمة تراثية بأقمشة فاخرة",
          "فرش سدو وعربي أصيل",
          "إضاءة مميزة داخل الخيمة",
          "ديكورات تراثية متكاملة",
          "إعداد وتجهيز كامل",
          "مناسب للأعراس والمهرجانات",
        ],
        outfits: [],
      },
      {
        id: "counter",
        title: "كونتر ضيافة استقبال",
        subtitle: "Hospitality Counter",
        img: COUNTER_IMG,
        description: "تصاميم عصرية وكلاسيكية لكونترات الاستقبال الفاخرة تجمع الجمال والوظيفية، مع تجهيز كامل وطاقم متخصص لاستقبال الضيوف وتوجيههم.",
        features: [
          "تصاميم كونتر عصرية وكلاسيكية",
          "مواد فاخرة: رخام، كريستال، ذهبي",
          "تخصيص التصميم حسب ثيم المناسبة",
          "طاقم استقبال محترف",
          "تشمل: لافتة الترحيب وأدوات التسجيل",
        ],
        outfits: [],
      },
      {
        id: "photo-booth",
        title: "فوت بوث",
        subtitle: "Photo Booth",
        img: BOOTH_IMG,
        description: "ركن تصوير تفاعلي مميز للضيوف مجهز بأحدث الكاميرات وأجمل الديكورات، يوفر طباعة فورية للصور مع شعار المناسبة ويضيف جواً من المرح والذكريات.",
        features: [
          "كاميرا احترافية عالية الجودة",
          "طباعة فورية للصور",
          "خلفيات متعددة وقابلة للتخصيص",
          "إكسسوارات تصوير متنوعة وأنيقة",
          "تصميم الإطار بشعار المناسبة",
          "نسخ رقمية فورية على الواتساب",
        ],
        outfits: [],
      },
      {
        id: "buffet",
        title: "بوفيه مفتوحة",
        subtitle: "Open Buffet",
        img: BUFFET_IMG,
        description: "خدمة بوفيه مفتوحة متكاملة بأرقى تشكيلة من المأكولات السعودية والعالمية، مقدمة في أناقة وفخامة بأدوات تقديم راقية وعرض بصري مبهر.",
        features: [
          "تشكيلة واسعة من المأكولات السعودية",
          "وجبات عالمية متنوعة",
          "محطات طهي حية تفاعلية",
          "عرض بصري مبهر للأطباق",
          "طاقم خدمة وتجديد مستمر",
          "خيارات نباتية ومتخصصة",
        ],
        outfits: [],
      },
      {
        id: "mobile-table",
        title: "طاولة متنقلة",
        subtitle: "Mobile Serving Table",
        img: MOB_TABLE,
        description: "خدمة ضيافة متحركة تجلب المشروبات والمقبلات مباشرة للضيوف من خلال طاولات متنقلة أنيقة، مع فريق يتجول بين الضيوف لضمان تجربة ضيافة متواصلة.",
        features: [
          "تروليات وطاولات متنقلة أنيقة",
          "تقديم مستمر للمشروبات والقهوة",
          "خدمة شخصية مباشرة للضيوف",
          "مثالية للحفلات والمؤتمرات",
          "خيارات متعددة من التقديمات",
        ],
        outfits: [],
      },
    ],
  },
];

/* ══════════════════════════════════════
   SERVICE MODAL
══════════════════════════════════════ */
function ServiceModal({
  service,
  categoryColor,
  onClose,
}: {
  service: ServiceItem;
  categoryColor: string;
  onClose: () => void;
}) {
  // -1 = الصورة الأساسية للخدمة، 0+ = صورة الزي المختار
  const [activeOutfit, setActiveOutfit] = useState<number>(-1);

  const heroImg =
    activeOutfit >= 0 && service.outfits[activeOutfit]
      ? service.outfits[activeOutfit].img
      : service.img;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      {/* Panel */}
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ type: "spring", damping: 30, stiffness: 280 }}
        className="relative w-full sm:max-w-2xl rounded-t-3xl sm:rounded-3xl overflow-hidden"
        style={{
          background: "linear-gradient(170deg, #191407 0%, #0d0d0d 100%)",
          border: `1px solid ${categoryColor}28`,
          maxHeight: "93vh",
          overflowY: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drag Handle */}
        <div className="sm:hidden flex justify-center pt-3 pb-1">
          <div className="w-9 h-1 rounded-full" style={{ background: `${categoryColor}55` }} />
        </div>

        {/* ── Hero Image (تتغير عند اختيار الزي) ── */}
        <div className="relative overflow-hidden" style={{ height: "clamp(200px, 48vw, 300px)" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={heroImg}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <ImageWithFallback
                src={heroImg}
                alt={activeOutfit >= 0 ? service.outfits[activeOutfit].name : service.title}
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
          </AnimatePresence>

          {/* Bottom gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(13,13,13,1) 0%, rgba(13,13,13,0.45) 40%, transparent 100%)",
              pointerEvents: "none",
            }}
          />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 left-3 flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 hover:scale-110 active:scale-95"
            style={{
              background: "rgba(0,0,0,0.65)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.18)",
              color: "rgba(255,255,255,0.9)",
            }}
            aria-label="إغلاق"
          >
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-3.5 h-3.5">
              <path strokeLinecap="round" d="M2.5 2.5l11 11M13.5 2.5l-11 11" />
            </svg>
          </button>

          {/* Active outfit label chip */}
          <AnimatePresence>
            {activeOutfit >= 0 && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                className="absolute bottom-4 right-4 px-3 py-1 rounded-full text-xs"
                style={{
                  background: "rgba(0,0,0,0.72)",
                  backdropFilter: "blur(10px)",
                  border: `1px solid ${categoryColor}55`,
                  color: categoryColor,
                  fontWeight: 600,
                }}
              >
                ✦ {service.outfits[activeOutfit].name}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Content ── */}
        <div className="px-5 pt-4 pb-10">
          {/* Title block */}
          <p style={{ color: categoryColor, fontSize: "0.65rem", letterSpacing: "0.25em" }} className="mb-1">
            {service.subtitle}
          </p>
          <h2
            className="text-[#F5F5DC] mb-3"
            style={{ fontSize: "clamp(1.3rem, 5vw, 1.7rem)", fontWeight: 800, lineHeight: 1.2 }}
          >
            {service.title}
          </h2>
          <div
            className="rounded-full mb-4"
            style={{ width: 48, height: 1.5, background: `linear-gradient(90deg, ${categoryColor}, transparent)` }}
          />

          {/* Description */}
          <p className="text-[#F5F5DC]/60 text-sm leading-7 mb-6">{service.description}</p>

          {/* Features */}
          <p
            className="mb-3"
            style={{ color: categoryColor, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em" }}
          >
            ✦ ما نقدمه
          </p>
          <ul className="space-y-2.5 mb-7">
            {service.features.map((f, i) => (
              <li key={i} className="flex items-start gap-3">
                <div
                  className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: `${categoryColor}1A`, border: `1px solid ${categoryColor}40`, color: categoryColor }}
                >
                  <svg viewBox="0 0 16 16" fill="currentColor" className="w-2.5 h-2.5">
                    <path d="M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z" />
                  </svg>
                </div>
                <span className="text-[#F5F5DC]/65 text-sm leading-snug">{f}</span>
              </li>
            ))}
          </ul>

          {/* ── Outfit Thumbnails (صور حقيقية) ── */}
          {service.outfits.length > 0 && (
            <div className="mb-2">
              <p
                className="mb-3"
                style={{ color: categoryColor, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em" }}
              >
                ✦ الأزياء المتاحة — اضغط لمعاينة الزي
              </p>

              {/* Horizontal scroll row */}
              <div
                className="flex gap-3 overflow-x-auto pb-3"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {/* الأساسي thumbnail */}
                <button
                  onClick={() => setActiveOutfit(-1)}
                  className="flex-shrink-0 flex flex-col items-center gap-2"
                  aria-label="الصورة الأساسية"
                >
                  <div
                    className="relative overflow-hidden rounded-xl transition-all duration-300"
                    style={{
                      width: 72,
                      height: 90,
                      border:
                        activeOutfit === -1
                          ? `2.5px solid ${categoryColor}`
                          : "2px solid rgba(255,255,255,0.1)",
                      boxShadow:
                        activeOutfit === -1
                          ? `0 0 0 3px ${categoryColor}30, 0 4px 16px rgba(0,0,0,0.5)`
                          : "0 2px 8px rgba(0,0,0,0.4)",
                    }}
                  >
                    <ImageWithFallback
                      src={service.img}
                      alt="الأساسي"
                      className="w-full h-full object-cover object-top"
                    />
                    {/* Active overlay */}
                    {activeOutfit === -1 && (
                      <div
                        className="absolute inset-0 flex items-end justify-center pb-1"
                        style={{ background: `${categoryColor}22` }}
                      >
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center"
                          style={{ background: categoryColor }}
                        >
                          <svg viewBox="0 0 12 12" fill="white" className="w-2.5 h-2.5">
                            <path d="M10.28 2.28L4 8.56 1.72 6.28a1 1 0 00-1.44 1.44l3 3a1 1 0 001.44 0l7-7a1 1 0 00-1.44-1.44z" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </div>
                  <span
                    style={{
                      fontSize: "0.6rem",
                      color: activeOutfit === -1 ? categoryColor : "rgba(245,245,220,0.4)",
                      fontWeight: activeOutfit === -1 ? 700 : 400,
                    }}
                  >
                    الأساسي
                  </span>
                </button>

                {/* Outfit photo thumbnails */}
                {service.outfits.map((outfit, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveOutfit(i)}
                    className="flex-shrink-0 flex flex-col items-center gap-2"
                    aria-label={outfit.name}
                    aria-pressed={activeOutfit === i}
                  >
                    <div
                      className="relative overflow-hidden rounded-xl transition-all duration-300"
                      style={{
                        width: 72,
                        height: 90,
                        border:
                          activeOutfit === i
                            ? `2.5px solid ${categoryColor}`
                            : "2px solid rgba(255,255,255,0.1)",
                        boxShadow:
                          activeOutfit === i
                            ? `0 0 0 3px ${categoryColor}30, 0 4px 16px rgba(0,0,0,0.5)`
                            : "0 2px 8px rgba(0,0,0,0.4)",
                      }}
                    >
                      <ImageWithFallback
                        src={outfit.img}
                        alt={outfit.name}
                        className="w-full h-full object-cover object-top"
                      />

                      {/* Active checkmark badge */}
                      {activeOutfit === i && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute bottom-1 right-1 w-4 h-4 rounded-full flex items-center justify-center"
                          style={{ background: categoryColor, boxShadow: "0 1px 6px rgba(0,0,0,0.5)" }}
                        >
                          <svg viewBox="0 0 12 12" fill="white" className="w-2.5 h-2.5">
                            <path d="M10.28 2.28L4 8.56 1.72 6.28a1 1 0 00-1.44 1.44l3 3a1 1 0 001.44 0l7-7a1 1 0 00-1.44-1.44z" />
                          </svg>
                        </motion.div>
                      )}
                    </div>

                    {/* Outfit label */}
                    <span
                      className="text-center leading-tight"
                      style={{
                        fontSize: "0.58rem",
                        color: activeOutfit === i ? categoryColor : "rgba(245,245,220,0.4)",
                        fontWeight: activeOutfit === i ? 700 : 400,
                        maxWidth: 72,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {outfit.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ══════════════════════════════════════
   SERVICE CARD
══════════════════════════════════════ */
function ServiceCard({
  service,
  categoryColor,
  index,
  onClick,
}: {
  service: ServiceItem;
  categoryColor: string;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.45 }}
      onClick={onClick}
      className="relative rounded-2xl overflow-hidden cursor-pointer group"
      style={{ aspectRatio: "4/3" }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
      aria-label={`خدمة ${service.title}`}
    >
      <ImageWithFallback
        src={service.img}
        alt={service.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        loading={index < 4 ? "eager" : "lazy"}
      />

      {/* Gradient overlay - from-black/80 for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.52) 45%, rgba(0,0,0,0.12) 100%)",
        }}
      />

      {/* Text */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p
          className="mb-1"
          style={{ color: categoryColor, fontSize: "0.58rem", letterSpacing: "0.22em" }}
        >
          {service.subtitle}
        </p>
        <h3
          className="text-white mb-1.5"
          style={{ fontSize: "clamp(0.85rem, 2.8vw, 1rem)", fontWeight: 700, lineHeight: 1.2 }}
        >
          {service.title}
        </h3>
        <p
          className="text-white/50 mb-3"
          style={{
            fontSize: "0.68rem",
            lineHeight: 1.4,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {service.description}
        </p>
        <div className="flex items-center gap-1.5">
          <span style={{ color: categoryColor, fontSize: "0.7rem", fontWeight: 700 }}>
            اعرف أكثر
          </span>
          <motion.span
            style={{ color: categoryColor, fontSize: "0.7rem" }}
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            ←
          </motion.span>
        </div>
      </div>

      {/* Hover border */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ border: `1.5px solid ${categoryColor}50` }}
      />
    </motion.div>
  );
}

/* ══════════════════════════════════════
   MAIN PAGE
══════════════════════════════════════ */
export function ServicesPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [selected, setSelected] = useState<{ service: ServiceItem; color: string } | null>(null);
  const activeCategory = categories[activeTab];

  const handleClick = useCallback((service: ServiceItem, color: string) => {
    setSelected({ service, color });
  }, []);

  return (
    <>
      <PageSEO
        title="خدماتنا | كيف الضيافة - الضيافة الرجالية والنسائية والفنية"
        desc="باقة متكاملة من خدمات الضيافة الفاخرة: مضيفون، مضيفات، سقيا زمزم، سفرجيه، خطاط، فرقة شعبية، بوفيه، فوت بوث وأكثر."
      />

      <div className="pt-20 pb-32 min-h-screen">

        {/* Page Header */}
        <div className="relative py-12 px-4 text-center overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(184,134,11,0.09) 0%, transparent 70%)" }}
          />
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <p className="text-[#B8860B] mb-2" style={{ fontSize: "0.65rem", letterSpacing: "0.45em" }}>
              ✦ خدمات متكاملة ✦
            </p>
            <h1
              className="text-[#F5F5DC] mb-4"
              style={{ fontSize: "clamp(2rem, 7vw, 3rem)", fontWeight: 900, fontFamily: "'Tajawal', 'IBM Plex Sans Arabic', sans-serif" }}
            >
              خدماتنا
            </h1>
            <div
              className="mx-auto mb-4 rounded-full"
              style={{ width: 72, height: 2, background: "linear-gradient(90deg, transparent, #B8860B, #D4A017, transparent)" }}
            />
            <p className="text-[#F5F5DC]/45 max-w-md mx-auto text-sm leading-relaxed">
              باقة متكاملة من خدمات الضيافة الفاخرة المصممة لجميع أنواع المناسبات الراقية
            </p>
          </motion.div>
        </div>

        {/* Tab Navigation */}
        <div className="max-w-3xl mx-auto px-4 mb-8">
          <div
            className="flex rounded-2xl p-1.5 gap-1"
            style={{ background: "rgba(22,17,6,0.85)", border: "1px solid rgba(184,134,11,0.15)", backdropFilter: "blur(12px)" }}
          >
            {categories.map((cat, i) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(i)}
                className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 py-3 px-2 rounded-xl transition-all duration-300 relative"
                style={{
                  background: activeTab === i ? `${cat.color}15` : "transparent",
                  color: activeTab === i ? cat.color : "rgba(245,245,220,0.38)",
                  border: activeTab === i ? `1px solid ${cat.color}30` : "1px solid transparent",
                }}
              >
                <span className="flex-shrink-0">{cat.icon}</span>
                <div className="text-center sm:text-right">
                  <p style={{ fontSize: "clamp(0.65rem, 2vw, 0.82rem)", fontWeight: activeTab === i ? 700 : 500 }}>
                    {cat.label}
                  </p>
                  <p className="hidden sm:block" style={{ fontSize: "0.55rem", letterSpacing: "0.08em", opacity: 0.45 }}>
                    {cat.sublabel}
                  </p>
                </div>
                {activeTab === i && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute bottom-1.5 left-1/2 -translate-x-1/2 h-0.5 w-6 rounded-full"
                    style={{ background: cat.color }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="max-w-7xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
            >
              {/* Category row */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${activeCategory.color}15`, border: `1px solid ${activeCategory.color}30`, color: activeCategory.color }}
                >
                  {activeCategory.icon}
                </div>
                <div>
                  <p style={{ color: activeCategory.color, fontSize: "0.6rem", letterSpacing: "0.2em" }}>{activeCategory.sublabel}</p>
                  <h2 className="text-[#F5F5DC]" style={{ fontSize: "1rem", fontWeight: 700 }}>{activeCategory.label}</h2>
                </div>
                <div
                  className="mr-auto px-2.5 py-1 rounded-full"
                  style={{ background: `${activeCategory.color}12`, border: `1px solid ${activeCategory.color}20`, color: activeCategory.color, fontSize: "0.65rem", fontWeight: 600 }}
                >
                  {activeCategory.services.length} خدمة
                </div>
              </div>

              {/* Services grid */}
              <div
                className={`grid gap-4 ${
                  activeCategory.services.length === 1
                    ? "grid-cols-1 max-w-sm mx-auto"
                    : activeCategory.services.length <= 2
                    ? "grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto"
                    : "grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                }`}
              >
                {activeCategory.services.map((s, i) => (
                  <ServiceCard
                    key={s.id}
                    service={s}
                    categoryColor={activeCategory.color}
                    index={i}
                    onClick={() => handleClick(s, activeCategory.color)}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-14 p-7 sm:p-10 rounded-3xl text-center"
            style={{ background: "linear-gradient(135deg, rgba(22,17,6,0.85) 0%, rgba(12,10,3,0.95) 100%)", border: "1px solid rgba(184,134,11,0.18)" }}
          >
            <p className="text-[#B8860B] mb-2" style={{ fontSize: "0.65rem", letterSpacing: "0.38em" }}>✦ استفسار سريع ✦</p>
            <h3 className="text-[#F5F5DC] mb-3" style={{ fontSize: "clamp(1.1rem, 3.5vw, 1.4rem)", fontWeight: 800 }}>
              هل تحتاج مساعدة في اختيار الخدمة المناسبة؟
            </h3>
            <p className="text-[#F5F5DC]/45 mb-6 text-sm leading-relaxed max-w-md mx-auto">
              فريقنا المتخصص جاهز لمساعدتك في تصميم باقة الضيافة المثالية لمناسبتك
            </p>
            <a
              href={`https://wa.me/${WA}?text=${encodeURIComponent("مرحباً، أود الاستفسار عن خدمات الضيافة لديكم.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-[#0d0d0d] transition-all duration-300 hover:shadow-2xl hover:shadow-[#B8860B]/30 hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #B8860B, #D4A017)", fontWeight: 800, fontSize: "0.95rem", boxShadow: "0 6px 24px rgba(184,134,11,0.35)" }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              استفسر الآن مجاناً
            </a>
          </motion.div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selected && (
            <ServiceModal
              service={selected.service}
              categoryColor={selected.color}
              onClose={() => setSelected(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
