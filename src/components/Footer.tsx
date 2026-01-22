import { Facebook, Instagram } from 'lucide-react';
import logo from '../assets/logo.jpg';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <a href="#inicio" className="flex items-center gap-3 mb-4 group">
              <img src={logo} alt="VetPet Logo" className="h-10 w-10 rounded-full object-cover group-hover:opacity-80 transition" />
              <h3 className="text-2xl font-bold group-hover:text-brand-red-light transition-colors">VetPet</h3>
            </a>
            <p className="text-gray-400">
              Cuidando de tus mascotas con amor y profesionalismo en Milagro.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#inicio" className="hover:text-white transition">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-white transition">Servicios</a></li>
              <li><a href="#showcase" className="hover:text-white transition">Galería</a></li>
              <li><a href="#contacto" className="hover:text-white transition">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61557358957372&mibextid=ZbWKwL&ref=xav_pl_fb_external_link_ios" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-brand-red-light transition"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/vetpets_amorpets?igsh=ZzB2Y2owanh4OTc3" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-brand-red-light transition"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} VetPet. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}