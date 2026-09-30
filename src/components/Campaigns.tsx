import { Calendar, Megaphone, Users, Heart } from 'lucide-react';

const campaigns = [
  {
    title: 'Jornada de Salud Integral',
    description: 'Atención médica gratuita, toma de presión arterial, glucosa y entrega de medicamentos para la comunidad de Guaymas.',
    date: 'Cada primer sábado de mes',
    status: 'active',
    icon: Heart,
    color: 'from-red-500 to-pink-500',
  },
  {
    title: 'Colecta de Medicamentos',
    description: 'Campaña permanente de recolección de medicamentos en buen estado y no caducos para donación a personas necesitadas.',
    date: 'Permanente',
    status: 'active',
    icon: Megaphone,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Salud para el Adulto Mayor',
    description: 'Programa especial de atención y entrega de medicamentos crónicos para adultos mayores de la comunidad.',
    date: 'Lunes a Viernes',
    status: 'active',
    icon: Users,
    color: 'from-purple-500 to-indigo-500',
  },
  {
    title: 'Educación para la Salud',
    description: 'Pláticas y talleres sobre prevención de enfermedades, uso correcto de medicamentos y hábitos saludables.',
    date: 'Cada 15 días',
    status: 'upcoming',
    icon: Calendar,
    color: 'from-green-500 to-emerald-500',
  },
];

export default function Campaigns() {
  return (
    <section id="campanas" className="py-20 lg:py-28 bg-navy-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold-600 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Impacto Social
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            Campañas y Programas
          </h2>
          <div className="w-24 h-1 gradient-gold mx-auto rounded-full mb-6"></div>
          <p className="text-navy-600 text-lg max-w-2xl mx-auto">
            Trabajamos constantemente para llevar salud y esperanza a quienes más lo necesitan 
            a través de diversas campañas y programas comunitarios.
          </p>
        </div>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {campaigns.map((campaign) => (
            <div key={campaign.title} className="card-hover bg-white rounded-2xl border border-navy-100 overflow-hidden shadow-sm">
              <div className={`h-2 bg-gradient-to-r ${campaign.color}`}></div>
              <div className="p-6 lg:p-8">
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${campaign.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <campaign.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-playfair text-xl font-bold text-navy-900">
                        {campaign.title}
                      </h3>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                        campaign.status === 'active' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {campaign.status === 'active' ? 'Activa' : 'Próxima'}
                      </span>
                    </div>
                    <p className="text-navy-600 leading-relaxed mb-4">
                      {campaign.description}
                    </p>
                    <div className="flex items-center text-sm text-navy-500">
                      <Calendar className="w-4 h-4 mr-2 text-gold-500" />
                      <span className="font-medium">{campaign.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-gold-50 to-gold-100 border border-gold-200 rounded-2xl p-8">
            <h3 className="font-playfair text-2xl font-bold text-navy-900 mb-3">
              ¿Deseas participar como voluntario?
            </h3>
            <p className="text-navy-600 mb-6 max-w-xl mx-auto">
              Tu tiempo y talento pueden hacer la diferencia en la vida de muchas personas. 
              Únete a nuestro equipo de voluntarios.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center px-6 py-3 bg-navy-900 text-white font-semibold rounded-xl hover:bg-navy-800 transition-colors"
            >
              <Heart className="w-5 h-5 mr-2" />
              Quiero ser voluntario
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
