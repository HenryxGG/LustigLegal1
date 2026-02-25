import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { motion } from 'framer-motion';

export function Contact() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    <div>
                        <h2 className="text-4xl font-serif font-bold text-primary mb-6">Póngase en Contacto</h2>
                        <p className="text-slate-600 mb-8 text-lg">
                            Lo invitamos a contactarnos para discutir sus necesidades legales. Las consultas iniciales son estrictamente confidenciales.
                        </p>

                        <div className="space-y-6">
                            <div>
                                <h4 className="font-serif text-lg font-semibold text-primary mb-2">Oficina</h4>
                                <p className="text-slate-600">
                                    Av. Amazonas 1234<br />
                                    Guayaquil, Ecuador
                                </p>
                            </div>
                            <div>
                                <h4 className="font-serif text-lg font-semibold text-primary mb-2">Directo</h4>
                                <p className="text-slate-600">+593 99999999</p>
                                <p className="text-slate-600">contact@ejemplo.com</p>
                            </div>
                        </div>
                    </div>

                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-50 p-8 md:p-10 rounded-lg border border-slate-100 shadow-sm"
                    >
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Nombre</label>
                                    <Input placeholder="Juan" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Apellido</label>
                                    <Input placeholder="Pérez" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Correo Electrónico</label>
                                <Input type="email" placeholder="juan.perez@empresa.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Mensaje</label>
                                <textarea
                                    className="flex min-h-[120px] w-full rounded-md border border-slate-700 bg-slate-900/5 px-3 py-2 text-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-50 text-slate-900"
                                    placeholder="¿Cómo podemos ayudarle?"
                                ></textarea>
                            </div>

                            <Button type="button" className="w-full">
                                Enviar Mensaje
                            </Button>
                        </div>
                    </motion.form>

                </div>
            </div>
        </section>
    );
}
