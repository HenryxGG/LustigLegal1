import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { ClientLayout } from '../components/layout/ClientLayout';

// Configure Google Fonts mapped to CSS Variables
const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
});

export const metadata = {
    title: 'Lustig Legal | Asesoría y Servicios Legales',
    description: 'Firma de abogados especializada en derecho corporativo, litigio comercial y gestión patrimonial para individuos y empresas.',
    openGraph: {
        title: 'Lustig Legal | Asesoría Legal Corporativa',
        description: 'Servicios legales de primera categoría. Expertos en corporativo, bienes raíces y propiedad intelectual.',
        url: 'https://lustiglegal.com',
        siteName: 'Lustig Legal',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1200&auto=format&fit=crop',
                width: 1200,
                height: 630,
            },
        ],
        locale: 'es_ES',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Lustig Legal | Asesoría Legal Corporativa',
        description: 'Servicios legales de primera categoría. Expertos en corporativo, bienes raíces y propiedad intelectual.',
        images: ['https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1200&auto=format&fit=crop'],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
            <body className="font-sans text-slate-900 bg-background overflow-x-hidden min-h-screen flex flex-col">
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    );
}
