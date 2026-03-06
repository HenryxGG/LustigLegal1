import { Hero } from '../components/sections/Hero';
import { PracticeAreas } from '../components/sections/PracticeAreas';
import { Team } from '../components/sections/Team';
import { SocialProof } from '../components/sections/SocialProof';
import { Contact } from '../components/sections/Contact';

export const metadata = {
    title: 'Lustig Legal | Asesoría y Servicios Legales',
    description: 'Firma de abogados especializada en derecho corporativo, litigio comercial y gestión patrimonial para individuos y empresas.',
};

export default function HomePage() {
    return (
        <>
            <Hero />
            <PracticeAreas />
            <SocialProof />
            <Team />
            <Contact />
        </>
    );
}
