import { useState, useRef } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import Navigation from '@/components/custom/Navigation';
import NavigationDock from '@/components/custom/NavigationDock';
import FullScreenMenu from '@/components/custom/FullScreenMenu';
import Footer from '@/sections/Footer';
import CookieConsent from '@/components/custom/CookieConsent';
import SecondaryBradaLogo from '@/components/custom/SecondaryBradaLogo';
import CursorFollower from '@/components/custom/CursorFollower';
import { useHeaderContext } from '@/context/HeaderContext';
import SiteLoader from '@/components/custom/SiteLoader';

// Importamos GSAP
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const RootLayout = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const { headerState } = useHeaderContext();

    // Referencias para la animación
    const globalLogoRef = useRef<HTMLDivElement>(null);
    const footerTriggerRef = useRef<HTMLDivElement>(null);

    // 2. Lógica de GSAP Global (Aplica a Home, About, Hub, etc.)
    useGSAP(() => {
        if (!globalLogoRef.current) return;

        // Limpiamos animaciones previas del logo
        gsap.killTweensOf(globalLogoRef.current);
        if (footerTriggerRef.current) {
            ScrollTrigger.getAll()
                .filter(st => st.trigger === footerTriggerRef.current)
                .forEach(st => st.kill());
        }

        if (headerState === 'hidden') {
            gsap.to(globalLogoRef.current, { autoAlpha: 0, filter: "blur(12px)", duration: 0.3 });
            return;
        }

        if (headerState === 'visible') {
            gsap.to(globalLogoRef.current, { autoAlpha: 1, filter: "blur(0px)", duration: 0.35, ease: "power3.out" });
            return;
        }

        // headerState === 'default': solo mostrar al llegar al footer
        gsap.set(globalLogoRef.current, { autoAlpha: 0, filter: "blur(12px)" });

        if (footerTriggerRef.current) {
            ScrollTrigger.create({
                id: "secondary-logo-trigger",
                trigger: footerTriggerRef.current,
                start: "top 30%",
                onEnter: () => gsap.to(globalLogoRef.current, {
                    autoAlpha: 1,
                    filter: "blur(0px)",
                    duration: 0.35,
                    ease: "power3.out",
                }),
                onLeaveBack: () => gsap.to(globalLogoRef.current, {
                    autoAlpha: 0,
                    filter: "blur(12px)",
                    duration: 0.15,
                    ease: "power3.in",
                }),
            });

            // Recalcular posiciones después de que el DOM se estabilice
            requestAnimationFrame(() => ScrollTrigger.refresh());
        }
    }, { dependencies: [location.pathname, headerState] });

    return (
        <div className="relative flex flex-col">
            <SiteLoader />
            <CursorFollower />
            {/* Global Navigation */}
            <Navigation />

            {/* 3. LOGO FIJO GLOBAL EN EL DOM SIEMPRE (GSAP autoAlpha maneja la visibilidad y pointer-events) */}
            <div
                ref={globalLogoRef}
                className="fixed top-[20px] z-50 left-0 translate-x-0 w-full md:left-1/2 md:-translate-x-1/2 md:max-w-[1440px]"
                style={{ visibility: 'hidden', opacity: 0, filter: "blur(12px)" }} // Previene parpadeos en la carga
            >
                <div className="w-full h-auto pt-[25px] pb-[15px] md:py-[25px] px-[16px] sm:px-[24px] md:px-[30px] flex items-center justify-start md:justify-between">
                    <div className="pointer-events-auto">
                        <Link to="/" aria-label="Home">
                            <SecondaryBradaLogo className="w-[150px] md:w-[180px] h-auto object-contain transition-all duration-500 text-black dark:text-brada-light" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <main
                key={location.pathname}
                className="relative flex-1 flex flex-col"
            >
                <Outlet />
            </main>

            {/* Global Footer - Lo envolvemos en un ref para usarlo de disparador (Trigger) */}
            <div ref={footerTriggerRef} className="w-full">
                {!isMenuOpen && <Footer />}
            </div>

            {/* Cookie Consent Banner */}
            <CookieConsent />

            {/* Full Screen Menu Overlay */}
            <FullScreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

            {/* Navigation Dock */}
            <div className="fixed bottom-8 left-0 right-0 mx-auto w-max z-[9999]">
                <NavigationDock onMenuClick={() => setIsMenuOpen(!isMenuOpen)} isOpen={isMenuOpen} />
            </div>
        </div>
    );
};

export default RootLayout;