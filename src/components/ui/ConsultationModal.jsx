import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from './Button';
import { Input } from './Input';
import { sendConsultation } from '../../services/api';

export function ConsultationModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState('');

    // Clear form and status on close
    useEffect(() => {
        if (!isOpen) {
            setTimeout(() => {
                setFormData({ name: '', email: '', phone: '', message: '' });
                setStatus('idle');
                setErrorMessage('');
            }, 300);
        }
    }, [isOpen]);

    // Prevent scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const validateForm = () => {
        if (!formData.name.trim()) return 'El nombre es obligatorio.';
        if (!formData.email.trim()) return 'El correo electrónico es obligatorio.';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'El correo electrónico no es válido.';
        if (!formData.phone.trim()) return 'el teléfono es obligatorio.';
        if (!formData.message.trim()) return 'El mensaje es obligatorio.';
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const error = validateForm();
        if (error) {
            setStatus('error');
            setErrorMessage(error);
            return;
        }

        setStatus('loading');
        try {
            await sendConsultation(formData);
            setStatus('success');
        } catch (err) {
            setStatus('error');
            setErrorMessage(err.message || 'Hubo un problema al enviar tu consulta. Por favor, inténtalo de nuevo.');
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        className="relative w-full max-w-lg bg-white shadow-2xl overflow-hidden rounded-sm"
                    >
                        {/* Header */}
                        <div className="bg-primary p-6 text-white flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-serif font-bold">Consulta Gratuita</h3>
                                <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">Lustig & Asociados</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            {status === 'success' ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-10"
                                >
                                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 size={32} />
                                    </div>
                                    <h4 className="text-2xl font-serif font-bold text-primary mb-3">¡Consulta Enviada!</h4>
                                    <p className="text-slate-600 mb-8">
                                        Hemos recibido sus datos exitosamente. Un socio de nuestra firma se pondrá en contacto con usted en menos de 24 horas.
                                    </p>
                                    <Button onClick={onClose} className="w-full">Cerrar</Button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Nombre Completo</label>
                                        <Input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Ej. Juan Pérez"
                                            className="bg-slate-50 border-slate-200 text-primary"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Correo Electrónico</label>
                                            <Input
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="juan@ejemplo.com"
                                                className="bg-slate-50 border-slate-200 text-primary"
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Teléfono</label>
                                            <Input
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+52 55..."
                                                className="bg-slate-50 border-slate-200 text-primary"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Mensaje / Caso</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full min-h-[100px] p-3 rounded-md border border-slate-200 bg-slate-50 text-sm text-primary focus:outline-none focus:ring-2 focus:ring-accent transition-all"
                                            placeholder="Describa brevemente su situación legal..."
                                        />
                                    </div>

                                    {status === 'error' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="p-3 bg-red-50 border border-red-100 text-red-600 text-sm flex items-center gap-2"
                                        >
                                            <AlertCircle size={16} />
                                            {errorMessage}
                                        </motion.div>
                                    )}

                                    <Button
                                        type="submit"
                                        className="w-full flex items-center justify-center gap-2"
                                        disabled={status === 'loading'}
                                    >
                                        {status === 'loading' ? (
                                            <>
                                                <Loader2 size={18} className="animate-spin" />
                                                Enviando...
                                            </>
                                        ) : (
                                            'Enviar Consulta'
                                        )}
                                    </Button>

                                    <p className="text-[10px] text-slate-400 text-center uppercase tracking-tighter">
                                        Sus datos son tratados bajo estricta confidencialidad profesional.
                                    </p>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
