import { Scale, Shield, Users, FileText, Briefcase, Gavel } from 'lucide-react';

export const practiceAreasData = [
    {
        slug: "derecho-corporativo",
        title: "Derecho Corporativo",
        shortDescription: "Navegando complejas fusiones, adquisiciones y gobierno corporativo con precisión.",
        fullDescription: "Nuestro equipo de expertos en derecho corporativo está dedicado a proporcionar asesoramiento de primer nivel a empresas de todos los tamaños. Desde startups emergentes hasta corporaciones multinacionales, ofrecemos soluciones estratégicas que impulsan el crecimiento y mitigan riesgos. Nuestra experiencia abarca desde la estructuración inicial y el gobierno corporativo, hasta complejas fusiones, adquisiciones y reestructuraciones corporativas. Entendemos que en el mundo empresarial de hoy, ágil e interconectado, necesita asesores legales que no solo conozcan la ley, sino que también comprendan su negocio.",
        icon: Briefcase,
        heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        servicesList: [
            "Fusiones y Adquisiciones (M&A)",
            "Gobierno Corporativo y Cumplimiento",
            "Formación de Entidades y Estructuración",
            "Contratos Comerciales Complejos",
            "Joint Ventures y Alianzas Estratégicas"
        ],
        successCases: [
            {
                title: "Adquisición Transfronteriza",
                description: "Representación de una empresa tecnológica líder en su adquisición por $50M de un competidor clave en la región EMEA."
            },
            {
                title: "Reestructuración Corporativa Compleja",
                description: "Asesoramiento a un conglomerado manufacturero en la reestructuración de su deuda y operaciones, salvando la empresa de la insolvencia."
            }
        ],
        metaTitle: "Servicios Legales y Derecho Corporativo | Lustig Legal",
        metaDescription: "Expertos en derecho corporativo, M&A, y asesoría legal para empresas. Protegemos los intereses legales de su corporación para asegurar un crecimiento sostenible."
    },
    {
        slug: "litigio-comercial",
        title: "Litigio Comercial",
        shortDescription: "Representación agresiva y estratégica en disputas comerciales de alto riesgo.",
        fullDescription: "En el complejo y a menudo impredecible ámbito de los negocios, las disputas son inevitables. Nuestro equipo de litigio comercial combina una preparación rigurosa con una de defensa agresiva y una profunda comprensión de los objetivos de negocio de nuestros clientes. Ya sea en un tribunal federal, cortes estatales, paneles de arbitraje o audiencias administrativas, nuestro objetivo principal es proteger sus intereses y lograr el mejor resultado posible de la manera más eficiente y rentable.",
        icon: Scale,
        heroImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2112&auto=format&fit=crop",
        servicesList: [
            "Disputas Contractuales y Comerciales",
            "Litigios Societarios y de Accionistas",
            "Responsabilidad de Directores y Funcionarios",
            "Litigios por Fraude y Competencia Desleal",
            "Arbitraje Nacional e Internacional"
        ],
        successCases: [
            {
                title: "Victoria en Disputa de Propiedad Intelectual",
                description: "Defensa exitosa de un cliente de software en una demanda multimillonaria por supuesta infracción de patentes, logrando la desestimación total y costas."
            },
            {
                title: "Resolución de Conflicto Societario",
                description: "Representación del socio mayoritario en una disputa altamente conflictiva de una empresa familiar, resolviendo el caso mediante un acuerdo de compra ventajoso."
            }
        ],
        metaTitle: "Abogados de Litigio Comercial | Lustig Legal",
        metaDescription: "Representación experta en disputas comerciales y litigios de empresa. Estrategias legales centradas en resolver conflictos con el mejor resultado posible para su negocio."
    },
    {
        slug: "propiedad-intelectual",
        title: "Propiedad Intelectual",
        shortDescription: "Protegiendo sus innovaciones y activos de marca en un mercado global competitivo.",
        fullDescription: "Sus ideas, invenciones y marcas son los activos más valiosos de su empresa. Nuestro grupo de Propiedad Intelectual proporciona un enfoque integrado para la protección, gestión, monetización y aplicación de este capital crucial. Trabajamos en estrecha colaboración con innovadores, creadores y empresas de diversos sectores tecnológicos para asegurar que sus ventajas competitivas estén salvaguardadas en un panorama regulatorio y tecnológico en constante cambio.",
        icon: Shield,
        heroImage: "https://images.unsplash.com/photo-1577042502844-46b53995f50a?q=80&w=2070&auto=format&fit=crop",
        servicesList: [
            "Registro y Protección de Marcas",
            "Gestión de Carteras de Patentes",
            "Derechos de Autor (Copyrights)",
            "Protección de Secretos Comerciales",
            "Licencias y Transferencia de Tecnología"
        ],
        successCases: [
            {
                title: "Registro de Marca Global",
                description: "Asistencia a una marca de moda emergente para asegurar sus registros de marca en mercados clave de América del Norte, Europa y Asia, allanando el camino para su expansión internacional."
            },
            {
                title: "Licenciamiento de Tecnología Crítica",
                description: "Negociación de un acuerdo de licencia de patentes de alto riesgo entre nuestro cliente biotecnológico y una gigante farmacéutica mundial."
            }
        ],
        metaTitle: "Asesoría en Propiedad Intelectual | Lustig Legal",
        metaDescription: "Proteja sus ideas y creaciones. Especialistas en registro de marcas, patentes, derechos de autor y protección de activos intangibles a nivel global."
    },
    {
        slug: "bienes-raices",
        title: "Bienes Raíces",
        shortDescription: "Asesoría integral para transacciones y desarrollo de propiedades comerciales.",
        fullDescription: "El mercado inmobiliario es dinámico y a menudo está plagado de complejidades regulatorias y financieras. Nuestro equipo de Bienes Raíces proporciona asesoramiento completo y sofisticado en cada etapa del ciclo de vida de una propiedad. Desde la adquisición y el financiamiento, pasando por el desarrollo y la construcción, hasta el arrendamiento, la gestión y la disposición final, nuestros abogados ofrecen conocimientos prácticos y soluciones creativas para desarrolladores, inversores, prestamistas e instituciones.",
        icon: FileText,
        heroImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        servicesList: [
            "Adquisiciones y Disposiciones Comerciales",
            "Financiamiento y Estructuración de Capital",
            "Desarrollo Inmobiliario y Zonificación",
            "Arrendamientos Comerciales (Oficinas, Retail, Industrial)",
            "Joint Ventures Inmobiliarios"
        ],
        successCases: [
            {
                title: "Desarrollo de Uso Mixto",
                description: "Asesoramiento principal en la adquisición de tierras, permisos, financiamiento y acuerdos de construcción para un proyecto de desarrollo de uso mixto de $120M."
            },
            {
                title: "Negociación de Arrendamiento Ancla",
                description: "Representación exitosa de un importante minorista nacional en la negociación a largo plazo de su arrendamiento principal en un centro comercial premier."
            }
        ],
        metaTitle: "Abogados Especialistas en Bienes Raíces | Lustig Legal",
        metaDescription: "Expertos en derecho inmobiliario para transacciones comerciales, desarrollo y financiamiento de propiedades. Consulte con nuestros abogados sobre sus proyectos de bienes raíces."
    },
    {
        slug: "family-office",
        title: "Family Office",
        shortDescription: "Gestión legal discreta y holística para individuos de alto patrimonio neto.",
        fullDescription: "La gestión del patrimonio a través de generaciones requiere una planificación reflexiva y perspicaz. Nuestra práctica de Family Office está diseñada para atender las necesidades altamente personalizadas, multifacéticas y a menudo privadas de las familias de alto patrimonio y sus empresas operativas. Ofrecemos asesoramiento integrado que alinea la planificación patrimonial a largo plazo, la conservación de la riqueza, la transición de empresas familiares y los objetivos filantrópicos con estrategias fiscales eficientes.",
        icon: Users,
        heroImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
        servicesList: [
            "Planificación Patrimonial y Sucesión",
            "Estructuración de Family Offices y Gobernanza",
            "Planificación Fiscal y Filantrópica",
            "Cumplimiento Normativo y Asesoría de Inversiones",
            "Resolución y Gestión de Conflictos Familiares"
        ],
        successCases: [
            {
                title: "Creación de un Family Office Multi-generacional",
                description: "Establecimiento completo de la estructura legal, operativa y de gobierno para una familia cuyo patrimonio excedía los $500M, garantizando una transición fluida a la siguiente generación."
            },
            {
                title: "Resolución Compleja de Sucesión",
                description: "Manejo confidencial de una disputa de herencia transfronteriza sin litigio público, protegiendo tanto los activos financieros de la familia como su nombre."
            }
        ],
        metaTitle: "Family Office y Gestión Patrimonial | Lustig Legal",
        metaDescription: "Asesoramiento legal exclusivo y confidencial para Family Offices e individuos de alto patrimonio neto. Planificación patrimonial, fiscal y sucesión empresarial."
    },
    {
        slug: "defensa-penal",
        title: "Defensa Penal",
        shortDescription: "Defensa inquebrantable para aquellos que enfrentan serias acusaciones de delitos financieros.",
        fullDescription: "Frente a posibles investigaciones gubernamentales o cargos penales, las apuestas no podrían ser más altas. Nuestra práctica de Defensa Penal de Cuello Blanco es conocida por su discreción, rigor investigativo y capacidad comprobada para proteger a individuos corporativos y empresas durante situaciones de crisis que amenazan sus negocios y sus medios de vida. Enfocamos en una intervención temprana y agresiva, a menudo logrando que los cargos se reduzcan o se retiren antes de que se presenten formalmente o se hagan públicos.",
        icon: Gavel,
        heroImage: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2112&auto=format&fit=crop",
        servicesList: [
            "Defensa en Juicios Penales y Apelaciones",
            "Defensa en Fraude Financiero y de Valores",
            "Investigaciones Internas y Cumplimiento Normativo",
            "Cargos por Lavado de Dinero y Delitos Fiscales",
            "Defensa en Casos de Corrupción Gubernamental Institucional"
        ],
        successCases: [
            {
                title: "Desestimación de Cargos de Fraude Corporativo",
                description: "Intervención exitosa antes de la acusación que resultó en la terminación total de una larga investigación federal contra el CEO de una empresa de tecnología médica."
            },
            {
                title: "Victoria en Juicio por Defraudación",
                description: "Veredicto de no culpabilidad en un mediático juicio de cuello blanco, basado en el riguroso desmantelamiento de las pruebas de la fiscalía durante el contrainterrogatorio."
            }
        ],
        metaTitle: "Abogados de Defensa Penal de Cuello Blanco | Lustig Legal",
        metaDescription: "Defensa firme y eficaz contra acusaciones de delitos financieros, fraudes y corporativos. Protegemos su reputación y sus derechos en situaciones complejas."
    }
];
