import InteractiveBentoGallery, { MediaItemType } from './ui/interactive-bento-gallery';
import { Instagram, Facebook } from 'lucide-react';

// Import local assets from showcases
import img1 from '../assets/showcases/1.JPG';
import img2 from '../assets/showcases/2.JPG';
import img3 from '../assets/showcases/3.JPG';
import img4 from '../assets/showcases/4.JPG';
import vid5 from '../assets/showcases/5.mp4';
import vid6 from '../assets/showcases/6.mp4';
import img7 from '../assets/showcases/7.JPG';

const mediaItems: MediaItemType[] = [
  {
    id: 1,
    type: "image",
    title: "Cuidado con Amor",
    desc: "Nuestros pacientes reciben la mejor atención personalizada.",
    url: img1,
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2",
  },
  {
    id: 2,
    type: "image",
    title: "Belleza y Bienestar",
    desc: "Grooming profesional para que luzcan increíbles.",
    url: img2,
    span: "md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2",
  },
  {
    id: 3,
    type: "image",
    title: "Salud Garantizada",
    desc: "Chequeos integrales para una vida larga y feliz.",
    url: img3,
    span: "md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2 ",
  },
  {
    id: 4,
    type: "image",
    title: "Momentos Felices",
    desc: "Verlos recuperados es nuestra mayor satisfacción.",
    url: img4,
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 5,
    type: "video",
    title: "Diversión en VetPet",
    desc: "Un ambiente alegre para todos nuestros amigos peludos.",
    url: vid5,
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 6,
    type: "video",
    title: "Relax Total",
    desc: "Tu mascota en las mejores manos, siempre relajada.",
    url: vid6,
    span: "md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2 ",
  },
  {
    id: 7,
    type: "image",
    title: "Familia VetPet",
    desc: "Todos son bienvenidos en nuestra casa.",
    url: img7,
    span: "md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2 ",
  },
]

export default function Clients() {
  return (
    <section id="showcase" className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InteractiveBentoGallery
          mediaItems={mediaItems}
          title="Nuestra Galería"
          description="Momentos especiales compartidos en nuestras redes sociales. ¡Síguenos en Instagram y Facebook!"
        />
        
        <div className="flex flex-col sm:flex-row justify-center items-center mt-8 gap-4">
             <a 
               href="https://www.instagram.com/vetpets_amorpets?igsh=ZzB2Y2owanh4OTc3" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 px-8 py-3 bg-[#E4405F] text-white font-bold rounded-full hover:bg-[#d62976] transition duration-300 shadow-md"
             >
               <Instagram size={20} />
               Ver más en Instagram
             </a>
             <a 
               href="https://www.facebook.com/profile.php?id=61557358957372&mibextid=ZbWKwL&ref=xav_pl_fb_external_link_ios" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 px-8 py-3 bg-[#1877F2] text-white font-bold rounded-full hover:bg-[#0d65d9] transition duration-300 shadow-md"
             >
               <Facebook size={20} />
               Ver más en Facebook
             </a>
        </div>
      </div>
    </section>
  );
}