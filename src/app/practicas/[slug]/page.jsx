import { notFound } from 'next/navigation';
import { practiceAreasData } from '../../../data/practiceAreas';
import ClientDetail from './ClientDetail';

export function generateStaticParams() {
    return practiceAreasData.map((area) => ({
        slug: area.slug,
    }));
}

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const areaData = practiceAreasData.find(area => area.slug === resolvedParams.slug);

    if (!areaData) {
        return {
            title: 'Área de Práctica No Encontrada | Lustig Legal'
        };
    }

    return {
        title: areaData.metaTitle,
        description: areaData.metaDescription,
    };
}

export default async function PracticeAreaPage({ params }) {
    const resolvedParams = await params;
    const areaData = practiceAreasData.find(area => area.slug === resolvedParams.slug);

    if (!areaData) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LegalService",
        "name": `Lustig Legal - ${areaData.title}`,
        "description": areaData.metaDescription,
        "serviceType": areaData.title,
        "provider": {
            "@type": "LegalService",
            "name": "Lustig Legal"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ClientDetail slug={resolvedParams.slug} />
        </>
    );
}
