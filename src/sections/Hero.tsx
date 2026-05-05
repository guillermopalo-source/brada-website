import { useEffect, useRef } from 'react';
import { useReveal } from '@/animation/useReveal';
import { useTheme } from '@/context/ThemeContext';
import SecondaryBradaLogo from '@/components/custom/SecondaryBradaLogo';
import holaGloboDark from '@/assets/hola_globo.gif';
import holaGloboLight from '@/assets/hola_globo-light.gif';
import subrayado from '@/assets/subrayado_storyshackers.svg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoSlotRef = useRef<HTMLSpanElement>(null);
  const phraseRef = useRef<HTMLDivElement>(null);
  const secondaryLogoRef = useRef<HTMLDivElement>(null);

  useReveal(titleRef);

  useEffect(() => {
    document.fonts.ready.then(() => {
      ScrollTrigger.refresh();
    });
  }, []);

  useGSAP(() => {
    const section = sectionRef.current;
    const video = videoContainerRef.current;
    const slot = videoSlotRef.current;
    const phrase = phraseRef.current;
    const title = titleRef.current;
    const logo = secondaryLogoRef.current;

    if (!section || !video || !slot || !phrase || !title || !logo) return;

    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      let scale = 1, deltaX = 0, deltaY = 0;

      const calculateLayout = () => {
        gsap.set([video, phrase, title], { clearProps: 'transform' });
        const vRect = video.getBoundingClientRect();
        const sRect = slot.getBoundingClientRect();

        if (vRect.width > 0 && sRect.width > 0) {
          scale = sRect.width / vRect.width;
          deltaX = (sRect.left + sRect.width / 2) - (vRect.left + vRect.width / 2);
          // Calculamos deltaY pero le restamos un offset para que el encuentro sea MAS ARRIBA
          deltaY = (sRect.top + sRect.height / 2) - (vRect.top + vRect.height / 2);
        }
        gsap.set(logo, { autoAlpha: 0 });
        gsap.set(phrase, { y: 120 }); // Arranca un poco más abajo para dar recorrido
      };

      calculateLayout();

      const tl = gsap.timeline({ paused: true });

      // Animación de salida del título (más rápida)
      tl.to(title, { y: -100, autoAlpha: 0, ease: 'power1.in', duration: 0.8 }, 0);

      // El video y el párrafo se mueven hacia el encuentro elevado
      // Usamos un factor de 0.85 para que el punto de anclaje sea más alto en la pantalla
      tl.to(video, {
        scale: () => scale,
        x: () => deltaX,
        y: () => 0, 
        ease: 'power2.inOut',
        duration: 1
      }, 0);

      tl.to(phrase, {
        y: () => -deltaY, 
        ease: 'power2.inOut',
        duration: 1
      }, 0);

      // Logo aparece cuando el video ya liberó el espacio (0.4)
      tl.to(logo, { autoAlpha: 1, duration: 0.2 }, 0.4);

      const st = ScrollTrigger.create({
        trigger: video,
        start: 'center center',
        end: '+=800', // Scroll más corto = más dinámico
        scrub: 1.2, // Un pelín más de suavidad para evitar saltos
        pin: section,
        pinSpacing: true,
        animation: tl,
        invalidateOnRefresh: true,
        refreshPriority: 1,
      });

      // SOLUCIÓN AL BUG DEL LOGO: Forzamos el display a none para que no pelee con el scroll
      const footerSt = ScrollTrigger.create({
        trigger: "footer",
        start: "top 95%",
        onEnter: () => gsap.set(logo, { display: 'none' }),
        onLeaveBack: () => gsap.set(logo, { display: 'block' })
      });

      ScrollTrigger.addEventListener('refreshInit', calculateLayout);

      return () => {
        ScrollTrigger.removeEventListener('refreshInit', calculateLayout);
        st.kill();
        footerSt.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <>
      <div
        ref={secondaryLogoRef}
        className="fixed top-[20px] left-[30px] z-[100] invisible opacity-0 pointer-events-none"
      >
        <a href="/" className="pointer-events-auto block" aria-label="Home">
            <SecondaryBradaLogo className="w-[140px] md:w-[160px] h-auto text-black dark:text-brada-light transition-colors duration-500" />
        </a>
      </div>

      <section
        ref={sectionRef}
        id="home"
        className="relative w-full bg-transparent"
        style={{ minHeight: 'auto' }}
      >
        <div className="relative z-10 w-full pt-[180px]">
          <div className="w-full">
            {/* Título */}
            <div className="max-w-[1600px] mb-12 md:mb-16">
              <h1 ref={titleRef} className="text-black dark:text-brada-light font-inter font-extrabold tracking-tighter leading-[0.95] md:leading-[0.9]">
                <span className="block reveal pb-1 md:pb-2 text-[clamp(2.8rem,8.3vw,8.3rem)] md:text-[clamp(3.1rem,8.3vw,8.3rem)]">
                  WE&apos;RE NOT JUST
                </span>
                <span className="block reveal text-[clamp(2.8rem,8.3vw,8.3rem)] md:text-[clamp(3.1rem,8.3vw,8.3rem)]">
                  STORYTELLERS.
                </span>
                <span className="block reveal text-[2.8rem] md:text-[clamp(3.1rem,8.3vw,8.3rem)] mt-2">
                  <span className="block md:inline">WE&apos;RE</span>{' '}
                  <span className="relative block md:inline-block md:ml-2 mt-1 md:mt-0">
                    <span className="relative z-10 font-accent font-normal uppercase text-[14.5vw] md:text-[clamp(3.4rem,9.3vw,9.3rem)] leading-none whitespace-nowrap">
                      STORYSHAKE
                      <span className="relative inline-block">
                        R
                        <img src={theme === 'light' ? holaGloboLight : holaGloboDark} alt="HOLA" className="absolute bottom-[calc(90%+10px)] md:bottom-[calc(85%+28px)] left-[30%] md:left-[60%] w-[65px] md:w-[140px] z-20 h-auto" />
                      </span>
                      S
                    </span>
                    <img src={subrayado} alt="Underline" className="absolute bottom-1 md:bottom-2 left-0 w-full h-auto z-10" />
                  </span>
                </span>
              </h1>
            </div>

            {/* Video */}
            <div
              ref={videoContainerRef}
              className="relative w-full aspect-[16/9] md:aspect-[1.85/1] overflow-hidden z-30 origin-center rounded-2xl sm:rounded-3xl"
            >
              <div className="absolute inset-0 bg-black">
                <video autoPlay loop muted playsInline preload="auto" className="absolute inset-0 w-full h-full object-cover">
                  <source src="/hero_home/campania_qr/lemon_campania_qr_home_loop.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Frase y Marquee */}
            <div ref={phraseRef} className="relative z-20 w-full pt-10 pb-12 md:pb-20">
              <div className="max-w-[1600px]">
                <p className="text-black dark:text-brada-light font-inter font-semibold leading-[1.05] text-[2.1rem] md:text-[clamp(2.2rem,6.2vw,5.8rem)] lg:text-[clamp(2.5rem,6.8vw,6.8rem)]">
                  Transformamos{' '}
                  <span
                    ref={videoSlotRef}
                    className="hidden md:inline-block align-baseline mr-[0.25em] translate-y-[0.04em] rounded-lg"
                    style={{ width: 'clamp(9rem, 15vw, 18rem)', aspectRatio: '16/9' }}
                  />
                  marcas en relatos vivos, con ideas que se sienten y se comparten.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;