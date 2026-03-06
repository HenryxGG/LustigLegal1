"use client"

import { useState, createContext } from 'react';

export const ConsultationContext = createContext();
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ConsultationModal } from '../ui/ConsultationModal';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import { CookieBanner } from '../ui/CookieBanner';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export function ClientLayout({ children }) {
    const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);

    const openConsultation = () => setIsConsultationModalOpen(true);
    const closeConsultation = () => setIsConsultationModalOpen(false);

    // Development RECAPTCHA site key
    const reCaptchaKey = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

    return (
        <GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey}>
            <Navbar onOpenConsultation={openConsultation} />

            <ConsultationContext.Provider value={openConsultation}>
                <main className="flex-grow">
                    {children}
                </main>
            </ConsultationContext.Provider>

            <Footer onOpenConsultation={openConsultation} />

            <ConsultationModal
                isOpen={isConsultationModalOpen}
                onClose={closeConsultation}
            />

            <WhatsAppButton />
            <CookieBanner />
        </GoogleReCaptchaProvider>
    );
}
