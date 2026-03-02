import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const articles = [
    {
        title: "Tendencias en Gobierno Corporativo para 2024",
        date: "15 de Enero, 2024",
        category: "Corporativo",
        excerpt: "Analizamos los cambios regulatorios clave que afectarán a las juntas directivas y la responsabilidad fiduciaria en el próximo año fiscal.",
    },
    {
        title: "Navegando la Propiedad Intelectual en la Era de la IA",
        date: "28 de Febrero, 2024",
        category: "Tecnología",
        excerpt: "Cómo proteger sus activos digitales cuando la inteligencia artificial generativa desafía las nociones tradicionales de autoría.",
    },
    {
        title: "Estrategias de Planificación Patrimonial Internacional",
        date: "10 de Marzo, 2024",
        category: "Family Office",
        excerpt: "Una guía para familias de alto patrimonio con activos distribuidos globalmente, enfocada en la eficiencia fiscal y la sucesión.",
    }
];

export function BlogPage() {
    return (
        <div className="pt-20">
            <div className="bg-primary text-white py-20 text-center">
                <h1 className="text-4xl md:text-5xl font-serif mb-4">Artículos y Perspectivas</h1>
                <p className="text-slate-300 max-w-2xl mx-auto px-6">
                    Análisis experto sobre los desarrollos legales más relevantes para su negocio y patrimonio.
                </p>
            </div>

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="grid gap-12">
                        {articles.map((article, index) => (
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="border-b border-slate-100 pb-12 last:border-0"
                            >
                                <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                                    <span className="text-accent font-medium uppercase tracking-wide">{article.category}</span>
                                    <span>•</span>
                                    <span>{article.date}</span>
                                </div>
                                <h2 className="text-3xl font-serif font-bold text-primary mb-4 hover:text-accent transition-colors cursor-pointer">
                                    {article.title}
                                </h2>
                                <p className="text-slate-600 leading-relaxed text-lg mb-6">
                                    {article.excerpt}
                                </p>
                                <button className="flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                                    Leer Artículo Completo <ArrowRight className="w-4 h-4" />
                                </button>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
