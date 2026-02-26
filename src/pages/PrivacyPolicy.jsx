import { motion } from 'framer-motion';

export function PrivacyPolicy() {
    return (
        <div className="pt-32 pb-24 min-h-screen container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">Política de Privacidad y Protección de Datos Personales</h1>
                <div className="prose prose-slate lg:prose-lg max-w-none">
                    <section className="mb-8">
                        <h2 className="text-2xl font-serif font-bold text-secondary mb-4">1. Identidad del Responsable</h2>
                        <p className="text-slate-600">
                            El tratamiento de los datos facilitados a través de esta página web es responsabilidad de <strong>Lustig & Asociados</strong>, debidamente constituido en la República del Ecuador.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-serif font-bold text-secondary mb-4">2. Datos Recabados</h2>
                        <p className="text-slate-600">
                            Se solicitan únicamente los datos estrictamente necesarios para la gestión de contacto: Nombre, Apellido, Correo Electrónico, Número Celular y el Mensaje del usuario. Se informa al usuario que la entrega de estos datos es voluntaria y con el fin de agendar una cita o recibir información.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-serif font-bold text-secondary mb-4">3. Finalidad del Tratamiento</h2>
                        <p className="text-slate-600 mb-4">Los datos personales serán utilizados exclusivamente para:</p>
                        <ul className="list-disc pl-6 text-slate-600 space-y-2">
                            <li>Establecer contacto directo con el interesado vía correo electrónico o WhatsApp.</li>
                            <li>Gestionar la solicitud de asesoría o cotización de servicios legales.</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-serif font-bold text-secondary mb-4">4. Almacenamiento y Seguridad</h2>
                        <p className="text-slate-600">
                            Los datos proporcionados son enviados directamente vía correo electrónico y no se almacenan en bases de datos internas o servidores de esta plataforma. Se aplican medidas de seguridad estándar para asegurar que la información no sea desviada de su finalidad original.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-serif font-bold text-secondary mb-4">5. Derechos del Usuario</h2>
                        <p className="text-slate-600">
                            El usuario puede solicitar la eliminación o actualización de sus datos en cualquier momento enviando un correo a <a href="mailto:contacto@lustiglegal.com" className="text-accent hover:underline">contacto@lustiglegal.com</a>.
                        </p>
                    </section>
                </div>
            </motion.div>
        </div>
    );
}
