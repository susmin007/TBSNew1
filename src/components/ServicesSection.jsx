import React from "react";
import { motion } from "framer-motion";
import servicesImage from '../images/servicesHome.png'

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden" >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl font-bold bg-clip-text font-blackhan  text-transparent 
                     bg-gradient-to-r from-[rgb(60,207,215)] via-cyan-500 to-blue-600 
                     text-center mb-16"
        >
          Our Services
        </motion.h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -80, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="flex justify-center"
          >
            <img
              src={servicesImage}
              alt="Printing Services"
              className="rounded-2xl w-full max-w-md"
            />
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <h3 className="text-3xl font-bold font-alan text-gray-800 mb-6">
              Professional Printing & Branding Solutions
            </h3>
            <p className="text-gray-600 mb-6 font-aktiv leading-relaxed">
              We provide high-quality printing and branding services to help your
              business stand out. From large-format prints and signage to custom
              office stationery and corporate gifts, our solutions are designed
              to meet your unique needs with precision and creativity.
            </p>
            <motion.a
              href="/services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block mt-4 px-6 py-3 text-sm font-semibold text-white rounded-lg 
                         bg-gradient-to-r from-[rgb(60,207,215)] to-[rgb(40,180,190)] 
                         hover:from-[rgb(50,190,200)] hover:to-[rgb(30,160,170)] transition"
            >
              Learn More
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,
              172-41.86,82.39-16.7,168.19-17.33,
              250.45-.39,63.57,13.14,124.24,35.86,
              187.76,46.17,59,9.61,117.63,6.14,
              176.09-1.9,30.28-4.24,59.59-10,
              89-15.89V0H0V27.35A600.21,600.21,
              0,0,0,321.39,56.44Z"
            className="fill-blue-100"
          ></path>
        </svg>
      </div>
    </section>
  );
}
