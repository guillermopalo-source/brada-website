import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { usePageEnter } from '@/animation/usePageEnter';
import ScrollReveal from '@/components/custom/ScrollReveal';
import { useHeaderContext } from '@/context/HeaderContext';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Importamos los 5 ladrillos
import ProjectHeader from '../components/ProjectHeader';
import ProjectHeroMedia from '../components/ProjectHeroMedia';
import ProjectSidebar from '../components/ProjectSidebar';
import ProjectGallery from '../components/ProjectGallery';
import MoreWorks from '../components/MoreWorks';

export default function DefaultLayout({ project }: { project: any }) {
    const { setHeaderState } = useHeaderContext();

    // CAMBIO LÓGICO: Leemos si el proyecto pide animación estilo cine
    const isCinematic = project.animationStyle === 'cinematic';

    // La animación global ahora vive en el layout
    const containerRef = useRef<HTMLDivElement>(null);
    const heroRef = useRef<HTMLDivElement>(null);
    usePageEnter(containerRef);

    // Logo siempre visible en WorkDetail
    useGSAP(() => {
        setHeaderState('visible');

        return () => {
            setHeaderState('default');
            ScrollTrigger.refresh();
        };
    }, []);

    // Animación "Cinematic" (Antes exclusiva de Lemon)
    useGSAP(() => {
        if (!isCinematic || !containerRef.current) return;

        const elements = gsap.utils.toArray('.cinematic-depth') as Element[];
        if (elements.length === 0) return;

        const mm = gsap.matchMedia();

        // Desktop — cinematic
        mm.add('(min-width: 1024px)', () => {
            gsap.from(elements, {
                y: 70,
                opacity: 0,
                scale: 0.96,
                duration: 1,
                stagger: 0.18,
                ease: 'expo.out',
            });
        });

        // Tablet — moderate
        mm.add('(min-width: 768px) and (max-width: 1023px)', () => {
            gsap.from(elements, {
                y: 50,
                opacity: 0,
                scale: 0.97,
                duration: 0.8,
                stagger: 0.12,
                ease: 'expo.out',
            });
        });

        // Mobile — fast and lightweight
        mm.add('(max-width: 767px)', () => {
            gsap.from(elements, {
                y: 35,
                opacity: 0,
                scale: 0.98,
                duration: 0.6,
                stagger: 0.08,
                ease: 'expo.out',
            });
        });

        return () => mm.revert();
    }, { scope: containerRef, dependencies: [isCinematic, project?.gallery?.length] });


    return (
        <>
            <Helmet>
                <title>{project.title} | Our Work | Brada Agency</title>
                <meta name="description" content={project.description} />
            </Helmet>

            <div ref={containerRef} className="min-h-screen bg-transparent pt-[180px] pb-32">
                <main className="w-full" id="work-detail-main">

                    {/* Normal Header Section without affecting trigger */}
                    <div className="w-full flex flex-col relative z-20 bg-background">
                        <ProjectHeader project={project} />

                        {project.heroWideImage ? (
                            <ScrollReveal delay={200}>
                                <div ref={heroRef} className="relative left-1/2 -translate-x-1/2 w-screen max-w-none outline-none mt-4 md:mt-6 mb-24 md:mb-32 lg-hero-wide-container">
                                    <picture style={{ display: 'contents' }}>
                                        <source srcSet={`${project.heroWideImage}.avif`} type="image/avif" />
                                        <source srcSet={`${project.heroWideImage}.webp`} type="image/webp" />
                                        <img
                                            src={`${project.heroWideImage}.avif`}
                                            alt="Hero Wide"
                                            fetchPriority="high"
                                            className="w-full h-auto object-cover"
                                            loading="eager"
                                            decoding="async"
                                        />
                                    </picture>
                                </div>
                            </ScrollReveal>
                        ) : (
                            <div ref={heroRef} className="h-1 pb-12 w-full" />
                        )}
                    </div>

                    {/* Editorial Case Study Layout — fluid grid */}
                    <div className="max-w-[2000px] mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-6 md:gap-8 lg:gap-10 grid-1024-fix">

                            {/* Content Column */}
                            <div className="flex flex-col gap-6 md:gap-8 order-2 lg:order-1">

                                {(project.mainVideo || project.mainImage || project.autoPlayHero || project.galleryThumb) && (
                                    <div className={isCinematic ? 'cinematic-depth' : ''}>
                                        <ProjectHeroMedia project={project} />
                                    </div>
                                )}

                                {project.gallery && project.gallery.length > 0 && (
                                    <ProjectGallery project={project} />
                                )}

                            </div>

                            {/* Sidebar */}
                            <aside className="lg-sidebar-container order-1 lg:order-2">
                                <div className={`lg:sticky lg:top-0 lg:h-screen lg:flex lg:items-center ${isCinematic ? 'cinematic-depth' : ''}`}>
                                    <ProjectSidebar project={project} />
                                </div>
                            </aside>

                            <style>{`
                                @media (min-width: 1024px) and (max-width: 1279px) {
                                    .grid-1024-fix {
                                        grid-template-columns: 6.8fr 3.2fr !important;
                                    }
                                    .lg-sidebar-container > div {
                                        align-items: flex-start !important;
                                        height: auto !important;
                                        max-height: 100vh !important;
                                        overflow-y: auto !important;
                                        padding-top: 40px !important;
                                        padding-bottom: 80px !important;
                                    }
                                }
                                @media (min-width: 768px) and (max-width: 1023px) {
                                    .lg-hero-wide-container {
                                        margin-bottom: 1.5rem !important;
                                    }
                                }
                            `}</style>

                        </div>
                    </div>

                    <MoreWorks currentSlug={project.slug} />
                </main>
            </div>
        </>
    );
}