import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Menu, X } from 'lucide-react';

export function Navbar({ onOpenConsultation }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    const location = useLocation();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const isHome = location.pathname === '/';

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHome ? 'bg-primary/95 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
                    }`}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 relative z-50">
                        {/* Logo */}
                        <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center">
                            <span className="text-primary font-serif font-bold text-lg">L</span>
                        </div>
                        <span className={`text-xl font-serif font-bold tracking-wide ${isScrolled || !isHome || isMobileMenuOpen ? 'text-white' : 'text-white'}`}>
                            Lustig & <span className="text-accent">Asociados</span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link to="/practica" className="text-sm font-medium text-slate-300 hover:text-accent transition-colors uppercase tracking-widest">
                            Áreas de Práctica
                        </Link>
                        <Link to="/equipo" className="text-sm font-medium text-slate-300 hover:text-accent transition-colors uppercase tracking-widest">
                            Nuestro Equipo
                        </Link>
                        <Link to="/casos" className="text-sm font-medium text-slate-300 hover:text-accent transition-colors uppercase tracking-widest">
                            Casos de Éxito
                        </Link>
                        <Link to="/articulos" className="text-sm font-medium text-slate-300 hover:text-accent transition-colors uppercase tracking-widest">
                            Artículos
                        </Link>

                        <Button
                            variant={isScrolled ? 'primary' : 'outline'}
                            className={!isScrolled && isHome && "border-white/20 hover:bg-white/10"}
                            onClick={onOpenConsultation}
                        >
                            Consulta Gratuita
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white relative z-50 p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay - Portalled to body to escape transforms */}
            {createPortal(
                <div
                    className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
                    style={{ backgroundColor: 'rgba(11, 17, 32, 0.95)' }}
                >
                    <div className="flex flex-col items-center gap-8">
                        <Link to="/" className="text-2xl font-serif font-medium text-white hover:text-accent transition-colors">
                            Inicio
                        </Link>
                        <Link to="/practica" className="text-2xl font-serif font-medium text-white hover:text-accent transition-colors">
                            Áreas de Práctica
                        </Link>
                        <Link to="/equipo" className="text-2xl font-serif font-medium text-white hover:text-accent transition-colors">
                            Nuestro Equipo
                        </Link>
                        <Link to="/casos" className="text-2xl font-serif font-medium text-white hover:text-accent transition-colors">
                            Casos de Éxito
                        </Link>
                        <Link to="/articulos" className="text-2xl font-serif font-medium text-white hover:text-accent transition-colors">
                            Artículos
                        </Link>

                        <div className="pt-8">
                            <Button
                                variant="primary"
                                className="text-lg px-8 py-4"
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    onOpenConsultation();
                                }}
                            >
                                Consulta Gratuita
                            </Button>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
}
