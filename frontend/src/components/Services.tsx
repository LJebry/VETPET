import { Stethoscope, Scissors, Heart, Activity, Home, BedDouble, Pill, ShoppingBag, Flame, Truck } from 'lucide-react';
import { AnimatedTabs } from './ui/animated-tabs';

// Import assets directly
import consultaImg from '../assets/consulta.jpeg';
import groomingImg from '../assets/grooming.jpeg';
import vacunacionImg from '../assets/vacunacion.jpeg';
import cirugiaImg from '../assets/cirugia.jpeg';
import accesoriosImg from '../assets/accesorios.jpeg';
import ambulatorioImg from '../assets/ambulatorio.jpeg';
import crematorioImg from '../assets/crematorio.jpeg';
import farmaciaImg from '../assets/farmacia.jpeg';
import hospedajeImg from '../assets/hospedaje.jpeg';

const WhatsAppButton = () => (
  <a 
    href="https://wa.me/593996171014" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 mt-6 bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition shadow-md w-fit"
  >
    <svg 
      viewBox="0 0 24 24" 
      width="20" 
      height="20" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
    Consultar Precio
  </a>
);

const serviceTabs = [
  {
    id: "consulta",
    label: "Consulta (Gratis)",
    content: (
      <div className="grid md:grid-cols-2 gap-8 items-center h-full">
        <img
          src={consultaImg}
          alt="Consulta Veterinaria"
          className="rounded-xl w-full h-64 md:h-full object-cover shadow-lg"
        />
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center gap-3">
             <div className="bg-brand-orange/20 p-3 rounded-full text-brand-orange">
               <Stethoscope size={32} />
             </div>
             <h2 className="text-3xl font-bold text-gray-900">Consulta (Gratis)</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Diagnóstico preciso y tratamiento integral para garantizar la salud de tu mascota. 
            Nuestros profesionales cuentan con años de experiencia en medicina preventiva y curativa.
          </p>
          <ul className="space-y-2 mt-2">
            <li className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-brand-red-light rounded-full"></span>
              Chequeos generales gratuitos
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-brand-red-light rounded-full"></span>
              Diagnóstico por imágenes
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-brand-red-light rounded-full"></span>
              Análisis de laboratorio
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "domicilio",
    label: "Domicilio (Gratis)",
    content: (
      <div className="grid md:grid-cols-2 gap-8 items-center h-full">
        <img
          src={consultaImg}
          alt="Consulta a Domicilio"
          className="rounded-xl w-full h-64 md:h-full object-cover shadow-lg"
        />
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center gap-3">
             <div className="bg-brand-orange/20 p-3 rounded-full text-brand-orange">
               <Truck size={32} />
             </div>
             <h2 className="text-3xl font-bold text-gray-900">Consulta a Domicilio (Gratis)</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Llevamos la atención veterinaria a la puerta de tu casa sin costo adicional. Ideal para mascotas nerviosas o dueños con movilidad reducida.
          </p>
          <ul className="space-y-2 mt-2">
            <li className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-brand-red-light rounded-full"></span>
              Atención en la comodidad de tu hogar
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-brand-red-light rounded-full"></span>
              Sin costo adicional por traslado
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-brand-red-light rounded-full"></span>
              Cobertura en toda la ciudad
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "grooming",
    label: "Grooming",
    content: (
      <div className="grid md:grid-cols-2 gap-8 items-center h-full">
        <img
          src={groomingImg}
          alt="Grooming"
          className="rounded-xl w-full h-64 md:h-full object-cover shadow-lg"
        />
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center gap-3">
             <div className="bg-brand-orange/20 p-3 rounded-full text-brand-orange">
               <Scissors size={32} />
             </div>
             <h2 className="text-3xl font-bold text-gray-900">Grooming & Peluquería</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Tu mascota merece lucir increíble. Ofrecemos servicios completos de estética canina y felina 
            con productos hipoalergénicos de alta calidad.
          </p>
          <ul className="space-y-2 mt-2">
            <li className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-brand-red-light rounded-full"></span>
              Baños medicados y cosméticos
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-brand-red-light rounded-full"></span>
              Corte de raza y estilo
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-brand-red-light rounded-full"></span>
              Limpieza de oídos y corte de uñas
            </li>
          </ul>
          <WhatsAppButton />
        </div>
      </div>
    ),
  },
  {
    id: "hospedaje",
    label: "Hospedaje",
    content: (
      <div className="grid md:grid-cols-2 gap-8 items-center h-full">
        <img
          src={hospedajeImg}
          alt="Hospedaje"
          className="rounded-xl w-full h-64 md:h-full object-cover shadow-lg"
        />
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center gap-3">
             <div className="bg-brand-orange/20 p-3 rounded-full text-brand-orange">
               <BedDouble size={32} />
             </div>
             <h2 className="text-3xl font-bold text-gray-900">Hospedaje</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Un hogar lejos de casa. Ofrecemos un ambiente seguro, limpio y lleno de cariño para cuando tengas que viajar.
          </p>
          <ul className="space-y-2 mt-2">
            <li className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-brand-red-light rounded-full"></span>
              Supervisión 24/7
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-brand-red-light rounded-full"></span>
              Áreas de juego y descanso
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-brand-red-light rounded-full"></span>
              Alimentación personalizada
            </li>
          </ul>
          <WhatsAppButton />
        </div>
      </div>
    ),
  },
  {
    id: "vacunacion",
    label: "Vacunación",
    content: (
      <div className="grid md:grid-cols-2 gap-8 items-center h-full">
        <img
          src={vacunacionImg}
          alt="Vacunación"
          className="rounded-xl w-full h-64 md:h-full object-cover shadow-lg"
        />
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center gap-3">
             <div className="bg-brand-orange/20 p-3 rounded-full text-brand-orange">
               <Activity size={32} />
             </div>
             <h2 className="text-3xl font-bold text-gray-900">Vacunación</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            La prevención es la mejor medicina. Mantén al día el calendario de vacunación de tu mascota 
            para protegerla contra enfermedades virales y bacterianas.
          </p>
          <ul className="space-y-2 mt-2">
            <li className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-brand-red-light rounded-full"></span>
              Vacunas para cachorros y adultos
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-brand-red-light rounded-full"></span>
              Desparasitación interna y externa
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-brand-red-light rounded-full"></span>
              Certificados de salud
            </li>
          </ul>
          <WhatsAppButton />
        </div>
      </div>
    ),
  },
  {
    id: "farmacia",
    label: "Farmacia",
    content: (
      <div className="grid md:grid-cols-2 gap-8 items-center h-full">
        <img
          src={farmaciaImg}
          alt="Farmacia Básica"
          className="rounded-xl w-full h-64 md:h-full object-cover shadow-lg"
        />
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center gap-3">
             <div className="bg-brand-orange/20 p-3 rounded-full text-brand-orange">
               <Pill size={32} />
             </div>
             <h2 className="text-3xl font-bold text-gray-900">Farmacia Básica</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Contamos con los medicamentos esenciales para el tratamiento de tu mascota, garantizando calidad y disponibilidad inmediata.
          </p>
          <ul className="space-y-2 mt-2">
            <li className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-brand-red-light rounded-full"></span>
              Antibióticos y antiinflamatorios
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-brand-red-light rounded-full"></span>
              Desparasitantes externos e internos
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-brand-red-light rounded-full"></span>
              Suplementos vitamínicos
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-brand-red-light rounded-full"></span>
              Productos dermatológicos
            </li>
          </ul>
          <WhatsAppButton />
        </div>
      </div>
    ),
  },
  {
    id: "accesorios",
    label: "Accesorios",
    content: (
      <div className="grid md:grid-cols-2 gap-8 items-center h-full">
        <img
          src={accesoriosImg}
          alt="Accesorios"
          className="rounded-xl w-full h-64 md:h-full object-cover shadow-lg"
        />
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center gap-3">
             <div className="bg-brand-orange/20 p-3 rounded-full text-brand-orange">
               <ShoppingBag size={32} />
             </div>
             <h2 className="text-3xl font-bold text-gray-900">Accesorios</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Todo lo que necesitas para consentir a tu mascota: juguetes, correas, camas y mucho más.
          </p>
          <ul className="space-y-2 mt-2">
            <li className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-brand-red-light rounded-full"></span>
              Juguetes interactivos
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-brand-red-light rounded-full"></span>
              Ropa y collares
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-brand-red-light rounded-full"></span>
              Camas y transportadores
            </li>
          </ul>
          <WhatsAppButton />
        </div>
      </div>
    ),
  },
  {
    id: "cirugias",
    label: "Cirugía Menor",
    content: (
      <div className="grid md:grid-cols-2 gap-8 items-center h-full">
        <img
          src={cirugiaImg}
          alt="Cirugía Menor"
          className="rounded-xl w-full h-64 md:h-full object-cover shadow-lg"
        />
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center gap-3">
             <div className="bg-brand-orange/20 p-3 rounded-full text-brand-orange">
               <Heart size={32} />
             </div>
             <h2 className="text-3xl font-bold text-gray-900">Cirugía Menor</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Procedimientos quirúrgicos de baja complejidad con rápida recuperación. Priorizamos la seguridad y el bienestar.
          </p>
          <ul className="space-y-2 mt-2">
            <li className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-brand-red-light rounded-full"></span>
              Esterilizaciones
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-brand-red-light rounded-full"></span>
              Suturas de heridas leves
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-brand-red-light rounded-full"></span>
              Profilaxia dental
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-brand-red-light rounded-full"></span>
              Extracción de masas superficiales
            </li>
          </ul>
          <WhatsAppButton />
        </div>
      </div>
    ),
  },
  {
    id: "ambulatoria",
    label: "Ambulatoria",
    content: (
      <div className="grid md:grid-cols-2 gap-8 items-center h-full">
        <img
          src={ambulatorioImg}
          alt="Cirugía Ambulatoria"
          className="rounded-xl w-full h-64 md:h-full object-cover shadow-lg"
        />
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center gap-3">
             <div className="bg-brand-orange/20 p-3 rounded-full text-brand-orange">
               <Stethoscope size={32} />
             </div>
             <h2 className="text-3xl font-bold text-gray-900">Cirugía Ambulatoria</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Intervenciones que no requieren hospitalización prolongada, permitiendo que tu mascota regrese a casa el mismo día.
          </p>
          <ul className="space-y-2 mt-2">
            <li className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-brand-red-light rounded-full"></span>
              Recuperación en casa
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-brand-red-light rounded-full"></span>
              Procedimientos rápidos y seguros
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-brand-red-light rounded-full"></span>
              Menor estrés para la mascota
            </li>
          </ul>
          <WhatsAppButton />
        </div>
      </div>
    ),
  },
  {
    id: "crematorio",
    label: "Crematorio",
    content: (
      <div className="grid md:grid-cols-2 gap-8 items-center h-full">
        <img
          src={crematorioImg}
          alt="Crematorio de Mascotas"
          className="rounded-xl w-full h-64 md:h-full object-cover shadow-lg"
        />
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center gap-3">
             <div className="bg-brand-orange/20 p-3 rounded-full text-brand-orange">
               <Flame size={32} />
             </div>
             <h2 className="text-3xl font-bold text-gray-900">Crematorio de Mascotas</h2>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Un servicio digno y respetuoso para despedir a tu fiel amigo. Te acompañamos en los momentos más difíciles.
          </p>
          <ul className="space-y-2 mt-2">
            <li className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-brand-red-light rounded-full"></span>
              Cremación individual o colectiva
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-brand-red-light rounded-full"></span>
              Urnas personalizadas
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <span className="w-2 h-2 bg-brand-red-light rounded-full"></span>
              Certificado de cremación
            </li>
          </ul>
          <WhatsAppButton />
        </div>
      </div>
    ),
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Brindamos una atención integral para garantizar el bienestar físico y emocional de tus mascotas.
          </p>
        </div>
        
        <div className="flex justify-center">
          <AnimatedTabs 
            tabs={serviceTabs} 
            className="max-w-6xl"
          />
        </div>
      </div>
    </section>
  );
}