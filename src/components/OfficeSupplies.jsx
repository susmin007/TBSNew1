import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import max from '../images/MAX.png';
  import UHU from  "../images/UHU.jpeg" ;
  import Schneider from  "../images/schnider.jpeg" 
  import DoubleA from "../images/doubleA.png"
  import ALBA from "../images/Alba_Rado_Logo.webp" 
  import Foska from "../images/foska.jpg";
import Deli from "../images/DELI-LOGO.png";
import Kores from "../images/kores.png";
import Casio from "../images/logo-casio-1024.png";
import Pilot from "../images/pilot.png";
import Uni from "../images/MAX.png";
import Cello from "../images/cello.png";
import Atlas from "../images/atlas.png";
import Renz from "../images/renz.png";
import Kangaro from "../images/kangaro.png";
import SDI from "../images/SDI.png";
import SinarLine from "../images/sinarLine.png";
import Rapid from "../images/rapid_logo.webp";
import FaberCastel from "../images/faber.webp";
import Staedtler from "../images/staedtler.png";
import Maped from "../images/maped.jpg";
import Hp from "../images/hp.png";
import Canon from "../images/Canon-Logo.png";
import Ricoh from "../images/ricoh.png";

const officeBrands = [
  { name: "MAX", logo: max},
  { name: "UHU", logo: UHU},
  { name: "Schneider", logo: Schneider},
  { name: "Double A", logo: DoubleA },
  { name: "ALBA", logo: ALBA },
 { name: "Foska", logo: Foska },
  { name: "Deli", logo: Deli },
  { name: "Kores", logo: Kores },
  { name: "Casio", logo: Casio },
  { name: "Pilot", logo: Pilot },
  { name: "Uni", logo: Uni },
  { name: "Cello", logo: Cello },
  { name: "Atlas", logo: Atlas },
  { name: "Renz", logo: Renz },
  { name: "Kangaro", logo: Kangaro },
  { name: "SDI", logo: SDI },
  { name: "SinarLine", logo: SinarLine },
  { name: "Rapid", logo: Rapid },
  { name: "Faber-castel", logo: FaberCastel },
  { name: "Staedtler", logo: Staedtler },
  { name: "Maped", logo: Maped },
  { name: "HP", logo: Hp },
  { name: "Canon", logo: Canon },
  { name: "Ricoh", logo: Ricoh },
];

export default function OfficeSupplies() {
  return (
    <div className="relative py-10 px-6 text-center  bg-white bg-cover bg-center">

      <h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold 
             bg-clip-text font-blackhan text-transparent 
             bg-gradient-to-r from-[rgb(60,207,215)] via-cyan-500 to-blue-600 
             text-center leading-tight mb-1 py-5"
      >
        Office Supplies & Specials
      </h2>

      <p className="text-gray-600 font-alan mb-2">
        Trusted global brands for all your office needs
      </p>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={5}
        loop={true}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {officeBrands.map((brand, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white  p-8 flex items-center justify-center hover:scale-105 transition-transform duration-300 ">
              <img src={brand.logo} alt={brand.name} className="max-h-16" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
