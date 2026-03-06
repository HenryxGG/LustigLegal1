"use client"

import { useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { motion } from 'framer-motion';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export function Contact() {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [status, setStatus] = useState('idle'); // idle, loading, success
    const [formData, setFormData] = useState({ name: '', lastname: '', email: '', message: '' });

    const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!executeRecaptcha) {
            console.error('reCAPTCHA no está listo o conectado.');
            return;
        }

        setStatus('loading');
        try {
            // Ejecutamos silenciosamente el captcha
            const token = await executeRecaptcha('contact_form');
            console.log('reCAPTCHA Token generado (invisible):', token);

            // TODO: Enviar el token y formData al backend aquí para verificar

            // Simulamos retraso de red
            await new Promise(resolve => setTimeout(resolve, 1000));
            setStatus('success');
            setFormData({ name: '', lastname: '', email: '', message: '' });
        } catch (error) {
            console.error('Error procesando formulario / captcha:', error);
            setStatus('idle');
        }
    };

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
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-50 p-8 md:p-10 rounded-lg border border-slate-100 shadow-sm"
                    >
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Nombre</label>
                                    <Input name="name" value={formData.name} onChange={handleChange} placeholder="Juan" required />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Apellido</label>
                                    <Input name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Pérez" required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Correo Electrónico</label>
                                <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="juan.perez@empresa.com" required />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Mensaje</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="flex min-h-[120px] w-full rounded-md border border-slate-700 bg-slate-900/5 px-3 py-2 text-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-50 text-slate-900"
                                    placeholder="¿Cómo podemos ayudarle?"
                                ></textarea>
                            </div>

                            <Button type="submit" className="w-full" disabled={status === 'loading'}>
                                {status === 'loading' ? 'Procesando seguro...' : status === 'success' ? 'Enviado con éxito' : 'Enviar Mensaje'}
                            </Button>

                            <p className="text-[10px] text-slate-400 text-center uppercase tracking-tighter mt-4">
                                Este sitio está protegido por reCAPTCHA y se aplican la
                                <a href="https://policies.google.com/privacy" validate="false" target="_blank" className="text-accent hover:underline mx-1">Política de Privacidad</a>
                                y los
                                <a href="https://policies.google.com/terms" validate="false" target="_blank" className="text-accent hover:underline mx-1">Términos de Servicio</a>
                                de Google.
                            </p>
                        </div>
                    </motion.form>

                </div>
            </div>
        </section>
    );
}
