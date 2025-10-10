import React from "react";
import { Phone, Mail, Globe } from "lucide-react";

function ContactSection() {
  return (
    <div
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] brightness-50"
      >
        <source src="/bgvideo1.mp4" type="video/mp4" />
      </video>

      {/* Grid Layout */}
      <div className="relative max-w-6xl w-full grid gap-8 md:grid-cols-[6fr_5fr]">
        
        {/* Left form card */}
        <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 text-black bg-opacity-80 px-6 sm:px-8 md:px-16 py-10 sm:py-12 md:py-14
        ">
          <h2 className="text-xl sm:text-2xl font-bold font-aktiv text-black mb-4 leading-snug">
            Let’s Work Together
          </h2>
          <p className="text-sm text-black mb-6 font-aktiv leading-relaxed">
            Have a project in mind? We'd love to hear about it. Contact us today
            and let's create something exceptional together.
          </p>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const name = e.target[0].value;
              const email = e.target[1].value;
              const message = e.target[2].value;
              const subject = encodeURIComponent("New Message from Contact Form");
              const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
              window.location.href = `mailto:infotbsoman@gmail.com?subject=${subject}&body=${body}`;
            }}
          >
            <input
              type="text"
              placeholder="Name*"
              className="w-full border border-gray-300 rounded-lg p-2 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <input
              type="email"
              placeholder="E-mail*"
              className="w-full border border-gray-300 rounded-lg p-2 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <textarea
              rows={3}
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-lg p-2 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[rgb(50,180,190)] text-white text-sm font-semibold tracking-wide py-2 rounded-lg transition hover:bg-gray-800"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Right info block */}
        <div className="text-white p-6 sm:p-8 flex flex-col justify-center">
          <p className="uppercase text-xs tracking-wide text-[rgb(50,180,190)] mb-2">
            Contact Us
          </p>
          <h2 className="text-xl sm:text-2xl font-bold mb-3 leading-snug">
            Let’s Create Something Exceptional
          </h2>
          <p className="text-sm text-gray-300 mb-8 leading-relaxed">
            Reach out to us anytime — we’re here to discuss your ideas and help
            bring your vision to life.
          </p>

          <div className="space-y-6 text-gray-200 text-sm">
            {/* Email */}
            <div className="flex items-start gap-3">
              <Mail className="text-cyan-400 w-5 h-5 mt-1" />
              <div>
                <p className="font-semibold text-white text-sm">Email</p>
                <a
                  href="mailto:infotbsoman@gmail.com?subject=Hello&body=Hi,"
                  className="text-cyan-400 hover:underline text-sm"
                >
                  info@truestaroman.com
                </a>
              </div>
            </div>

            {/* Website */}
            <div className="flex items-start gap-3">
              <Globe className="text-cyan-400 w-5 h-5 mt-1" />
              <div>
                <p className="font-semibold text-white text-sm">Website</p>
                <a
                  href="https://www.truestaroman.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline text-sm break-words"
                >
                  www.truestaroman.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <Phone className="text-cyan-400 w-5 h-5 mt-1" />
              <div>
                <p className="font-semibold text-white text-sm">Phone</p>
                <a href="tel:+96891232596" className="hover:underline block">
                  +968 91232596
                </a>
                <a href="tel:+96890743018" className="hover:underline block">
                  +968 90743018
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
