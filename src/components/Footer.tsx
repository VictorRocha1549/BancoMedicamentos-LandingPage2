import { Cross, Heart, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gold-500/20 border border-gold-400/30 flex items-center justify-center">
                <Cross className="w-5 h-5 text-gold-400" />
              </div>
              <div>
                <p className="font-playfair font-bold text-lg leading-tight">Santa María de Guadalupe</p>
                <p className="text-gold-400 text-xs tracking-wider uppercase">Banco de Medicamentos</p>
              </div>
            </div>
            <p className="text-navy-300 text-sm leading-relaxed mb-4">
              "Salud de los Enfermos" — Servimos con amor y dedicación a nuestra comunidad 
              en Guaymas, Sonora, proporcionando medicamentos gratuitos.
            </p>
            <div className="flex items-center gap-2 text-gold-400">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">Medicamentos 100% Gratuitos</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-bold text-lg mb-4 text-gold-300">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {[
                { href: '#inicio', label: 'Inicio' },
                { href: '#mision', label: 'Misión y Visión' },
                { href: '#catalogo', label: 'Catálogo de Medicamentos' },
                { href: '#equipo', label: 'Nuestro Equipo' },
                { href: '#campanas', label: 'Campañas' },
                { href: '#permiso', label: 'Permiso Sanitario' },
                { href: '#contacto', label: 'Contacto' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-navy-300 hover:text-gold-400 text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair font-bold text-lg mb-4 text-gold-300">Nuestros Servicios</h4>
            <ul className="space-y-2 text-navy-300 text-sm">
              <li>• Entrega gratuita de medicamentos</li>
              <li>• Consulta de disponibilidad</li>
              <li>• Recepción de donaciones</li>
              <li>• Jornadas de salud</li>
              <li>• Orientación farmacéutica</li>
              <li>• Programa adulto mayor</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair font-bold text-lg mb-4 text-gold-300">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <p className="text-navy-300 text-sm">Guaymas, Sonora, México</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <p className="text-navy-300 text-sm">(622) 222-XXXX</p>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold-400 mt-0.5 flex-shrink-0" />
                <p className="text-navy-300 text-sm">contacto@bancodeMedicamentos-guaymas.org</p>
              </div>
            </div>

            {/* Schedule */}
            <div className="mt-6 bg-white/5 rounded-xl p-4 border border-white/10">
              <p className="text-gold-400 font-semibold text-sm mb-2">Horario de Atención</p>
              <p className="text-navy-300 text-xs">Lun - Vie: 9:00 - 14:00</p>
              <p className="text-navy-300 text-xs">Sábado: 9:00 - 12:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-navy-400 text-sm text-center md:text-left">
              © {currentYear} Banco de Medicamentos Santa María de Guadalupe. Todos los derechos reservados.
            </p>
            <p className="text-navy-500 text-xs text-center md:text-right">
              "Salud de los Enfermos" — Guaymas, Sonora, México
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
