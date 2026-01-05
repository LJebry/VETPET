import React, { useEffect, useRef, useState, useMemo } from 'react';
import gsap from 'gsap';

interface NavItem {
  label: string;
  href: string;
}

interface PillNavProps {
  navItems?: NavItem[];
  logo?: string;
  logoAlt?: string;
  activeHref?: string;
  className?: string;
  baseColor?: string;
  pillColor?: string;
  pillTextColor?: string;
  hoveredPillTextColor?: string;
}

const PillNav: React.FC<PillNavProps> = ({
  navItems = [],
  logo = '',
  logoAlt = 'Logo',
  activeHref = '#',
  className = '',
  baseColor = '#000',
  pillColor = '#fff',
  pillTextColor = '#000',
  hoveredPillTextColor = '#fff'
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([]);

  // Memoize the calculated styles to prevent unnecessary recalculations
  const activeIndex = useMemo(() => 
    navItems.findIndex(item => item.href === activeHref),
    [navItems, activeHref]
  );

  useEffect(() => {
    // Initial position for the active item
    if (activeIndex !== -1 && itemsRef.current[activeIndex]) {
      const activeItem = itemsRef.current[activeIndex];
      gsap.set(pillRef.current, {
        x: activeItem.offsetLeft,
        width: activeItem.offsetWidth
      });
    }
  }, [activeIndex]);

  useEffect(() => {
    // Animate to hovered item or back to active item
    const targetIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;
    
    if (targetIndex !== -1 && itemsRef.current[targetIndex] && pillRef.current) {
      const targetItem = itemsRef.current[targetIndex];
      
      gsap.to(pillRef.current, {
        x: targetItem.offsetLeft,
        width: targetItem.offsetWidth,
        duration: 0.4,
        ease: 'power2.out'
      });
    }
  }, [hoveredIndex, activeIndex]);

  return (
    <nav 
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 rounded-full px-2 py-2 flex items-center gap-2 shadow-lg ${className}`}
      style={{ backgroundColor: baseColor }}
    >
      {logo && (
        <a href="#inicio" className="pl-4 pr-2">
           <img src={logo} alt={logoAlt} className="h-8 w-auto rounded-full" />
        </a>
      )}

      <div className="relative flex items-center">
        {/* Animated Pill Background */}
        <div
          ref={pillRef}
          className="absolute top-0 bottom-0 rounded-full pointer-events-none"
          style={{ backgroundColor: pillColor }}
        />

        {/* Navigation Items */}
        {navItems.map((item, index) => {
          const isHovered = hoveredIndex === index;
          const isActive = activeHref === item.href;
          const isPillBehind = isHovered || (hoveredIndex === null && isActive);

          return (
            <a
              key={index}
              href={item.href}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative z-10 px-4 py-2 text-sm font-medium transition-colors duration-200"
              style={{
                color: isPillBehind ? pillTextColor : hoveredPillTextColor
              }}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default PillNav;