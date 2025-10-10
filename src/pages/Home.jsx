import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
import WhyChooseUs from '../components/WhyChooseUs';
import EquipmentAndProducts from '../components/EquipmentsandProduct';
import ContactSection from '../components/ContactSection';
import HeroNew from '../components/HeroNew';
import OfficeSupplies from '../components/OfficeSupplies';

function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div>
        <Navbar />
        <HeroNew />
        <ServicesSection />
        <EquipmentAndProducts />
        <WhyChooseUs />
        <OfficeSupplies />
        <ContactSection />

        <Footer />

        {/* Scroll To Top Button */}
        {showButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 bg-[rgb(50,180,190)] text-white rounded-full shadow-lg hover:bg-teal-600 transition z-50"
          >
            <ArrowUp size={24} />
          </button>
        )}
      </div>
    </>
  );
}

export default Home;
