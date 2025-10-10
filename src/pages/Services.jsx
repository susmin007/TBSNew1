// ServicesPage.jsx
'use client';

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// === Hook: Smooth scroll to hash (with offset) ===
function useScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          const navbarHeight = document.querySelector("nav")?.offsetHeight || 100;
          const yOffset = -navbarHeight - 20; // 20px extra space
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 200);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [hash]);
}

// === Services Data ===
const services = [
  {
    title: "Large-Format Printing",
    id: "large-format-printing",
    desc: "Vibrant prints for banners, exhibition stands, and displays.",
    details:
      "We specialize in high-quality, large-format prints including roll-up stands, flex prints, display boards, and exhibition counters. Designed to deliver visual impact with durability and precision.",
    items: ["Banners", "Posters", "Exhibition Stands", "Display Boards"],
  },
  {
    title: "Screen Printing",
    id: "screen-printing",
    desc: "Custom apparel and promotional branding.",
    details:
      "From t-shirts and uniforms to helmets, bags, and sunshades—our screen printing ensures long-lasting, vibrant designs on a wide range of surfaces. Perfect for promotional campaigns and corporate branding.",
    items: ["T-Shirts", "Uniforms", "Bags", "Promo Items"],
  },
  {
    title: "Office Stationery",
    id: "office-stationery",
    desc: "Professional stationery for your brand.",
    details:
      "We provide premium letterheads, envelopes, business cards, and custom folders. High-quality finishes help your company maintain a consistent professional image across all correspondence.",
    items: ["Letterheads", "Business Cards", "Envelopes", "Custom Folders"],
  },
  {
    title: "Corporate Gifts",
    id: "corporate-gifts",
    desc: "Memorable branded giveaways and souvenirs.",
    details:
      "Our customized corporate gifts include engraved items, premium branded products, and custom packaging. Designed to strengthen relationships with clients, partners, and employees.",
    items: ["Engraved Items", "Premium Gifts", "Custom Packaging", "Souvenirs"],
  },
  {
    title: "Signage Solutions",
    id: "signage-solutions",
    desc: "Eye-catching signage for businesses.",
    details:
      "We design and install 3D signboards, LED signs, safety stickers, and wayfinding systems. Built with weather-resistant, durable materials for maximum visibility and impact.",
    items: ["3D Signboards", "LED Signs", "Safety Stickers", "Wayfinding"],
  },
  {
    title: "Print Solutions",
    id: "print-solutions",
    desc: "Complete printing from concept to delivery.",
    details:
      "From brochures and catalogs to flyers, bound books, and labels—our print solutions cover all your business needs with professional design, material, and finishing options.",
    items: ["Catalogs", "Brochures", "Flyers", "Bound Books"],
  },
  {
    title: "Barcode Solutions",
    id: "barcode-solutions",
    desc: "Smart labeling and inventory tracking.",
    details:
      "We offer barcode printers, labels, and scanners for efficient stock management, retail operations, and logistics tracking.",
    items: ["Barcode Printers", "Labels", "Scanners", "Inventory Systems"],
  },
];

// === Visual Tokens ===
const TOKENS = {
  bg: "#00081a",
  accent: "#60B6D8",
  text: "#E8EEF0",
};

// === Motion Variants ===
const cardEntry = {
  hidden: (dir) => {
    switch (dir) {
      case 0:
        return { x: -60, y: -40, opacity: 0 };
      case 1:
        return { x: 60, y: -40, opacity: 0 };
      case 2:
        return { x: -60, y: 40, opacity: 0 };
      case 3:
        return { x: 60, y: 40, opacity: 0 };
      default:
        return { y: 50, opacity: 0 };
    }
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// === Page ===
export default function ServicesPage() {
  useScrollToHash();

  return (
    <div
      style={{
        background: `radial-gradient(circle at 0% 20%, rgba(6,14,28,0.8), ${TOKENS.bg})`,
      }}
      className="min-h-screen text-white"
    >
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 pt-16 pb-24">
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Left decorative column */}
          <aside className="col-span-4 pt-16 hidden md:flex flex-col items-start sticky top-24">
             <h1
              className="text-[36px] md:text-[56px] lg:text-[72px] font-extrabold"
              style={{ color: TOKENS.text, lineHeight: 1.02, letterSpacing: "-0.02em", fontFamily: "Aktiv, Alan Sans, system-ui, sans-serif" }}
            >
              <div>
                This is <span style={{ color: TOKENS.accent, fontWeight: 400 }}>what</span>
              </div>
              <div>we do best</div>
            </h1>

            <div className="mt-8 relative flex items-center justify-center">
              <span
                className="text-3xl md:text-2xl font-bold relative z-10"
                style={{ color: TOKENS.accent }}
              >
                TBS
              </span>
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1"
                style={{ backgroundColor: TOKENS.accent }}
                animate={{ scaleX: [0, 1, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
              />
            </div>
          </aside>

          {/* Main content */}
          <section className="col-span-12 md:col-span-8 pl-6">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="leading-tight">
                <div className="text-5xl font-blackhan text-gray-400 mb-3">
                  SERVICES
                </div>
              </div>
            </motion.div>

            {/* Services List */}
            <div className="mt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {services.map((service, idx) => {
                  const direction = idx % 4;
                  return (
                    <motion.div
                      id={service.id}
                      key={idx}
                      custom={direction}
                      initial="hidden"
                      whileInView="visible"
                      variants={cardEntry}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.06 }}
                      className="relative pl-4 border-l-2"
                      style={{ borderColor: TOKENS.accent }}
                    >
                      <h3
                        className="text-2xl md:text-3xl font-bold mb-2"
                        style={{ color: TOKENS.text }}
                      >
                        {service.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-300 mb-2">
                        {service.desc}
                      </p>
                      <p className="text-sm text-gray-400 mb-2">
                        {service.details}
                      </p>
                      <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm mb-3">
                        {service.items.map((it, i) => (
                          <li key={i}>{it}</li>
                        ))}
                      </ul>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
