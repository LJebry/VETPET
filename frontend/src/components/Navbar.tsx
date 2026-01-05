import { useState, useEffect } from 'react';
import PillNav from './PillNav';
import { Calendar } from 'lucide-react';
import logo from '../assets/logo.jpg';

export default function Navbar() {
  const [activeHash, setActiveHash] = useState('#inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['#inicio', '#servicios', '#showcase', '#contacto'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.querySelector(section);
        if (element instanceof HTMLElement) {
          if (
            element.offsetTop <= scrollPosition &&
            (element.offsetTop + element.offsetHeight) > scrollPosition
          ) {
            setActiveHash(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <PillNav
        navItems={[
          { label: 'Inicio', href: '#inicio' },
          { label: 'Servicios', href: '#servicios' },
          { label: 'Galería', href: '#showcase' },
          { label: 'Contacto', href: '#contacto' }
        ]}
        logo={logo}
        logoAlt="VetPet Logo"
        activeHref={activeHash}
        baseColor="#ffffff"
        pillColor="#FF4646" // brand-red-light
        pillTextColor="#ffffff"
        hoveredPillTextColor="#D73535" // brand-red-dark
      />
      {/* WhatsApp Button (Fixed separate from Nav) */}
      <a 
        href="https://wa.me/593996171014" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed top-4 right-4 z-50 bg-brand-red-light text-white px-4 py-3 rounded-full hidden md:flex items-center gap-2 hover:bg-brand-red-dark transition shadow-lg"
      >
        <Calendar size={18} />
        <span className="font-semibold">Agendar Cita</span>
      </a>
    </>
  );
}