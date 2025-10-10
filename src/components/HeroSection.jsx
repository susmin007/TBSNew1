import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const heroSlides = [
    {
      id: 1,
      title: "TRANSFORM YOUR BRAND IDENTITY",
      subtitle: " Business solutions provider in Oman",
      description: `World class printing and Branding solutions`,
      image:
        "https://img1.exportersindia.com/product_images/bc-full/dir_93/2782073/office-materials-970084.jpg",
      bgColor: "from-blue-500 to-blue-700",
    },
    {
      id: 2,
      title: "ELEVATE YOUR CORPORATE GIFTING CAPITAL",
      subtitle: "Business solutions provider in Oman",
      description: `Customized Mementos That Leave Lasting Impressions`,
      image:
        "https://i1.adis.ws/i/canon/4471C008_MAXIFY-GX7050_01/4471c008_maxify-gx7050_01?w=1500&bg=gray95",
      bgColor: "from-blue-500 to-blue-600",
    },
    {
      id: 3,
      title: "Complete Office Solutions",
      subtitle: "Business solutions provider in Oman",
      description: `Equipment, Stationery & Cutting-Edge Technology`,
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/8/441514388/DQ/AR/FP/112842586/optical-barcode-sticker-1000x1000.png",
      bgColor: "from-blue-500 to-blue-400",
    },


  ];


  const [active, setActive] = useState(0);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  // Auto change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // Mouse move for parallax
  const handleMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const x = (e.clientX - innerWidth / 2) / 50;
    const y = (e.clientY - innerHeight / 2) / 50;
    setOffset({ x, y });
  };

  return (
    <section id="hero"
      className="relative flex flex-col-reverse md:flex-row w-full h-screen overflow-hidden "
      onMouseMove={handleMouseMove}
    >
      {/* Background image */}
      <motion.div
        className="absolute inset-0 transition-all duration-700"
        style={{
          backgroundImage: `url(${heroSlides[active].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.6)",
          transform: `translate(${offset.x}px, ${offset.y}px)`,
        }}
      ></motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
   
      {/* Sidebar */}
      <div className="relative z-10 flex md:flex-col w-full md:w-56 h-20 md:h-full 
                bg-white/5 backdrop-blur-md border-r border-[rgb(91,209,215)]/30">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            onClick={() => setActive(index)}
            className={`relative flex-1 cursor-pointer flex items-center justify-center px-2 py-4
        transition-all duration-300 group
        ${active === index
                ? "bg-[rgb(91,209,215)]/20 text-[rgb(91,209,215)] shadow-[inset_4px_0_10px_rgba(91,209,215,0.4)]"
                : "hover:bg-[rgb(91,209,215)]/10 text-white/80 hover:text-white"
              }`}
          >
            {/* Active line indicator */}
            {active === index && (
              <span className="absolute left-0 top-0 h-full w-1 
                         bg-[rgb(91,209,215)] rounded-r shadow-md"></span>
            )}

            <span
              className={`text-xs md:text-sm font-semibold tracking-wide uppercase transition-all duration-300 text-center text-white`}
            >
              {slide.title}
            </span>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 h-full flex justify-center items-center relative text-center z-10 px-6">
        <motion.div
          key={heroSlides[active].id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          {/* Title */}
          <h1 className="text-2xl md:text-4xl font-bold text-[rgb(91,209,215)] uppercase mb-2 drop-shadow-lg">
            {heroSlides[active].title}
          </h1>

          {/* Subtitle */}
          <h2 className="text-sm md:text-lg font-semibold text-white tracking-wide mb-4 drop-shadow-md">
            {heroSlides[active].subtitle}
          </h2>

          {/* Description */}
          <p className="text-sm md:text-base text-white/90 leading-relaxed drop-shadow-md">
            {heroSlides[active].description}
          </p>

          {/* Button */}
          <button className="mt-6 px-6 py-3 bg-[rgb(91,209,215)] text-white font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-[rgb(91,209,215,0.5)] transition">
            Explore Services
          </button>
        </motion.div>
      </div>
    </section>
  );
}
