import React from "react";
import { motion } from "framer-motion"; // <-- add this
import { CheckCircle, Lightbulb, Shield } from "lucide-react";

const features = [
  {
    title: "Expertise",
    desc: "Our team consists of highly skilled professionals with years of industry experience.",
    icon: <CheckCircle className="w-10 h-10 text-cyan-300" />,
  },
  {
    title: "Innovation",
    desc: "We embrace modern technologies to deliver cutting-edge and efficient solutions.",
    icon: <Lightbulb className="w-10 h-10 text-cyan-300" />,
  },
  {
    title: "Reliability",
    desc: "Count on us for consistent, reliable, and top-quality results every time.",
    icon: <Shield className="w-10 h-10 text-cyan-300" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="relative w-full py-24 px-6 md:px-16 
                 bg-[url('/images/whyus.avif')] 
                 bg-cover bg-center bg-fixed"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-700/60 via-blue-800/60 to-cyan-900/60"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center text-white">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl font-bold bg-clip-text font-blackhan  text-transparent 
                            bg-white
                             text-center mb-16"
        >
          Why Choose Us
        </motion.h2>

        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-16 text-gray-200 font-aktiv">
          We combine expertise, innovation, and customer-first values to deliver the best solutions tailored to your needs.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-16 items-start">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="relative flex-1 text-left md:text-center p-6 group"
            >
              <div className="flex justify-center md:justify-center mb-4">
                <div className="p-4 bg-white/10 backdrop-blur-md rounded-full inline-flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  {feature.icon}
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2 text-cyan-300 font-aktiv group-hover:text-white transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-gray-200 font-aktiv">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
