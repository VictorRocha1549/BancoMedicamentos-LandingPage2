import { useState, useEffect } from 'react';
import { Search, Filter, CheckCircle, XCircle, Package, Pill } from 'lucide-react';
import { getMedicamentos, type Medicamento } from '../lib/supabase';

export default function Catalog() {
  const [medicamentos, setMedicamentos] = useState<Medicamento[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'available' | 'unavailable'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    const fetchMedicamentos = async () => {
      setLoading(true);
      const data = await getMedicamentos();
      setMedicamentos(data);
      setLoading(false);
    };
    fetchMedicamentos();
  }, []);

  const categories = [...new Set(medicamentos.map((m) => m.categoria).filter(Boolean))] as string[];

  const filteredMedicamentos = medicamentos.filter((med) => {
    const matchesSearch = med.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      med.gramaje.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (med.descripcion?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false);
    const matchesStatus = filterStatus === 'all' || 
      (filterStatus === 'available' && med.disponible) ||
      (filterStatus === 'unavailable' && !med.disponible);
    const matchesCategory = selectedCategory === 'all' || med.categoria === selectedCategory;
    return matchesSearch && matchesStatus && matchesCategory;
  });

  return (
    <section id="catalogo" className="py-20 lg:py-28 bg-navy-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-gold-600 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Nuestro Inventario
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-4">
            Catálogo de Medicamentos
          </h2>
          <div className="w-24 h-1 gradient-gold mx-auto rounded-full mb-6"></div>
          <p className="text-navy-600 text-lg max-w-2xl mx-auto">
            Medicamentos <span className="font-bold text-gold-600">100% gratuitos</span> para la comunidad.
            Consulta la disponibilidad en tiempo real de nuestro inventario.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-sm border border-navy-100 p-4 sm:p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-400" />
              <input
                type="text"
                placeholder="Buscar medicamento..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-navy-50 border border-navy-200 rounded-xl text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all"
              />
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-navy-400" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value as 'all' | 'available' | 'unavailable')}
                className="px-4 py-3 bg-navy-50 border border-navy-200 rounded-xl text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-400"
              >
                <option value="all">Todos</option>
                <option value="available">Disponibles</option>
                <option value="unavailable">Agotados</option>
              </select>
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-navy-50 border border-navy-200 rounded-xl text-navy-900 focus:outline-none focus:ring-2 focus:ring-gold-400"
            >
              <option value="all">Todas las categorías</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Results count */}
          <div className="mt-4 flex items-center justify-between text-sm text-navy-500">
            <span>
              <span className="font-semibold text-navy-700">{filteredMedicamentos.length}</span> medicamentos encontrados
            </span>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                Disponible
              </span>
              <span className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-red-400"></span>
                Agotado
              </span>
            </div>
          </div>
        </div>

        {/* Medicamentos Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl border border-navy-100 p-6 animate-pulse">
                <div className="w-full h-40 bg-navy-100 rounded-xl mb-4"></div>
                <div className="h-5 bg-navy-100 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-navy-100 rounded w-1/2 mb-4"></div>
                <div className="h-8 bg-navy-100 rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMedicamentos.map((med) => (
              <MedicamentoCard key={med.id} medicamento={med} />
            ))}
          </div>
        )}

        {filteredMedicamentos.length === 0 && !loading && (
          <div className="text-center py-16">
            <Pill className="w-16 h-16 text-navy-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-navy-700 mb-2">No se encontraron medicamentos</h3>
            <p className="text-navy-500">Intenta con otro término de búsqueda o cambia los filtros.</p>
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-12 bg-white rounded-2xl border border-gold-200 p-6 text-center">
          <p className="text-navy-600 text-sm">
            <span className="font-semibold text-navy-800">Nota importante:</span> Todos los medicamentos son proporcionados 
            de forma <span className="font-bold text-gold-600">gratuita</span>. Consulte a su médico antes de tomar cualquier 
            medicamento. Los medicamentos se entregan según disponibilidad de inventario y bajo prescripción médica.
          </p>
        </div>
      </div>
    </section>
  );
}

function MedicamentoCard({ medicamento }: { medicamento: Medicamento }) {
  const categoryColors: Record<string, string> = {
    'Analgésico': 'bg-blue-100 text-blue-700',
    'Antiinflamatorio': 'bg-orange-100 text-orange-700',
    'Gastrointestinal': 'bg-green-100 text-green-700',
    'Antidiabético': 'bg-purple-100 text-purple-700',
    'Antihipertensivo': 'bg-red-100 text-red-700',
    'Antibiótico': 'bg-yellow-100 text-yellow-700',
    'Hipolipemiante': 'bg-pink-100 text-pink-700',
    'Broncodilatador': 'bg-cyan-100 text-cyan-700',
    'Antihistamínico': 'bg-indigo-100 text-indigo-700',
  };

  const categoryIcons: Record<string, string> = {
    'Analgésico': '💊',
    'Antiinflamatorio': '🩹',
    'Gastrointestinal': '🫁',
    'Antidiabético': '💉',
    'Antihipertensivo': '❤️',
    'Antibiótico': '🦠',
    'Hipolipemiante': '🫀',
    'Broncodilatador': '🌬️',
    'Antihistamínico': '🤧',
  };

  const colorClass = categoryColors[medicamento.categoria || ''] || 'bg-gray-100 text-gray-700';
  const icon = categoryIcons[medicamento.categoria || ''] || '💊';

  return (
    <div className={`card-hover bg-white rounded-2xl border overflow-hidden ${
      medicamento.disponible ? 'border-navy-100' : 'border-red-100 opacity-75'
    }`}>
      {/* Image/Icon Area */}
      <div className={`relative h-40 flex items-center justify-center ${
        medicamento.disponible 
          ? 'bg-gradient-to-br from-navy-50 to-blue-50' 
          : 'bg-gradient-to-br from-gray-50 to-red-50'
      }`}>
        <span className="text-5xl">{icon}</span>
        {/* Status Badge */}
        <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${
          medicamento.disponible 
            ? 'bg-green-100 text-green-700 border border-green-200' 
            : 'bg-red-100 text-red-600 border border-red-200'
        }`}>
          {medicamento.disponible ? (
            <>
              <CheckCircle className="w-3.5 h-3.5" />
              Disponible
            </>
          ) : (
            <>
              <XCircle className="w-3.5 h-3.5" />
              Agotado
            </>
          )}
        </div>
        {/* Free Badge */}
        <div className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-bold bg-gold-100 text-gold-700 border border-gold-200">
          GRATUITO
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium mb-2 ${colorClass}`}>
          {medicamento.categoria || 'General'}
        </div>
        <h3 className="font-bold text-navy-900 text-lg mb-1">{medicamento.nombre}</h3>
        <p className="text-gold-600 font-semibold text-sm mb-2 flex items-center gap-1">
          <Package className="w-4 h-4" />
          {medicamento.gramaje}
        </p>
        {medicamento.descripcion && (
          <p className="text-navy-500 text-sm leading-relaxed mb-3 line-clamp-2">
            {medicamento.descripcion}
          </p>
        )}
        {medicamento.disponible && medicamento.cantidad && (
          <div className="mt-3 pt-3 border-t border-navy-50">
            <div className="flex items-center justify-between text-xs">
              <span className="text-navy-500">Existencia:</span>
              <span className={`font-semibold ${
                medicamento.cantidad > 50 ? 'text-green-600' : 
                medicamento.cantidad > 20 ? 'text-yellow-600' : 'text-orange-600'
              }`}>
                {medicamento.cantidad} unidades
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
