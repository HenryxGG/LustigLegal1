import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already accepted cookies
        const hasAccepted = localStorage.getItem('cookies-accepted');
        if (!hasAccepted) {
            // Show banner after a short delay
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookies-accepted', 'true');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
                >
                    <div className="max-w-7xl mx-auto bg-slate-900 border border-slate-800 shadow-2xl rounded-xl p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-sm bg-opacity-95">
                        <div className="flex-grow">
                            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                                Utilizamos cookies técnicas para asegurar el funcionamiento de la web.
                                Al navegar o utilizar nuestro botón de WhatsApp, usted acepta nuestra{' '}
                                <Link to="/privacidad" className="text-accent hover:underline font-medium">
                                    Política de Privacidad
                                </Link>{' '}
                                y el uso de cookies de terceros necesarias para la comunicación.
                            </p>
                        </div>
                        <div className="flex items-center gap-4 shrink-0">
                            <button
                                onClick={handleAccept}
                                className="px-8 py-2.5 bg-accent hover:bg-accent/90 text-primary font-bold rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg shadow-accent/20"
                            >
                                Aceptar
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
