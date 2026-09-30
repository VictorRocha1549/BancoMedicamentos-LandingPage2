import { Target, Eye, Heart, Users } from 'lucide-react';

export default function MissionVision() {
  return (
    <section id="mision" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold-600 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Nuestros Fundamentos
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            Misión y Visión
          </h2>
          <div className="w-24 h-1 gradient-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Misión */}
          <div className="card-hover bg-gradient-to-br from-navy-50 to-white p-8 lg:p-10 rounded-2xl border border-navy-100 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 rounded-xl bg-navy-900 flex items-center justify-center mr-4">
                <Target className="w-7 h-7 text-gold-400" />
              </div>
              <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-navy-900">
                Misión
              </h3>
            </div>
            <p className="text-navy-600 text-lg leading-relaxed">
              Proveer medicamentos de manera <span className="font-semibold text-navy-800">gratuita</span> a las personas 
              más necesitadas de Guaymas, Sonora, garantizando el acceso a la salud como un derecho 
              fundamental. Operamos bajo principios de caridad cristiana, responsabilidad social y 
              compromiso con el bienestar integral de los enfermos, ofreciendo atención digna y 
              medicamentos de calidad con el respaldo de un permiso sanitario vigente.
            </p>
            <div className="mt-6 flex items-center text-gold-600">
              <Heart className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Servicio desinteresado a la comunidad</span>
            </div>
          </div>

          {/* Visión */}
          <div className="card-hover bg-gradient-to-br from-gold-50 to-white p-8 lg:p-10 rounded-2xl border border-gold-100 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 rounded-xl bg-gold-600 flex items-center justify-center mr-4">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-navy-900">
                Visión
              </h3>
            </div>
            <p className="text-navy-600 text-lg leading-relaxed">
              Ser el banco de medicamentos de la sociedad civil más reconocido y confiable del 
              sur de Sonora, referente de transparencia, eficiencia y amor al prójimo. Aspiramos 
              a ampliar nuestro alcance para cubrir las necesidades de salud de toda la comunidad 
              guaymense, fortaleciendo alianzas con instituciones de salud y generando una red 
              de apoyo solidario que transforme vidas.
            </p>
            <div className="mt-6 flex items-center text-gold-600">
              <Users className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Impacto comunitario creciente</span>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: '❤️', title: 'Caridad', desc: 'Amor al prójimo' },
            { icon: '🤝', title: 'Solidaridad', desc: 'Apoyo mutuo' },
            { icon: '🛡️', title: 'Transparencia', desc: 'Rendición de cuentas' },
            { icon: '⭐', title: 'Excelencia', desc: 'Calidad en servicio' },
          ].map((value) => (
            <div key={value.title} className="text-center p-6 rounded-xl bg-navy-50/50 border border-navy-100/50">
              <span className="text-3xl mb-3 block">{value.icon}</span>
              <h4 className="font-semibold text-navy-900 mb-1">{value.title}</h4>
              <p className="text-sm text-navy-500">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
