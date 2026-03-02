import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "Su enfoque estratégico y dedicación inquebrantable salvaron nuestra empresa durante una transición crítica.",
        author: "CEO, Fortune 500 Tech Firm"
    },
    {
        quote: "Lustig & Asociados brindó claridad y confianza cuando más lo necesitábamos. Verdaderamente excepcional.",
        author: "Director, Grupo Inmobiliario Global"
    },
    {
        quote: "Un nivel de sofisticación y atención al detalle que es raro en el panorama legal actual.",
        author: "Fundador, Capital Innovación"
    }
];

export function SocialProof() {
    return (
        <section className="py-20 bg-primary text-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    {testimonials.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <span className="text-6xl text-accent/20 font-serif leading-none mb-6">"</span>
                            <p className="text-lg md:text-xl font-serif italic text-slate-300 mb-6 leading-relaxed">
                                {item.quote}
                            </p>
                            <p className="text-accent text-sm font-bold uppercase tracking-widest">
                                — {item.author}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
