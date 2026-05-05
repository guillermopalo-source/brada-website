import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

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

interface GalleryInteractiveVideoProps {
    src: string;        // The click-to-play full video (usually .mp4)
    thumb?: string;     // The static image shown initially (no extension)
    loop?: string;      // The hover-to-play silent loop (no extension)
    aspect?: string;
}

export default function GalleryInteractiveVideo({ src, thumb, loop, aspect }: GalleryInteractiveVideoProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showCursor, setShowCursor] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);
    const loopRef = useRef<HTMLVideoElement>(null);

    const mediaClass = 'absolute inset-0 w-full h-full object-cover';

    const handleMouseEnter = () => {
        if (isPlaying) return;
        setShowCursor(true);
        if (!loop || !loopRef.current) return;
        loopRef.current.play().catch(() => { });
        gsap.to(loopRef.current, { opacity: 1, duration: 0.4, ease: 'power2.out' });
        if (imgRef.current) gsap.to(imgRef.current, { opacity: 0, duration: 0.4, ease: 'power2.out' });
    };

    const handleMouseLeave = () => {
        setShowCursor(false);
        if (!loop || !loopRef.current) return;
        gsap.to(loopRef.current, {
            opacity: 0, duration: 0.35, ease: 'power2.in',
            onComplete: () => {
                if (loopRef.current) {
                    loopRef.current.pause();
                    loopRef.current.currentTime = 0;
                }
            }
        });
        if (imgRef.current) gsap.to(imgRef.current, { opacity: 1, duration: 0.35, ease: 'power2.in' });
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

        // Mobile autoplay loop logic
        const isMobile = window.matchMedia('(max-width: 1023px)').matches;
        if (isMobile && loop && loopRef.current) {
            loopRef.current.play().catch(() => { });
            gsap.set(loopRef.current, { opacity: 1 });
            if (imgRef.current) gsap.set(imgRef.current, { opacity: 0 });
        }

        return () => window.removeEventListener('keydown', onKey);
    }, [isPlaying, loop]);

    // If there is no thumb or loop, the main video poster is enough, 
    // but the hover logic will just show the Watch cursor on the static poster.

    return (
        <div ref={containerRef} className={`relative w-full overflow-hidden bg-black ${aspect || 'aspect-video'}`}>
            {!isPlaying && (
                <>
                    <WatchCursor containerRef={containerRef} visible={showCursor} />
                    <div
                        onClick={handleClick}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className="absolute inset-0 cursor-none group"
                    >
                        {/* 1. Base Image Thumbnail */}
                        {thumb ? (
                            <picture style={{ display: 'contents' }}>
                                <source srcSet={`${thumb}.avif`} type="image/avif" />
                                <source srcSet={`${thumb}.webp`} type="image/webp" />
                                <img
                                    ref={imgRef}
                                    src={`${thumb}.avif`}
                                    alt="Interactive thumbnail"
                                    className={mediaClass}
                                    style={{ opacity: 1 }}
                                />
                            </picture>
                        ) : (
                            // Fallback if no thumb provided: show first frame of the actual main video
                            <video
                                ref={imgRef as any}
                                src={src}
                                preload="metadata"
                                className={mediaClass}
                                style={{ opacity: 1 }}
                            />
                        )}

                        {/* 2. Hover Loop Video */}
                        {loop && (
                            <video
                                ref={loopRef}
                                muted loop playsInline
                                preload="metadata"
                                className={mediaClass}
                                style={{ opacity: 0 }}
                            >
                                <source src={`${loop}.webm`} type="video/webm" />
                                <source src={`${loop}.mp4`} type="video/mp4" />
                            </video>
                        )}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 pointer-events-none" />
                    </div>
                </>
            )}
            
            {/* 3. Playing Video with Controls */}
            {isPlaying && (
                <>
                    <video
                        autoPlay
                        controls
                        playsInline
                        className="absolute inset-0 w-full h-full bg-black z-10"
                    >
                        <source src={src.replace(/\.mp4$/, '.webm')} type="video/webm" />
                        <source src={src} type="video/mp4" />
                    </video>
                    <button
                        onClick={handleClose}
                        aria-label="Close video"
                        className="absolute top-3 right-3 z-20 text-white/70 hover:text-white transition-colors duration-200 cursor-pointer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                        </svg>
                    </button>
                </>
            )}
        </div>
    );
}
