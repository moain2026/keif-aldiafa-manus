import { useEffect } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";

/* ── Global meta & PWA setup ── */
function GlobalHead() {
  useEffect(() => {
    // Default title & description
    if (!document.title) {
      document.title = "كيف الضيافة | خدمات الضيافة الفاخرة في المملكة";
    }

    // Meta charset
    if (!document.querySelector('meta[charset]')) {
      const m = document.createElement("meta");
      m.setAttribute("charset", "UTF-8");
      document.head.prepend(m);
    }

    // Viewport
    let viewport = document.querySelector<HTMLMetaElement>('meta[name="viewport"]');
    if (!viewport) {
      viewport = document.createElement("meta");
      viewport.name = "viewport";
      document.head.appendChild(viewport);
    }
    viewport.content = "width=device-width, initial-scale=1.0, viewport-fit=cover";

    // Theme color for browsers / PWA
    let themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    if (!themeColor) {
      themeColor = document.createElement("meta");
      themeColor.name = "theme-color";
      document.head.appendChild(themeColor);
    }
    themeColor.content = "#0f0f0f";

    // Apple mobile web app
    const appleMeta = [
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      { name: "apple-mobile-web-app-title", content: "كيف الضيافة" },
      { name: "mobile-web-app-capable", content: "yes" },
      { name: "application-name", content: "كيف الضيافة" },
    ];
    appleMeta.forEach(({ name, content }) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.name = name;
        document.head.appendChild(el);
      }
      el.content = content;
    });

    // Open Graph
    const ogMeta = [
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "كيف الضيافة" },
      { property: "og:locale", content: "ar_SA" },
      {
        property: "og:title",
        content: "كيف الضيافة | خدمات الضيافة الفاخرة في المملكة",
      },
      {
        property: "og:description",
        content:
          "منصة تجربة فاخرة تعكس جودة وفخامة خدمات الضيافة السعودية - قهوة، شاي، تقديمات راقية وفريق احترافي.",
      },
    ];
    ogMeta.forEach(({ property, content }) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", property);
        document.head.appendChild(el);
      }
      el.content = content;
    });

    // Structured data (JSON-LD) — Local Business
    const existingLd = document.querySelector('script[type="application/ld+json"]');
    if (!existingLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "كيف الضيافة",
        alternateName: "Keif Al-Diafa",
        description:
          "خدمات الضيافة الفاخرة في المملكة العربية السعودية - قهوة سعودية، شاي، تقديمات وفريق احترافي",
        url: "https://keifaldiafa.com",
        telephone: "+966535636933",
        email: "info@keifdiafa.com",
        address: {
          "@type": "PostalAddress",
          addressCountry: "SA",
          addressLocality: "الرياض",
          addressRegion: "منطقة الرياض",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 24.7136,
          longitude: 46.6753,
        },
        openingHours: "Mo-Su 08:00-00:00",
        priceRange: "$$$$",
        servesCuisine: "Arabic Hospitality",
        areaServed: "Saudi Arabia",
        sameAs: [
          "https://instagram.com/keifdiafa",
          `https://wa.me/966535636933`,
        ],
      });
      document.head.appendChild(script);
    }

    // PWA Manifest link
    const existingManifest = document.querySelector('link[rel="manifest"]');
    if (!existingManifest) {
      const link = document.createElement("link");
      link.rel = "manifest";
      link.href = "/manifest.json";
      document.head.appendChild(link);
    }

    // Canonical
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (!existingCanonical) {
      const link = document.createElement("link");
      link.rel = "canonical";
      link.href = "https://keifaldiafa.com";
      document.head.appendChild(link);
    }

    // Robots
    let robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (!robots) {
      robots = document.createElement("meta");
      robots.name = "robots";
      document.head.appendChild(robots);
    }
    robots.content = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";

    // Keywords
    let keywords = document.querySelector<HTMLMetaElement>('meta[name="keywords"]');
    if (!keywords) {
      keywords = document.createElement("meta");
      keywords.name = "keywords";
      document.head.appendChild(keywords);
    }
    keywords.content =
      "كيف الضيافة, خدمات الضيافة, ضيافة فاخرة, قهوة سعودية, ضيافة الرياض, مضيفون مضيفات, تقديمات فاخرة, معدات ضيافة";
  }, []);

  return null;
}

export default function App() {
  return (
    <>
      <GlobalHead />
      <RouterProvider router={router} />
    </>
  );
}
