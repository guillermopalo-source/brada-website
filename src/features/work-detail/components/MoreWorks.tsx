import { useRef, useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollReveal from '@/components/custom/ScrollReveal';
import { projects } from '@/lib/projects';

interface Props {
    currentSlug?: string;
}

const CARD_GAP = 8;
const ANTICIPATE_PX = 14; // cuántos px se adelanta la segunda card en hover

// ─── VIEW CASE cursor — Inter Tight Bold, mix-blend-mode: difference ─────────
function ViewCaseCursor({
    sectionRef,
    visible,
}: {
    sectionRef: React.RefObject<HTMLDivElement | null>;
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
            // Snap pos to current mouse immediately — no lerp from -999
            pos.current.x = mouse.current.x;
            pos.current.y = mouse.current.y;
            gsap.set(cursor, { x: pos.current.x, y: pos.current.y });
        }
        gsap.to(cursor, { opacity: visible ? 1 : 0, duration: 0.18, ease: visible ? 'power2.out' : 'power2.in' });
    }, [visible]);

    useEffect(() => {
        const el = sectionRef.current;
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
    }, [sectionRef]);

    return (
        <div ref={cursorRef} className="absolute top-0 left-0 pointer-events-none hidden md:block"
            style={{ transform: 'translate(-50%,-50%)', opacity: 0, zIndex: 200, mixBlendMode: 'difference' }}>
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
                View Case
            </span>
        </div>
    );
}


// ─── View all works — underline animado ──────────────────────────────────────
function ViewAllWorksLink({ lang }: { lang: string }) {
    const lineRef = useRef<SVGPathElement>(null);
    const len = useRef(0);
    const isHovered = useRef(false);
    const tweenRef = useRef<gsap.core.Tween | null>(null);

    useEffect(() => {
        const el = lineRef.current;
        if (!el) return;
        len.current = el.getTotalLength();
        // Set dasharray to real length — dashoffset stays at 9999 (hidden)
        // until hover fires playIn()
        gsap.set(el, { strokeDasharray: len.current, strokeDashoffset: len.current });
    }, []);

    const playIn = () => {
        if (isHovered.current) return;
        isHovered.current = true;
        const el = lineRef.current;
        if (!el || !len.current) return;
        tweenRef.current?.kill();
        gsap.set(el, { strokeDashoffset: len.current, opacity: 1 });
        // Draw once — irregular speed via ease, then stops
        tweenRef.current = gsap.to(el, {
            strokeDashoffset: 0,
            duration: 0.5,
            ease: 'power1.inOut',
        });
    };

    const playOut = () => {
        if (!isHovered.current) return;
        isHovered.current = false;
        const el = lineRef.current;
        if (!el) return;
        tweenRef.current?.kill();
        const cur = parseFloat(String(gsap.getProperty(el, 'strokeDashoffset')));
        gsap.fromTo(el,
            { strokeDashoffset: cur },
            { strokeDashoffset: len.current, duration: 0.38, ease: 'power2.inOut', onComplete: () => { gsap.set(el, { opacity: 0 }); } }
        );
    };

    return (
        <div
            className="w-full flex justify-center"
            style={{ paddingTop: '8rem', paddingBottom: '1.5rem' }}
        >
            <Link
                to={`/${lang}/work`}
                className="relative inline-block font-garamond italic font-normal no-underline"
                style={{ fontSize: 'clamp(3.2rem, 6.5vw, 6.8rem)', letterSpacing: '-0.02em', lineHeight: 1, textTransform: 'none', color: 'var(--foreground)' }}
                onMouseEnter={playIn}
                onMouseLeave={playOut}
            >
                —View all works

                <svg
                    aria-hidden="true"
                    style={{
                        position: 'absolute',
                        left: '-1%',
                        bottom: '18%',
                        width: '102%',
                        height: '22px',
                        overflow: 'visible',
                        pointerEvents: 'none',
                    }}
                    viewBox="0 0 100 22"
                    preserveAspectRatio="none"
                >
                    <path
                        ref={lineRef}
                        strokeDasharray="9999 9999"
                        strokeDashoffset="9999"
                        style={{ opacity: 0 }}
                        d="M 0,14
                           C 5,5 18,22 34,10 C 48,0 62,18 76,6 C 86,-2 94,14 100,4
                           C 92,18 74,33 54,26 C 36,20 22,30 18,28
                           C 6,18 22,25 44,20 C 64,15 82,23 100,17"
                        stroke="#ef4444"
                        strokeWidth="2.4"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </Link>
        </div>
    );
}

// ─── MoreWorks ────────────────────────────────────────────────────────────────
export default function MoreWorks({ currentSlug }: Props) {
    const { lang } = useParams();
    const navigate = useNavigate();

    const sectionRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
    const shadowRefs = useRef<(HTMLDivElement | null)[]>([]);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    // ─── Estado de animación — todo en refs, CERO estado React para cards ───
    const isAnimating = useRef(false);
    const offsetRef = useRef(0);       // qué project está en slot 0
    const cardWidthRef = useRef(0);
    // Si la card del slot 1 está en posición anticipada
    const isAnticipating = useRef(false);
    const hoveredCardRef = useRef<number>(-1); // which card idx mouse is currently over

    // ─── Proyectos — rotar para que el siguiente al actual quede primero ─
    const HIDDEN_SLUGS = ['zonaprop', 'maro'];
    const currentIdx = projects.findIndex(p => p.slug === currentSlug);
    const allOthers = projects.filter(p => p.slug !== currentSlug && !HIDDEN_SLUGS.includes(p.slug));
    const rotated = currentIdx >= 0
        ? [...allOthers.slice(currentIdx), ...allOthers.slice(0, currentIdx)]
        : allOthers;
    const baseProjects = rotated.slice(0, 4);
    const total = baseProjects.length;

    // Solo estado React necesario para el render
    const [showCursor, setShowCursor] = useState(false);
    const [cardWidth, setCardWidth] = useState(0);

    // ─── Helpers ──────────────────────────────────────────────────────────
    const slotX = useCallback((slot: number, cw: number) => {
        if (slot === 0) return 0;
        if (slot === 1) return cw + CARD_GAP;
        return (cw + CARD_GAP) * (slot + 1); // fuera de vista
    }, []);

    const getSlot = useCallback((projectIdx: number) => {
        return ((projectIdx - offsetRef.current) % total + total) % total;
    }, [total]);

    // ─── Medición de ancho ────────────────────────────────────────────────
    useEffect(() => {
        const measure = () => {
            const w = Math.min(window.innerWidth * 0.70, 900);
            setCardWidth(w);
            cardWidthRef.current = w;
        };
        measure();
        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
    }, []);

    // ─── Init de posiciones ───────────────────────────────────────────────
    useEffect(() => {
        if (!cardWidth) return;
        cardRefs.current.forEach((card, i) => {
            if (!card) return;
            gsap.set(card, { x: slotX(i, cardWidth), zIndex: total - i });
        });
    }, [cardWidth, total, slotX]);

    // ─── Anticipación — puro GSAP, sin estado React ───────────────────────
    const startAnticipate = useCallback((projectIdx: number) => {
        if (isAnimating.current) return;
        const slot = getSlot(projectIdx);
        if (slot !== 1) return;

        const card = cardRefs.current[projectIdx];
        const slot0Idx = offsetRef.current % total;
        const shadow = shadowRefs.current[slot0Idx];
        if (!card) return;

        isAnticipating.current = true;
        const cw = cardWidthRef.current;

        gsap.killTweensOf(card);
        gsap.to(card, { x: slotX(1, cw) - ANTICIPATE_PX, zIndex: total + 2, duration: 0.55, ease: 'power1.out' });
        // ✅ Sombra sutil en el borde derecho de la card activa
        if (shadow) gsap.to(shadow, { opacity: 1, duration: 0.55, ease: 'power1.out' });
    }, [getSlot, total, slotX]);

    const stopAnticipate = useCallback((projectIdx: number) => {
        if (isAnimating.current) return;
        const slot = getSlot(projectIdx);
        if (slot !== 1) return;

        const card = cardRefs.current[projectIdx];
        const slot0Idx = offsetRef.current % total;
        const shadow = shadowRefs.current[slot0Idx];
        if (!card) return;

        isAnticipating.current = false;
        const cw = cardWidthRef.current;

        gsap.killTweensOf(card);
        gsap.to(card, { x: slotX(1, cw), zIndex: total - 1, duration: 0.55, ease: 'power1.inOut' });
        if (shadow) gsap.to(shadow, { opacity: 0, duration: 0.3, ease: 'power2.out' });
    }, [getSlot, total, slotX]);

    // ─── Advance — slot1 barre encima de activa; slot2 entra sincronizada ─
    const advance = useCallback((projectIdx: number) => {
        if (isAnimating.current) return;
        const slot = getSlot(projectIdx);
        if (slot !== 1) return;

        isAnimating.current = true;
        isAnticipating.current = false;

        const cw = cardWidthRef.current;
        const slot1Card = cardRefs.current[projectIdx];
        const slot0Idx = offsetRef.current % total;
        const slot2Idx = (offsetRef.current + 2) % total;
        const slot2Card = cardRefs.current[slot2Idx];
        const shadow = shadowRefs.current[slot0Idx];
        if (!slot1Card) { isAnimating.current = false; return; }

        if (shadow) gsap.to(shadow, { opacity: 0, duration: 0.12 });
        gsap.killTweensOf(slot1Card);
        gsap.set(slot1Card, { zIndex: total + 20 });

        const tl = gsap.timeline({
            onComplete: () => {
                offsetRef.current = (offsetRef.current + 1) % total;
                for (let s = 0; s < total; s++) {
                    const pi = (offsetRef.current + s) % total;
                    const card = cardRefs.current[pi];
                    if (card) gsap.set(card, { x: slotX(s, cw), zIndex: total - s });
                }
                isAnimating.current = false;
                // If mouse is still over the card that just became slot0 → show cursor
                if (hoveredCardRef.current === projectIdx) {
                    setShowCursor(true);
                }
            },
        });

        // slot1 barre hacia x=0 encima de la activa
        tl.to(slot1Card, { x: 0, duration: 0.5, ease: 'power3.out' }, 0);

        // slot2 entra sincronizada desde su posición → posición slot1
        if (slot2Card) {
            gsap.killTweensOf(slot2Card);
            gsap.set(slot2Card, { x: slotX(2, cw), zIndex: total - 2 });
            tl.to(slot2Card, { x: slotX(1, cw), duration: 0.5, ease: 'power3.out' }, 0);
        }
    }, [getSlot, total, slotX]);

    const touchStartX = useRef<number>(0);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const handleTouchStart = (e: TouchEvent) => {
            touchStartX.current = e.touches[0].clientX;
        };

        const handleTouchEnd = (e: TouchEvent) => {
            const touchEndX = e.changedTouches[0].clientX;
            const diff = touchStartX.current - touchEndX;

            // Swipe threshold of 50px
            if (diff > 50) {
                const nextSlotIdx = (offsetRef.current + 1) % total;
                advance(nextSlotIdx);
            }
        };

        el.addEventListener('touchstart', handleTouchStart);
        el.addEventListener('touchend', handleTouchEnd);

        return () => {
            el.removeEventListener('touchstart', handleTouchStart);
            el.removeEventListener('touchend', handleTouchEnd);
        };
    }, [advance, total]);

    // ─── Event handlers ───────────────────────────────────────────────────
    const handleMouseEnter = useCallback((i: number) => {
        hoveredCardRef.current = i;
        const slot = getSlot(i);
        if (slot === 0) setShowCursor(true);
        if (slot === 1) startAnticipate(i);
        const v = videoRefs.current[i];
        if (v) {
            gsap.set(v, { opacity: 1 });
            v.play().catch(() => { });
        }
    }, [getSlot, startAnticipate]);

    const handleMouseLeave = useCallback((i: number) => {
        hoveredCardRef.current = -1;
        const slot = getSlot(i);
        if (slot === 0) setShowCursor(false);
        if (slot === 1) stopAnticipate(i);
        const v = videoRefs.current[i];
        if (v) {
            gsap.set(v, { opacity: 0 });
            v.pause();
            v.currentTime = 0;
        }
    }, [getSlot, stopAnticipate]);

    const handleClick = useCallback((i: number) => {
        if (isAnimating.current) return;
        const slot = getSlot(i);
        if (slot === 0) {
            navigate(`/${lang || 'es'}/work/${baseProjects[i].slug}`);
        } else if (slot === 1) {
            advance(i);
        }
    }, [getSlot, advance, navigate, lang, baseProjects]);



    if (!baseProjects.length) return null;

    const cardHeight = cardWidth ? (cardWidth * 10) / 16 : 0;

    return (
        <section ref={sectionRef} className="relative pt-12 md:pt-8 lg:pt-32 pb-0 w-full overflow-hidden">
            <ViewCaseCursor sectionRef={sectionRef} visible={showCursor} />

            {/* ─── Título ─── */}
            <ScrollReveal>
                <div className="mb-4 md:mb-5 text-left">
                    <h2 className="text-foreground font-inter font-extrabold text-[8vw] md:text-[6.5vw] tracking-normal leading-[1.0] uppercase w-full">
                        MORE OF OUR{' '}
                        <span className="font-garamond italic lowercase font-normal text-[1.35em]">
                            works.
                        </span>
                    </h2>
                </div>
            </ScrollReveal>

            {/* ─── Cards ─── */}
            <ScrollReveal delay={150}>
                <div style={{ position: 'relative', height: cardHeight || '44vw' }}>
                    {/* Contenedor que llega al borde derecho del viewport */}
                    <div style={{
                        position: 'absolute', top: 0, left: 0,
                        width: '100vw', height: '100%', overflow: 'hidden',
                        // Romper padding derecho del layout
                        marginLeft: 0,
                    }}>
                        {baseProjects.map((project, i) => {
                            return (
                                <div
                                    key={project.id}
                                    ref={el => { cardRefs.current[i] = el; }}
                                    data-hide-cursor
                                    className="absolute top-0 left-0 overflow-hidden bg-neutral-900"
                                    style={{ width: cardWidth || '70vw', height: '100%', cursor: 'pointer', willChange: 'transform' }}
                                    onMouseEnter={() => handleMouseEnter(i)}
                                    onMouseLeave={() => handleMouseLeave(i)}
                                    onClick={() => handleClick(i)}
                                >
                                    {/* Imagen estática — avif → webp, 1x/2x Retina */}
                                    {project.mwImage1x && (
                                        <picture style={{ display: 'contents' }}>
                                            <source
                                                type="image/avif"
                                                srcSet={`${project.mwImage1x}.avif 1x${project.mwImage2x ? `, ${project.mwImage2x}.avif 2x` : ''}`}
                                            />
                                            <source
                                                type="image/webp"
                                                srcSet={`${project.mwImage1x}.webp 1x${project.mwImage2x ? `, ${project.mwImage2x}.webp 2x` : ''}`}
                                            />
                                            <img
                                                src={`${project.mwImage1x}.avif`}
                                                alt={project.title}
                                                draggable={false}
                                                className="absolute inset-0 w-full h-full object-cover"
                                            />
                                        </picture>
                                    )}

                                    {/* Video loop hover — webm → mp4, preload none */}
                                    {project.loopMwWp && (
                                        <video
                                            ref={el => { videoRefs.current[i] = el; }}
                                            muted loop playsInline draggable={false}
                                            preload="none"
                                            className="absolute inset-0 w-full h-full object-cover"
                                            style={{ opacity: 0, transition: 'opacity 0.5s ease' }}
                                        >
                                            <source src={`${project.loopMwWp}.webm`} type="video/webm" />
                                            <source src={`${project.loopMwWp}.mp4`} type="video/mp4" />
                                        </video>
                                    )}

                                    {/* Gradiente base */}
                                    <div className="absolute inset-0 pointer-events-none"
                                        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)' }} />

                                    {/* Overlay de hover — GSAP animado desde ref */}
                                    <div className="absolute inset-0 pointer-events-none"
                                        ref={el => {
                                            if (!el) return;
                                            const p = el.parentElement;
                                            if (!p) return;
                                            p.addEventListener('mouseenter', () => gsap.to(el, { backgroundColor: 'rgba(0,0,0,0.35)', duration: 0.35 }));
                                            p.addEventListener('mouseleave', () => gsap.to(el, { backgroundColor: 'rgba(0,0,0,0)', duration: 0.35 }));
                                        }}
                                        style={{ background: 'rgba(0,0,0,0)' }}
                                    />

                                    {/* Shadow de anticipación — sutil, borde derecho angosto */}
                                    <div
                                        ref={el => { shadowRefs.current[i] = el; }}
                                        className="absolute inset-y-0 right-0 pointer-events-none"
                                        style={{
                                            width: '36px',
                                            opacity: 0,
                                            background: 'linear-gradient(to left, rgba(0,0,0,0.18) 0%, transparent 100%)',
                                            zIndex: 5,
                                        }}
                                    />

                                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                        <h3 className="text-brada-light font-inter font-bold text-xl md:text-2xl uppercase tracking-tight leading-tight">
                                            {project.title}
                                        </h3>
                                        <p className="text-brada-light/50 text-xs uppercase tracking-widest mt-1">
                                            {project.category}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </ScrollReveal>

            {/* ─── View all works — centrado, subrayado animado ─── */}
            <ViewAllWorksLink lang={lang || 'es'} />
        </section>
    );
}