import { Hero } from '../components/sections/Hero';
import { PracticeAreas } from '../components/sections/PracticeAreas';
import { Team } from '../components/sections/Team';
import { SocialProof } from '../components/sections/SocialProof';
import { Contact } from '../components/sections/Contact';

export function Home({ onOpenConsultation }) {
    return (
        <>
            <Hero onOpenConsultation={onOpenConsultation} />
            <PracticeAreas />
            <SocialProof />
            <Team />
            <Contact />
        </>
    );
}
