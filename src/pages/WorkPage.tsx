import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useHorizontalScroll } from '@/animation/useHorizontalScroll';
import { usePageEnter } from '@/animation/usePageEnter';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SecondaryBradaLogo from '@/components/custom/SecondaryBradaLogo';
import { useHeaderContext } from '@/context/HeaderContext';
import OurClients from '@/sections/OurClients';

gsap.registerPlugin(ScrollTrigger);

export default function WorkPage() {
    const { lang } = useParams();
    const l = lang || 'es';
    const [, setIsHovering] = useState(false);
    const { setHeaderState } = useHeaderContext();
    const containerRef = useRef<HTMLDivElement>(null);
    const pinSectionRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const triggerTextRef = useRef<HTMLParagraphElement>(null);
    const lastProjectRef = useRef<HTMLDivElement>(null);
    const filtersRef = useRef<HTMLElement>(null);

    const [isLgTrack, setIsLgTrack] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia('(min-width: 1024px) and (max-width: 1279px)');
        const handler = (e: MediaQueryListEvent | MediaQueryList) => setIsLgTrack(e.matches);
        handler(mq);
        mq.addEventListener('change', handler as any);
        return () => mq.removeEventListener('change', handler as any);
    }, []);

    useHorizontalScroll(trackRef, pinSectionRef);
    usePageEnter(containerRef);

    useGSAP(() => {
        setHeaderState('hidden');
        return () => {
            setHeaderState('default');
            ScrollTrigger.refresh();
        };
    }, []);

    useGSAP(
        () => {
            // --- 1. REVEAL DE TRABAJOS ---
            if (trackRef.current && pinSectionRef.current) {
                gsap.fromTo(trackRef.current,
                    { opacity: 0, scale: 0.2, y: 150 },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        scrollTrigger: {
                            trigger: pinSectionRef.current,
                            start: "top 75%",
                            end: "top -5%",
                            scrub: 1,
                        }
                    }
                );
            }

            if (!headerRef.current || !triggerTextRef.current) return;

            // --- 2. REVEAL HEADER FIJO ---
            ScrollTrigger.create({
                trigger: triggerTextRef.current,
                start: "bottom 3%",
                onEnter: () => gsap.to(headerRef.current, {
                    opacity: 1,
                    filter: "blur(0px)",
                    duration: 0.35,
                    ease: "circ.out",
                }),
                onLeaveBack: () => gsap.to(headerRef.current, {
                    opacity: 0,
                    filter: "blur(12px)",
                    duration: 0.15,
                    ease: "circ.out",
                }),
            });

            // --- 3. OCULTAR FILTROS AL PASAR EL ÚLTIMO PROYECTO ---
            if (lastProjectRef.current && filtersRef.current) {
                ScrollTrigger.create({
                    trigger: lastProjectRef.current,
                    start: "bottom 0%",
                    onLeave: () => gsap.to(filtersRef.current, {
                        opacity: 0,
                        filter: "blur(12px)",
                        duration: 0.3,
                        ease: "power3.in",
                        pointerEvents: "none",
                    }),
                    onEnterBack: () => gsap.to(filtersRef.current, {
                        opacity: 1,
                        filter: "blur(0px)",
                        duration: 0.35,
                        ease: "power3.out",
                        pointerEvents: "auto",
                    }),
                });
            }

            // Destrabar 'OurClients'
            const timeoutId = setTimeout(() => {
                ScrollTrigger.refresh(true);
            }, 150);

            return () => {
                clearTimeout(timeoutId);
            };
        },
        { scope: containerRef }
    );

    return (
        <>
            {/* --- HEADER FIJO (Logo + Filtros) — fuera del containerRef para evitar que transforms de GSAP rompan fixed positioning --- */}
            <div
                ref={headerRef}
                className="fixed top-[20px] left-0 right-0 mx-auto w-full max-w-[1440px] z-50 pointer-events-none opacity-0"
                style={{ filter: "blur(12px)" }}
            >
                <div className="w-full h-auto pt-[25px] pb-[15px] md:py-[25px] px-[16px] sm:px-[24px] md:px-[30px] flex items-center justify-start md:justify-between">
                    <div className="pointer-events-auto">
                        <Link to="/" aria-label="Home">
                            <SecondaryBradaLogo className="w-[150px] md:w-[180px] h-auto object-contain transition-all duration-500 text-black dark:text-brada-light" />
                        </Link>
                    </div>
                    <nav ref={filtersRef} className="pointer-events-auto hidden lg:flex flex-1 justify-center">
                        <ul className="flex gap-8 lg:gap-5 xl:gap-8 text-[10px] lg:text-[9px] xl:text-[10px] uppercase tracking-[0.10em] font-bold text-foreground/40 items-center -mt-[16px]">
                            <li className="text-foreground border-b border-foreground pb-0.5 cursor-pointer leading-none">All</li>
                            <li className="hover:text-foreground cursor-pointer transition-colors leading-none">Creative Campaign</li>
                            <li className="hover:text-foreground cursor-pointer transition-colors leading-none">Brand Experience</li>
                            <li className="hover:text-foreground cursor-pointer transition-colors leading-none">Brand Strategy</li>
                            <li className="hover:text-foreground cursor-pointer transition-colors leading-none">Creative Direction</li>
                        </ul>
                    </nav>
                    <div className="hidden md:flex w-32 md:w-40 lg:w-32 xl:w-40 justify-end"></div>
                </div>
            </div>

            <div
                ref={containerRef}
                className="w-full min-h-screen selection:bg-brada-light selection:text-black"
            >
                <Helmet>
                    <title>Made in Brada™</title>
                </Helmet>

                {/* --- HERO --- */}
            <section className="min-h-[70vh] md:min-h-screen w-full flex flex-col justify-start overflow-hidden bg-transparent">
                <div className="relative z-10 w-full pt-[140px] md:pt-[180px] pb-0 max-w-[1600px]">
                    <div className="flex flex-col">
                        <h1 className="text-black dark:text-brada-light font-inter font-extrabold tracking-tighter leading-[1.1] uppercase">
                            <span className="page-enter block leading-[1] text-[clamp(2.8rem,7.2vw,7.2rem)]">
                                WE SIT BESIDE YOU.
                            </span>
                            <span className="page-enter block leading-[1] text-[clamp(2.8rem,7.2vw,7.2rem)]">
                                BRAINSTORMING,
                            </span>
                            <span className="page-enter block leading-[1] text-[clamp(2.8rem,7.2vw,7.2rem)] min-[400px]:whitespace-nowrap">
                                BREAKING THE MOULD —
                            </span>
                            <span className="page-enter block lowercase font-normal mt-0 md:-mt-1.5 pl-2 md:pl-4 font-garamond italic text-[clamp(3.6rem,11vw,9.8rem)] tracking-[-0.01em]">
                                together.
                            </span>
                        </h1>
                        <p
                            ref={triggerTextRef}
                            className="page-enter text-black dark:text-brada-light/70 text-base sm:text-lg md:text-xl max-w-4xl leading-[1.1] mt-0"
                        >
                            Esa pieza fundamental para pensar y romper las reglas juntos. Un partner estratégico que se involucra hasta las últimas consecuencias.
                        </p>
                    </div>
                </div>
            </section>
 
            {/* --- MOBILE & TABLET GRID (< lg) --- */}
            <section className="lg:hidden w-full pt-4 -mt-4 md:mt-0 md:-mt-36 pb-12 bg-background">
                <div className="px-0 md:px-[5px] grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-x-8 md:gap-y-10 max-w-[1750px] mx-auto">
                    {[
                        { title: '↘ [Lemon Cash] PAGO CON QR CASHBACK', to: `/${l}/work/lemon-cash`, img: '/work_id/lemon/projects/campania_qr/work_page/lemon_campania_qr_thumb.avif', video: "/work_id/lemon/projects/campania_qr/more_works/lemon_loop_mw-wp.mp4" },
                        { title: '↘ [Converse All Stars]', to: `/${l}/work/converse-all-stars`, img: '/work_id/converse/projects/all_stars/work_page/converse_all_stars_thumb.avif' },
                        { title: '↘ [Maxibon]', to: `/${l}/work/maxibon`, img: '/work_id/maxibon/projects/skate_crush/work_page/maxibon_skate_crush_thumb.avif', video: "/work_id/maxibon/projects/skate_crush/hero_workgrid/gallery_thumb_loop-2.mp4" },
                        { title: '↘ [GCBA - Tránsito]', to: `/${l}/work/ba`, img: '/work_id/ba/projects/transito/gallery_detail/ba-elige.avif' },
                        { title: '↘ [Doritos]', to: `/${l}/work/doritos`, img: '/work_id/doritos/projects/campania/work_page/doritos_campania_thumb.avif', video: "/work_id/doritos/projects/campania/gallery_detail/gallery_doritos-1.mp4" },
                        { title: '↘ [Cash App]', to: `/${l}/work/cash-app`, img: '/work_id/cashapp/projects/advertising/work_page/cashapp_campania_thumb.avif', video: "/work_id/cashapp/projects/advertising/work_page/gallery_cashapp-2.mp4" },
                        { title: '↘ [Zonaprop]', to: `/${l}/work/zonaprop`, img: '/work_id/zona_prop/projects/entrevistas_clientes/work_page/zonajobs_work_id-1400.avif', comingSoon: true },
                        { title: '↘ [CAV SBK]', to: `/${l}/work/cav-sbk`, img: '/work_id/cavsbk/projects/brand_identity/gallery_detail/cav-2_low.avif' },
                        { title: '↘ [Menant]', to: `/${l}/work/menant`, img: '/work_id/menant/projects/branding/work_page/menant_gallery.avif' },
                        { title: '↘ [Alto Palermo]', to: `/${l}/work/alto-palermo`, img: '/work_id/alto_palermo/projects/mujeres_bici/gallery_detail/alto_palermo_mujeres-thmb.avif' },
                        { title: '↘ [Luxora]', to: `/${l}/work/luxora`, img: '/work_id/luxora/projects/brand_identity/gallery_detail/Luxora_logo-1.avif' },
                        { title: '↘ [Itaú Bank]', to: `/${l}/work/itau-bank`, img: '/work_id/itau/projects/cx_day/work_page/gallery_itau-1.avif' },
                        { title: '↘ [Banco Hipotecario]', to: `/${l}/work/banco-hipotecario`, img: '/work_id/hipotecario/projects/graphic_design/work_page/hipotecario_low.avif' },
                    ].map((item) => (
                        <MobileWorkCard key={item.title} item={item} />
                    ))}
                </div>
            </section>

            {/* --- HORIZONTAL SECTION (Desktop) --- */}
            <div ref={pinSectionRef} className="hidden lg:block w-full h-screen">
                <section
                    className="relative left-1/2 -translate-x-1/2 w-screen h-screen bg-background overflow-hidden flex items-center"
                >
                    <div className="w-full h-full flex items-center overflow-hidden">
                        <div
                            ref={trackRef}
                            className="relative h-[80vh] flex-none"
                            style={{ width: isLgTrack ? '2400px' : '3000px' }}
                        >
                            <WorkItem title="↘ [Lemon Cash] 360º Campaign Project" left="100px" top="4%" w="550px" lgW="480px" h="302px" lgH="264px" to={`/${l}/work/lemon-cash`} img="/work_id/lemon/projects/campania_qr/work_page/lemon_campania_qr_thumb.avif" video="/work_id/lemon/projects/campania_qr/more_works/lemon_loop_mw-wp.mp4" speed="1" setHover={setIsHovering} />
                            <WorkItem title="↘ [Converse Alls Stars] DIGITAL CONTENT" left="590px" top="61%" w="450px" lgW="390px" h="280px" lgH="245px" to={`/${l}/work/converse-all-stars`} img="/work_id/converse/projects/all_stars/work_page/converse_all_stars_thumb.avif" speed="0.8" setHover={setIsHovering} />
                            <WorkItem title="↘ [Maxibon] FILM, MOTION & VFX" left="900px" top="10%" w="400px" h="223px" to={`/${l}/work/maxibon`} img="/work_id/maxibon/projects/skate_crush/work_page/maxibon_skate_crush_thumb.avif" video="/work_id/maxibon/projects/skate_crush/hero_workgrid/gallery_thumb_loop-2.mp4" speed="1.2" setHover={setIsHovering} />
                            <WorkItem title="↘ [GCBA - Tránsito] STREET ACTIVATION" left="1400px" top="65%" w="300px" h="221px" to={`/${l}/work/ba`} img="/work_id/ba/projects/transito/gallery_detail/ba-elige.avif" speed="0.9" setHover={setIsHovering} />
                            <WorkItem title="↘ [Doritos] MOTION & VFX PRODUCTION" left="2100px" top="65%" w="400px" h="260px" to={`/${l}/work/doritos`} img="/work_id/doritos/projects/campania/work_page/doritos_campania_thumb.avif" video="/work_id/doritos/projects/campania/gallery_detail/gallery_doritos-1.mp4" speed="1.1" setHover={setIsHovering} />
                            <WorkItem title="↘ [Cash App] DIGITAL CAMPAIGN" left="1600px" top="3%" w="400px" h="240px" to={`/${l}/work/cash-app`} img="/work_id/cashapp/projects/advertising/work_page/cashapp_campania_thumb.avif" video="/work_id/cashapp/projects/advertising/work_page/gallery_cashapp-2.mp4" speed="1.3" setHover={setIsHovering} />
                            <WorkItem title="↘ [Zonaprop] FILM PRODUCTION" left="2230px" lgLeft="2360px" top="1%" w="440px" lgW="380px" h="295px" lgH="255px" to={`/${l}/work/zonaprop`} img="/work_id/zona_prop/projects/entrevistas_clientes/work_page/zonajobs_work_id-1400.avif" speed="1" setHover={setIsHovering} comingSoon />
                            <WorkItem title="↘ [Itaú Bank] EMPLOYEE MARKETING" left="3700px" lgLeft="3700px" top="55%" w="300px" h="395px" to={`/${l}/work/itau-bank`} img="/work_id/itau/projects/cx_day/work_page/gallery_itau-1.avif" speed="1.2" setHover={setIsHovering} />
                            <WorkItem title="↘ [Hipotecario] GRAPHIC DESIGN" left="2950px" lgLeft="3000px" top="25%" w="310px" h="310px" to={`/${l}/work/banco-hipotecario`} img="/work_id/hipotecario/projects/graphic_design/work_page/hipotecario_low.avif" speed="0.9" setHover={setIsHovering} />
                        </div>
                    </div>
                </section>
            </div>

            {/* --- VERTICAL SECTION (Desktop) --- */}
            <section className="hidden lg:block relative w-full py-40 lg:py-28 xl:py-40 bg-background overflow-hidden">
                <div className="max-w-[1440px] mx-auto px-[30px] flex flex-col gap-32 relative">
                    <div className="w-full flex justify-start pl-[5%] -mt-[-35px] lg:mt-8 xl:-mt-[-35px]">
                        <VerticalItem title="↘ [CAV SBK] BRAND IDENTITY" w="498px" h="278px" to={`/${l}/work/cav-sbk`} img="/work_id/cavsbk/projects/brand_identity/gallery_detail/cav-2_low.avif" setHover={setIsHovering} />
                    </div>
                    <div className="w-full flex justify-end pr-[5%] -mt-[250px] lg:-mt-[40px] xl:-mt-[250px]">
                        <VerticalItem title="↘ [Menant] BRAND IDENTITY" w="423px" h="423px" to={`/${l}/work/menant`} img="/work_id/menant/projects/branding/work_page/menant_gallery.avif" setHover={setIsHovering} />
                    </div>
                    <div className="w-full flex justify-start pl-[5%] lg:pl-[5%] xl:pl-[10%] -mt-[140px] lg:mt-4 xl:-mt-[140px]">
                        <VerticalItem title="↘ [Alto Palermo] EVENT IN-SITE" w="450px" h="300px" to={`/${l}/work/alto-palermo`} img="/work_id/alto_palermo/projects/mujeres_bici/gallery_detail/alto_palermo_mujeres-thmb.avif" setHover={setIsHovering} />
                    </div>
                    <div ref={lastProjectRef} className="w-full flex justify-start pl-[52%] -mt-[1px]">
                        <VerticalItem title="↘ [Luxora] BRAND IDENTITY" w="350px" h="350px" to={`/${l}/work/luxora`} img="/work_id/luxora/projects/brand_identity/gallery_detail/Luxora_logo-1.avif" setHover={setIsHovering} />
                    </div>
                </div>
            </section>

            {/* OurClients */}
            <OurClients />
        </div>
        </>
    );
}

// --- TIPOS ---
interface WorkItemProps {
    left: string;
    lgLeft?: string;
    top: string;
    w: string;
    h: string;
    lgW?: string;
    lgH?: string;
    to: string;
    video?: string;
    img?: string;
    speed: string;
    title?: string;
    setHover: (isHovering: boolean) => void;
    comingSoon?: boolean;
}
interface VerticalItemProps {
    to: string;
    video?: string;
    img?: string;
    w: string;
    h: string;
    title?: string;
    setHover: (isHovering: boolean) => void;
}

// --- COMPONENTES ---
const formatTitle = (t?: string) => {
    if (!t) return null;
    const parts = t.split(/(\[.*?\])/g);
    return (
        <>
            {parts.map((part, i) =>
                part.startsWith('[') && part.endsWith(']') ? (
                    <span key={i} className="font-normal">{part}</span>
                ) : (
                    part
                )
            )}
        </>
    );
};

// --- COMING SOON CURSOR (idéntico al WatchCursor) ---
function ComingSoonCursor({
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
                    fontSize: '2.4rem',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    color: '#ffffff',
                    textTransform: 'none',
                }}
            >
                Coming Soon
            </span>
        </div>
    );
}

function WorkItem({ left, lgLeft, top, w, h, lgW, lgH, to, video, img, speed, title, setHover, comingSoon }: WorkItemProps) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isHovered, setIsHovered] = useState(false);
    const comingSoonContainerRef = useRef<HTMLDivElement>(null);
    const [isLg, setIsLg] = useState(false);

    useEffect(() => {
        if (!lgW && !lgH && !lgLeft) return;
        const mq = window.matchMedia('(min-width: 1024px) and (max-width: 1279px)');
        const handler = (e: MediaQueryListEvent | MediaQueryList) => setIsLg(e.matches);
        handler(mq);
        mq.addEventListener('change', handler as any);
        return () => mq.removeEventListener('change', handler as any);
    }, [lgW, lgH, lgLeft]);

    const finalW = (isLg && lgW) ? lgW : w;
    const finalH = (isLg && lgH) ? lgH : h;
    const finalLeft = (isLg && lgLeft) ? lgLeft : left;

    const mediaClasses = "absolute w-[115%] h-[115%] -left-[7.5%] -top-[7.5%] max-w-none object-cover object-center pointer-events-none";

    const handleMouseMove = (e: React.MouseEvent) => {
        const { currentTarget, clientX, clientY } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const x = (clientX - (left + width / 2)) / (width / 2);
        const y = (clientY - (top + height / 2)) / (height / 2);
        // Move both layers together for parallax
        gsap.to([imgRef.current, videoRef.current], { x: x * 20, y: y * 20, duration: 0.6, ease: "power2.out" });
    };

    const handleMouseEnter = () => {
        setHover(true);
        setIsHovered(true);
        if (video && videoRef.current) {
            videoRef.current.play().catch(() => { });
            gsap.to(videoRef.current, { opacity: 1, duration: 0.4, ease: "power2.out" });
            gsap.to(imgRef.current, { opacity: 0, duration: 0.4, ease: "power2.out" });
        }
    };

    const handleMouseLeave = () => {
        setHover(false);
        setIsHovered(false);
        if (video && videoRef.current) {
            gsap.to(videoRef.current, {
                opacity: 0, duration: 0.35, ease: "power2.in", onComplete: () => {
                    if (videoRef.current) { videoRef.current.pause(); videoRef.current.currentTime = 0; }
                }
            });
            gsap.to(imgRef.current, { opacity: 1, duration: 0.35, ease: "power2.in" });
        }
        gsap.to([imgRef.current, videoRef.current], { x: 0, y: 0, duration: 0.8, ease: "power3.out" });
    };

    const innerContent = (
        <>
            {/* Capa 1: Thumbnail estático — siempre visible por defecto */}
            {img && (
                <img
                    ref={imgRef}
                    src={img}
                    alt={title || 'Work thumbnail'}
                    className={mediaClasses}
                    style={{ opacity: 1 }}
                />
            )}

            {/* Capa 2: Video loop hover — invisible hasta hover */}
            {video && (
                <video
                    ref={videoRef}
                    src={video}
                    muted
                    loop
                    playsInline
                    className={mediaClasses}
                    style={{ opacity: 0 }}
                />
            )}

            {/* Capa Coming Soon — cursor que sigue el mouse */}
            {comingSoon && (
                <ComingSoonCursor containerRef={comingSoonContainerRef} visible={isHovered} />
            )}
        </>
    );

    return (
        <div
            className="absolute gsap-parallax-item"
            data-speed={speed}
            style={{ left: finalLeft, top, width: finalW, height: finalH }}
        >
            {title && (
                <h3 className="absolute -top-7 left-0 text-[11px] font-inter font-bold uppercase tracking-[0.05em] text-black/40 dark:text-brada-light/40 pointer-events-none">
                    {formatTitle(title)}
                </h3>
            )}
            {comingSoon ? (
                <div
                    ref={comingSoonContainerRef}
                    className="group block w-full h-full relative overflow-hidden cursor-none"
                    data-hide-cursor
                    onMouseEnter={handleMouseEnter}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    {innerContent}
                </div>
            ) : (
                <Link
                    to={to}
                    ref={wrapperRef as any}
                    className="group block w-full h-full relative overflow-hidden"
                    onMouseEnter={handleMouseEnter}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    {innerContent}
                </Link>
            )}
        </div>
    );
}

function VerticalItem({ to, video, img, w, h, title, setHover }: VerticalItemProps) {
    const mediaRef = useRef<HTMLVideoElement | HTMLImageElement>(null);

    const handleMouseEnter = () => {
        setHover(true);
        if (video && mediaRef.current instanceof HTMLVideoElement) {
            mediaRef.current.play().catch(() => { });
        }
    };

    const handleMouseLeave = () => {
        setHover(false);
        if (video && mediaRef.current instanceof HTMLVideoElement) {
            mediaRef.current.pause();
            mediaRef.current.currentTime = 0;
        }
    };

    const mediaClasses = "w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105";

    return (
        <div className="relative block" style={{ width: w, height: h }}>
            {title && (
                <h3 className="absolute -top-7 left-0 text-[11px] font-inter font-bold uppercase tracking-[0.05em] text-black/40 dark:text-brada-light/40 pointer-events-none z-10">
                    {formatTitle(title)}
                </h3>
            )}
            <Link
                to={to}
                className="group block w-full h-full relative overflow-hidden"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {video ? (
                    <video ref={mediaRef as React.RefObject<HTMLVideoElement>} src={video} muted loop playsInline className={mediaClasses} />
                ) : (
                    <img ref={mediaRef as React.RefObject<HTMLImageElement>} src={img} alt={`${title || 'Work'} thumbnail`} className={mediaClasses} />
                )}
            </Link>
        </div>
    );
}

// --- MOBILE WORK CARD ---
interface MobileWorkCardItem {
    title: string;
    to: string;
    img: string;
    video?: string;
    comingSoon?: boolean;
}

function MobileWorkCard({ item }: { item: MobileWorkCardItem }) {
    const [hovered, setHovered] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);

    const handleMouseEnter = () => {
        setHovered(true);
        if (item.video && videoRef.current) {
            videoRef.current.play().catch(() => { });
            gsap.to(videoRef.current, { opacity: 1, duration: 0.4, ease: "power2.out" });
            gsap.to(imgRef.current, { opacity: 0, duration: 0.4, ease: "power2.out" });
        }
    };

    const handleMouseLeave = () => {
        setHovered(false);
        if (item.video && videoRef.current) {
            gsap.to(videoRef.current, {
                opacity: 0,
                duration: 0.35,
                ease: "power2.in",
                onComplete: () => {
                    if (videoRef.current) {
                        videoRef.current.pause();
                        videoRef.current.currentTime = 0;
                    }
                }
            });
            gsap.to(imgRef.current, { opacity: 1, duration: 0.35, ease: "power2.in" });
        }
    };

    const cardContent = (
        <div className="flex flex-col gap-3 group pb-10 md:pb-0">
            {/* Title Above (Standardized for Mobile and Tablet) */}
            <h3 className="px-4 md:px-0 text-[10px] sm:text-[11px] font-inter font-bold uppercase tracking-[0.05em] text-black/40 dark:text-brada-light/40 transition-colors group-hover:text-foreground">
                {formatTitle(item.title)}
            </h3>

            <div
                className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-900"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {/* Image layer */}
                <img
                    ref={imgRef}
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Video layer (only for hover) */}
                {item.video && (
                    <video
                        ref={videoRef}
                        src={item.video}
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                    />
                )}

                {item.comingSoon && (
                    <div
                        className="absolute inset-0 flex items-center justify-center z-10"
                        style={{
                            opacity: hovered ? 1 : 0,
                            transition: 'opacity 0.35s ease',
                            background: 'rgba(0,0,0,0.55)',
                        }}
                    >
                        <span style={{
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 800,
                            fontSize: '1.1rem',
                            letterSpacing: '0.18em',
                            textTransform: 'uppercase',
                            color: '#fff',
                        }}>
                            Coming Soon
                        </span>
                    </div>
                )}
            </div>
        </div>
    );

    return item.comingSoon ? (
        <div className="block w-full cursor-default">{cardContent}</div>
    ) : (
        <Link to={item.to} className="block w-full">{cardContent}</Link>
    );
}