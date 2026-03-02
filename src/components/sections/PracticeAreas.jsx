import { motion } from 'framer-motion';
import { Scale, Shield, Users, FileText, Briefcase, Gavel } from 'lucide-react';

const practices = [
    {
        title: "Derecho Corporativo",
        description: "Navegando complejas fusiones, adquisiciones y gobierno corporativo con precisión.",
        icon: Briefcase,
    },
    {
        title: "Litigio Comercial",
        description: "Representación agresiva y estratégica en disputas comerciales de alto riesgo.",
        icon: Scale,
    },
    {
        title: "Propiedad Intelectual",
        description: "Protegiendo sus innovaciones y activos de marca en un mercado global competitivo.",
        icon: Shield,
    },
    {
        title: "Bienes Raíces",
        description: "Asesoría integral para transacciones y desarrollo de propiedades comerciales.",
        icon: FileText,
    },
    {
        title: "Family Office",
        description: "Gestión legal discreta y holística para individuos de alto patrimonio neto.",
        icon: Users,
    },
    {
        title: "Defensa Penal",
        description: "Defensa inquebrantable para aquellos que enfrentan serias acusaciones de delitos financieros.",
        icon: Gavel,
    },
];

export function PracticeAreas() {
    return (
        <section id="servicios" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">Áreas de Práctica</h2>
                    <div className="h-1 w-20 bg-accent mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {practices.map((practice, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group p-8 border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-accent transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

                            <practice.icon className="w-10 h-10 text-accent mb-6" strokeWidth={1.5} />

                            <h3 className="text-xl font-serif font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                                {practice.title}
                            </h3>

                            <p className="text-slate-600 leading-relaxed text-sm">
                                {practice.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
