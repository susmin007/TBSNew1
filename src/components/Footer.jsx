'use client';

import {
  PhoneCall,
  MailCheck,
  Globe,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../images/logo2.png'


export default function Footer() {
  return (
    <footer className="w-full text-gray-800">
      {/* Upper Part */}
      <div className="bg-gradient-to-br from-white via-gray-200 to-gray-300 w-full pt-12 pb-8 px-4 md:px-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">

            {/* Column 1 - Logo + Social */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="mb-4">
                <img
                  src={logo}
                  alt="TBS Logo"
                  className="w-24 sm:w-28 md:w-36 h-auto object-contain"
                />
              </div>
              <h3 className="uppercase text-xs sm:text-sm font-semibold mb-2 text-[rgb(50,180,190)] tracking-wide">
                On Social Networks
              </h3>
              <div className="flex justify-center pl-4 md:justify-start space-x-4 mt-2">
                <a href="#" className="hover:text-[rgb(50,180,190)] transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="hover:text-[rgb(50,180,190)] transition-colors"><Facebook size={20} /></a>
                <a href="#" className="hover:text-[rgb(50,180,190)] transition-colors"><Instagram size={20} /></a>
                <a href="#" className="hover:text-[rgb(50,180,190)] transition-colors"><Twitter size={20} /></a>
              </div>
            </div>

            {/* Column 2 - Our Services */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="uppercase text-xs sm:text-sm font-semibold mb-3 text-[rgb(50,180,190)] tracking-wide">
                Our Services
              </h3>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                <li><Link to="/services#large-format-printing" className="hover:text-[rgb(50,180,190)]">Digital Printing</Link></li>
                <li><Link to="/services#screen-printing" className="hover:text-[rgb(50,180,190)]">Screen Printing</Link></li>
                <li><Link to="/services#office-stationery" className="hover:text-[rgb(50,180,190)]">Office Stationery</Link></li>
                <li><Link to="/services#print-solutions" className="hover:text-[rgb(50,180,190)]">Print Solutions</Link></li>
                <li><Link to="/services#corporate-gifts" className="hover:text-[rgb(50,180,190)]">Corporate Gifts</Link></li>
                <li><Link to="/services#signage-solutions" className="hover:text-[rgb(50,180,190)]">Signage Solutions</Link></li>
                <li><Link to="/services#barcode-solutions" className="hover:text-[rgb(50,180,190)]">Barcode Solutions</Link></li>
              </ul>
            </div>

            {/* Column 3 - Products */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="uppercase text-xs sm:text-sm font-semibold mb-3 text-[rgb(50,180,190)] tracking-wide">
                Products
              </h3>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                <li><Link to="/products" className="hover:text-[rgb(50,180,190)]">Photocopier Rentals</Link></li>
                <li><Link to="/products" className="hover:text-[rgb(50,180,190)]">Large Format Printers</Link></li>
                <li><Link to="/products" className="hover:text-[rgb(50,180,190)]">Projectors & Video Walls</Link></li>
                <li><Link to="/products" className="hover:text-[rgb(50,180,190)]">Lamination Equipment</Link></li>
                <li><Link to="/products" className="hover:text-[rgb(50,180,190)]">Office Equipment</Link></li>
                <li><Link to="/products" className="hover:text-[rgb(50,180,190)]">Toners & Ink Cartridges</Link></li>
                <li><Link to="/products" className="hover:text-[rgb(50,180,190)]">Binding Machines</Link></li>
              </ul>
            </div>

            {/* Column 4 - Contact */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="uppercase text-xs sm:text-sm font-semibold mb-3 text-[rgb(50,180,190)] tracking-wide">
                Get In Touch
              </h3>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex items-center justify-center md:justify-start">
                  <PhoneCall size={16} className="text-[rgb(50,180,190)] mr-2" />
                  <a href="tel:+96891232596" className="hover:text-[rgb(50,180,190)]">+968 91232596</a>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <PhoneCall size={16} className="text-[rgb(50,180,190)] mr-2" />
                  <a href="tel:+96890743018" className="hover:text-[rgb(50,180,190)]">+968 90743018</a>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <MailCheck size={16} className="text-[rgb(50,180,190)] mr-2" />
                  <a href="mailto:infotbsoman@gmail.com" className="hover:text-[rgb(50,180,190)]">info@truestaroman.com</a>
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <Globe size={16} className="text-[rgb(50,180,190)] mr-2" />
                  <a
                    href="https://www.truestaroman.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[rgb(50,180,190)]"
                  >
                    www.truestaroman.com
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Lower Part */}
      <div className="bg-gray-300 text-slate-700 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto text-center text-xs sm:text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-[rgb(50,180,190)] font-medium">
            True Star Business Solutions SPC
          </span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
