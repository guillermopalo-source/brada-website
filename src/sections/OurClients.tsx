import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import HipotClientImg from '@/assets/bros_img/logos_clients/hipotecario_client.svg';
import AltoPalermoClientImg from '@/assets/bros_img/logos_clients/altopalermo_client.svg';
import BAClientImg from '@/assets/bros_img/logos_clients/BA_client.svg';
import ConverseClientImg from '@/assets/bros_img/logos_clients/converse_client.svg';
import LemonClientImg from '@/assets/bros_img/logos_clients/lemon_client.svg';
import ItauClientImg from '@/assets/bros_img/logos_clients/itau_client.svg';
import CashappClientImg from '@/assets/bros_img/logos_clients/cashapp_client.svg';
import CavClientImg from '@/assets/bros_img/logos_clients/cav_client.svg';
import DoritosClientImg from '@/assets/bros_img/logos_clients/doritos_client.svg';
import LuxoraClientImg from '@/assets/bros_img/logos_clients/luxora_client.svg';
import MaroClientImg from '@/assets/bros_img/logos_clients/maro_client.svg';
import MenantClientImg from '@/assets/bros_img/logos_clients/menant_client.svg';
import ZonapropClientImg from '@/assets/bros_img/logos_clients/zonaprop_client.svg';
import ImgBros from '@/assets/bros_img/img_bros.avif';
import AngelBros from '@/assets/bros_img/angel_bros.avif';

gsap.registerPlugin(ScrollTrigger);

const ClientLogo = ({ src, alt, className }: { src: string, alt: string, className?: string }) => (
    <div 
       className={`bg-brada-black dark:bg-brada-light shrink-0 transition-colors duration-500 ${className}`} 
       style={{ 
           WebkitMask: `url("${src}") no-repeat center / contain`, 
           mask: `url("${src}") no-repeat center / contain`,
       }} 
       aria-label={alt}
       role="img"
    />
);

const OurClients = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const skySectionRef = useRef<HTMLElement>(null);
    const brosTextRef = useRef<HTMLHeadingElement>(null);
    const angelRef = useRef<HTMLImageElement>(null);
    const skyBannerRef = useRef<HTMLDivElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);
    const mobileMarquee1Ref = useRef<HTMLDivElement>(null);
    const mobileMarquee2Ref = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (skySectionRef.current && brosTextRef.current && angelRef.current && skyBannerRef.current) {
                // 1. Reveal de Bros: Empieza con el ángel pero termina mucho más rápido
                gsap.fromTo(
                    brosTextRef.current,
                    { opacity: 0, filter: "blur(12px)" },
                    {
                        opacity: 1,
                        filter: "blur(0px)",
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: skyBannerRef.current,
                            start: "top bottom",
                            end: "top center",
                            scrub: 1,
                        }
                    }
                );

                // 2. Entrada del Ángel: Diagonal (empieza más arriba y termina en su lugar)
                gsap.fromTo(
                    angelRef.current,
                    { x: "100vw", y: -1200 },
                    {
                        x: 0,
                        y: 0,
                        ease: "none",
                        scrollTrigger: {
                            trigger: skyBannerRef.current,
                            start: "top bottom",
                            end: "bottom 50%",
                            scrub: 1,
                        }
                    }
                );

                // 3. Logos clientes: Efecto 'reveal' global (desenfoque + deslizamiento + opacidad)
                gsap.fromTo(
                    ".logo-item-final",
                    { y: 20, opacity: 0, filter: "blur(10px)" },
                    {
                        y: 0,
                        opacity: 1,
                        filter: "blur(0px)",
                        duration: 1.5,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: skyBannerRef.current,
                            start: "top bottom-=50%",
                            once: true,
                        }
                    }
                );

                // 4. GSAP Infinite Marquee (Desktop)
                if (marqueeRef.current) {
                    const track = marqueeRef.current;
                    const width = track.scrollWidth / 2;
                    gsap.to(track, {
                        x: -width,
                        duration: 40,
                        ease: "none",
                        repeat: -1
                    });
                }

                // 5. GSAP Mobile Marquees (Opposite directions)
                if (mobileMarquee1Ref.current) {
                    const track = mobileMarquee1Ref.current;
                    const width = track.scrollWidth / 2;
                    gsap.to(track, {
                        x: -width,
                        duration: 25,
                        ease: "none",
                        repeat: -1
                    });
                }
                if (mobileMarquee2Ref.current) {
                    const track = mobileMarquee2Ref.current;
                    const width = track.scrollWidth / 2;
                    gsap.fromTo(track, 
                        { x: -width },
                        {
                            x: 0,
                            duration: 25,
                            ease: "none",
                            repeat: -1
                        }
                    );
                }

                // 6. Observer para recalcular posiciones cuando WorkPage inyecta el pinSpacing superior
                const resizeObserver = new ResizeObserver(() => {
                    ScrollTrigger.refresh();
                });
                resizeObserver.observe(document.body);

                return () => {
                    resizeObserver.disconnect();
                };
            }
        },
        { scope: containerRef }
    );

    return (
        <div ref={containerRef} className="w-full">
            {/* --- CIELO FINAL --- */}
            <section
                ref={skySectionRef}
                className="relative z-20 bg-background overflow-visible mt-32"
                style={{ width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}
            >
                {/* Contenedor del Banner del Cielo */}
                <div ref={skyBannerRef} className="w-full h-[170px] md:h-[280px] relative overflow-visible flex items-end justify-between">
                    {/* Imagen del Cielo de Fondo */}
                    <img src={ImgBros} className="absolute inset-0 w-full h-full object-cover object-center" alt="Cielo" />

                    {/* Texto Bros.*/}
                    <div className="relative z-10 h-fit overflow-hidden pb-3 ml-4 md:ml-14">
                        <h2
                            ref={brosTextRef}
                            className="text-black font-garamond italic text-[3rem] md:text-[4.5rem] lg:text-[6.5rem] leading-none tracking-[-0.03em] opacity-0"
                        >
                            Bros.
                        </h2>
                    </div>

                    {/* Ángel */}
                    <div className="absolute right-[10%] bottom-0 z-20 w-[180px] md:w-[320px] overflow-visible translate-y-1/2">
                        <img
                            ref={angelRef}
                            src={AngelBros}
                            className="w-full h-auto"
                            alt="Angel"
                        />
                    </div>
                </div>

                {/* Fila de Logos - Doble Marquee en Mobile / Simple en Desktop */}
                <div className="w-full pt-20 md:pt-52 pb-8 md:pb-52 bg-background overflow-hidden logo-item-final opacity-0">
                    
                    {/* Mobile Dual Marquees (Visible only on < 768px) */}
                    <div className="flex flex-col gap-10 md:hidden">
                        {/* Track 1: Right to Left */}
                        <div className="overflow-hidden">
                            <div ref={mobileMarquee1Ref} className="flex items-center gap-12 w-max will-change-transform">
                                {/* Set 1 */}
                                <ClientLogo src={LemonClientImg} alt="Lemon" className="h-10 w-[140px]" />
                                <ClientLogo src={ConverseClientImg} alt="Converse" className="h-10 w-[140px]" />
                                <ClientLogo src={ItauClientImg} alt="Itau" className="h-10 w-[140px]" />
                                <ClientLogo src={AltoPalermoClientImg} alt="Alto Palermo" className="h-10 w-[140px]" />
                                <ClientLogo src={CashappClientImg} alt="Cash App" className="h-10 w-[140px]" />
                                <ClientLogo src={DoritosClientImg} alt="Doritos" className="h-10 w-[140px]" />
                                <ClientLogo src={HipotClientImg} alt="Hipotecario" className="h-10 w-[140px]" />
                                {/* Duplicate for loop */}
                                <ClientLogo src={LemonClientImg} alt="Lemon" className="h-10 w-[140px]" />
                                <ClientLogo src={ConverseClientImg} alt="Converse" className="h-10 w-[140px]" />
                                <ClientLogo src={ItauClientImg} alt="Itau" className="h-10 w-[140px]" />
                                <ClientLogo src={AltoPalermoClientImg} alt="Alto Palermo" className="h-10 w-[140px]" />
                                <ClientLogo src={CashappClientImg} alt="Cash App" className="h-10 w-[140px]" />
                                <ClientLogo src={DoritosClientImg} alt="Doritos" className="h-10 w-[140px]" />
                                <ClientLogo src={HipotClientImg} alt="Hipotecario" className="h-10 w-[140px]" />
                            </div>
                        </div>

                        {/* Track 2: Left to Right */}
                        <div className="overflow-hidden">
                            <div ref={mobileMarquee2Ref} className="flex items-center gap-12 w-max will-change-transform">
                                {/* Set 1 */}
                                <ClientLogo src={CavClientImg} alt="CAV SBK" className="h-7 w-[140px]" />
                                <ClientLogo src={BAClientImg} alt="Buenos Aires" className="h-7 w-[140px]" />
                                <ClientLogo src={LuxoraClientImg} alt="Luxora" className="h-10 w-[140px]" />
                                <ClientLogo src={MaroClientImg} alt="Maro" className="h-10 w-[140px]" />
                                <ClientLogo src={MenantClientImg} alt="Menant" className="h-10 w-[140px]" />
                                <ClientLogo src={ZonapropClientImg} alt="Zonaprop" className="h-10 w-[140px]" />
                                {/* Duplicate for loop */}
                                <ClientLogo src={CavClientImg} alt="CAV SBK" className="h-7 w-[140px]" />
                                <ClientLogo src={BAClientImg} alt="Buenos Aires" className="h-7 w-[140px]" />
                                <ClientLogo src={LuxoraClientImg} alt="Luxora" className="h-10 w-[140px]" />
                                <ClientLogo src={MaroClientImg} alt="Maro" className="h-10 w-[140px]" />
                                <ClientLogo src={MenantClientImg} alt="Menant" className="h-10 w-[140px]" />
                                <ClientLogo src={ZonapropClientImg} alt="Zonaprop" className="h-10 w-[140px]" />
                            </div>
                        </div>
                    </div>

                    {/* Desktop Marquee (Visible only on >= 768px) */}
                    <div
                        ref={marqueeRef}
                        className="hidden md:flex items-center gap-16 md:gap-24 w-max will-change-transform"
                    >
                        {/* Set 1 */}
                        <ClientLogo src={LemonClientImg} alt="Lemon" className="h-[3.5rem] md:h-[4.25rem] w-[180px] md:w-[230px]" />
                        <ClientLogo src={ConverseClientImg} alt="Converse" className="h-11 md:h-[3.25rem] w-[180px] md:w-[230px]" />
                        <ClientLogo src={ItauClientImg} alt="Itau" className="h-11 md:h-[3.25rem] w-[180px] md:w-[230px]" />
                        <ClientLogo src={AltoPalermoClientImg} alt="Alto Palermo" className="h-11 md:h-[3.25rem] w-[180px] md:w-[230px]" />
                        <ClientLogo src={CashappClientImg} alt="Cash App" className="h-11 md:h-[3.25rem] w-[180px] md:w-[230px]" />
                        <ClientLogo src={DoritosClientImg} alt="Doritos" className="h-[3.5rem] md:h-[4.25rem] w-[180px] md:w-[230px]" />
                        <ClientLogo src={HipotClientImg} alt="Hipotecario" className="h-11 md:h-[3.25rem] w-[180px] md:w-[230px]" />
                        <ClientLogo src={CavClientImg} alt="CAV SBK" className="h-7 md:h-9 w-[180px] md:w-[230px]" />
                        <ClientLogo src={BAClientImg} alt="Buenos Aires" className="h-7 md:h-9 w-[180px] md:w-[230px]" />
                        <ClientLogo src={LuxoraClientImg} alt="Luxora" className="h-11 md:h-[3.25rem] w-[180px] md:w-[230px]" />
                        <ClientLogo src={MaroClientImg} alt="Maro" className="h-11 md:h-[3.25rem] w-[180px] md:w-[230px]" />
                        <ClientLogo src={MenantClientImg} alt="Menant" className="h-[3.5rem] md:h-[4.25rem] w-[180px] md:w-[230px]" />
                        <ClientLogo src={ZonapropClientImg} alt="Zonaprop" className="h-11 md:h-[3.25rem] w-[180px] md:w-[230px]" />
                        {/* Set 2 (duplicado para loop seamless) */}
                        <ClientLogo src={LemonClientImg} alt="Lemon" className="h-[3.5rem] md:h-[4.25rem] w-[180px] md:w-[230px]" />
                        <ClientLogo src={ConverseClientImg} alt="Converse" className="h-11 md:h-[3.25rem] w-[180px] md:w-[230px]" />
                        <ClientLogo src={ItauClientImg} alt="Itau" className="h-11 md:h-[3.25rem] w-[180px] md:w-[230px]" />
                        <ClientLogo src={AltoPalermoClientImg} alt="Alto Palermo" className="h-11 md:h-[3.25rem] w-[180px] md:w-[230px]" />
                        <ClientLogo src={CashappClientImg} alt="Cash App" className="h-11 md:h-[3.25rem] w-[180px] md:w-[230px]" />
                        <ClientLogo src={DoritosClientImg} alt="Doritos" className="h-[3.5rem] md:h-[4.25rem] w-[180px] md:w-[230px]" />
                        <ClientLogo src={HipotClientImg} alt="Hipotecario" className="h-11 md:h-[3.25rem] w-[180px] md:w-[230px]" />
                        <ClientLogo src={CavClientImg} alt="CAV SBK" className="h-7 md:h-9 w-[180px] md:w-[230px]" />
                        <ClientLogo src={BAClientImg} alt="Buenos Aires" className="h-7 md:h-9 w-[180px] md:w-[230px]" />
                        <ClientLogo src={LuxoraClientImg} alt="Luxora" className="h-11 md:h-[3.25rem] w-[180px] md:w-[230px]" />
                        <ClientLogo src={MaroClientImg} alt="Maro" className="h-11 md:h-[3.25rem] w-[180px] md:w-[230px]" />
                        <ClientLogo src={MenantClientImg} alt="Menant" className="h-[3.5rem] md:h-[4.25rem] w-[180px] md:w-[230px]" />
                        <ClientLogo src={ZonapropClientImg} alt="Zonaprop" className="h-11 md:h-[3.25rem] w-[180px] md:w-[230px]" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurClients;

