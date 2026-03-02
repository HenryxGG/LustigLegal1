import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export function Hero({ onOpenConsultation }) {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/hero-bg.jpg"
                    alt=""
                    className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10 pt-20">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-2xl"
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-accent tracking-[0.2em] text-sm uppercase font-semibold mb-6"
                    >
                        Lustig & Asociados
                    </motion.p>

                    <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mb-8">
                        Justicia Definida <br />
                        por la <span className="text-accent italic">Excelencia</span>
                    </h1>

                    <p className="text-slate-300 text-lg mb-10 leading-relaxed max-w-lg font-light">
                        Brindando asesoría legal de primer nivel para quienes exigen nada menos que dedicación absoluta y resultados comprobados.
                    </p>

                    <div className="flex gap-4">
                        <Button variant="primary" onClick={onOpenConsultation}>
                            Agendar Consulta
                        </Button>
                        <Button variant="outline">Áreas de Práctica</Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
