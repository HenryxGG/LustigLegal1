import { motion } from 'framer-motion';

export function TermsOfService() {
    return (
        <div className="pt-32 pb-24 min-h-screen container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">Términos y Condiciones de Uso</h1>
                <div className="prose prose-slate lg:prose-lg max-w-none">
                    <section className="mb-8">
                        <h2 className="text-2xl font-serif font-bold text-secondary mb-4">1. Propiedad Intelectual</h2>
                        <p className="text-slate-600">
                            Todo el contenido de este sitio web, incluyendo de forma enunciativa pero no limitativa: artículos legales, logotipos, diseño gráfico, código fuente y estructura de navegación, es propiedad exclusiva de <strong>Lustig & Asociados</strong>. Queda prohibida su reproducción, copia o distribución sin autorización expresa.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-serif font-bold text-secondary mb-4">2. Inexistencia de Relación Abogado-Cliente</h2>
                        <p className="text-slate-600">
                            El uso de los formularios de contacto, el envío de correos electrónicos o la comunicación vía WhatsApp no constituye, ni crea una relación formal abogado-cliente. Dicha relación solo se entenderá legalmente constituida tras la suscripción de un contrato de prestación de servicios físicos o digitales debidamente formalizado por ambas partes.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-serif font-bold text-secondary mb-4">3. Uso de Canales de Comunicación</h2>
                        <ul className="list-disc pl-6 text-slate-600 space-y-4">
                            <li><strong>Formularios:</strong> Son herramientas de captación de consultas iniciales.</li>
                            <li><strong>WhatsApp:</strong> Este canal se habilita exclusivamente para asesorías preliminares y cotizaciones. En ningún caso WhatsApp se reconocerá como un canal oficial para citaciones, notificaciones judiciales o comunicaciones procesales legales.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-serif font-bold text-secondary mb-4">4. Limitación de Responsabilidad</h2>
                        <p className="text-slate-600">
                            La información contenida en los artículos o blogs de esta página es de carácter informativo y no constituye una opinión legal vinculante. El estudio jurídico no se responsabiliza por decisiones tomadas basadas exclusivamente en el contenido web.
                        </p>
                    </section>
                </div>
            </motion.div>
        </div>
    );
}
