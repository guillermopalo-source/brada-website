import { useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import gsap from 'gsap';
import ScrollReveal from '@/components/custom/ScrollReveal';
import { projects } from '../lib/projects';

// ─── GridCard ─────────────────────────────────────────────────────────────────
interface GridCardProps {
    slug: string;
    title: string;
    category?: string;
    image1x?: string;   // estático 1x 800×800 — sin extensión
    image2x?: string;   // estático 2x Retina 1400×1400 — sin extensión
    gridLoop?: string;  // loop hover compartido con Hero — sin extensión
    lang: string;
    delay: number;
}

function GridCard({ slug, title, category, image1x, image2x, gridLoop, lang, delay }: GridCardProps) {
    const imgRef = useRef<HTMLImageElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleMouseEnter = () => {
        if (!gridLoop || !videoRef.current) return;
        videoRef.current.play().catch(() => { });
        gsap.to(videoRef.current, { opacity: 1, duration: 0.4, ease: 'power2.out' });
        gsap.to(imgRef.current, { opacity: 0, duration: 0.4, ease: 'power2.out' });
    };

    const handleMouseLeave = () => {
        if (!gridLoop || !videoRef.current) return;
        gsap.to(videoRef.current, {
            opacity: 0, duration: 0.35, ease: 'power2.in',
            onComplete: () => {
                if (videoRef.current) {
                    videoRef.current.pause();
                    videoRef.current.currentTime = 0;
                }
            },
        });
        gsap.to(imgRef.current, { opacity: 1, duration: 0.35, ease: 'power2.in' });
    };

    const mediaClass = "absolute inset-0 w-full h-full object-cover";

    return (
        <ScrollReveal delay={delay}>
            <Link
                to={`/${lang}/work/${slug}`}
                className="group flex flex-col cursor-pointer"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="relative aspect-square overflow-hidden mb-4 bg-black">

                    {/* Capa 1 — estático con fallback avif → webp + srcset 1x/2x */}
                    {image1x && (
                        <picture style={{ display: 'contents' }}>
                            <source
                                type="image/avif"
                                srcSet={`${image1x}.avif 1x${image2x ? `, ${image2x}.avif 2x` : ''}`}
                            />
                            <source
                                type="image/webp"
                                srcSet={`${image1x}.webp 1x${image2x ? `, ${image2x}.webp 2x` : ''}`}
                            />
                            <img
                                ref={imgRef}
                                src={`${image1x}.avif`}
                                alt={title}
                                className={mediaClass}
                                style={{ opacity: 1 }}
                            />
                        </picture>
                    )}

                    {/* Capa 2 — loop hover, webm → mp4, preload metadata */}
                    {gridLoop && (
                        <video
                            ref={videoRef}
                            muted
                            loop
                            playsInline
                            preload="metadata"
                            className={mediaClass}
                            style={{ opacity: 0 }}
                        >
                            <source src={`${gridLoop}.webm`} type="video/webm" />
                            <source src={`${gridLoop}.mp4`} type="video/mp4" />
                        </video>
                    )}

                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 pointer-events-none" />
                </div>

                <div className="flex flex-col items-start">
                    <h3 className="text-black dark:text-brada-light text-xl sm:text-2xl md:text-3xl font-garamond font-normal tracking-tight leading-tight">
                        {title.replace('\n', ' ')}
                    </h3>
                    {category && (
                        <p className="text-[#999999] text-sm sm:text-base md:text-lg font-normal -mt-1">
                            {category}
                        </p>
                    )}
                </div>
            </Link>
        </ScrollReveal>
    );
}

// ─── WorkGrid ─────────────────────────────────────────────────────────────────
const WorkGrid = () => {
    const { lang } = useParams();
    const l = lang || 'es';

    return (
        <section
            id="workgrid"
            className="relative w-full bg-transparent mt-[70px] md:mt-[160px] pb-18 sm:pb-20 lg:pb-24"
        >
            <div className="w-full">

                {/* Impact Header */}
                <div className="mb-4 sm:mb-6 lg:mb-8 text-left">
                    <h2 className="text-black dark:text-brada-light font-inter font-extrabold tracking-tighter leading-[0.9] flex flex-col items-start gap-1">
                        <ScrollReveal delay={100}>
                            <span className="block text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[7.5rem]">
                                WE TURN BRIEFS
                            </span>
                        </ScrollReveal>
                        <ScrollReveal delay={200}>
                            <span className="block text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[7.5rem]">
                                INTO IMPACT.
                            </span>
                        </ScrollReveal>
                        <ScrollReveal delay={300}>
                            <span className="block text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[6rem] xl:text-[7.5rem]">
                                BORN <span className="font-garamond italic font-normal lowercase tracking-normal">to</span> CHALLENGE.
                            </span>
                        </ScrollReveal>
                    </h2>

                    <ScrollReveal delay={400}>
                        <div className="mt-0 max-w-4xl">
                            <p className="text-black/70 dark:text-brada-light/70 text-base sm:text-lg md:text-xl leading-relaxed">
                                No solo somos proveedores. Somos los que están cuando hay que
                                estar, un verdadero hermano! <br /> Con visión integral que combina estrategia,
                                creatividad y producción.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={500}>
                        <div className="mt-6">
                            <Link to={`/${l}/work`}>
                                <button className="btn-our-works">
                                    Our Works
                                </button>
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 sm:gap-y-12">
                    {projects.slice(0, 4).map((project, index) => (
                        <GridCard
                            key={project.id}
                            slug={project.slug}
                            title={project.title}
                            category={project.category}
                            image1x={project.gridImage1x}
                            image2x={project.gridImage2x}
                            gridLoop={project.gridLoop}
                            lang={l}
                            delay={400 + index * 100}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WorkGrid;