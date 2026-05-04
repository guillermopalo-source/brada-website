import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import BradaLogo from './BradaLogo';

const Marquee = () => {
    // We render two sets of items to ensure seamless infinite scroll
    const items = [...Array(6)];
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const track = trackRef.current;
        if (!track) return;

        const width = track.scrollWidth / 2;

        gsap.to(track, {
            x: -width,
            duration: 45,
            ease: "none",
            repeat: -1
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="w-full overflow-hidden bg-transparent py-5 sm:py-8 lg:py-4 min-[1440px]:py-8 flex items-center select-none transition-all duration-500 ease-in-out">
            <div ref={trackRef} className="flex min-w-max shrink-0 items-center whitespace-nowrap bg-transparent will-change-transform">
                {/* First Set */}
                {items.map((_, i) => (
                    <div key={`a-${i}`} className="flex items-center gap-20 sm:gap-40 lg:gap-56 pr-20 sm:pr-40 lg:pr-56 bg-transparent">
                        <BradaLogo className="h-[3.2rem] sm:h-[3.2rem] md:h-[4.5rem] lg:h-[5.5rem] w-auto text-foreground shrink-0" />
                        {i % 2 === 0 ? (
                            <div className="flex items-center gap-0">
                                <span className="text-[2.8rem] sm:text-[3.1rem] md:text-[3.8rem] lg:text-[4.8rem] font-inter font-semibold text-foreground tracking-normal leading-none transition-colors duration-500">
                                    More than creative
                                </span>
                                <span className="text-[2.8rem] sm:text-[3.1rem] md:text-[3.8rem] lg:text-[4.8rem] font-inter font-semibold text-foreground tracking-normal leading-none mx-[0.2em] transition-colors duration-500">
                                    —
                                </span>
                                <span className="text-[3.2rem] sm:text-[3.4rem] md:text-[4.6rem] lg:text-[6.2rem] font-garamond italic text-foreground tracking-tight leading-none transition-colors duration-500" style={{ marginTop: '0.1em' }}>
                                    cultural.
                                </span>
                            </div>
                        ) : (
                            <div className="flex items-center gap-0">
                                <span className="text-[2.8rem] sm:text-[3.1rem] md:text-[3.8rem] lg:text-[4.8rem] font-inter font-semibold text-foreground tracking-normal leading-none transition-colors duration-500 whitespace-nowrap">
                                    Connecting people and brands.
                                </span>
                            </div>
                        )}
                    </div>
                ))}
                {/* Second Set (Duplicate) */}
                {items.map((_, i) => (
                    <div key={`b-${i}`} className="flex items-center gap-20 sm:gap-40 lg:gap-56 pr-20 sm:pr-40 lg:pr-56 bg-transparent">
                        <BradaLogo className="h-[1.8rem] sm:h-[3.2rem] md:h-[4.5rem] lg:h-[5.5rem] w-auto text-foreground shrink-0" />
                        {i % 2 === 0 ? (
                            <div className="flex items-center gap-0">
                                <span className="text-[1.6rem] sm:text-[3.1rem] md:text-[3.8rem] lg:text-[4.8rem] font-inter font-semibold text-foreground tracking-normal leading-none transition-colors duration-500">
                                    More than creative
                                </span>
                                <span className="text-[1.6rem] sm:text-[3.1rem] md:text-[3.8rem] lg:text-[4.8rem] font-inter font-semibold text-foreground tracking-normal leading-none mx-[0.2em] transition-colors duration-500">
                                    —
                                </span>
                                <span className="text-[1.9rem] sm:text-[3.4rem] md:text-[4.6rem] lg:text-[6.2rem] font-garamond italic text-foreground tracking-tight leading-none transition-colors duration-500" style={{ marginTop: '0.1em' }}>
                                    cultural.
                                </span>
                            </div>
                        ) : (
                            <div className="flex items-center gap-0">
                                <span className="text-[1.6rem] sm:text-[3.1rem] md:text-[3.8rem] lg:text-[4.8rem] font-inter font-semibold text-foreground tracking-normal leading-none transition-colors duration-500 whitespace-nowrap">
                                    Connecting people and brands.
                                </span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
