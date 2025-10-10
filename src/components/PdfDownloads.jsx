'use client';

import { Download, Eye } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function PdfDownloads() {
  const pdfs = [
    {
      title: 'Company Profile',
      file: '/pdfs/TBSProfile.pdf',
      cover: '/images/TBS.png',
    },
    {
      title: 'Gift Sets Catalogue',
      file: '/pdfs/Gift.pdf',
      cover:
        '/images/giftset.jpg',
    },
    {
      title: 'Gift Box Catalogue',
      file: '/pdfs/GiftBoxCatalog.pdf',
      cover:
        '/images/giftbox.webp',
    },
    {
      title: 'Gift M Catalogue',
      file: '/pdfs/Giftm.pdf',
      cover:
        '/images/MCatalogue.jpg',
    },
    {
      title: 'HAK Catalogue',
      file: '/pdfs/HAK.pdf',
      cover:
        '/images/HakCatalogue.jpeg',
    },

  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <>
      <Navbar />
      <section
        className="relative w-full py-20 px-6 md:px-20 overflow-hidden"
        style={{
          background: `radial-gradient(circle at 20% 20%, #030712, #0a192f 80%)`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 to-black/70"></div>

        <div className="relative max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-4xl md:text-5xl  font-blackhan text-center mb-16  text-gray-400 "
          >
            Download Our Resources
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center"
          >
            {pdfs.map((pdf, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-[#0f172a]/90 border border-cyan-900/40 rounded-md shadow-lg hover:shadow-cyan-600/30 transition-all duration-300 overflow-hidden flex flex-col w-full max-w-[400px]"
              >
                {/* Image */}
                <div className="w-full h-56 overflow-hidden">
                  <img
                    src={pdf.cover}
                    alt={pdf.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <h3 className="text-lg font-semibold text-white font-alan text-center mb-5 tracking-wide">
                    {pdf.title}
                  </h3>

                  <div className="flex gap-3">
                    <a
                      href={pdf.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center  justify-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white py-2.5 rounded-sm text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <Eye className="w-4 h-4 mr-2 font-alan" /> Preview
                    </a>

                    <a
                      href={pdf.file}
                      download
                      className="flex-1 flex items-center justify-center border border-cyan-500 text-cyan-400 py-2.5 rounded-sm text-sm font-medium hover:bg-cyan-500 hover:text-white hover:shadow-lg transition-all duration-300"
                    >
                      <Download className="w-4 h-4 mr-2 font-alan" /> Download
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
