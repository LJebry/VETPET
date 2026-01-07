import React, { useState } from 'react';
import cirugia from '../../assets/cirugia.jpeg';
import consulta from '../../assets/consulta.jpeg';
import grooming from '../../assets/grooming.jpeg';
import vacunacion from '../../assets/vacunacion.jpeg';

// --- Data for the image accordion ---
const accordionItems = [
  {
    id: 1,
    title: 'Consulta (Gratis)',
    imageUrl: consulta,
  },
  {
    id: 2,
    title: 'Grooming & Peluquería',
    imageUrl: grooming,
  },
  {
    id: 3,
    title: 'Vacunación',
    imageUrl: vacunacion,
  },
  {
    id: 4,
    title: 'Cirugía Menor',
    imageUrl: cirugia,
  },
];

interface AccordionItemProps {
  item: {
    id: number;
    title: string;
    imageUrl: string;
  };
  isActive: boolean;
  onMouseEnter: () => void;
}

// --- Accordion Item Component ---
const AccordionItem: React.FC<AccordionItemProps> = ({ item, isActive, onMouseEnter }) => {
  return (
    <a
      href="#servicios"
      className={`
        relative h-112.5 rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-700 ease-in-out
        ${isActive ? 'w-100' : 'w-15'}
      `}
      onMouseEnter={onMouseEnter}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => { 
          const target = e.target as HTMLImageElement;
          target.onerror = null; 
          target.src = 'https://placehold.co/400x450/2d3748/ffffff?text=Image+Error'; 
        }}
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Caption Text */}
      <span
        className={`
          absolute text-white text-lg font-semibold whitespace-nowrap
          transition-all duration-300 ease-in-out z-10 text-center
          ${
            isActive
              ? 'bottom-8 left-1/2 -translate-x-1/2 rotate-0 w-full px-4' // Active state: horizontal, bottom-center
              // Inactive state: vertical, positioned at the bottom, for all screen sizes
              : 'bottom-24 left-1/2 -translate-x-1/2 rotate-90 origin-center'
          }
        `}
      >
        {item.title}
      </span>
    </a>
  );
};


// --- Main Component ---
export function ImageAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-row items-center justify-center gap-4 overflow-x-auto p-4 w-full h-full">
      {accordionItems.map((item, index) => (
        <AccordionItem
          key={item.id}
          item={item}
          isActive={index === activeIndex}
          onMouseEnter={() => handleItemHover(index)}
        />
      ))}
    </div>
  );
}