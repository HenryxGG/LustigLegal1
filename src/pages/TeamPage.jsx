import { Team } from '../components/sections/Team';

export function TeamPage() {
    return (
        <div className="pt-20">
            <div className="bg-primary text-white py-20 text-center">
                <h1 className="text-4xl md:text-5xl font-serif mb-4">Nuestro Liderazgo</h1>
                <p className="text-slate-300 max-w-2xl mx-auto px-6">
                    Conozca a los expertos legales dedicados a brindarle representación de clase mundial.
                </p>
            </div>
            <Team />
        </div>
    );
}
