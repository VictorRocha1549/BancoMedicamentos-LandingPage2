import { ShieldCheck, FileCheck, Award, AlertTriangle } from 'lucide-react';

export default function HealthPermit() {
  return (
    <section id="permiso" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold-600 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Marco Regulatorio
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            Permiso Sanitario
          </h2>
          <div className="w-24 h-1 gradient-gold mx-auto rounded-full mb-6"></div>
          <p className="text-navy-600 text-lg max-w-2xl mx-auto">
            Operamos bajo el marco legal vigente, con todos los permisos y autorizaciones 
            necesarios otorgados por la Comisión Federal para la Protección contra Riesgos Sanitarios.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Permit Info */}
          <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-2xl p-8 lg:p-10 text-white">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-xl bg-gold-500/20 border border-gold-400/30 flex items-center justify-center">
                <ShieldCheck className="w-9 h-9 text-gold-400" />
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-bold">COFEPRIS</h3>
                <p className="text-navy-300 text-sm">Comisión Federal para la Protección contra Riesgos Sanitarios</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <FileCheck className="w-5 h-5 text-gold-400" />
                  <span className="font-semibold text-gold-300">Tipo de Permiso</span>
                </div>
                <p className="text-navy-200 text-sm">
                  Permiso de funcionamiento como establecimiento de donación y distribución de medicamentos
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="w-5 h-5 text-gold-400" />
                  <span className="font-semibold text-gold-300">Responsable Sanitario</span>
                </div>
                <p className="text-navy-200 text-sm">
                  Químico Farmacéutico Biólogo con cédula profesional registrada ante la SEP
                </p>
              </div>

              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck className="w-5 h-5 text-gold-400" />
                  <span className="font-semibold text-gold-300">Cumplimiento Normativo</span>
                </div>
                <p className="text-navy-200 text-sm">
                  Cumplimiento con la NOM-059-SSA1-2015 y NOM-073-SSA1-2009 para la correcta 
                  conservación y distribución de medicamentos
                </p>
              </div>
            </div>
          </div>

          {/* Guarantees */}
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-bold text-green-800 text-lg mb-1">Medicamentos Verificados</h4>
                  <p className="text-green-700 text-sm leading-relaxed">
                    Todos los medicamentos pasan por un estricto control de calidad, verificando 
                    su autenticidad, fecha de caducidad y condiciones de almacenamiento.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <FileCheck className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-blue-800 text-lg mb-1">Trazabilidad Completa</h4>
                  <p className="text-blue-700 text-sm leading-relaxed">
                    Cada medicamento cuenta con registro de entrada y salida, garantizando 
                    la trazabilidad completa desde la recepción hasta la entrega al beneficiario.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-amber-800 text-lg mb-1">Uso Responsable</h4>
                  <p className="text-amber-700 text-sm leading-relaxed">
                    Los medicamentos se entregan bajo prescripción médica. No se automedique. 
                    Consulte siempre a un profesional de la salud antes de tomar cualquier medicamento.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-navy-50 border border-navy-200 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-navy-100 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-navy-600" />
                </div>
                <div>
                  <h4 className="font-bold text-navy-800 text-lg mb-1">Personal Calificado</h4>
                  <p className="text-navy-700 text-sm leading-relaxed">
                    Contamos con personal farmacéutico titulado que supervisa todos los procesos 
                    de recepción, almacenamiento y distribución de medicamentos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
