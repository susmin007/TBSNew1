'use client';

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import photocopier_rentals from '../images/Photocopier.jpg'
import large_format_printers from '../images/LargeFormatPrinter.jpg'
import projectors_video_walls from '../images/projector.jpeg'
import barcode_solutions from '../images/barcode.avif'
import laminationEquipment from '../images/laminationEquipment.jpg'
import officeEquipment from '../images/officeEquipment.jpg'


const products = [
  { id: "photocopier-rentals", title: "Photocopier Rentals", des: "Flexible rental options with full maintenance included.", details: `Our photocopier rental service provides flexible, affordable options with full maintenance. Get high-quality prints, reliable machines, and hassle-free performance without long-term commitments.`, img: photocopier_rentals },
  { id: "large-format-printers", title: "Large Format Printers", des: "Graphtec & Mistral cutting plotters for precision work.", details: `We specialize in large-format printing including roll-up stands, flex prints, display boards, and exhibition counters. High-quality prints designed to deliver visual impact with durability and precision.`, img: large_format_printers },
  { id: "projectors-video-walls", title: "Projectors & Video Walls", des: "4K Ultra HD with Android support for seamless presentations.", details: `We offer projectors, video walls, and digital signage with dual OS support, wireless transmitters, and sharp displays to make every presentation stand out.`, img: projectors_video_walls },
  { id: "barcode-solutions", title: "Barcode Solutions", des: "Labels, stickers, ribbons & thermal printing supplies.", details: `We offer barcode sticker rolls in various sizes such as 100x150mm, 50x50mm, and 38x25mm, plus thermal ribbons in 110mm x 300m and 60mm x 300m. Reliable and professional labeling for retail, logistics, and inventory.`, img: barcode_solutions},
  { id: "lamination-equipment", title: "Lamination Equipment", des: "Professional hot & cold laminator series.", details: `Our lamination equipment offers glossy and matte finishes for documents, posters, and signage. Ensure durability and a polished professional look for all your materials.`, img: laminationEquipment },
  { id: "office-equipments", title: "Office Equipments", des: "Binding, shredding & scanning machines.", details: `We provide essential office equipment including binding machines, shredders, and scanners. Reliable tools to keep your office workflow smooth and efficient.`, img: officeEquipment },
];

const TOKENS = { bg: "#00081a", text: "#E8EEF0", accent: "#60B6D8" };

const cardVariants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };

export default function ProductPage() {

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });

    // Scroll to top whenever any link is clicked
    const handleLinkClick = (e) => {
      const target = e.target.closest("a");
      if (target) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, []);

  return (
    <div style={{ background: `radial-gradient(circle at 0% 20%, rgba(6,14,28,0.80), ${TOKENS.bg})` }} className="min-h-screen text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-20">
        <div className="grid grid-cols-12 gap-8 items-start">
          <aside className="hidden md:flex md:col-span-4 flex-col items-start sticky top-24 pt-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold" style={{ color: TOKENS.text, lineHeight: 1.1, letterSpacing: "-0.02em", fontFamily: "Aktiv, Alan Sans, system-ui, sans-serif" }}>
              <div>Our <span style={{ color: TOKENS.accent, fontWeight: 400 }}>Products</span></div>
              <div>for Businesses</div>
            </h1>

            <div className="mt-6 relative flex items-center justify-center">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold relative z-10" style={{ color: TOKENS.accent }}>TBS</span>
              <motion.div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: TOKENS.accent }} animate={{ scaleX: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} />
            </div>
          </aside>

          <section className="col-span-12 md:col-span-8">
            <motion.div initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
              <div className="leading-tight">
                <div className="text-5xl font-blackhan text-gray-400 mb-3">PRODUCTS</div>
              </div>
            </motion.div>

            <div className="mt-8 space-y-10">
              {products.map((prod, idx) => (
                <motion.div key={idx} id={prod.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={cardVariants}>
                  <div className="flex flex-col md:flex-row bg-[#0d151a] rounded-xl shadow-xl overflow-hidden hover:scale-[1.02] transition-transform duration-500">
                    <div className="w-full md:w-1/2 bg-white flex items-center justify-center">
                      <img src={prod.img} alt={prod.title} className="w-[350px] h-[250px] object-contain" />
                    </div>
                    <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{prod.title}</h3>
                      <p className="text-gray-300 mt-2 text-sm sm:text-base">{prod.des}</p>
                      <p className="text-gray-400 mt-2 text-sm sm:text-base">{prod.details}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
