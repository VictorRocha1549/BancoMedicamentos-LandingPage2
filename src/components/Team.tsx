import { UserCheck, Stethoscope, Heart, BookOpen } from 'lucide-react';

const teamMembers = [
  {
    name: 'Padre Director',
    role: 'Director General',
    description: 'Liderazgo espiritual y administrativo del banco de medicamentos.',
    icon: BookOpen,
  },
  {
    name: 'Dr. Responsable',
    role: 'Director Médico',
    description: 'Supervisión médica y validación de prescripciones.',
    icon: Stethoscope,
  },
  {
    name: 'Q.F.P. Titular',
    role: 'Químico Farmacéutico',
    description: 'Control de inventario, caducidad y calidad de medicamentos.',
    icon: Heart,
  },
  {
    name: 'Voluntarias',
    role: 'Equipo de Servicio',
    description: 'Atención al público, distribución y apoyo logístico.',
    icon: UserCheck,
  },
];

export default function Team() {
  return (
    <section id="equipo" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold-600 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Quiénes Servimos
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            Nuestro Equipo
          </h2>
          <div className="w-24 h-1 gradient-gold mx-auto rounded-full mb-6"></div>
          <p className="text-navy-600 text-lg max-w-2xl mx-auto">
            Un equipo comprometido con la salud de la comunidad, trabajando con vocación 
            de servicio y profesionalismo para brindar la mejor atención.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="card-hover text-center group">
              <div className="relative mb-6">
                <div className="w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-navy-100 to-navy-50 border-4 border-white shadow-lg flex items-center justify-center group-hover:border-gold-300 transition-colors">
                  <member.icon className="w-12 h-12 text-navy-600 group-hover:text-gold-600 transition-colors" />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center shadow-md">
                  <span className="text-white text-xs">✝</span>
                </div>
              </div>
              <h3 className="font-playfair text-xl font-bold text-navy-900 mb-1">
                {member.name}
              </h3>
              <p className="text-gold-600 font-semibold text-sm mb-3">{member.role}</p>
              <p className="text-navy-500 text-sm leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl lg:text-4xl font-bold text-gold-400 mb-1">15+</p>
              <p className="text-navy-300 text-sm">Voluntarios activos</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-bold text-gold-400 mb-1">500+</p>
              <p className="text-navy-300 text-sm">Familias atendidas/mes</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-bold text-gold-400 mb-1">2,000+</p>
              <p className="text-navy-300 text-sm">Medicamentos entregados/mes</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-bold text-gold-400 mb-1">5+</p>
              <p className="text-navy-300 text-sm">Años de servicio</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
