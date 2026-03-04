import { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { practiceAreasData } from '../data/practiceAreas';

export function PracticeAreaDetailPage() {
    const { slug } = useParams();
    const [areaData, setAreaData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Encontrar los datos del área basada en el slug
        const data = practiceAreasData.find(area => area.slug === slug);
        setAreaData(data);
        setIsLoading(false);
    }, [slug]);

    if (isLoading) {
        return (
            <div className="min-h-screen pt-20 flex items-center justify-center bg-slate-50">
                <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    // 404 / Redirect handling si no existe el slug
    if (!areaData) {
        return <Navigate to="/practica" replace />;
    }

    // JSON-LD estructurado
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": `Lustig Legal - ${areaData.title}`,
        "description": areaData.metaDescription,
        "serviceType": areaData.title,
        "provider": {
            "@type": "LegalService",
            "name": "Lustig Legal"
        }
    };

    return (
        <div className="pt-20 bg-slate-50 min-h-screen">
            {/* SEO & Metadata */}
            <Helmet>
                <title>{areaData.metaTitle}</title>
                <meta name="description" content={areaData.metaDescription} />
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            </Helmet>

            {/* Breadcrumbs */}
            <div className="bg-primary text-white/80 py-4 border-b border-white/10">
                <div className="container mx-auto px-6 flex items-center text-sm">
                    <Link to="/" className="hover:text-accent transition-colors focus-visible:ring-2 focus-visible:ring-accent rounded px-1 -mx-1 outline-none">Inicio</Link>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <Link to="/practica" className="hover:text-accent transition-colors focus-visible:ring-2 focus-visible:ring-accent rounded px-1 -mx-1 outline-none">Áreas de Práctica</Link>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    <span className="text-white font-medium">{areaData.title}</span>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative bg-primary text-white py-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-primary/90 mix-blend-multiply z-10" />
                    <img
                        src={areaData.heroImage}
                        alt={`${areaData.title} representación`}
                        className="w-full h-full object-cover"
                        loading="eager" // Hero image siempre eager
                    />
                </div>

                <div className="container mx-auto px-6 relative z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <div className="flex items-center mb-6">
                            <areaData.icon className="w-12 h-12 text-accent mr-4" strokeWidth={1.5} />
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
                                {areaData.title}
                            </h1>
                        </div>
                        <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed font-light">
                            {areaData.shortDescription}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Left Column - Content */}
                        <div className="lg:w-2/3">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                <Link
                                    to="/practica"
                                    className="inline-flex items-center text-accent hover:text-accent-dark font-medium mb-8 group transition-colors focus-visible:ring-2 focus-visible:ring-accent-dark rounded p-1 -ml-1 outline-none"
                                >
                                    <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
                                    Volver a Áreas de Práctica
                                </Link>

                                <h2 className="text-3xl font-serif font-bold text-primary mb-6">Visión General</h2>
                                <p className="text-slate-700 text-lg leading-relaxed mb-12">
                                    {areaData.fullDescription}
                                </p>

                                <h2 className="text-3xl font-serif font-bold text-primary mb-8">Nuestros Servicios Específicos</h2>
                                <div className="grid sm:grid-cols-2 gap-4 mb-16">
                                    {areaData.servicesList.map((service, idx) => (
                                        <div key={idx} className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-slate-100">
                                            <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mr-3 mt-0.5" />
                                            <span className="text-slate-700 font-medium">{service}</span>
                                        </div>
                                    ))}
                                </div>

                                <h2 className="text-3xl font-serif font-bold text-primary mb-8">Experiencia Probada</h2>
                                <div className="space-y-6">
                                    {areaData.successCases.map((caseStudy, idx) => (
                                        <div key={idx} className="bg-white p-8 rounded-xl shadow-md border-l-4 border-accent">
                                            <h3 className="text-xl font-bold text-primary mb-3 font-serif">{caseStudy.title}</h3>
                                            <p className="text-slate-600 leading-relaxed">{caseStudy.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column - Sidebar / CTA */}
                        <div className="lg:w-1/3">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                className="sticky top-32 bg-primary text-white rounded-2xl p-8 shadow-2xl"
                            >
                                <h3 className="text-2xl font-serif font-bold mb-4">¿Necesita asesoramiento en {areaData.title}?</h3>
                                <p className="text-slate-300 mb-8 leading-relaxed">
                                    Nuestro equipo está preparado para evaluar su caso y proporcionarle la representación estratégica que necesita.
                                </p>

                                <div className="space-y-4">
                                    <a
                                        href="https://wa.me/1234567890"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full text-center bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-6 rounded-lg transition-colors duration-300 focus-visible:ring-4 focus-visible:ring-accent outline-none"
                                    >
                                        Consultar por WhatsApp
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
