import { motion } from 'framer-motion';

const cases = [
    {
        title: "Adquisición Inmobiliaria TechHub",
        category: "Bienes Raíces / Corporativo",
        result: "Transacción de $450M Exitosa",
        description: "Asesoramos a un conglomerado tecnológico en la adquisición de su nueva sede global, navegando complejas regulaciones de zonificación y financiamiento.",
    },
    {
        title: "Defensa de Patente Farmacéutica",
        category: "Propiedad Intelectual",
        result: "Veredicto a Favor",
        description: "Protegimos con éxito la patente clave de una biotecnológica contra una infracción internacional, asegurando la exclusividad de mercado por 10 años más.",
    },
    {
        title: "Reestructuración Grupo Omega",
        category: "Derecho Corporativo",
        result: "Optimización Fiscal y Operativa",
        description: "Implementamos una reestructuración corporativa completa para un grupo multinacional, reduciendo la exposición fiscal y mejorando la eficiencia operativa.",
    },
    {
        title: "Estado vs. Smith & Asociados",
        category: "Defensa Penal",
        result: "Cargos Desestimados",
        description: "Logramos la desestimación total de cargos por supuestos delitos financieros mediante una defensa estratégica basada en la falta de evidencia forense.",
    }
];

export function CaseStudiesPage() {
    return (
        <div className="pt-20">
            <div className="bg-primary text-white py-20 text-center">
                <h1 className="text-4xl md:text-5xl font-serif mb-4">Casos de Éxito</h1>
                <p className="text-slate-300 max-w-2xl mx-auto px-6">
                    Nuestra reputación se construye sobre resultados probados en los escenarios legales más desafiantes.
                </p>
            </div>

            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {cases.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="text-accent text-xs font-bold uppercase tracking-widest mb-3">
                                    {item.category}
                                </div>
                                <h3 className="text-2xl font-serif font-bold text-primary mb-2">
                                    {item.title}
                                </h3>
                                <div className="inline-block bg-primary/5 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4 border border-primary/10">
                                    {item.result}
                                </div>
                                <p className="text-slate-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
