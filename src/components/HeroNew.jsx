import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  {
    id: 1,
    title: "TRANSFORM YOUR BRAND IDENTITY",
    desc: "We craft compelling brand experiences that leave lasting impressions.",
    bg: "/bgim1.png",
    video: "/bgvideo1.mp4", // 👈 put video in public/videos
  },
  {
    id: 2,
    title: "ELEVATE YOUR CORPORATE GIFTING CAPITAL",
    desc: "Premium corporate gifting solutions designed to impress and inspire.",
    bg: "/bgim2.png",
    video: "/bgvideo2.mp4",
  },
  {
    id: 3,
    title: "COMPLETE OFFICE SOLUTIONS",
    desc: "From office equipment to services, we deliver complete workplace solutions.",
    bg: "/bgim1.png",
    video: "/bgvideo1.mp4",
  },
];

export default function HeroCardNew() {
  const [active, setActive] = useState(1);
  const [isFrozen, setIsFrozen] = useState(false);
  const [frozenBy, setFrozenBy] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [collapseLock, setCollapseLock] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);

  // Autoplay sections
  useEffect(() => {
    if (isFrozen || isHovered || isCollapsed) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev % sections.length) + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [isFrozen, isHovered, isCollapsed]);

  const handleEnter = (id) => {
    if (isCollapsed || collapseLock) return;
    if (isFrozen && id !== frozenBy) {
      setIsFrozen(false);
      setFrozenBy(null);
      setActive(id);
      return;
    }
    if (!isFrozen) setActive(id);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (collapseLock) {
      setIsCollapsed(false);
      setCollapseLock(false);
      setActive(1);
    }
  };

  return (
    <div
      className="relative w-full h-[80vh] overflow-hidden"
      id="hero"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background image (fallback while video loads) */}
      {sections.map((section) => (
        <div
          key={section.id}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{
            backgroundImage: `url(${section.bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: active === section.id && !isVideoReady ? 1 : 0,
          }}
        />
      ))}

      {/* Background video (fades in after load) */}
      {sections.map((section) => (
        <video
          key={section.id}
          autoPlay
          loop
          muted
          playsInline
          onCanPlayThrough={() => setIsVideoReady(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            active === section.id && isVideoReady ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={section.video} type="video/mp4" />
        </video>
      ))}

      {/* Desktop layout */}
      <div className="relative z-10 hidden sm:flex w-full h-full">
        {sections.map((section) => {
          const expanded = !isFrozen && !isCollapsed && active === section.id;

          return (
            <motion.div
              key={section.id}
              onMouseEnter={() => handleEnter(section.id)}
              animate={{ flex: isCollapsed ? 1 : expanded ? 3 : 1 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="relative cursor-pointer overflow-hidden"
            >
              {/* Overlay */}
              {!isCollapsed && (
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    expanded ? "bg-black/40" : "bg-black/60"
                  }`}
                />
              )}

              {/* Titles */}
              {isCollapsed ? (
                <div className="absolute inset-0 flex items-center justify-center text-white font-luckiest text-lg text-center z-20 px-2">
                  {section.title}
                </div>
              ) : expanded ? null : (
                <div className="absolute top-1/2 left-5 -translate-y-1/2 origin-left rotate-[-90deg] text-white font-semibold text-sm z-20 hidden sm:block">
                  {section.title.toUpperCase()}
                </div>
              )}

              {/* Expanded Content */}
              <AnimatePresence>
                {!isFrozen && !isCollapsed && expanded && (
                  <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center z-10"
                    initial={{ opacity: 0, x: 100, y: -50 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, x: -100, y: 50 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                  >
                    <motion.h2
                      className="text-white text-4xl font-thin font-blackhan text-center scale-y-150"
                      initial={{ y: -50, x: 50, opacity: 0 }}
                      animate={{ y: 0, x: 0, opacity: 1 }}
                      transition={{ duration: 0.9, ease: "easeOut" }}
                      >
                       {section.title}
                    </motion.h2>
                    <motion.p
                      className="max-w-xl text-white mt-5 md:text-lg text-center"
                      initial={{ y: -30, x: 30, opacity: 0 }}
                      animate={{ y: 0, x: 0, opacity: 1 }}
                      transition={{
                        duration: 0.9,
                        ease: "easeOut",
                        delay: 0.2,
                      }}
                    >
                      {section.desc}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile */}
      <div className="sm:hidden relative w-full h-full flex items-center justify-center z-20">
        <h2 className="text-white text-3xl font-bold text-center drop-shadow">
          {sections.find((s) => s.id === active)?.title}
        </h2>
      </div>
    </div>
  );
}
