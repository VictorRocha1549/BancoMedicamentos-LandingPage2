import { Heart, Shield, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--color-gold-500)_0%,_transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-gold-600)_0%,_transparent_50%)]"></div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Cross Symbol */}
        <div className="animate-fade-in mb-8 flex justify-center">
          <div className="relative">
            <div className="w-24 h-24 rounded-full border-2 border-gold-400/50 flex items-center justify-center backdrop-blur-sm bg-white/5">
              <div className="w-16 h-16 rounded-full border border-gold-400/30 flex items-center justify-center">
                <svg viewBox="0 0 40 40" className="w-10 h-10 text-gold-400" fill="currentColor">
                  <rect x="16" y="4" width="8" height="32" rx="2" />
                  <rect x="6" y="14" width="28" height="8" rx="2" />
                </svg>
              </div>
            </div>
            <div className="absolute -inset-4 rounded-full border border-gold-400/10 animate-pulse"></div>
          </div>
        </div>

        {/* Title */}
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <p className="text-gold-400 text-sm sm:text-base tracking-[0.3em] uppercase mb-4 font-medium">
            Guaymas, Sonora
          </p>
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Banco de Medicamentos
          </h1>
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-semibold text-gradient-gold mb-6">
            Santa María de Guadalupe
          </h2>
          <p className="text-xl sm:text-2xl text-navy-200 font-light italic mb-2">
            "Salud de los Enfermos"
          </p>
        </div>

        {/* Description */}
        <div className="animate-fade-in mt-8" style={{ animationDelay: '0.4s' }}>
          <p className="text-lg sm:text-xl text-navy-200/90 max-w-3xl mx-auto leading-relaxed">
            Comprometidos con la salud y el bienestar de nuestra comunidad.
            Medicamentos <span className="text-gold-400 font-semibold">gratuitos</span> para quienes más lo necesitan.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="animate-fade-in mt-10 flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animationDelay: '0.6s' }}>
          <a
            href="#catalogo"
            className="px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-navy-900 font-bold rounded-xl shadow-lg shadow-gold-500/25 hover:shadow-gold-500/40 transition-all hover:scale-105 text-sm uppercase tracking-wider"
          >
            Ver Catálogo de Medicamentos
          </a>
          <a
            href="#contacto"
            className="px-8 py-4 border-2 border-white/30 text-white font-medium rounded-xl hover:bg-white/10 transition-all text-sm uppercase tracking-wider"
          >
            Contáctanos
          </a>
        </div>

        {/* Stats */}
        <div className="animate-fade-in mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto" style={{ animationDelay: '0.8s' }}>
          <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <Heart className="w-8 h-8 text-gold-400 mb-2" />
            <span className="text-2xl font-bold text-white">100%</span>
            <span className="text-sm text-navy-300">Gratuito</span>
          </div>
          <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <Shield className="w-8 h-8 text-gold-400 mb-2" />
            <span className="text-2xl font-bold text-white">COFEPRIS</span>
            <span className="text-sm text-navy-300">Permiso Sanitario</span>
          </div>
          <div className="flex flex-col items-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <Clock className="w-8 h-8 text-gold-400 mb-2" />
            <span className="text-2xl font-bold text-white">Lun - Sáb</span>
            <span className="text-sm text-navy-300">Horario de Atención</span>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
