import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollReveal from '@/components/custom/ScrollReveal';

// ─── WATCH cursor ─────────────────────────────────────────────────────────────
function WatchCursor({
    containerRef,
    visible,
}: {
    containerRef: React.RefObject<HTMLDivElement | null>;
    visible: boolean;
}) {
    const cursorRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number>(0);
    const mouse = useRef({ x: -999, y: -999 });
    const pos = useRef({ x: -999, y: -999 });

    useEffect(() => {
        gsap.set(cursorRef.current, { opacity: 0 });
    }, []);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;
        gsap.killTweensOf(cursor);
        if (visible) {
            pos.current.x = mouse.current.x;
            pos.current.y = mouse.current.y;
            gsap.set(cursor, { x: pos.current.x, y: pos.current.y });
        }
        gsap.to(cursor, { opacity: visible ? 1 : 0, duration: 0.18, ease: visible ? 'power2.out' : 'power2.in' });
    }, [visible]);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const onMove = (e: MouseEvent) => {
            const r = el.getBoundingClientRect();
            mouse.current = { x: e.clientX - r.left, y: e.clientY - r.top };
        };
        const loop = () => {
            pos.current.x += (mouse.current.x - pos.current.x) * 0.1;
            pos.current.y += (mouse.current.y - pos.current.y) * 0.1;
            if (cursorRef.current) gsap.set(cursorRef.current, { x: pos.current.x, y: pos.current.y });
            rafRef.current = requestAnimationFrame(loop);
        };
        rafRef.current = requestAnimationFrame(loop);
        el.addEventListener('mousemove', onMove);
        return () => { cancelAnimationFrame(rafRef.current); el.removeEventListener('mousemove', onMove); };
    }, [containerRef]);

    return (
        <div
            ref={cursorRef}
            className="absolute top-0 left-0 pointer-events-none"
            style={{ transform: 'translate(-50%,-50%)', opacity: 0, zIndex: 200, mixBlendMode: 'difference' }}
        >
            <span
                className="select-none font-inter-tight block whitespace-nowrap"
                style={{
                    fontWeight: 800,
                    fontSize: '3.4rem',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    color: '#ffffff',
                    textTransform: 'none',
                }}
            >
                Watch
            </span>
        </div>
    );
}

// ─── ProjectHeroMedia ─────────────────────────────────────────────────────────
export default function ProjectHeroMedia({ project }: { project: any }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showCursor, setShowCursor] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const loopRef = useRef<HTMLVideoElement>(null);
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Evitar renderizados nulos si falta info crucial
    if (!project.mainVideo && !project.galleryThumb && !project.autoPlayHero && !project.mainImage) return null;

    const mediaClass = 'absolute inset-0 w-full h-full object-cover';

    // Manejadores de eventos interactivos (Lemon Cash)
    const handleMouseEnter = () => {
        if (isPlaying) return;
        setShowCursor(true);
        if (!project.galleryLoop || !loopRef.current) return;
        loopRef.current.play().catch(() => { });
        gsap.to(loopRef.current, { opacity: 1, duration: 0.4, ease: 'power2.out' });
        gsap.to(imgRef.current, { opacity: 0, duration: 0.4, ease: 'power2.out' });
    };

    const handleMouseLeave = () => {
        setShowCursor(false);
        if (!project.galleryLoop || !loopRef.current) return;
        gsap.to(loopRef.current, {
            opacity: 0, duration: 0.35, ease: 'power2.in',
            onComplete: () => {
                if (loopRef.current) {
                    loopRef.current.pause();
                    loopRef.current.currentTime = 0;
                }
            }
        });
        gsap.to(imgRef.current, { opacity: 1, duration: 0.35, ease: 'power2.in' });
    };

    const handleClick = () => {
        if (isPlaying) return;
        setIsPlaying(true);
        setShowCursor(false);
    };

    const handleClose = () => {
        setIsPlaying(false);
    };

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isPlaying) setIsPlaying(false);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [isPlaying]);

    // ─── RENDERIZADO BIFURCADO ───
    if ((project.autoPlayHero || (isMobile && project.galleryLoop)) && project.galleryLoop) {
        return (
            <ScrollReveal delay={300}>
                <div className="relative w-full overflow-hidden bg-black rounded-3xl aspect-video pointer-events-none select-none">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source src={`${project.galleryLoop}.webm`} type="video/webm" />
                        <source src={`${project.galleryLoop}.mp4`} type="video/mp4" />
                    </video>
                </div>
            </ScrollReveal>
        );
    }

    // ESCENARIO 3: IMAGEN ESTÁTICA
    if (project.mainImage) {
        return (
            <ScrollReveal delay={300}>
                <div className="relative w-full overflow-hidden bg-black rounded-3xl aspect-[16/9] pointer-events-none select-none">
                    <picture style={{ display: 'contents' }}>
                        <source srcSet={`${project.mainImage}.avif`} type="image/avif" />
                        <source srcSet={`${project.mainImage}.webp`} type="image/webp" />
                        <img
                            src={`${project.mainImage}.avif`}
                            alt={project.title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </picture>
                </div>
            </ScrollReveal>
        );
    }

    // ESCENARIO 4: IMAGEN ESTÁTICA desde galleryThumb (sin interacción)
    if (project.staticHero && project.galleryThumb) {
        return (
            <ScrollReveal delay={300}>
                <div className="relative w-full overflow-hidden bg-black rounded-3xl aspect-video pointer-events-none select-none">
                    <picture style={{ display: 'contents' }}>
                        <source srcSet={`${project.galleryThumb}.avif`} type="image/avif" />
                        <source srcSet={`${project.galleryThumb}.webp`} type="image/webp" />
                        <img
                            src={`${project.galleryThumb}.avif`}
                            alt={project.title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </picture>
                </div>
            </ScrollReveal>
        );
    }

    // ESCENARIO 2: INTERACTIVO ORIGINAL (Lemon Cash)
    return (
        <ScrollReveal delay={300}>
            <div ref={containerRef} className="relative w-full overflow-hidden bg-black rounded-3xl aspect-video">
                {!isPlaying && (
                    <>
                        {!project.hideWatchCursor && (
                            <WatchCursor containerRef={containerRef} visible={showCursor} />
                        )}
                        <div
                            onClick={handleClick}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className={`absolute inset-0 group ${project.hideWatchCursor ? 'cursor-default' : 'cursor-none'}`}
                        >
                            {project.galleryThumb && (
                                <picture style={{ display: 'contents' }}>
                                    <source srcSet={`${project.galleryThumb}.avif`} type="image/avif" />
                                    <source srcSet={`${project.galleryThumb}.webp`} type="image/webp" />
                                    <img
                                        ref={imgRef}
                                        src={`${project.galleryThumb}.avif`}
                                        alt={project.title}
                                        className={mediaClass}
                                        style={{ opacity: 1 }}
                                    />
                                </picture>
                            )}
                            {project.galleryLoop && (
                                <video
                                    ref={loopRef}
                                    muted loop playsInline
                                    preload="metadata"
                                    className={mediaClass}
                                    style={{ opacity: 0 }}
                                >
                                    <source src={`${project.galleryLoop}.webm`} type="video/webm" />
                                    <source src={`${project.galleryLoop}.mp4`} type="video/mp4" />
                                </video>
                            )}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 pointer-events-none" />
                        </div>
                    </>
                )}
                {isPlaying && project.mainVideo && (
                    <>
                        <video
                            autoPlay
                            controls
                            playsInline
                            className="absolute inset-0 w-full h-full bg-black"
                        >
                            <source src={project.mainVideo.replace(/\.mp4$/, '.webm')} type="video/webm" />
                            <source src={project.mainVideo} type="video/mp4" />
                        </video>
                        <button
                            onClick={handleClose}
                            aria-label="Close video"
                            className="absolute top-3 right-3 z-10 text-white/70 hover:text-white transition-colors duration-200 cursor-pointer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                            </svg>
                        </button>
                    </>
                )}
            </div>
        </ScrollReveal>
    );
}