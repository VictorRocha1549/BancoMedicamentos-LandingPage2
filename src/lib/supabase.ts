import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Medicamento {
  id: string;
  nombre: string;
  gramaje: string;
  descripcion?: string;
  imagen_url?: string;
  disponible: boolean;
  cantidad?: number;
  categoria?: string;
  created_at?: string;
}

export interface Campana {
  id: string;
  titulo: string;
  descripcion: string;
  fecha_inicio: string;
  fecha_fin?: string;
  imagen_url?: string;
  activa: boolean;
}

export const getMedicamentos = async (): Promise<Medicamento[]> => {
  try {
    const { data, error } = await supabase
      .from('medicamentos')
      .select('*')
      .order('nombre', { ascending: true });
    
    if (error) {
      console.warn('Supabase no disponible, usando datos de demostración');
      return getDemoMedicamentos();
    }
    
    return data || [];
  } catch {
    console.warn('Error de conexión, usando datos de demostración');
    return getDemoMedicamentos();
  }
};

export const getDemoMedicamentos = (): Medicamento[] => [
  {
    id: '1',
    nombre: 'Paracetamol',
    gramaje: '500 mg',
    descripcion: 'Analgésico y antipirético para dolor leve a moderado y fiebre.',
    disponible: true,
    cantidad: 150,
    categoria: 'Analgésico',
  },
  {
    id: '2',
    nombre: 'Ibuprofeno',
    gramaje: '400 mg',
    descripcion: 'Antiinflamatorio no esteroideo para dolor e inflamación.',
    disponible: true,
    cantidad: 85,
    categoria: 'Antiinflamatorio',
  },
  {
    id: '3',
    nombre: 'Omeprazol',
    gramaje: '20 mg',
    descripcion: 'Inhibidor de bomba de protones para acidez y reflujo.',
    disponible: true,
    cantidad: 120,
    categoria: 'Gastrointestinal',
  },
  {
    id: '4',
    nombre: 'Metformina',
    gramaje: '850 mg',
    descripcion: 'Antidiabético oral para control de glucosa en diabetes tipo 2.',
    disponible: true,
    cantidad: 95,
    categoria: 'Antidiabético',
  },
  {
    id: '5',
    nombre: 'Losartán',
    gramaje: '50 mg',
    descripcion: 'Antihipertensivo para control de presión arterial.',
    disponible: true,
    cantidad: 110,
    categoria: 'Antihipertensivo',
  },
  {
    id: '6',
    nombre: 'Amoxicilina',
    gramaje: '500 mg',
    descripcion: 'Antibiótico de amplio espectro para infecciones bacterianas.',
    disponible: false,
    cantidad: 0,
    categoria: 'Antibiótico',
  },
  {
    id: '7',
    nombre: 'Atorvastatina',
    gramaje: '20 mg',
    descripcion: 'Estatina para reducción de colesterol y triglicéridos.',
    disponible: true,
    cantidad: 75,
    categoria: 'Hipolipemiante',
  },
  {
    id: '8',
    nombre: 'Salbutamol',
    gramaje: '100 mcg/dosis',
    descripcion: 'Broncodilatador inhalado para asma y EPOC.',
    disponible: true,
    cantidad: 40,
    categoria: 'Broncodilatador',
  },
  {
    id: '9',
    nombre: 'Diclofenaco',
    gramaje: '50 mg',
    descripcion: 'Antiinflamatorio no esteroideo para dolor articular y muscular.',
    disponible: false,
    cantidad: 0,
    categoria: 'Antiinflamatorio',
  },
  {
    id: '10',
    nombre: 'Loratadina',
    gramaje: '10 mg',
    descripcion: 'Antihistamínico para alergias y rinitis.',
    disponible: true,
    cantidad: 200,
    categoria: 'Antihistamínico',
  },
  {
    id: '11',
    nombre: 'Enalapril',
    gramaje: '10 mg',
    descripcion: 'IECA para hipertensión arterial e insuficiencia cardíaca.',
    disponible: true,
    cantidad: 60,
    categoria: 'Antihipertensivo',
  },
  {
    id: '12',
    nombre: 'Ranitidina',
    gramaje: '150 mg',
    descripcion: 'Antiácido para úlceras gástricas y reflujo.',
    disponible: false,
    cantidad: 0,
    categoria: 'Gastrointestinal',
  },
];
