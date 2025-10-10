'use client';

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { motion } from "framer-motion";
import { Printer, Video, Barcode, Layers, Copy } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Custom Office Equipment Icon
const OfficeEquipmentIcon = () => (
  <svg
    className="w-8 h-8 text-purple-400"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" ry="2" strokeWidth="2"/>
    <path d="M8 9h8M8 13h8M8 17h4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const services = [
  {
    title: "Photocopier Rentals",
    desc: "Flexible rental options with full maintenance included.",
    icon: <Copy className="w-8 h-8 text-indigo-400" />,
  },
  {
    title: "Large Format Printers",
    desc: "Graphtec & Mistral cutting plotters for precision work.",
    icon: <Printer className="w-8 h-8 text-pink-400" />,
  },
  {
    title: "Projectors & Video Walls",
    desc: "4K Ultra HD with Android support for seamless presentations.",
    icon: <Video className="w-8 h-8 text-yellow-400" />,
  },
  {
    title: "Barcode Solutions",
    desc: "Labels, stickers, ribbons & thermal printing supplies.",
    icon: <Barcode className="w-8 h-8 text-green-400" />,
  },
  {
    title: "Lamination Equipment",
    desc: "Professional hot & cold laminator series.",
    icon: <Layers className="w-8 h-8 text-blue-400" />,
  },
  {
    title: "Office Equipment",
    desc: "Binding, shredding & scanning machines.",
    icon: <OfficeEquipmentIcon />,
  },
];

export default function EquipmentAndProducts() {
  const navigate = useNavigate();

  return (
    <section id="products" className="py-24 bg-gray-900 text-white relative">
      <div className="max-w-7xl mx-auto px-6 text-center">
     
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl font-bold bg-clip-text font-blackhan  text-transparent 
                     bg-gradient-to-r from-[rgb(60,207,215)] via-cyan-500 to-blue-600 
                     text-center mb-16"
        >
          Premium Equipment & Products
          <p className="mt-4 text-gray-400 text-base font-alan md:text-lg font-normal">
            Industry-leading equipment and supplies for your business needs
          </p>
        </motion.h2>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={30}
          slidesPerView={4}
          freeMode={true}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={6000}
          breakpoints={{
            1280: { slidesPerView: 4 },
            1024: { slidesPerView: 3 },
            640: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {services.map((service, idx) => (
            <SwiperSlide key={idx}>
              <div
                onClick={() => navigate("/products")}
                className="relative flex flex-col items-center space-y-4 p-6 rounded-xl transition group cursor-pointer"
              >
                <span className="absolute inset-0 rounded-xl pointer-events-none 
                                before:content-[''] before:absolute before:top-0 before:left-0 
                                before:w-10 before:h-10 before:border-t-4 before:border-l-4 
                                before:border-[rgb(50,180,190)] before:opacity-0 
                                group-hover:before:opacity-100 
                                after:content-[''] after:absolute after:bottom-0 after:right-0 
                                after:w-10 after:h-10 after:border-b-4 after:border-r-4 
                                after:border-[rgb(50,180,190)] after:opacity-0 
                                group-hover:after:opacity-100 transition-opacity duration-300">
                </span>

                <div className="bg-white p-8 rounded-full shadow-md hover:bg-teal-100">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-white leading-tight mb-0">{service.title}</h3>
                <p className="text-teal-500 text-center mt-0">{service.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button  
          className="inline-block mt-10 px-6 py-3 text-sm font-semibold text-white rounded-lg 
                     bg-gradient-to-r from-[rgb(60,207,215)] to-[rgb(40,180,190)] 
                     hover:from-[rgb(50,190,200)] hover:to-[rgb(30,160,170)] transition"
          onClick={() => navigate("/products")}
        >
          View More
        </button>
      </div>
    </section>
  );
}
