import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ConsultationModal } from './components/ui/ConsultationModal';
import { WhatsAppButton } from './components/ui/WhatsAppButton';

// Pages
import { Home } from './pages/Home';
import { PracticeAreasPage } from './pages/PracticeAreasPage';
import { TeamPage } from './pages/TeamPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { BlogPage } from './pages/BlogPage';

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {
    const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

    const openConsultation = () => setIsConsultationModalOpen(true);
    const closeConsultation = () => setIsConsultationModalOpen(false);

    return (
        <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-background overflow-x-hidden">
            <ScrollToTop />
            <Navbar onOpenConsultation={openConsultation} />
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home onOpenConsultation={openConsultation} />} />
                    <Route path="/practica" element={<PracticeAreasPage />} />
                    <Route path="/equipo" element={<TeamPage />} />
                    <Route path="/casos" element={<CaseStudiesPage />} />
                    <Route path="/articulos" element={<BlogPage />} />
                </Routes>
            </main>
            <Footer />

            {/* Global Modal Container */}
            <ConsultationModal
                isOpen={isConsultationModalOpen}
                onClose={closeConsultation}
            />

            {/* WhatsApp Floating Button */}
            <WhatsAppButton />
        </div>
    );
}

export default App;
