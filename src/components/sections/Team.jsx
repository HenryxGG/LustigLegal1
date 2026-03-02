import { Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const team = [
    {
        name: "Eleanor Lustig",
        role: "Socia Fundadora",
        bio: "Más de 25 años de experiencia en litigios corporativos y negociaciones de alto riesgo.",
        image: "images/socio1.jpg"
    },
    {
        name: "James Sterling",
        role: "Socio Principal",
        bio: "Ex fiscal federal especializado en defensa criminal de cuello blanco.",
        image: "images/socio2.jpg"
    },
    {
        name: "Sarah Chen",
        role: "Socia, División PI",
        bio: "Experta reconocida en derechos de propiedad intelectual internacional y ley de patentes.",
        image: "images/socio3.jpg"
    }
];

export function Team() {
    return (
        <section id="equipo" className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Nuestros Socios</h2>
                    <div className="h-1 w-20 bg-accent mx-auto" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opaxcity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                        >
                            <div className="h-64 bg-slate-200 flex items-center justify-center relative overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
                            </div>

                            <div className="p-8 text-center">
                                <h3 className="text-xl font-serif font-bold text-primary mb-1">{member.name}</h3>
                                <p className="text-accent text-sm font-medium uppercase tracking-wider mb-4">{member.role}</p>
                                <p className="text-slate-600 mb-6 text-sm leading-relaxed">{member.bio}</p>

                                <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Linkedin className="w-5 h-5 text-slate-400 hover:text-accent cursor-pointer" />
                                    <Twitter className="w-5 h-5 text-slate-400 hover:text-accent cursor-pointer" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
