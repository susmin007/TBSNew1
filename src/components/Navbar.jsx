import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "HOME", href: "/#hero" },
    { name: "SERVICES", href: "/services" },
    { name: "PRODUCTS", href: "/products" },
    { name: "WHY US", href: "/#why-choose-us" },
       { name: "DOWNLOADS", href: "/download" },
    { name: "CONTACT", href: "/#contact" },
 
  ];

  return (
    <nav className="w-full sticky top-0 z-50 bg-white text-black border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Brand */}
        <HashLink smooth to="/#hero" className="block group">
          <h1 className="flex flex-col items-start leading-none">
            <span className="text-2xl md:text-3xl font-blackhan tracking-[0.25em] uppercase">
              TRUE STAR
            </span>
            <span className="text-xs md:text-sm font-alan font-normal tracking-[0.30em] text-gray-800">
              business solutions spc
            </span>
          </h1>
        </HashLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-base font-medium">
          {navLinks.map((link, idx) => (
            <li key={idx} className="relative group">
              <HashLink
                smooth
                to={link.href}
                className="transition-colors hover:text-[rgb(50,180,190)] font-alan text-sm relative"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[rgb(50,180,190)] transition-all duration-300 group-hover:w-full"></span>
              </HashLink>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-3xl text-black"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <ul className="flex flex-col gap-6 px-6 py-6 text-lg font-medium text-black">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <HashLink
                  smooth
                  to={link.href}
                  className="block hover:text-[rgb(50,180,190)] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </HashLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
