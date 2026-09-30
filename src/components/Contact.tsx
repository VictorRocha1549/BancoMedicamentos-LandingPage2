import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' });
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-navy-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold-600 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Estamos para Servirte
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            Contacto
          </h2>
          <div className="w-24 h-1 gradient-gold mx-auto rounded-full mb-6"></div>
          <p className="text-navy-600 text-lg max-w-2xl mx-auto">
            ¿Necesitas medicamentos o información? No dudes en comunicarte con nosotros. 
            Estamos aquí para servirte con amor y dedicación.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl border border-navy-100 p-6 shadow-sm">
              <h3 className="font-playfair text-xl font-bold text-navy-900 mb-6">Información de Contacto</h3>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-navy-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-800 text-sm">Dirección</p>
                    <p className="text-navy-600 text-sm">
                      Guaymas, Sonora, México<br />
                      Parroquia Santa María de Guadalupe
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy-100 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-navy-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-800 text-sm">Teléfono</p>
                    <p className="text-navy-600 text-sm">(622) 222-XXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-navy-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-800 text-sm">Correo Electrónico</p>
                    <p className="text-navy-600 text-sm">contacto@bancodeMedicamentos-guaymas.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-navy-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-navy-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-800 text-sm">Horario de Atención</p>
                    <p className="text-navy-600 text-sm">
                      Lunes a Viernes: 9:00 - 14:00<br />
                      Sábados: 9:00 - 12:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-white rounded-2xl border border-navy-100 overflow-hidden shadow-sm">
              <div className="h-48 bg-gradient-to-br from-navy-100 to-navy-50 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-navy-400 mx-auto mb-2" />
                  <p className="text-navy-500 text-sm font-medium">Guaymas, Sonora</p>
                  <p className="text-navy-400 text-xs">México</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-navy-100 p-6 lg:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="w-6 h-6 text-gold-500" />
                <h3 className="font-playfair text-xl font-bold text-navy-900">Envíanos un Mensaje</h3>
              </div>

              {submitted && (
                <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4 text-green-700 text-sm">
                  ✅ ¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1.5">Nombre completo *</label>
                    <input
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full px-4 py-3 bg-navy-50 border border-navy-200 rounded-xl text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1.5">Teléfono</label>
                    <input
                      type="tel"
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      className="w-full px-4 py-3 bg-navy-50 border border-navy-200 rounded-xl text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
                      placeholder="(622) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-1.5">Correo electrónico *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-navy-50 border border-navy-200 rounded-xl text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
                    placeholder="tu@correo.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-1.5">Asunto *</label>
                  <select
                    required
                    value={formData.asunto}
                    onChange={(e) => setFormData({ ...formData, asunto: e.target.value })}
                    className="w-full px-4 py-3 bg-navy-50 border border-navy-200 rounded-xl text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="medicamentos">Consulta sobre medicamentos</option>
                    <option value="donacion">Quiero donar medicamentos</option>
                    <option value="voluntario">Quiero ser voluntario</option>
                    <option value="informacion">Información general</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-1.5">Mensaje *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    className="w-full px-4 py-3 bg-navy-50 border border-navy-200 rounded-xl text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all resize-none"
                    placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-navy-900 to-navy-800 text-white font-semibold rounded-xl hover:from-navy-800 hover:to-navy-700 transition-all shadow-lg shadow-navy-900/20 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
