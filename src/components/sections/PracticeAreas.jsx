"use client"

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { practiceAreasData } from '../../data/practiceAreas';

export function PracticeAreas() {
    return (
        <section id="servicios" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">Áreas de Práctica</h2>
                    <div className="h-1 w-20 bg-accent mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {practiceAreasData.map((practice, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{
                                y: -8,
                                transition: { type: "spring", stiffness: 400, damping: 25 }
                            }}
                            className="group relative border-2 border-slate-100 bg-slate-50 hover:bg-white hover:border-accent hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden"
                        >
                            <Link
                                href={`/practicas/${practice.slug}`}
                                className="block p-8 h-full w-full outline-none focus-visible:ring-4 focus-visible:ring-accent focus-visible:ring-opacity-50"
                                aria-label={`Ver detalles sobre ${practice.title}`}
                            >
                                {/* Icon container */}
                                <practice.icon className="w-10 h-10 text-accent mb-6" strokeWidth={1.5} />

                                <h3 className="text-xl font-serif font-semibold text-primary mb-3 group-hover:text-accent transition-colors flex items-center justify-between">
                                    {practice.title}
                                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                                </h3>

                                <p className="text-slate-600 leading-relaxed text-sm">
                                    {practice.shortDescription}
                                </p>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
