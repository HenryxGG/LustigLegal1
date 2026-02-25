import { PracticeAreas } from '../components/sections/PracticeAreas';

export function PracticeAreasPage() {
    return (
        <div className="pt-20">
            <div className="bg-primary text-white py-20 text-center">
                <h1 className="text-4xl md:text-5xl font-serif mb-4">Nuestras Áreas de Práctica</h1>
                <p className="text-slate-300 max-w-2xl mx-auto px-6">
                    Ofrecemos un espectro completo de servicios legales diseñados para proteger sus intereses y asegurar su futuro.
                </p>
            </div>
            <PracticeAreas />
        </div>
    );
}
