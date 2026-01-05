import { ArrowRight } from 'lucide-react';
import SplitText from './SplitText';
import { ImageAccordion } from './ui/interactive-image-accordion';
import logo from '../assets/logo.jpg';

export default function Hero() {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <section id="inicio" className="pt-20 lg:pt-24 relative bg-orange-50 overflow-hidden">
      {/* Branding - Top Left */}
      <div className="absolute top-6 left-6 z-10 hidden lg:block">
        <a href="#inicio" className="flex items-center gap-3 group">
          <img 
            src={logo} 
            alt="VetPet Logo" 
            className="h-12 w-12 rounded-full object-cover shadow-md group-hover:scale-105 transition-transform duration-300" 
          />
          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-brand-red-light transition-colors">
            VetPet
          </h3>
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 flex flex-col-reverse lg:flex-row items-center">
        <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
          <SplitText
            text="Cuidado y Amor para tu Mejor Amigo"
            className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight"
            delay={50}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,40px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <SplitText
            text="En VetPet ofrecemos servicios veterinarios de primera calidad y grooming profesional en Milagro. Tu mascota merece lo mejor."
            className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0"
            delay={20}
            startDelay={1500}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,40px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#contacto" className="bg-brand-red-light text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-red-dark transition flex items-center justify-center gap-2">
              Contáctanos <ArrowRight size={20} />
            </a>
            <a href="#servicios" className="bg-white text-brand-red-light border-2 border-brand-red-light px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition">
              Nuestros Servicios
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
          <ImageAccordion />
        </div>
      </div>
    </section>
  );
}