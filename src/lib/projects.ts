export interface GalleryImageDef {
    src: string;
    width?: number;
    height?: number;
    className?: string;
}
export interface GalleryItem {
    type: 'full' | 'half' | 'custom' | 'text' | 'interactive-video';
    src?: string | string[] | GalleryImageDef[];
    thumb?: string;
    loop?: string;
    aspect?: string;
    bg?: string;
    className?: string;
    imageClassName?: string;
    titleClassName?: string;
    title?: string;
    text?: string;
    variant?: 'centered';
    overlayText?: string;
    overlayClassName?: string;
    overlayTextClassName?: string;
}
export interface ProjectSidebarMeta {
    label: string;
    value: string;
}
export interface ProjectSidebar {
    logo?: string;
    logoLight?: string;
    logoClassName?: string;
    title?: string;
    project?: string;
    brief?: string;
    overview?: string;
    meta?: ProjectSidebarMeta[];
    tags?: string[];
}
export interface Project {
    id: string;
    slug: string;
    layout?: 'default' | 'editorial';
    animationStyle?: 'cinematic' | 'default';
    autoPlayHero?: boolean;
    hideWatchCursor?: boolean;
    staticHero?: boolean;
    title: string;
    accentTitle?: string;
    description: string;
    clientLogo?: string;
    headerLogo?: string;
    headerLogoLight?: string;
    headerLogoClassName?: string;
    gridLoop?: string;
    mainVideo?: string;
    mainImage?: string;
    gridImage1x?: string;
    gridImage2x?: string;
    coverImage?: string;
    loopMwWp?: string;
    mwImage1x?: string;
    mwImage2x?: string;
    heroWideImage?: string;
    galleryThumb?: string;
    galleryLoop?: string;
    category?: string;
    quote?: string;
    sidebar?: ProjectSidebar;
    body?: { text?: string[]; };
    context?: {
        logo?: string;
        inlineImage?: string;
        avatarImage?: string;
    };
    gallery: GalleryItem[];
    useMask?: boolean;
    gridData?: {
        width: number;
        height: number;
    };
}

// ─── Helper — base path por cliente/proyecto ──────────────────────────────────
const b = (client: string, project: string) =>
    `/work_id/${client}/projects/${project}`;

export const projects: Project[] = [

    // ─── 01 LEMON CASH ────────────────────────────────────────────────────────
    {
        id: 'lemon-cash',
        slug: 'lemon-cash',
        layout: 'default',
        animationStyle: 'cinematic',
        title: 'LEMON GARPA',
        accentTitle: 'Literal!',
        category: 'Creative Campaign',
        description: '↘ CAMPAIGN PROJECT 360º - PAGO CON QR  /  CASHBACK EN BITCOINS',
        clientLogo: '/work_id/lemon/img_brand/lemon_horizontal_color.svg',
        headerLogo: '/work_id/lemon/img_brand/lemon_iso_color.svg',
        gridLoop: `${b('lemon', 'campania_qr')}/gallery_detail/gallery_thumb_loop`,
        mainVideo: `${b('lemon', 'campania_qr')}/videos/lemon_main.mp4`,
        gridImage1x: `${b('lemon', 'campania_qr')}/hero_workgrid/lemon_campania_qr_workgrid_1x`,
        gridImage2x: `${b('lemon', 'campania_qr')}/hero_workgrid/lemon_campania_qr_workgrid_2x`,
        coverImage: `${b('lemon', 'campania_qr')}/work_page/lemon_campania_qr_thumb`,
        loopMwWp: `${b('lemon', 'campania_qr')}/more_works/lemon_loop_mw-wp`,
        mwImage1x: `${b('lemon', 'campania_qr')}/more_works/lemon_campania_qr_mw_1x`,
        mwImage2x: `${b('lemon', 'campania_qr')}/more_works/lemon_campania_qr_mw_2x`,
        heroWideImage: `${b('lemon', 'campania_qr')}/gallery_detail/lemon_campania_qr_detail_hero`,
        galleryThumb: `${b('lemon', 'campania_qr')}/gallery_detail/gallery_thumb`,
        galleryLoop: `${b('lemon', 'campania_qr')}/gallery_detail/gallery_thumb_loop`,
        quote: '"Pagar con Lemon garpa, literal!"',
        gridData: { width: 480, height: 320 },
        sidebar: {
            logo: '/work_id/lemon/img_brand/lemon_horizontal_color.svg',
            logoClassName: 'w-[160px]',
            title: 'Campaña Publicitaria - Pago con QR',
            project: 'Pagar con Lemon Garpa. Literal!',
            meta: [{ label: 'Campaign', value: 'Pago con QR' }],
            brief: 'Realizamos el storytelling y producción general del lanzamiento del feature de pagos con QR a través de la app. Llevamos el ecosistema cripto a la calle, transformando cada compra cotidiana en cashback en Bitcoins en el acto.',
            overview: 'Estrategia y Creatividad: Definición de objetivos, armado del funnel, storytelling y storyboard. Producción Audiovisual: scouting de locación, filmación del spot, edición y color. Creación del mundo interno del posnet. Bajada gráfica para vía pública y redes.',
            tags: ['CREATIVE DIRECTION', 'CAMPAIGN', 'MEDIA CONTENT', 'FILM PRODUCTION'],
        },
        gallery: [
            { type: 'text', title: 'THE IDEA:', text: 'Visualizar lo invisible. La idea del spot fue reventar la caja negra de una transacción tradicional. Combinamos live-action crudo con animación 3D para meternos literalmente en las entrañas del posnet y documentar el viaje frenético del cashback.', className: '!py-4' },
            { type: 'full', src: `${b('lemon', 'campania_qr')}/gallery_detail/gallery_row-0-1x_f` },
            {
                type: 'custom', src: [
                    { src: `${b('lemon', 'campania_qr')}/gallery_detail/gallery_custom-2-0_1x`, width: 440, height: 520, className: 'mx-auto md:ml-8 lg:ml-12 lg-custom-img-left' },
                    { src: `${b('lemon', 'campania_qr')}/gallery_detail/gallery_custom-2-1_1x`, width: 340, height: 340, className: 'mx-auto md:mt-12 lg-custom-img-right' },
                ], className: 'grid grid-cols-1 md:grid-cols-2 w-full gap-6 md:gap-8 items-start lg-custom-grid-2'
            },

            /* MOBILE BLOCKS */
            { 
                type: 'text', 
                variant: 'centered', 
                title: 'BELIER.TV\nIN DA HAUS', 
                className: 'md:hidden mx-auto !py-4', 
                titleClassName: '!text-center !rotate-0 !text-[3.5rem] !leading-[0.85]', 
                imageClassName: 'hidden' 
            },
            { type: 'full', src: `${b('lemon', 'campania_qr')}/gallery_detail/gallery_row-4_1x_h`, className: 'md:hidden' },
            { 
                type: 'text', 
                variant: 'centered', 
                title: '', 
                src: `${b('lemon', 'campania_qr')}/gallery_detail/claim_lemon_1x`, 
                className: 'md:hidden mx-auto !-mt-6 !pb-4', 
                titleClassName: 'hidden', 
                imageClassName: 'w-full max-w-[400px] mx-auto' 
            },
            { type: 'full', src: `${b('lemon', 'campania_qr')}/gallery_detail/lemon_video_full.mp4`, className: 'md:hidden' },

            /* DESKTOP BLOCKS (Swapped order) */
            { 
                type: 'text', 
                variant: 'centered', 
                title: 'BELIER.TV\nIN DA HAUS', 
                src: `${b('lemon', 'campania_qr')}/gallery_detail/claim_lemon_1x`, 
                className: 'hidden md:flex ml-6 md:ml-12 lg:ml-20 md:-mt-36 lg:-mt-48', 
                titleClassName: '-rotate-[8deg] translate-y-10', 
                imageClassName: '' 
            },
            { 
                type: 'half', 
                src: [`${b('lemon', 'campania_qr')}/gallery_detail/gallery_row-4_1x_h`, `${b('lemon', 'campania_qr')}/gallery_detail/lemon_video_full.mp4`],
                className: 'hidden md:grid'
            },

            { type: 'text', title: 'OUTCOME:', text: 'Disparamos las descargas y reventamos el engagement de la app con el lanzamiento del pago vía QR. Más allá del feature tecnológico, consolidamos el sentido de pertenencia: convertimos a los usuarios en verdaderos insiders de la cultura Lemon.', className: '!py-4 !-mt-6' },
            { type: 'full', src: `${b('lemon', 'campania_qr')}/gallery_detail/gallery_row-6_1x_f` },
            {
                type: 'custom', src: [
                    { src: `${b('lemon', 'campania_qr')}/gallery_detail/gallery_custom-7-0_1x`, width: 340, height: 340, className: 'mx-auto md:mt-12 lg-custom-img-up lg-emy-large' },
                    { src: `${b('lemon', 'campania_qr')}/gallery_detail/gallery_custom-7-1_1x`, width: 380, height: 450, className: 'mx-auto' },
                ], className: 'grid grid-cols-1 md:grid-cols-2 w-full gap-6 md:gap-8 md:my-8 lg:my-12 lg-items-center lg-custom-grid-7'
            },
            {
                type: 'custom', src: [
                    { src: `${b('lemon', 'campania_qr')}/gallery_detail/gallery_custom-8-0_1x`, width: 640, className: '!-mb-8 lg-img-8-0' },
                    { src: `${b('lemon', 'campania_qr')}/gallery_detail/gallery_custom-8_1`, width: 560, className: 'hidden md:block my-auto mx-auto lg:mr-24 lg-img-8-1' },
                ],
                className: 'grid grid-cols-1 md:grid-cols-[2fr_1fr] lg:grid-cols-[3fr_1fr] gap-6 md:gap-16 lg:gap-24 mb-8 lg-scaled-grid-8'
            },
            { type: 'full', src: `${b('lemon', 'campania_qr')}/gallery_detail/gallery_row-5_2x_h` },
            {
                type: 'custom', src: [
                    { src: `${b('lemon', 'campania_qr')}/gallery_detail/gallery_custom-9_2x`, width: 350, height: 622, className: 'md:ml-28 lg:ml-16 lg-lemy-body' },
                    { src: `${b('lemon', 'campania_qr')}/gallery_detail/gallery_custom-10_2x.mp4`, width: 350, height: 622, className: 'md:ml-8 lg:ml-6 mt-0 lg-lemy-video' },
                ], className: 'grid grid-cols-1 md:grid-cols-2 md:mt-12 w-full gap-6 md:gap-8 items-start lg-bottom-section'
            },
            { type: 'full', src: `${b('lemon', 'campania_qr')}/gallery_detail/gallery_row-6_2x_h`, className: 'md:mt-12 lg:mt-12' },
        ],
    },

    // ─── 02 CONVERSE ALL STARS ────────────────────────────────────────────────
    {
        id: 'converse-all-stars',
        slug: 'converse-all-stars',
        layout: 'default',
        animationStyle: 'cinematic',
        title: 'CONVERSE ALL STARS',
        useMask: true,
        category: 'Digital Content',
        headerLogo: '/work_id/converse/img_brand/converse_iso.svg',
        description: '↘ DIGITAL CONTENT / CAMPAIGN & RRSS',
        gridLoop: `${b('converse', 'all_stars')}/gallery_detail/gallery_thumb_loop`,
        mainVideo: `${b('converse', 'all_stars')}/videos/converse_main.mp4`,
        autoPlayHero: true,
        gridImage1x: `${b('converse', 'all_stars')}/hero_workgrid/converse_all_stars_1x`,
        gridImage2x: `${b('converse', 'all_stars')}/hero_workgrid/converse_all_stars_2x`,
        coverImage: `${b('converse', 'all_stars')}/work_page/converse_all_stars_thumb`,
        loopMwWp: `${b('converse', 'all_stars')}/hero_workgrid/gallery_thumb_loop_2`,
        mwImage1x: `${b('converse', 'all_stars')}/more_works/converse_all_stars_mw_1x`,
        mwImage2x: `${b('converse', 'all_stars')}/more_works/converse_all_stars_mw_2x`,
        heroWideImage: `${b('converse', 'all_stars')}/gallery_detail/converse_all_stars_detail_hero`,
        galleryThumb: `${b('converse', 'all_stars')}/gallery_detail/gallery_thumb`,
        galleryLoop: `${b('converse', 'all_stars')}/hero_workgrid/gallery_thumb_loop_2`,
        gridData: { width: 260, height: 285 },
        sidebar: {
            logo: '/work_id/converse/img_brand/converse_allstars.svg',
            logoClassName: 'w-[120px] md:w-[150px]',
            title: 'All Stars change the game - SYD',
            project: 'All Stars Series',
            meta: [{ label: 'Client', value: 'Converse' }],
            brief: 'Capturar el espíritu audaz de una generación que no sigue reglas. El desafío fue posicionar a la comunidad Converse All Stars como los verdaderos agentes de cambio en la cultura urbana.',
            overview: 'Visibilizamos el poder de crear con intención. Una narrativa visual que documenta cómo la comunidad Converse transforma el mundo a través de la inclusión, la diversidad y el sentido de pertenencia.',
            tags: ['DIGITAL CONTENT', 'ART DIRECTION', 'CAMPAIGN RRSS'],
        },
        gallery: [

            { type: 'text', title: 'THE VIBE:', text: 'In the relentless pursuit of progress, Converse All Stars change the game so everyone can play.Independent enough not to follow, Converse All Stars dare to be bold, embrace what makes them different and have the courage to take the first step forward.' },
            { type: 'full', src: `${b('converse', 'all_stars')}/gallery_detail/gallery_row-1_1x_f` },

            {
                type: 'custom',
                src: [
                    // Imagen Izquierda: Control total con 'translate-y'
                    {
                        src: `${b('converse', 'all_stars')}/gallery_detail/gallery_half-2_1x`,
                        // md:translate-y-[80px] la mueve hacia abajo visualmente sin tocar la grilla. 
                        // Podés cambiar ese 80px por el número exacto que quieras.
                        className: 'w-full max-w-[450px] mx-auto md:ml-auto md:mr-0 md:translate-y-[70px] converse-img-2'
                    },
                    // Imagen Derecha: Le sacamos el 'my-auto' para que se quede anclada arriba
                    {
                        src: `${b('converse', 'all_stars')}/gallery_detail/gallery_half-1_1x`,
                        className: 'w-full max-w-[380px] mx-auto md:mr-auto md:ml-0 my-auto'
                    },
                ],
                className: 'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-16 mb-16 lg:mb-32 items-start',
                overlayText: 'CHANGE\nTHE GAME',
                overlayClassName: 'absolute bottom-[0%] left-3/4 -translate-x-1/2 z-10 converse-overlay-text',
                overlayTextClassName: '-rotate-[4deg] text-center'
            },
            { type: 'half', aspect: 'aspect-[4/5]', src: [`${b('converse', 'all_stars')}/gallery_detail/gallery_row-3_1x_h`, `${b('converse', 'all_stars')}/gallery_detail/gallery_row-4_1x_h`] },
            { type: 'text', title: 'OUTCOME:', text: 'Creating with intent, Converse All Stars change the world through sustainability, diversity, inclusion & belonging and youth development.Who is a Converse All Star?', className: '!py-4' },
            { type: 'full', aspect: 'aspect-auto', src: `${b('converse', 'all_stars')}/gallery_detail/gallery_row-5_1x_f` },
            {
                type: 'custom',
                src: [
                    // Imagen Derecha: Le sacamos el 'my-auto' para que se quede anclada arriba
                    {
                        src: `${b('converse', 'all_stars')}/gallery_detail/gallery_half-7_1x`,
                        className: 'w-full max-w-[390px] mx-auto md:mr-auto md:ml-100 my-auto converse-img-7'
                    },
                    // Imagen Izquierda: Control total con 'translate-y'
                    {
                        src: `${b('converse', 'all_stars')}/gallery_detail/gallery_half-8_1x`,
                        // md:translate-y-[80px] la mueve hacia abajo visualmente sin tocar la grilla. 
                        // Podés cambiar ese 80px por el número exacto que quieras.
                        className: 'w-full max-w-[450px] !mx-auto md:ml-auto md:mr-0 md:translate-y-[80px] converse-img-8'
                    },
                ],
                className: 'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-16 mb-32 items-start converse-grid-bottom'
            },

        ],


    },

    // ─── 03 MAXIBON ───────────────────────────────────────────────────────────
    {
        id: 'maxibon',
        slug: 'maxibon',
        layout: 'default',
        animationStyle: 'cinematic',
        title: 'MAXIBON',
        accentTitle: 'PBJ BON',
        category: 'Film Production / Motion / VFX',
        description: '↘ FILM PRODUCTION, MOTION & VFX',
        headerLogo: '/work_id/maxibon/img_brand/maxibon_logo.png',
        gridLoop: `${b('maxibon', 'skate_crush')}/hero_workgrid/gallery_thumb_loop-2`,
        mainVideo: `${b('maxibon', 'skate_crush')}/videos/maxibon_main.mp4`,
        gridImage1x: `${b('maxibon', 'skate_crush')}/hero_workgrid/maxibon_skate_crush_workgrid_1x`,
        gridImage2x: `${b('maxibon', 'skate_crush')}/hero_workgrid/maxibon_skate_crush_workgrid_2x`,
        coverImage: `${b('maxibon', 'skate_crush')}/work_page/maxibon_skate_crush_thumb`,
        loopMwWp: `${b('maxibon', 'skate_crush')}/gallery_detail/gallery_thumb_loop`,
        mwImage1x: `${b('maxibon', 'skate_crush')}/more_works/maxibon_skate_crush_mw_1x`,
        mwImage2x: `${b('maxibon', 'skate_crush')}/more_works/maxibon_skate_crush_mw_2x`,
        heroWideImage: `${b('maxibon', 'skate_crush')}/gallery_detail/maxibon_skate_crush_detail_hero`,
        galleryThumb: `${b('maxibon', 'skate_crush')}/hero_workgrid/maxibon_skate_crush_workgrid_2x`,
        galleryLoop: `${b('maxibon', 'skate_crush')}/gallery_detail/gallery_thumb_loop`,
        gridData: { width: 400, height: 223 },

        sidebar: {
            logo: '/work_id/maxibon/img_brand/maxibon_logo.png',
            logoClassName: 'w-[120px] md:w-[150px]',
            title: '',
            project: 'Born Different',
            brief: 'En colaboración con SICKDOGWOLFMAN, el desafío fue relanzar el sabor PB&J (el más aclamado por los consumidores) a través de una campaña integrada que celebre la fusión de ambos sabores, manteniendo intacto el ADN irreverente de la marca.',
            overview: 'Desplegamos un ecosistema 360º (audiovisual, OOH y plataformas digitales) para plasmar la actitud "Born Different". Un enfoque crudo y cargado de humor, diseñado para conectar directamente con la cultura urbana.',
            tags: ['FILM PRODUCTION', 'MOTION', 'VFX', 'OOH']
        },
        gallery: [{ type: 'text', title: 'THE IDEA:', text: '¿Cómo representar la colisión de dos sabores que nacieron para estar juntos? Los llevamos directamente al skatepark. Vestimos a skaters profesionales con trajes gigantes y bizarros de frascos de mantequilla de maní y mermelada. La narrativa los enfrenta en un duelo de miradas digno del cine de los 80, antes de lanzarse por un bowl de skate, chocar a toda velocidad y explotar para fusionarse en el nuevo Maxibon.', className: 'lg-text-idea !py-4' },
        { type: 'full', src: `${b('maxibon', 'skate_crush')}/gallery_detail/gallery_row-1_1x_f`, className: 'maxibon-row-1' },

        {
            type: 'custom',
            src: [
                // Imagen Izquierda: Control total con 'translate-y'
                {
                    src: `${b('maxibon', 'skate_crush')}/gallery_detail/gallery_half-1_1x`,
                    className: 'w-full max-w-[450px] mx-auto md:ml-auto md:mr-0 md:translate-y-[50px]'
                },
                // Imagen Derecha: Le sacamos el 'my-auto' para que se quede anclada arriba
                {
                    src: `${b('maxibon', 'skate_crush')}/gallery_detail/gallery_half-2_1x`,
                    className: 'w-full max-w-[480px] mx-auto md:mr-auto md:ml-0 my-auto maxibon-img-2'
                },
            ],
            className: 'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-16 mb-0 md:mb-0 lg:mb-32 items-start',
            overlayText: 'BEST\nFRIENDS?',
            overlayClassName: 'absolute bottom-[0%] left-3/4 -translate-x-1/2 z-10 maxibon-overlay-text',
            overlayTextClassName: '-rotate-[4deg] text-center'
        },
        { type: 'text', title: 'OUTCOME:', text: 'Logramos un relanzamiento explosivo que respondió directamente al pedido de la audiencia, uniendo a los dos sabores de la manera más auténtica y "Maxibon" posible. El resultado fue una campaña inmersiva y memorable que consolidó a la marca dentro del ecosistema urbano a través de pura adrenalina visual y diversión absurda.', className: 'lg-text-outcome !py-4' },
        { type: 'full', aspect: 'aspect-auto', src: `${b('maxibon', 'skate_crush')}/gallery_detail/gallery_row-3_1x_h.mp4` },
        {
            type: 'custom',
            src: [
                {
                    src: `${b('maxibon', 'skate_crush')}/gallery_detail/gallery_half-4_1x`,
                    className: 'w-full max-w-[490px] mx-auto md:mr-auto md:translate-y-[80px] maxibon-img-4'
                },
                {
                    src: `${b('maxibon', 'skate_crush')}/gallery_detail/gallery_half-5_1x.webp`,
                    // md:translate-y-[80px] la mueve hacia abajo visualmente sin tocar la grilla. 
                    // Podés cambiar ese 80px por el número exacto que quieras.
                    className: 'w-full max-w-[550px] mx-auto md:ml-auto md:mr-0 md:translate-y-[80px] maxibon-img-5'
                },
            ],
            className: 'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-16 mb-32 items-start maxibon-grid-bottom'
        },],
    },

    // ─── 04 GCBA TRÁNSITO ─────────────────────────────────────────────────────
    {
        id: 'ba',
        slug: 'ba',
        layout: 'editorial',
        headerLogo: '/work_id/ba/img_brand/ba_client.svg',
        headerLogoClassName: 'h-[24px] md:h-[36px] lg:h-[45px]',
        useMask: true,
        animationStyle: 'cinematic',
        title: 'BA ELIGE - GUARDERÍA DE BICIS',
        category: 'BA Elige',
        description: '↘ ACTIVATION | STREET MARKETING | PRODUCTION',
        //gridLoop: `${b('ba', 'transito')}/gallery_detail/gallery_thumb_loop`,
        //mainVideo: `${b('ba', 'transito')}/videos/ba_main.mp4`,
        mainImage: `${b('ba', 'transito')}/gallery_detail/gallery_row-full-1`,
        gridImage1x: `${b('ba', 'transito')}/hero_workgrid/ba_transito_workgrid_1x`,
        gridImage2x: `${b('ba', 'transito')}/hero_workgrid/ba_transito_workgrid_2x`,
        coverImage: `${b('ba', 'transito')}/work_page/ba_transito_thumb`,
        //loopMwWp: `${b('ba', 'transito')}/more_works/ba_loop_mw-wp`,
        mwImage1x: `${b('ba', 'transito')}/more_works/ba_transito_mw_1x`,
        mwImage2x: `${b('ba', 'transito')}/more_works/ba_transito_mw_2x`,
        heroWideImage: `${b('ba', 'transito')}/gallery_detail/ba_transito_detail_hero`,
        //galleryThumb: `${b('ba', 'transito')}/gallery_detail/gallery_thumb`,
        //galleryLoop: `${b('ba', 'transito')}/gallery_detail/gallery_thumb_loop`,
        gridData: { width: 400, height: 223 },
        sidebar: {
            logo: '/work_id/ba/img_brand/ba_client.svg',
            logoClassName: 'w-[100px] md:w-[130px]',
            title: 'BA Elige - Guardería de Bicis',
            project: 'La Ciudad necesita tu ayuda.',
            brief: 'El Gobierno de la Ciudad necesitaba impulsar la movilidad sustentable con un enfoque real y en la calle. El desafío era doble: concientizar sobre la convivencia vial sin mensajes institucionales aburridos, y resolver la logística física para incentivar el uso de la bicicleta en eventos hipermasivos.',
            overview: 'Un despliegue BTL integral combinando diseño y producción de campo. Desarrollamos el "Manual del Ciclista", infografías y stands interactivos en esquinas clave. En paralelo, resolvimos la infraestructura de las guarderías: desde el modelado 3D de los módulos hasta el montaje y la operación durante los partidos.',
            tags: ['ACTIVATION', 'STREET MARKETING']
        },
        gallery: [{ type: 'text', title: 'THE IDEA:', text: 'Actuar directamente sobre el asfalto. Para educar, creamos "La Ciudad necesita tu ayuda", interceptando vecinos con experiencias lúdicas. Para incentivar, pasamos a la acción: conceptualizamos y diseñamos las primeras guarderías temporales y gratuitas de bicicletas para estadios de fútbol.', className: 'lg-text-idea !py-4' },
        { type: 'full', aspect: 'aspect-auto', src: `${b('ba', 'transito')}/gallery_detail/gallery_row-1_1x_f` },

        {
            type: 'custom',
            src: [
                // Imagen Izquierda: Control total con 'translate-y'
                {
                    src: `${b('ba', 'transito')}/gallery_detail/gallery_half-2_1x`,
                    className: 'w-full max-w-[450px] mx-auto md:ml-auto md:mr-0 md:translate-y-[20px]'
                },
                // Imagen Derecha: Le sacamos el 'my-auto' para que se quede anclada arriba
                {
                    src: `${b('ba', 'transito')}/gallery_detail/gallery_half-1_1x`,
                    className: 'w-full max-w-[480px] mx-auto md:mr-auto md:ml-0 my-auto ba-img-1'
                },
            ],
            className: 'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-16 mb-0 md:mb-0 lg:mb-12 items-start ba-grid-top',
            //overlayText: 'LA CIUDAD\nNECESITA TU AYUDA',
            overlayClassName: 'absolute bottom-[0%] left-3/4 -translate-x-1/2 z-10',
            overlayTextClassName: '-rotate-[4deg] text-center'
        },
        { type: 'text', title: 'OUTCOME:', text: 'Impacto tangible en la vía pública. Transformamos normas de tránsito duras en experiencias ciudadanas amigables y le dimos una solución segura a miles de hinchas. Demostramos que el diseño estratégico, sumado a una ejecución impecable, logra cambiar hábitos en la ciudad.', className: 'lg-text-outcome !py-4' },
        { type: 'full', aspect: 'aspect-auto', src: `${b('ba', 'transito')}/gallery_detail/gallery_row-3_1x_h` },
        {
            type: 'custom',
            src: [
                {
                    src: `${b('ba', 'transito')}/gallery_detail/gallery_half-5_1x`,
                    className: 'w-full max-w-[490px] mx-auto md:mr-auto md:translate-y-[20px] ba-img-5'
                },
                {
                    src: `${b('ba', 'transito')}/gallery_detail/gallery_half-4_1x.webp`,
                    // md:translate-y-[80px] la mueve hacia abajo visualmente sin tocar la grilla. 
                    // Podés cambiar ese 80px por el número exacto que quieras.
                    className: 'w-full max-w-[550px] mx-auto md:ml-auto md:mr-0 md:translate-y-[0px]'
                },
            ],
            className: 'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-16 mb-0 items-start ba-grid-bottom'
        },
        { type: 'full', aspect: 'aspect-auto', src: `${b('ba', 'transito')}/gallery_detail/gallery_row-4_1x_f` },
        ],
    },

    // ─── 05 DORITOS ───────────────────────────────────────────────────────────
    {
        id: 'doritos',
        slug: 'doritos',
        layout: 'default',
        headerLogo: '/work_id/doritos/img_brand/doritos_client.png',
        headerLogoClassName: 'h-[40px] md:h-[60px] lg:h-[80px]',
        animationStyle: 'cinematic',
        title: 'DORITOS - I\'m Fine',
        category: 'Film Production',
        description: '↘ MOTION & VFX PRODUCTION',
        gridLoop: `${b('doritos', 'campania')}/gallery_detail/gallery_thumb_loop`,
        mainVideo: `${b('doritos', 'campania')}/videos/doritos_main.mp4`,
        gridImage1x: `${b('doritos', 'campania')}/hero_workgrid/doritos_campania_workgrid_1x`,
        gridImage2x: `${b('doritos', 'campania')}/hero_workgrid/doritos_campania_workgrid_2x`,
        coverImage: `${b('doritos', 'campania')}/work_page/doritos_campania_thumb`,
        loopMwWp: `${b('doritos', 'campania')}/gallery_detail/gallery_doritos-1`,
        mwImage1x: `${b('doritos', 'campania')}/more_works/doritos_campania_mw_1x`,
        mwImage2x: `${b('doritos', 'campania')}/more_works/doritos_campania_mw_2x`,
        heroWideImage: `${b('doritos', 'campania')}/gallery_detail/doritos_campania_detail_hero`,
        galleryThumb: `${b('doritos', 'campania')}/gallery_detail/gallery_thumb`,
        galleryLoop: `${b('doritos', 'campania')}/gallery_detail/gallery_doritos-1`,
        gridData: { width: 400, height: 223 },
        sidebar: {
            logo: '/work_id/doritos/img_brand/doritos_client.png',
            logoClassName: 'w-[120px] md:w-[180px]',
            title: 'DORITOS Supports',
            project: 'BE BOLD. REACH OUT.',
            brief: 'Doritos buscaba dar un mensaje profundo sobre salud mental sin perder su audacia visual. El desafío: visibilizar la ansiedad y los pensamientos intrusivos que ocultamos detrás de un automático "estoy bien", rompiendo el estigma y fomentando la importancia de pedir ayuda.',
            overview: 'Dirigimos dos comerciales donde la tipografía y el motion design fueron los verdaderos protagonistas. Fusionamos ilustraciones con storytelling dinámico, creando animaciones de alto impacto que transforman las palabras en emociones tangibles y le marcan el ritmo a la narrativa.',
            tags: ['FILM PRODUCTION', 'ANIMATION', 'DIGITAL CONTENT', 'MOTION GRAPHICS']
        },
        gallery: [{ type: 'text', title: 'THE IDEA:', text: 'Darle volumen a lo que callamos. Traducir esa batalla interna en un choque visual crudo, donde el ruido mental tomara el control absoluto de la pantalla para exponer la tensión real entre la fachada que mostramos y lo que sentimos por dentro.', className: '!py-4' },
        { type: 'full', aspect: 'aspect-auto', src: `${b('doritos', 'campania')}/gallery_detail/gallery_row-1_1x_f` },

        {
            type: 'custom',
            src: [
                // Imagen Izquierda: Control total con 'translate-y'
                {
                    src: `${b('doritos', 'campania')}/gallery_detail/gallery_half-2_1x`,
                    className: 'w-full max-w-[450px] mx-auto md:ml-auto md:mr-0 md:translate-y-[20px]'
                },
                // Imagen Derecha: Le sacamos el 'my-auto' para que se quede anclada arriba
                {
                    src: `${b('doritos', 'campania')}/gallery_detail/gallery_half-1_1x`,
                    className: 'w-full max-w-[480px] mx-auto md:mr-auto md:ml-0 my-auto'
                },
            ],
            className: 'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-16 mb-6 md:mb-12 items-start',
            //overlayText: 'BE BOLD.\nREACH OUT.',
            overlayClassName: 'absolute bottom-[0%] left-3/4 -translate-x-1/2 z-10',
            overlayTextClassName: '-rotate-[4deg] text-center'
        },
        { type: 'text', title: 'OUTCOME:', text: 'Una campaña visualmente magnética que logró el balance exacto entre impacto estético y empatía. Entregamos una pieza con un craft altísimo que superó las expectativas de la marca y logró conectar de forma auténtica con una audiencia masiva, abriendo una conversación necesaria.', className: '!py-4 !-mt-4' },
        { type: 'interactive-video', loop: `${b('doritos', 'campania')}/gallery_detail/detail_doritos_cafe-loop`, aspect: 'aspect-video', src: `${b('doritos', 'campania')}/gallery_detail/detail_doritos_cafe.mp4` },
        {
            type: 'custom',
            src: [
                {
                    src: `${b('doritos', 'campania')}/gallery_detail/gallery_half-4_1x`,
                    className: 'w-full max-w-[550px] mx-auto md:mr-auto md:ml-0 my-auto'
                },
                {
                    src: `${b('doritos', 'campania')}/gallery_detail/gallery_half-5_1x`,
                    className: 'w-full max-w-[490px] mx-auto md:mr-auto md:translate-y-[30px]'
                },
            ],
            className: 'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-16 mb-0 md:mb-16 items-start'
        },
        { type: 'interactive-video', loop: `${b('doritos', 'campania')}/gallery_detail/detail_doritos_bed-loop`, aspect: 'aspect-video', src: `${b('doritos', 'campania')}/gallery_detail/detail_doritos_bed.mp4` },
        { type: 'interactive-video', loop: `${b('doritos', 'campania')}/gallery_detail/detail_doritos_couch-loop`, aspect: 'aspect-video', src: `${b('doritos', 'campania')}/gallery_detail/detail_doritos_couch.mp4` },
        ],
    },

    // ─── 06 CASH APP ──────────────────────────────────────────────────────────
    {
        id: 'cashapp',
        slug: 'cash-app',
        layout: 'default',
        headerLogo: '/work_id/cashapp/img_brand/cashapp-color-iso.svg',
        animationStyle: 'cinematic',
        title: 'CASH APP - Money Dreams!',
        category: 'Digital Content',
        description: '↘ MOTION & VFX PRODUCTION',
        gridLoop: `${b('cashapp', 'advertising')}/gallery_detail/gallery_cashapp-2`,
        mainVideo: `${b('cashapp', 'advertising')}/videos/cashapp_main-1.mp4`,
        gridImage1x: `${b('cashapp', 'advertising')}/hero_workgrid/cashapp_campania_workgrid_1x`,
        gridImage2x: `${b('cashapp', 'advertising')}/hero_workgrid/cashapp_campania_workgrid_2x`,
        coverImage: `${b('cashapp', 'advertising')}/work_page/cashapp_campania_thumb`,
        loopMwWp: `${b('cashapp', 'advertising')}/work_page/gallery_cashapp-2`,
        mwImage1x: `${b('cashapp', 'advertising')}/more_works/cashapp_campania_mw_1x`,
        mwImage2x: `${b('cashapp', 'advertising')}/more_works/cashapp_campania_mw_2x`,
        heroWideImage: `${b('cashapp', 'advertising')}/gallery_detail/cashapp_campania_detail_hero`,
        galleryThumb: `${b('cashapp', 'advertising')}/work_page/cashapp_campania_thumb`,
        galleryLoop: `${b('cashapp', 'advertising')}/gallery_detail/gallery_cashapp-2`,
        gridData: { width: 400, height: 223 },
        sidebar: {
            logo: '/work_id/cashapp/img_brand/cashapp-color-white.svg',
            logoClassName: 'w-[120px] md:w-[210px] lg:w-[150px]',
            title: 'CASH APP - Money Dreams',
            project: 'Money Dreams',
            brief: 'Un giro estratégico repentino nos obligó a transformar un fashion film en una campaña sobre finanzas en tiempo récord. El desafío: crear "Money Dreams" manteniendo una estética surrealista para conectar con una generación que rechaza las etiquetas.',
            overview: 'Resolvimos un rediseño total en una semana sin sacrificar el craft. Mantuvimos el enfoque experimental utilizando efectos prácticos y sets teatrales, rodando una narrativa en tres actos que cruza impecablemente moda, lifestyle y finanzas.',
            tags: ['FILM PRODUCTION', 'ANIMATION', 'DIGITAL CONTENT', 'MOTION GRAPHICS']
        },
        gallery: [{ type: 'text', title: 'THE IDEA:', text: 'Mutar la idea sin perder nuestra visión. A través de tres viñetas surrealistas, adaptamos la propuesta para celebrar la libertad de gastar con estilo propio, demostrando que la app siempre juega a tu favor.', className: '!py-4' },
        { type: 'full', aspect: 'aspect-auto', src: `${b('cashapp', 'advertising')}/gallery_detail/gallery_row-1_1x_f` },
        { type: 'text', title: 'OUTCOME:', text: 'Transformamos un freno de preproducción en una ejecución premium. Demostramos agilidad extrema frente a la presión y entregamos una campaña magnética que logró que la independencia financiera se vea más audaz que nunca.', className: '!py-4' },
        { type: 'interactive-video', loop: `${b('cashapp', 'advertising')}/gallery_detail/gallery_cashapp-5`, aspect: 'aspect-video', src: `${b('cashapp', 'advertising')}/videos/cashapp_main-2.mp4` },
        {
            type: 'custom',
            src: [
                {
                    src: `${b('cashapp', 'advertising')}/gallery_detail/gallery_half-4_1x`,
                    className: 'w-full max-w-[550px] mx-auto md:mr-auto md:ml-5 my-auto cashapp-img-4'
                },
                {
                    src: `${b('cashapp', 'advertising')}/gallery_detail/gallery_half-5_1x`,
                    className: 'w-full max-w-[490px] mx-auto md:mr-auto md:translate-y-[80px] cashapp-img-5'
                },
            ],
            className: 'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-16 mb-16 items-start cashapp-grid'
        },
        { type: 'full', aspect: 'aspect-video', src: `${b('cashapp', 'advertising')}/gallery_detail/gallery_cashapp-4.mp4` },
        { type: 'full', aspect: 'aspect-auto', src: `${b('cashapp', 'advertising')}/gallery_detail/gallery_row-2_1x_f` },
        { type: 'full', aspect: 'aspect-video', src: `${b('cashapp', 'advertising')}/gallery_detail/gallery_cashapp-3.mp4` },
        ],
    },


    // ─── 08 ZONAPROP ─────────────────────────────────────────────────────────
    {
        id: 'zonaprop',
        slug: 'zonaprop',
        layout: 'default',
        animationStyle: 'cinematic',
        title: 'ENTREVISTAS CON CLIENTES',
        category: 'Film Production',
        description: '↘ [DESCRIPCIÓN]',
        gridLoop: `${b('entrevistas_clientes', 'campania')}/gallery_detail/gallery_thumb_loop`,
        mainVideo: `${b('entrevistas_clientes', 'campania')}/videos/entrevistas_clientes_main.mp4`,
        gridImage1x: `${b('entrevistas_clientes', 'campania')}/hero_workgrid/entrevistas_clientes_campania_workgrid_1x`,
        gridImage2x: `${b('zona_prop', 'campania')}/hero_workgrid/zona_prop_campania_workgrid_2x`,
        coverImage: `${b('zona_prop', 'campania')}/work_page/zona_prop_campania_thumb`,
        loopMwWp: `${b('zona_prop', 'campania')}/more_works/zona_prop_loop_mw-wp`,
        mwImage1x: `${b('zona_prop', 'campania')}/more_works/zona_prop_campania_mw_1x`,
        mwImage2x: `${b('zona_prop', 'campania')}/more_works/zona_prop_campania_mw_2x`,
        heroWideImage: `${b('zona_prop', 'campania')}/gallery_detail/zona_prop_campania_detail_hero`,
        galleryThumb: `${b('zona_prop', 'campania')}/gallery_detail/gallery_thumb`,
        galleryLoop: `${b('zona_prop', 'campania')}/gallery_detail/gallery_thumb_loop`,
        gridData: { width: 400, height: 223 },
        sidebar: { tags: ['DIGITAL CAMPAIGN', 'MEDIA CONTENT'] },
        gallery: [],
    },

    // ─── 09 ITAÚ ──────────────────────────────────────────────────────────────
    {
        id: 'itau',
        slug: 'itau-bank',
        layout: 'default',
        animationStyle: 'cinematic',
        title: 'ITAÚ - CX DAY',
        category: 'Employee Marketing',
        description: '↘ EMPLOYEE MARKETING | PRODUCTION',
        headerLogo: '/work_id/itau/img_brand/itau_color_w.svg',
        headerLogoClassName: 'h-[36px] md:h-[56px] lg:h-[70px]',
        hideWatchCursor: true,
        staticHero: true,
        //gridLoop: `${b('itau', 'cx_day')}/gallery_detail/gallery_thumb_loop`,
        //mainVideo: `${b('itau', 'cx_day')}/videos/itau_main.mp4`,
        gridImage1x: `${b('itau', 'cx_day')}/hero_workgrid/itau_cx-day_workgrid_1x`,
        gridImage2x: `${b('itau', 'cx_day')}/hero_workgrid/itau_cx-day_workgrid_2x`,
        coverImage: `${b('itau', 'cx_day')}/work_page/itau_cx-day_thumb`,
        loopMwWp: `${b('itau', 'cx_day')}/more_works/itau_loop_mw-wp`,
        mwImage1x: `${b('itau', 'cx_day')}/more_works/itau_cx-day_mw_1x`,
        mwImage2x: `${b('itau', 'cx_day')}/more_works/itau_cx-day_mw_2x`,
        heroWideImage: `${b('itau', 'cx_day')}/gallery_detail/itau_cx-day_detail_hero`,
        galleryThumb: `${b('itau', 'cx_day')}/gallery_detail/itau_cx-day_thumb`,
        //galleryLoop: `${b('itau', 'cx_day')}/gallery_detail/gallery_thumb_loop`,
        gridData: { width: 400, height: 223 },
        sidebar: {
            logo: '/work_id/itau/img_brand/itau_color_w.svg',
            logoClassName: 'w-[50px] md:w-[65px]',
            title: 'CX Day',
            project: 'Escuchando al cliente',
            brief: 'Banco Itaú buscaba elevar la experiencia del cliente (CX) desde adentro. El desafío: huir de las clásicas y aburridas capacitaciones corporativas para lograr que los empleados conectaran genuinamente con las necesidades y frustraciones reales de los usuarios.',
            overview: 'Ejecución BTL "end-to-end" en el corazón corporativo del banco. Nos hicimos cargo desde el diseño industrial y la construcción en madera de la cabina, hasta la integración tecnológica de la experiencia (iPads, teléfonos) y la logística integral de la activación.',
            tags: ['PRODUCTION', 'ACTIVATION', 'EMPLOYEE MARKETING']
        },
        gallery: [{ type: 'text', title: 'THE IDEA:', text: 'Generar empatía a través de la inmersión total. Diseñamos una cabina interactiva donde los colaboradores se enfrentaban a grabaciones reales de atención al cliente. Un espacio físico para escuchar sin filtros, entender cada escenario y aprender el mejor abordaje para cada caso.', className: '!py-4' },
        { type: 'full', bg: 'bg-background', src: `${b('itau', 'cx_day')}/gallery_detail/gallery_row-1_1x_f` },

        {
            type: 'custom',
            src: [
                // Imagen Izquierda: Control total con 'translate-y'
                {
                    src: `${b('itau', 'cx_day')}/gallery_detail/gallery_half-1_1x`,
                    className: 'w-full max-w-[450px] mx-auto md:ml-auto md:mr-0 md:translate-y-[50px] itau-img-1'
                },
                // Imagen Derecha: Le sacamos el 'my-auto' para que se quede anclada arriba
                {
                    src: `${b('itau', 'cx_day')}/gallery_detail/gallery_half-2_1x`,
                    className: 'w-full max-w-[480px] mx-auto md:mr-auto md:ml-0 my-auto itau-img-2'
                },
            ],
            className: 'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-16 mb-8 md:mb-32 items-start itau-grid-1',
            overlayText: 'ESCUCHANDO AL CLIENTE',
            overlayClassName: 'absolute bottom-[0%] left-3/4 -translate-x-1/2 z-10 itau-overlay-text',
            overlayTextClassName: '-rotate-[4deg] text-center'
        },
        { type: 'text', title: 'OUTCOME:', text: 'Rompimos la burbuja corporativa. Transformamos un simple mensaje de comunicación interna en una herramienta de aprendizaje tangible y memorable. Logramos que el equipo internalice el valor de escuchar, mejorando su capacidad estratégica de respuesta ante el cliente.', className: '!py-4 !-mt-6' },
        { type: 'full', aspect: 'aspect-auto', bg: 'bg-background', src: `${b('itau', 'cx_day')}/gallery_detail/gallery_row-3_1x_h` },
        {
            type: 'custom',
            src: [
                {
                    src: `${b('itau', 'cx_day')}/gallery_detail/gallery_half-4_1x`,
                    className: 'w-full max-w-[490px] mx-auto md:mr-auto md:translate-y-[80px] itau-img-4'
                },
                {
                    src: `${b('itau', 'cx_day')}/gallery_detail/gallery_half-5_1x.avif`,
                    className: 'w-full max-w-[550px] mx-auto md:ml-auto md:mr-0 md:translate-y-[80px] itau-img-5'
                },
                {
                    src: `${b('itau', 'cx_day')}/gallery_detail/gallery_half-6_1x.avif`,
                    className: 'w-full max-w-[490px] mx-auto md:mr-auto md:translate-y-[80px] itau-img-6'
                },
                {
                    src: `${b('itau', 'cx_day')}/gallery_detail/gallery_half-7_1x.avif`,
                    className: 'w-full max-w-[550px] mx-auto md:ml-auto md:mr-0 md:translate-y-[80px] itau-img-7'
                },
            ],
            className: 'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-16 mb-32 items-start itau-grid-2'
        },],
    },

    // ─── 10 HIPOTECARIO ───────────────────────────────────────────────────────
    {
        id: 'hipotecario',
        slug: 'banco-hipotecario',
        layout: 'default',
        animationStyle: 'cinematic',
        title: 'HIPOTECARIO CONTENT',
        headerLogo: '/work_id/hipotecario/img_brand/hipotecario_color_w.svg',
        headerLogoLight: '/work_id/hipotecario/img_brand/hipotecario_color_b.svg',
        category: 'Graphic Design',
        description: '↘ GRAPHIC DESIGN | RRSS | DIGITAL CONTENT',
        gridLoop: `${b('hipotecario', 'graphic_design')}/gallery_detail/gallery_thumb_loop`,
        mainVideo: `${b('hipotecario', 'graphic_design')}/gallery_detail/hipotecario_main.mp4`,
        gridImage1x: `${b('hipotecario', 'graphic_design')}/hero_workgrid/hipotecario_graphics_workgrid_1x`,
        gridImage2x: `${b('hipotecario', 'graphic_design')}/hero_workgrid/hipotecario_graphics_workgrid_2x`,
        coverImage: `${b('hipotecario', 'graphic_design')}/work_page/hipotecario_graphics_thumb`,
        loopMwWp: `${b('hipotecario', 'graphic_design')}/more_works/hipotecario_loop_mw-wp`,
        mwImage1x: `${b('hipotecario', 'graphic_design')}/more_works/hipotecario_graphics_mw_1x`,
        mwImage2x: `${b('hipotecario', 'graphic_design')}/more_works/hipotecario_graphics_mw_2x`,
        heroWideImage: `${b('hipotecario', 'graphic_design')}/gallery_detail/hipotecario_graphics_detail_hero`,
        galleryThumb: `${b('hipotecario', 'graphic_design')}/gallery_detail/gallery_thumb`,
        galleryLoop: `${b('hipotecario', 'graphic_design')}/gallery_detail/gallery_thumb_loop`,
        gridData: { width: 400, height: 223 },
        sidebar: {
            logo: '/work_id/hipotecario/img_brand/hipotecario_color_w.svg',
            logoLight: '/work_id/hipotecario/img_brand/hipotecario_color_b.svg',
            logoClassName: 'w-[120px] md:w-[150px]',
            title: '',
            project: 'Graphic Design',
            brief: 'Banco Hipotecario necesitaba optimizar su flujo de requerimientos de Marketing y Desarrollo Organizacional. El desafío: absorber un volumen masivo de necesidades de diseño gráfico (interno y externo) y procesamiento de datos , exigiendo calidad premium y tiempos de respuesta inmediatos para mantener el ritmo de toda la corporación.',
            overview: 'Desplegamos un equipo dedicado para resolver su comunicación integral. A nivel visual, diseñamos desde campañas de pauta digital, cartelería para sucursales y videos , hasta la comunicación interna corporativa diaria.',
            tags: ['GRAPHIC DESIGN', 'RRSS', 'DIGITAL CONTENT']
        },
        gallery: [{ type: 'text', title: 'THE IDEA:', text: 'Funcionar como una extensión in-house de alto rendimiento. En lugar de actuar como un proveedor externo tradicional, nos integramos directamente a su ecosistema. El objetivo fue unificar su identidad visual y ordenar su volumen operativo, sincronizando la creatividad y la gestión de datos bajo una misma célula ágil.', className: '!py-4' },
        { type: 'full', bg: 'bg-background', src: `${b('hipotecario', 'graphic_design')}/gallery_detail/gallery_row-1_1x_f` },

        {
            type: 'custom',
            src: [
                // Imagen Izquierda: Control total con 'translate-y'
                {
                    src: `${b('hipotecario', 'graphic_design')}/gallery_detail/gallery_half-1_1x`,
                    className: 'w-full max-w-[450px] mx-auto md:ml-auto md:mr-0 md:translate-y-[50px]'
                },
                // Imagen Derecha: Le sacamos el 'my-auto' para que se quede anclada arriba
                {
                    src: `${b('hipotecario', 'graphic_design')}/gallery_detail/gallery_half-2_1x`,
                    className: 'w-full max-w-[480px] mx-auto md:mr-auto md:ml-0 my-auto'
                },
            ],
            className: 'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-16 mb-32 items-start',
            overlayText: '',
            overlayClassName: 'absolute bottom-[0%] left-3/4 -translate-x-1/2 z-10',
            overlayTextClassName: '-rotate-[4deg] text-center'
        },
        { type: 'text', title: 'OUTCOME:', text: 'Velocidad y escala sin perder el craft. Logramos absorber la intensa demanda diaria de un banco nacional, estandarizando su calidad visual en todos los puntos de contacto, desde una promoción en redes hasta un newsletter interno. Transformamos un desafío de volumen operativo en un motor creativo eficiente y de respuesta inmediata.', className: '!py-4' },
        { type: 'full', aspect: 'aspect-auto', bg: 'bg-background', src: `${b('hipotecario', 'graphic_design')}/gallery_detail/gallery_row-3_1x_h` },
        {
            type: 'custom',
            src: [
                {
                    src: `${b('hipotecario', 'graphic_design')}/gallery_detail/gallery_half-4_1x`,
                    className: 'w-full max-w-[490px] mx-auto md:mr-auto md:translate-y-[80px]'
                },
                {
                    src: `${b('hipotecario', 'graphic_design')}/gallery_detail/gallery_half-5_1x.avif`,
                    className: 'w-full max-w-[550px] mx-auto md:ml-auto md:mr-0 md:translate-y-[80px]'
                },
                {
                    src: `${b('hipotecario', 'graphic_design')}/gallery_detail/gallery_half-6_1x.avif`,
                    className: 'w-full max-w-[490px] mx-auto md:mr-auto md:translate-y-[80px]'
                },
                {
                    src: `${b('hipotecario', 'graphic_design')}/gallery_detail/gallery_half-7_1x.avif`,
                    className: 'w-full max-w-[550px] mx-auto md:ml-auto md:mr-0 md:translate-y-[80px]'
                },
            ],
            className: 'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-16 mb-32 items-start'
        },],
    },

    // ─── 11 CAVS BK ───────────────────────────────────────────────────────────
    {
        id: 'cavsbk',
        slug: 'cav-sbk',
        layout: 'default',
        animationStyle: 'cinematic',
        title: 'CAV SBK',
        category: 'BRAND IDENTITY',
        description: '↘ BRAND IDENTITY',
        headerLogo: '/work_id/cavsbk/img_brand/cavsbk_header_color_w.svg',
        headerLogoLight: '/work_id/cavsbk/img_brand/cavsbk_header_color_b.svg',
        gridLoop: `${b('cavsbk', 'brand_identity')}/gallery_detail/gallery_thumb_loop`,
        mainVideo: `${b('cavsbk', 'brand_identity')}/videos/cavsbk_main.mp4`,
        gridImage1x: `${b('cavsbk', 'brand_identity')}/hero_workgrid/cavsbk_campania_workgrid_1x`,
        gridImage2x: `${b('cavsbk', 'brand_identity')}/hero_workgrid/cavsbk_campania_workgrid_2x`,
        coverImage: `${b('cavsbk', 'brand_identity')}/work_page/cavsbk_campania_thumb`,
        loopMwWp: `${b('cavsbk', 'brand_identity')}/more_works/cavsbk_loop_mw-wp`,
        mwImage1x: `${b('cavsbk', 'brand_identity')}/more_works/cavsbk_campania_mw_1x`,
        mwImage2x: `${b('cavsbk', 'brand_identity')}/more_works/cavsbk_campania_mw_2x`,
        heroWideImage: `${b('cavsbk', 'brand_identity')}/gallery_detail/cavsbk_identity_detail_hero-2`,
        galleryThumb: `${b('cavsbk', 'brand_identity')}/gallery_detail/gallery_thumb`,
        galleryLoop: `${b('cavsbk', 'brand_identity')}/gallery_detail/gallery_thumb_loop`,
        gridData: { width: 400, height: 223 },
        sidebar: {
            logo: '/work_id/cavsbk/img_brand/cavsbk_color_w.svg',
            logoLight: '/work_id/cavsbk/img_brand/cavsbk_color_b.svg',
            logoClassName: 'w-[160px] md:w-[200px]',
            title: 'Campeonato Argentino de Velocidad',
            project: 'Velocidad que trasciende, comunidad que vibra.',
            brief: 'El CAV SBK necesitaba renovar su identidad tras 25 años de historia. El desafío: crear una marca audaz que trascienda la velocidad pura, posicionando a la mayor plataforma de motociclismo del país como un verdadero fenómeno cultural.',
            overview: 'Branding integral y ecosistema visual de alto impacto. Diseñamos el nuevo isologotipo, el sistema cromático y la arquitectura de marca para sus seis categorías. Llevamos la identidad directamente a la pista: desarrollamos desde los patrones técnicos, hasta la indumentaria oficial, credenciales, gráfica de boxes y elementos OOH.',
            tags: ['GRAPHIC DESIGN', 'RRSS', 'DIGITAL CONTENT']
        },
        gallery: [{ type: 'text', title: 'THE IDEA:', text: 'Capturar el latido del motociclismo. Desarrollamos un concepto basado en cuatro pilares: Audaz, Intenso, Cultural y Libre. La idea fue diseñar un sistema visual robusto y enérgico, capaz de transmitir la adrenalina de cada curva y la caballerosidad del deporte , desde la indumentaria de un piloto hasta la transmisión digital en vivo.', className: '!py-4' },
        { type: 'full', bg: 'bg-background', src: `${b('cavsbk', 'brand_identity')}/gallery_detail/gallery_row-1_1x_f` },

        {
            type: 'custom',
            src: [
                // Imagen Izquierda: Control total con 'translate-y'
                {
                    src: `${b('cavsbk', 'brand_identity')}/gallery_detail/gallery_half-1_1x`,
                    className: 'w-full max-w-[450px] mx-auto md:ml-auto md:mr-0 md:translate-y-[50px]'
                },
                // Imagen Derecha: Le sacamos el 'my-auto' para que se quede anclada arriba
                {
                    src: `${b('cavsbk', 'brand_identity')}/gallery_detail/gallery_half-2_1x`,
                    className: 'w-full max-w-[480px] mx-auto md:mr-auto md:ml-0 my-auto'
                },
            ],
            className: 'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-16 mb-32 items-start',
            overlayText: '',
            overlayClassName: 'absolute bottom-[0%] left-3/4 -translate-x-1/2 z-10',
            overlayTextClassName: '-rotate-[4deg] text-center'
        },
        { type: 'text', title: 'OUTCOME:', text: 'Una identidad visual con la fuerza para liderar el deporte motor. Logramos que el CAV SBK trascienda lo puramente deportivo para verse y sentirse como una experiencia premium de nivel internacional. Entregamos un sistema versátil que hoy marca el ritmo en autódromos , indumentaria oficial y todo el ecosistema digital del campeonato.', className: '!py-4' },
        { type: 'full', aspect: 'aspect-auto', bg: 'bg-background', src: `${b('cavsbk', 'brand_identity')}/gallery_detail/gallery_row-3_1x_h` },
        {
            type: 'custom',
            src: [
                {
                    src: `${b('cavsbk', 'brand_identity')}/gallery_detail/gallery_half-4_1x`,
                    className: 'w-full max-w-[490px] mx-auto md:mr-auto md:translate-y-[80px]'
                },
                {
                    src: `${b('cavsbk', 'brand_identity')}/gallery_detail/gallery_half-5_1x.avif`,
                    className: 'w-full max-w-[550px] mx-auto md:ml-auto md:mr-0 md:translate-y-[80px]'
                },
                {
                    src: `${b('cavsbk', 'brand_identity')}/gallery_detail/gallery_half-6_1x.avif`,
                    className: 'w-full max-w-[490px] mx-auto md:mr-auto md:translate-y-[80px]'
                },
                {
                    src: `${b('cavsbk', 'brand_identity')}/gallery_detail/gallery_half-7_1x.avif`,
                    className: 'w-full max-w-[550px] mx-auto md:ml-auto md:mr-0 md:translate-y-[80px]'
                },
            ],
            className: 'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-16 mb-32 items-start'
        },],
    },

    // ─── 12 MENANT ────────────────────────────────────────────────────────────
    {
        id: 'menant',
        slug: 'menant',
        layout: 'default',
        animationStyle: 'cinematic',
        title: 'MENANT PAISAJISMO',
        category: 'Brand Identity',
        description: '↘ BRAND IDENTITY | RRSS | DIGITAL CONTENT',
        headerLogo: '/work_id/menant/img_brand/menant_w-1.svg',
        headerLogoLight: '/work_id/menant/img_brand/menant_b-1.svg',
        headerLogoClassName: 'h-[26px] md:h-[38px] lg:h-[48px]',
        gridLoop: `${b('menant', 'branding')}/gallery_detail/gallery_thumb_loop`,
        mainVideo: `${b('menant', 'branding')}/videos/menant_main.mp4`,
        gridImage1x: `${b('menant', 'branding')}/hero_workgrid/menant_brand_workgrid_1x`,
        gridImage2x: `${b('menant', 'branding')}/hero_workgrid/menant_brand_workgrid_2x`,
        coverImage: `${b('menant', 'branding')}/work_page/menant_brand_thumb`,
        loopMwWp: `${b('menant', 'branding')}/more_works/menant_loop_mw-wp`,
        mwImage1x: `${b('menant', 'branding')}/more_works/menant_brand_mw_1x`,
        mwImage2x: `${b('menant', 'branding')}/more_works/menant_brand_mw_2x`,
        heroWideImage: `${b('menant', 'branding')}/gallery_detail/menant_brand_detail_hero`,
        galleryThumb: `${b('menant', 'branding')}/gallery_detail/gallery_thumb`,
        galleryLoop: `${b('menant', 'branding')}/gallery_detail/gallery_thumb_loop`,
        gridData: { width: 400, height: 223 },
        sidebar: {
            logo: '/work_id/menant/img_brand/menant_w-3.svg',
            logoLight: '/work_id/menant/img_brand/menant_b-3.svg',
            logoClassName: 'w-[130px] md:w-[150px]',
            title: 'Menant Paisajismo - Espacios Verdes',
            project: '',
            meta: [{ label: 'Client', value: 'Menant' }],
            brief: 'Adela Menant necesitaba crear la marca corporativa de su empresa desde cero tras una década de experiencia. El desafío: diseñar una identidad visual que comunique su visión del paisaje no como un simple fondo, sino como el refugio más vital del hogar.',
            overview: 'Desarrollamos un branding integral fundacional. Diseñamos isologotipo, paleta y universo tipográfico creando un lenguaje que equilibra la fluidez orgánica con la precisión técnica. Una arquitectura de marca sólida, lista para escalar desde proyectos residenciales hasta grandes desarrollos inmobiliarios.',
            tags: ['DIGITAL CONTENT', 'ART DIRECTION', 'BRAND IDENTITY'],
        },
        gallery: [

            { type: 'text', title: 'THE VIBE:', text: 'Bajo el concepto central de "Identidad Natural", diseñamos una marca que respira. Nos alejamos de la estética paisajista tradicional para enfocarnos en lo sensorial. La idea fue crear una identidad visual que prometa interpretar la esencia del cliente y convertirla en naturaleza, asegurando que cada proyecto no solo se vea bien, sino que "se sienta".' },
            { type: 'full', src: `${b('menant', 'branding')}/gallery_detail/gallery_row-1_1x_f` },

            {
                type: 'custom',
                src: [
                    // Imagen Izquierda: Control total con 'translate-y'
                    {
                        src: `${b('menant', 'branding')}/gallery_detail/gallery_half-2_1x`,
                        // md:translate-y-[80px] la mueve hacia abajo visualmente sin tocar la grilla. 
                        // Podés cambiar ese 80px por el número exacto que quieras.
                        className: 'w-full max-w-[450px] mx-auto md:ml-auto md:mr-0 md:translate-y-[70px]'
                    },
                    // Imagen Derecha: Le sacamos el 'my-auto' para que se quede anclada arriba
                    {
                        src: `${b('menant', 'branding')}/gallery_detail/gallery_half-1_1x`,
                        className: 'w-full max-w-[380px] mx-auto md:mr-auto md:ml-0 my-auto'
                    },
                ],
                className: 'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-16 mb-32 items-start',
                overlayText: 'ESPACIOS\nVERDES',
                overlayClassName: 'absolute bottom-[0%] left-3/4 -translate-x-1/2 z-10',
                overlayTextClassName: '-rotate-[4deg] text-center'
            },
            { type: 'half', aspect: 'aspect-[4/5]', src: [`${b('menant', 'branding')}/gallery_detail/gallery_row-3_1x_h`, `${b('menant', 'branding')}/gallery_detail/gallery_row-4_1x_h`] },
            { type: 'text', title: 'OUTCOME:', text: 'Transformamos más de una década de compromiso personal con la tierra en una firma corporativa sólida y premium. Menant nace visualmente como una empresa de paisajismo de autor, logrando transmitir coherencia, calma y sensibilidad desde el primer boceto y masterplan, hasta la evolución final del paisaje.', className: '!py-4' },
            { type: 'full', aspect: 'aspect-auto', src: `${b('menant', 'branding')}/gallery_detail/gallery_row-5_1x_f` },
            {
                type: 'custom',
                src: [
                    // Imagen Derecha: Le sacamos el 'my-auto' para que se quede anclada arriba
                    {
                        src: `${b('menant', 'branding')}/gallery_detail/gallery_half-7_1x`,
                        className: 'w-full max-w-[390px] mx-auto md:mr-auto md:ml-100 my-auto'
                    },
                    // Imagen Izquierda: Control total con 'translate-y'
                    {
                        src: `${b('menant', 'branding')}/gallery_detail/gallery_half-8_1x`,
                        // md:translate-y-[80px] la mueve hacia abajo visualmente sin tocar la grilla. 
                        // Podés cambiar ese 80px por el número exacto que quieras.
                        className: 'w-full max-w-[450px] mx-auto md:ml-auto md:mr-0 md:translate-y-[80px]'
                    },
                ],
                className: 'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-16 mb-32 items-start'
            },

        ],


    },

    // ─── 13 ALTO PALERMO ──────────────────────────────────────────────────────
    {
        id: 'alto-palermo',
        slug: 'alto-palermo',
        layout: 'default',
        animationStyle: 'cinematic',
        title: 'MUJERES EN BICI',
        category: 'Sports activation',
        description: '↘ TECHNICAL PARTNER | EVENT PRODUCTION',
        headerLogo: '/work_id/alto_palermo/img_brand/alto_palermo_w.svg',
        headerLogoLight: '/work_id/alto_palermo/img_brand/alto_palermo_b.svg',
        hideWatchCursor: true,
        staticHero: true,
        //gridLoop: `${b('alto_palermo', 'mujeres_bici')}/gallery_detail/gallery_thumb_loop`,
        //mainVideo: `${b('alto_palermo', 'mujeres_bici')}/videos/alto_palermo_main.mp4`,
        gridImage1x: `${b('alto_palermo', 'mujeres_bici')}/hero_workgrid/alto_palermo_mujeres_bici_workgrid_1x`,
        gridImage2x: `${b('alto_palermo', 'mujeres_bici')}/hero_workgrid/alto_palermo_mujeres_bici_workgrid_2x`,
        coverImage: `${b('alto_palermo', 'mujeres_bici')}/work_page/alto_palermo_mujeres_bici_thumb`,
        loopMwWp: `${b('alto_palermo', 'mujeres_bici')}/more_works/alto_palermo_loop_mw-wp`,
        mwImage1x: `${b('alto_palermo', 'mujeres_bici')}/more_works/alto_palermo_mw_1x`,
        mwImage2x: `${b('alto_palermo', 'mujeres_bici')}/more_works/alto_palermo_mw_2x`,
        heroWideImage: `${b('alto_palermo', 'mujeres_bici')}/gallery_detail/alto_palermo_mujeres_bici_detail_hero`,
        galleryThumb: `${b('alto_palermo', 'mujeres_bici')}/gallery_detail/alto_palermo_mujeres_bici_thumb`,
        //galleryLoop: `${b('alto_palermo', 'mujeres_bici')}/gallery_detail/gallery_thumb_loop`,
        gridData: { width: 400, height: 223 },
        sidebar: {
            logo: '/work_id/alto_palermo/img_brand/alto_palermo_w.svg',
            logoLight: '/work_id/alto_palermo/img_brand/alto_palermo_b.svg',
            logoClassName: 'w-[65px] md:w-[85px]',
            title: 'Mujeres en Bici',
            project: 'Bicicleteada Familiar',
            meta: [{ label: 'Client', value: 'Alto Palermo' }],
            brief: 'Alto Palermo buscaba salir de su espacio comercial para conectar con su audiencia al aire libre. El desafío: potenciar una bicicleteada masiva y familiar ("Mujeres en Bici"), creando un punto de encuentro vibrante que mantuviera la energía y la identidad de la marca en plena calle.',
            overview: 'Ejecutamos la producción BTL y el set-up técnico para el núcleo del evento urbano. Nos hicimos cargo del montaje estructural del escenario principal, la instalación de sonido de alto impacto y la coordinación del warm-up en vivo, marcando el ritmo de la jornada.',
            tags: ['SPORTS ACTIVATION', 'TECHNICAL PARTNER', 'EVENT PRODUCTION'],
        },
        gallery: [

            { type: 'text', title: 'THE IDEA:', text: 'Transformar el punto de partida en el corazón del evento. Diseñamos el hub principal de la experiencia combinando infraestructura técnica, entretenimiento en vivo y un fuerte sentido de comunidad para elevar la adrenalina de los participantes antes y después de pedalear.', className: '!py-4' },
            { type: 'full', src: `${b('alto_palermo', 'mujeres_bici')}/gallery_detail/gallery_row-1_1x_f` },

            {
                type: 'custom',
                src: [
                    // Imagen Izquierda: Control total con 'translate-y'
                    {
                        src: `${b('alto_palermo', 'mujeres_bici')}/gallery_detail/gallery_half-1_1x`,
                        // md:translate-y-[80px] la mueve hacia abajo visualmente sin tocar la grilla. 
                        // Podés cambiar ese 80px por el número exacto que quieras.
                        className: 'w-full max-w-[450px] mx-auto md:ml-auto md:mr-0 md:translate-y-[70px]'
                    },
                    // Imagen Derecha: Le sacamos el 'my-auto' para que se quede anclada arriba
                    {
                        src: `${b('alto_palermo', 'mujeres_bici')}/gallery_detail/gallery_half-2_1x`,
                        className: 'w-full max-w-[380px] mx-auto md:mr-auto md:ml-0 my-auto'
                    },
                ],
                className: 'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-16 mb-32 items-start',
                overlayText: 'BICICLETEADA\nFAMILIAR',
                overlayClassName: 'absolute bottom-[0%] left-3/4 -translate-x-1/2 z-10',
                overlayTextClassName: '-rotate-[4deg] text-center'
            },
            { type: 'full', aspect: 'aspect-auto', src: `${b('alto_palermo', 'mujeres_bici')}/gallery_detail/gallery_row-3_2x_f` },
            { type: 'text', title: 'OUTCOME:', text: 'Energía al máximo y presencia de marca impecable. Logramos que una multitud vibrara al unísono desde el primer minuto, en una jornada que posicionó a Alto Palermo más allá del retail, consolidándolo como un promotor activo del bienestar en la ciudad.', className: '!py-4' },
            { type: 'full', aspect: 'aspect-auto', src: `${b('alto_palermo', 'mujeres_bici')}/gallery_detail/gallery_row-4_2x_f` },
            {
                type: 'custom',
                src: [
                    // Imagen Derecha: Le sacamos el 'my-auto' para que se quede anclada arriba
                    {
                        src: `${b('alto_palermo', 'mujeres_bici')}/gallery_detail/gallery_half-5_2x`,
                        className: 'w-full max-w-[390px] mx-auto md:mr-auto md:ml-100 my-auto'
                    },
                    // Imagen Izquierda: Control total con 'translate-y'
                    {
                        src: `${b('alto_palermo', 'mujeres_bici')}/gallery_detail/gallery_half-6_2x`,
                        // md:translate-y-[80px] la mueve hacia abajo visualmente sin tocar la grilla. 
                        // Podés cambiar ese 80px por el número exacto que quieras.
                        className: 'w-full max-w-[450px] mx-auto md:ml-auto md:mr-0 md:translate-y-[80px]'
                    },
                ],
                className: 'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-16 mb-32 items-start'
            },
            { type: 'full', aspect: 'aspect-auto', className: '-mt-8 md:-mt-16 lg:-mt-24 relative z-10', src: `${b('alto_palermo', 'mujeres_bici')}/gallery_detail/gallery_row-7_2x_f` },

        ],


    },

    // ─── 14 LUXORA ────────────────────────────────────────────────────────────
    {
        id: 'luxora',
        slug: 'luxora',
        layout: 'default',
        animationStyle: 'cinematic',
        title: 'LUXORA',
        category: 'Brand Identity',
        description: '↘ BRAND IDENTITY | BRANDBOOK DESIGN',
        headerLogo: '/work_id/luxora/img_brand/luxora_w.svg',
        headerLogoClassName: 'h-[36px] md:h-[54px] lg:h-[68px]',
        gridLoop: `${b('luxora', 'brand_identity')}/gallery_detail/gallery_thumb_loop`,
        mainVideo: `${b('luxora', 'brand_identity')}/videos/luxora_main.mp4`,
        gridImage1x: `${b('luxora', 'brand_identity')}/hero_workgrid/luxora_brand_workgrid_1x`,
        gridImage2x: `${b('luxora', 'brand_identity')}/hero_workgrid/luxora_brand_workgrid_2x`,
        coverImage: `${b('luxora', 'brand_identity')}/work_page/luxora_brand_thumb`,
        loopMwWp: `${b('luxora', 'brand_identity')}/more_works/luxora_loop_mw-wp`,
        mwImage1x: `${b('luxora', 'brand_identity')}/more_works/luxora_brand_mw_1x`,
        mwImage2x: `${b('luxora', 'brand_identity')}/more_works/luxora_brand_mw_2x`,
        heroWideImage: `${b('luxora', 'brand_identity')}/gallery_detail/luxora_brand_detail_hero`,
        galleryThumb: `${b('luxora', 'brand_identity')}/gallery_detail/gallery_thumb`,
        galleryLoop: `${b('luxora', 'brand_identity')}/gallery_detail/gallery_thumb_loop`,
        gridData: { width: 400, height: 223 },
        sidebar: {
            logo: '/work_id/luxora/img_brand/luxora_w3.svg',
            logoClassName: 'w-[140px] md:w-[180px]',
            title: 'Office Bright S.A.',
            project: 'Soluciones que brillan',
            brief: 'Luxora necesitaba nacer como un referente en el sector de la limpieza corporativa y premium. El desafío: alejarse de la estética funcional tradicional para construir una identidad visual que proyectara lujo, profesionalismo y confianza desde el primer contacto.',
            overview: 'Branding integral desde la raíz. Diseñamos isologotipo, sistema tipográfico elegante y una paleta cromática anclada en la confianza. Entregamos el manual de marca para garantizar un impacto visual impecable en cada punto de contacto físico y digital.',
            tags: ['BRANDING', 'BRAND IDENTITY', 'BRANDBOOK',]
        },
        gallery: [{ type: 'text', title: 'THE IDEA:', text: 'Iluminar el rubro. A partir de su naming, construido sobre el latín "lux" para evocar luz y continuidad , desarrollamos el concepto central: "Soluciones que brillan". La idea fue fusionar funcionalidad con exclusividad, creando un sistema donde la limpieza se percibe como la renovación estética de cada espacio.', className: '!py-4' },
        { type: 'full', bg: 'bg-background', src: `${b('luxora', 'brand_identity')}/gallery_detail/gallery_row-1_1x_f` },

        {
            type: 'custom',
            src: [
                // Imagen Izquierda: Control total con 'translate-y'
                {
                    src: `${b('luxora', 'brand_identity')}/gallery_detail/gallery_half-1_1x`,
                    className: 'w-full max-w-[450px] mx-auto md:ml-auto md:mr-0 md:translate-y-[50px]'
                },
                // Imagen Derecha: Le sacamos el 'my-auto' para que se quede anclada arriba
                {
                    src: `${b('luxora', 'brand_identity')}/gallery_detail/gallery_half-2_1x`,
                    className: 'w-full max-w-[480px] mx-auto md:mr-auto md:ml-0 my-auto'
                },
            ],
            className: 'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-16 mb-32 items-start',
            overlayText: '',
            overlayClassName: 'absolute bottom-[0%] left-3/4 -translate-x-1/2 z-10',
            overlayTextClassName: '-rotate-[4deg] text-center'
        },
        { type: 'text', title: 'OUTCOME:', text: 'Posicionamiento premium instantáneo. Transformamos un servicio tradicional en una marca corporativa fresca, sólida y magnética. Logramos una identidad visual que transmite claridad absoluta, consolidando a Luxora como un aliado estratégico de excelencia para el sector corporativo.', className: '!py-4' },
        { type: 'full', aspect: 'aspect-auto', bg: 'bg-background', src: `${b('luxora', 'brand_identity')}/gallery_detail/gallery_row-3_1x_h` },
        {
            type: 'custom',
            src: [
                {
                    src: `${b('luxora', 'brand_identity')}/gallery_detail/gallery_half-4_1x`,
                    className: 'w-full max-w-[490px] mx-auto md:mr-auto md:translate-y-[80px]'
                },
                {
                    src: `${b('luxora', 'brand_identity')}/gallery_detail/gallery_half-5_1x.avif`,
                    className: 'w-full max-w-[550px] mx-auto md:ml-auto md:mr-0 md:translate-y-[80px]'
                },
                {
                    src: `${b('luxora', 'brand_identity')}/gallery_detail/gallery_half-6_1x.avif`,
                    className: 'w-full max-w-[490px] mx-auto md:mr-auto md:translate-y-[80px]'
                },
                {
                    src: `${b('luxora', 'brand_identity')}/gallery_detail/gallery_half-7_1x.avif`,
                    className: 'w-full max-w-[550px] mx-auto md:ml-auto md:mr-0 md:translate-y-[80px]'
                },
            ],
            className: 'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 lg:gap-16 mb-32 items-start'
        },],
    },

    // ─── 15 MARO ──────────────────────────────────────────────────────────────
    {
        id: 'maro',
        slug: 'maro',
        layout: 'default',
        animationStyle: 'cinematic',
        title: 'MARO',
        category: 'Digital Content',
        description: '↘ [DESCRIPCIÓN]',
        headerLogo: '/work_id/maro/img_brand/maro_w.svg',
        gridLoop: `${b('maro', 'campania')}/gallery_detail/gallery_thumb_loop`,
        mainVideo: `${b('maro', 'campania')}/videos/maro_main.mp4`,
        gridImage1x: `${b('maro', 'campania')}/hero_workgrid/maro_campania_workgrid_1x`,
        gridImage2x: `${b('maro', 'campania')}/hero_workgrid/maro_campania_workgrid_2x`,
        coverImage: `${b('maro', 'campania')}/work_page/maro_campania_thumb`,
        loopMwWp: `${b('maro', 'campania')}/more_works/maro_loop_mw-wp`,
        mwImage1x: `${b('maro', 'campania')}/more_works/maro_campania_mw_1x`,
        mwImage2x: `${b('maro', 'campania')}/more_works/maro_campania_mw_2x`,
        heroWideImage: `${b('maro', 'campania')}/gallery_detail/maro_campania_detail_hero`,
        galleryThumb: `${b('maro', 'campania')}/gallery_detail/gallery_thumb`,
        galleryLoop: `${b('maro', 'campania')}/gallery_detail/gallery_thumb_loop`,
        gridData: { width: 400, height: 223 },
        sidebar: { tags: ['DIGITAL CONTENT', 'SOCIAL MEDIA'] },
        gallery: [],
    },
];