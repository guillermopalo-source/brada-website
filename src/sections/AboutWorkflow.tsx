import { useRef } from 'react';
import ScrollReveal from '@/components/custom/ScrollReveal';
import { useScrollReveal } from '@/animation/useScrollReveal';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface WorkflowStep {
  number: string;
  title: string;
  description: string;
}

const workflowSteps: WorkflowStep[] = [
  {
    number: '01',
    title: 'OBSERVAMOS',
    description: 'Insights reales, research. No bajadas de manual.',
  },
  {
    number: '02',
    title: 'PLANEAMOS',
    description:
      'Decodificamos. Posicionamiento, territorio, dirección. Objetivos y audiencias.',
  },
  {
    number: '03',
    title: 'CREATIVE CORE',
    description: 'La idea madre. Eje creativo, historia, personalidad.',
  },
  {
    number: '04',
    title: 'ARMAMOS EL MUNDO',
    description:
      'Creamos el universo visual y narrativo. Bajamos el concepto a piezas, tono, estética, lenguaje.',
  },
  {
    number: '05',
    title: 'PRODUCIMOS',
    description:
      'La idea se vuelve tangible. Dirección, diseño, piezas, campañas, contenido, shootings, todo.',
  },
  {
    number: '06',
    title: 'ACTIVAMOS',
    description:
      'La soltamos al mundo. Online, offline, donde está la gente. Redes, vía pública, eventos, experiencias.',
  },
  {
    number: '07',
    title: 'LE SEGUIMOS EL RITMO',
    description:
      'Medimos, aprendemos y ajustamos. No es publicar y listo. Rebotar y volver a crear.',
  },
];

const LoopVisual = () => (
  <div className="relative flex flex-col items-center justify-center select-none py-6 bg-transparent w-full">
    {/* Capa Base: Flechas (z-0) */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
      <svg id="Arrow_Left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.17 158.31" className="w-[8vw] max-w-[32px] md:w-[2.5vw] md:max-w-[36px] h-auto min-w-[25px] -translate-x-[15vw] md:-translate-x-[6.5vw] lg:-translate-x-[7.5vw] xl:-translate-x-[8.5vw]">
        <path fill="currentColor" d="M41.89,118.52c-1.85,6.33-3.22,12.79-5.19,19.09s-4.3,12.19-8.54,17h3.07c-4.43-3.43-9.24-6.29-13.84-9.47-4.34-3-8.71-6.38-11.53-10.93l-2.45,3.19c4.96,2.06,9.63,4.94,14.16,7.79,4.83,3.03,9.55,6.24,14.18,9.57,1.99,1.43,4.48-1.79,2.63-3.41-8.15-7.15-15.25-15.44-20.41-25.01-4.62-8.56-7.53-17.96-8.84-27.59s-1.03-20.38.23-30.45c1.41-11.24,3.83-22.51,7.52-33.23,3.91-11.37,9.65-22.03,17.25-31.36.74-.91.89-2.18,0-3.07-.76-.76-2.32-.91-3.07,0-7.11,8.73-12.71,18.43-16.77,28.93S3.42,52.01,1.68,63.56c-3.14,20.76-2.4,42.28,6.79,61.5,5.4,11.3,13.47,21.13,22.85,29.36l2.63-3.41c-4.74-3.41-9.57-6.69-14.51-9.79s-9.66-5.85-14.86-8.01c-1.79-.75-3.38,1.7-2.45,3.19,6.07,9.79,17.24,14.47,26.04,21.28.88.68,2.22.97,3.07,0,9.21-10.45,11.06-25.1,14.84-38,.79-2.69-3.4-3.83-4.18-1.15h0Z" />
      </svg>
      <svg id="Arrow_Right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.83 156.61" className="w-[8vw] max-w-[28px] md:w-[2.5vw] md:max-w-[32px] h-auto min-w-[22px] translate-x-[15vw] md:translate-x-[6.5vw] lg:translate-x-[7.5vw] xl:translate-x-[8.5vw]">
        <path fill="currentColor" d="M15.05,155.93c14.9-18.91,25.41-42.09,27.46-66.24.95-11.22-.19-22.57-3.77-33.26-3.08-9.2-7.14-18.17-11.97-26.58-2.84-4.94-6.01-9.71-9.73-14.04-3.14-3.65-6.83-7.14-11.22-9.2-1.48-.69-2.83-.09-3.43,1.39C-.36,14.84-.28,22.47.4,29.69c.24,2.6,3.69,3.19,4.59.62,1.55-4.48,1.78-9.29,2.04-13.98.24-4.29.38-8.87,2.24-12.83l-3.67.47c3.12,3.39,7.03,5.47,11.42,6.74,3.95,1.15,7.96,1.9,11.53,4.05,2.58,1.55,4.93-2.49,2.36-4.03-3.61-2.16-7.6-3.14-11.62-4.23S11.78,3.8,8.9.67c-.95-1.04-3.04-.87-3.67.47C1.09,9.95,3.62,20.03.48,29.07l4.59.62c-.64-6.85-.79-13.96,1.82-20.44l-3.43,1.39c7.67,3.6,13.13,11.47,17.5,18.57,4.97,8.08,9.08,16.75,12.31,25.67,3.57,9.83,5.23,19.98,4.84,30.45-.43,11.6-3.17,23.05-7.32,33.87-4.6,11.98-11.1,23.36-19.04,33.44-.78.99-.97,2.34,0,3.3.81.81,2.52,1,3.3,0h0Z" />
      </svg>
    </div>

    {/* Capa Media: Texto (z-10) */}
    <span className="relative z-10 font-accent italic text-red-600 text-6xl md:text-5xl lg:text-7xl xl:text-8xl leading-none">
      Loop
    </span>

    {/* Capa Superior: Círculo Blanco (z-20) */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
      <svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 265.29 164.49" className="w-full h-full scale-[0.85]">
        <path fill="currentColor" d="M85.75,20.33c-18.95-.47-39.39,6.43-54.79,17.16C12.15,50.59-3.62,72.29.73,96.28c4.99,27.59,34.12,47.8,58.29,57.56,27.29,11.01,59.82,12.03,88.77,9.52,30.8-2.68,60.41-14.13,85.87-31.7,20.73-14.31,36.55-35.25,30.22-61.55-5.79-24.08-25.68-42.4-46.97-53.43C186.94,1.14,151.8-2.54,118.64,1.54c-28.29,3.48-57.78,12.7-77.93,33.9-14.34,15.1-22.29,35.42-21.5,56.27.18,4.72.81,9.43,1.8,14.05.75,3.52,6.14,2.03,5.39-1.49-3.86-18.1-.75-37.17,9.02-52.93,13.16-21.23,36.28-33.55,59.84-39.76,31.41-8.27,66.16-8.5,97.29,1.15,23.55,7.3,47.05,21.23,59.62,43.15,5.24,9.14,8.46,19.79,7.53,30.39-1.03,11.78-7.64,21.96-15.93,30.04-10.54,10.27-23.63,17.77-36.78,24.17s-25.71,11.79-39.62,14.56c-27.54,5.48-57.52,5.14-85.03-.34-13.69-2.73-25.93-7.47-37.91-14.68s-24.45-16.74-32.07-29.22c-11.26-18.44-7.1-39.25,6.59-55.09,15.55-17.99,38.96-28.3,62.54-29.69,1.41-.08,2.84-.15,4.25-.12,3.6.09,3.6-5.5,0-5.59h0Z" />
      </svg>
    </div>
  </div>
);

const AboutWorkflow = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const oneLoopRef = useRef<HTMLDivElement>(null);

  // Apply our global scroll reveal to all `.reveal` inside this section
  useScrollReveal(sectionRef);

  // Text Mask Reveal: "ONE LOOP. Infinite IDEAS."
  useGSAP(() => {
    if (!oneLoopRef.current) return;
    const mask = oneLoopRef.current.querySelector('.mask-line');
    if (!mask) return;

    gsap.fromTo(mask,
      { yPercent: 100 },
      {
        yPercent: 0,
        duration: 1.2,
        delay: 0.5, // Increased delay
        ease: 'power3.out',
        scrollTrigger: {
          trigger: oneLoopRef.current,
          start: 'top 90%', // Triggers even later
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, { scope: oneLoopRef });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full pt-6 md:pt-0 md:-mt-24 lg:pt-40 pb-24 md:pb-0 lg:pb-4 xl:pb-32 bg-transparent page-enter"
    >
      <div className="w-full">
        <div>

          {/* ═══════════════════════════════════════════
               WORKFLOW SECTION
          ═══════════════════════════════════════════ */}
          <div className="bg-transparent mb-0">

            {/* — Header: Workflow title + fire + crowd — */}
            <ScrollReveal start="top 96%">
              <div className="flex flex-col max-[900px]:flex-col min-[900px]:flex-row items-start gap-10 md:gap-6 lg:gap-6 mb-6 md:mt-8 lg:-mt-8">
                {/* Crowd image — above on mobile, right on desktop */}
                <div className="w-full min-[900px]:w-1/2 min-[900px]:ml-auto shrink-0 order-first min-[900px]:order-last max-h-[340px] md:max-h-none overflow-hidden flex items-center justify-center md:py-8 lg:py-0">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover object-center">
                    <source src="/videos_agency/workflow_about.webm" type="video/webm" />
                    <source src="/videos_agency/workflow_about.mp4" type="video/mp4" />
                  </video>
                </div>

                {/* Workflow title + subtitle — below image on mobile, left on desktop */}
                <div className="flex flex-col items-start order-last min-[900px]:order-first">
                  {/* Title + fire inline */}
                  <div className="flex items-center gap-6 mb-3">
                    <h3 className="font-garamond font-normal text-foreground text-[5rem] sm:text-[6.5rem] md:text-[5.5rem] lg:text-[6.5rem] leading-none">
                      Workflow
                    </h3>
                    <img src="/assets/fire.gif" alt="fire" className="w-[3.5rem] sm:w-[5rem] md:w-[3.8rem] lg:w-[3.2rem] xl:w-[5rem] h-[3.5rem] sm:h-[5rem] md:h-[3.8rem] lg:h-[3.2rem] xl:h-[5rem] object-contain select-none" />
                  </div>
                  {/* Subtitle */}
                  <p className="text-foreground font-inter font-light text-xl md:text-lg lg:text-xl leading-tight md:leading-normal lg:leading-tight max-w-sm -mt-3 tracking-wide pl-0 md:pl-0 lg:pl-6">
                    Del brief al <span className="font-accent text-3xl md:text-2xl lg:text-3xl">WOW MOMENT!</span><br />
                    Cada idea es una mecha y<br />nosotros sabemos cómo encenderla.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* — Hybrid Typography: ONE LOOP. Infinite IDEAS. — */}
            <div ref={oneLoopRef} className="mt-36 md:mt-32 lg:mt-32 xl:mt-60 mb-10 md:mb-4 lg:mb-4 sm:mb-14 will-change-transform text-center overflow-hidden">
              <p className="mask-line text-foreground leading-[0.95] tracking-tight">
                <span className="font-inter-tight font-extrabold text-[11vw] sm:text-[9vw] md:text-[8vw] lg:text-[7vw] uppercase">ONE LOOP.</span>
                <span className="font-garamond italic font-normal text-[11vw] sm:text-[9vw] md:text-[8vw] lg:text-[7vw] leading-[0.95]"> Infinite </span>
                <span className="font-inter-tight font-extrabold text-[11vw] sm:text-[9vw] md:text-[8vw] lg:text-[7vw] uppercase">IDEAS.</span>
              </p>
            </div>

            {/* — 7-Step Loop Grid — 5-col diamond pattern — */}
            <div className="relative mt-24 md:mt-4 lg:mt-16 xl:mt-32 bg-transparent">

              <div className="hidden md:grid md:grid-cols-5 lg:grid-cols-5 gap-x-4 lg:gap-x-6 gap-y-10 lg:gap-y-12 items-center md:scale-[0.85] lg:scale-100 origin-center transform-gpu">

                {/* ── ROW 1: _ · 01 · _ · 07 · _ ── */}
                <div />{/* col1 empty */}

                {/* 01 OBSERVAMOS */}
                <div className="reveal flex flex-col items-start text-left md:-ml-16 lg:ml-0 lg:block lg:text-left">
                  <h5 className="font-accent text-foreground md:text-lg lg:text-3xl xl:text-4xl leading-none mb-0 whitespace-nowrap">01. OBSERVAMOS</h5>
                  {/* Tablet version: 2 lines */}
                  <p className="hidden md:block lg:hidden font-inter text-sm font-normal leading-tight tracking-[0.03em] text-gray-700 dark:text-brada-light/70 max-w-none">
                    <span className="whitespace-nowrap">Insights reales, research.</span><br />
                    <span className="whitespace-nowrap">No bajadas de manual.</span>
                  </p>
                  {/* Desktop version */}
                  <p className="hidden lg:block font-inter text-base font-normal leading-tight tracking-[0.03em] text-gray-700 dark:text-brada-light/70 max-w-[180px] lg:max-w-none">
                    <span className="lg:whitespace-nowrap">Insights reales, research.</span><br />
                    <span className="lg:whitespace-nowrap">No bajadas de manual.</span>
                  </p>
                </div>

                <div />{/* col3 center empty row1 */}

                {/* 07 LE SEGUIMOS EL RITMO */}
                <div className="reveal md:ml-0 lg:-ml-4 xl:ml-8 flex flex-col items-start text-left lg:block lg:text-left">
                  <h5 className="font-accent text-foreground md:text-lg lg:text-3xl xl:text-4xl leading-none mb-0 whitespace-nowrap">07. LE SEGUIMOS EL RITMO</h5>
                  {/* Tablet version: 3 lines */}
                  <p className="hidden md:block lg:hidden font-inter text-sm font-normal leading-tight tracking-[0.03em] text-gray-700 dark:text-brada-light/70 max-w-none">
                    <span className="whitespace-nowrap">Medimos, aprendemos y ajustamos.</span><br />
                    <span className="whitespace-nowrap">No es publicar y listo. Rebotar y volver a crear.</span>
                  </p>
                  {/* Desktop version: 2 lines */}
                  <p className="hidden lg:block font-inter text-base font-normal leading-tight tracking-[0.03em] text-gray-700 dark:text-brada-light/70 lg:max-w-none">
                    <span className="lg:whitespace-nowrap">Medimos, aprendemos y ajustamos.</span><br />
                    <span className="lg:whitespace-nowrap">No es publicar y listo. Rebotar y volver a crear.</span>
                  </p>
                </div>

                <div />{/* col5 empty */}

                {/* ── ROW 2: 02 · _ · Loop · _ · 06 ── */}

                {/* 02 PLANEAMOS */}
                <div className="reveal md:-ml-10 lg:ml-8 xl:ml-18 md:min-w-0 lg:min-w-[13rem] xl:min-w-[16rem] flex flex-col items-start text-left lg:block lg:text-left">
                  <h5 className="font-accent text-foreground md:text-lg lg:text-3xl xl:text-4xl leading-none mb-0 whitespace-nowrap">02. PLANEAMOS</h5>
                  {/* Tablet version: 3 lines */}
                  <p className="hidden md:block lg:hidden font-inter text-sm font-normal leading-tight tracking-[0.03em] text-gray-700 dark:text-brada-light/70 max-w-none">
                    <span className="whitespace-nowrap">Decodificamos.</span><br />
                    <span className="whitespace-nowrap">Posicionamiento, territorio, dirección.</span><br />
                    <span className="whitespace-nowrap">Objetivos y audiencias.</span>
                  </p>
                  {/* Desktop version: 3 lines */}
                  <p className="hidden lg:block font-inter text-base font-normal leading-tight tracking-[0.03em] text-gray-700 dark:text-brada-light/70 lg:max-w-none">
                    <span className="lg:whitespace-nowrap">Decodificamos.</span><br />
                    <span className="lg:whitespace-nowrap">Posicionamiento, territorio, dirección.</span><br />
                    <span className="lg:whitespace-nowrap">Objetivos y audiencias.</span>
                  </p>
                </div>

                <div />{/* col2 empty row2 */}

                {/* Loop CENTER */}
                <div className="flex items-center justify-center">
                  <LoopVisual />
                </div>

                <div />{/* col4 empty row2 */}

                {/* 06 ACTIVAMOS */}
                <div className="reveal md:-ml-20 lg:-ml-32 xl:-ml-20 flex flex-col items-start text-left lg:block lg:text-left">
                  <h5 className="font-accent text-foreground md:text-lg lg:text-3xl xl:text-4xl leading-none mb-0 whitespace-nowrap">06. ACTIVAMOS</h5>
                  {/* Tablet version: 3 lines */}
                  <p className="hidden md:block lg:hidden font-inter text-sm font-normal leading-tight tracking-[0.03em] text-gray-700 dark:text-brada-light/70 max-w-none">
                    <span className="whitespace-nowrap">La soltamos al mundo.</span><br />
                    <span className="whitespace-nowrap">Online, offline, donde está la gente.</span><br />
                    <span className="whitespace-nowrap">Redes, vía pública, eventos, experiencias.</span>
                  </p>
                  {/* Desktop version */}
                  <p className="hidden lg:block font-inter text-base font-normal leading-tight tracking-[0.03em] text-gray-700 dark:text-brada-light/70 max-w-[180px] lg:max-w-none">
                    <span className="lg:whitespace-nowrap">La soltamos al mundo.</span><br />
                    <span className="lg:whitespace-nowrap">Online, offline, donde está la gente.</span><br />
                    <span className="lg:whitespace-nowrap">Redes, vía pública, eventos, experiencias.</span>
                  </p>
                </div>

                {/* ── ROW 3: _ · 03 · _ · 05 · _ ── */}
                <div />{/* col1 empty */}

                {/* 03 CREATIVE CORE */}
                <div className="reveal md:-ml-16 lg:-ml-16 xl:-ml-24 flex flex-col items-start text-left lg:block lg:text-left">
                  <h5 className="font-accent text-foreground md:text-lg lg:text-3xl xl:text-4xl leading-none mb-0 whitespace-nowrap">03. CREATIVE CORE</h5>
                  {/* Tablet version: 3 lines */}
                  <p className="hidden md:block lg:hidden font-inter text-sm font-normal leading-tight tracking-[0.03em] text-gray-700 dark:text-brada-light/70 max-w-none">
                    <span className="whitespace-nowrap">La idea madre.</span><br />
                    <span className="whitespace-nowrap">Eje creativo, historia,</span><br />
                    <span className="whitespace-nowrap">personalidad.</span>
                  </p>
                  {/* Desktop version */}
                  <p className="hidden lg:block font-inter text-base font-normal leading-tight tracking-[0.03em] text-gray-700 dark:text-brada-light/70 max-w-[180px] lg:max-w-[180px]">La idea madre.<br />Eje creativo, historia,<br />personalidad.</p>
                </div>

                <div />{/* col3 center empty row3 */}

                {/* 05 PRODUCIMOS */}
                <div className="reveal md:ml-12 lg:ml-16 xl:ml-[7.5rem] flex flex-col items-start text-left lg:block lg:text-left">
                  <h5 className="font-accent text-foreground md:text-lg lg:text-3xl xl:text-4xl leading-none mb-0 whitespace-nowrap">05. PRODUCIMOS</h5>
                  {/* Tablet version: 3 lines */}
                  <p className="hidden md:block lg:hidden font-inter text-sm font-normal leading-tight tracking-[0.03em] text-gray-700 dark:text-brada-light/70 max-w-none">
                    <span className="whitespace-nowrap">La idea se vuelve tangible.</span><br />
                    <span className="whitespace-nowrap">Dirección, diseño, piezas, campañas,</span><br />
                    <span className="whitespace-nowrap">contenido, shootings, todo.</span>
                  </p>
                  {/* Desktop version: 3 lines (as before) */}
                  <p className="hidden lg:block font-inter text-base font-normal leading-tight tracking-[0.03em] text-gray-700 dark:text-brada-light/70 lg:max-w-none">
                    <span className="lg:whitespace-nowrap">La idea se vuelve tangible.</span><br />
                    <span className="lg:whitespace-nowrap">Dirección, diseño, piezas, campañas,</span><br />
                    <span className="lg:whitespace-nowrap">contenido, shootings, todo.</span>
                  </p>
                </div>

                <div />{/* col5 empty */}

                {/* ── ROW 4: 04 ARMAMOS EL MUNDO — full span, centered ── */}
                <div className="reveal col-span-5 flex flex-col items-center text-center md:-mt-10 lg:-mt-12 xl:-mt-6">
                  <div className="flex flex-col items-center md:items-start lg:items-start xl:items-center text-center md:text-left lg:text-left xl:text-center md:ml-12 lg:ml-8 xl:ml-0">
                    <h5 className="font-accent text-foreground md:text-lg lg:text-3xl xl:text-4xl leading-none mb-0 whitespace-nowrap">04. ARMAMOS EL MUNDO</h5>
                    {/* Tablet version: 3 lines */}
                    <p className="hidden md:block lg:hidden font-inter text-sm font-normal leading-tight tracking-[0.03em] text-gray-700 dark:text-brada-light/70 max-w-none text-left">
                      <span className="whitespace-nowrap">Creamos el universo visual y narrativo.</span><br />
                      <span className="whitespace-nowrap">Bajamos el concepto a piezas, tono,</span><br />
                      <span className="whitespace-nowrap">estética, lenguaje.</span>
                    </p>
                    {/* Desktop version */}
                    <p className="hidden lg:block font-inter text-base font-normal leading-tight tracking-[0.03em] text-gray-700 dark:text-brada-light/70 max-w-xs lg:text-left xl:text-center">
                      Creamos el universo visual y narrativo.<br />Bajamos el concepto a piezas, tono, estética, lenguaje.
                    </p>
                  </div>
                </div>

              </div>

              {/* ── MOBILE: vertical list ── */}
              <div className="flex flex-col gap-10 md:hidden">
                {workflowSteps.map((step) => (
                  <div key={step.number} className="reveal">
                    <h5 className="font-accent text-foreground text-3xl leading-tight mb-1">{step.number}. {step.title}</h5>
                    <p className="font-inter text-lg font-normal leading-tight tracking-[0.03em] text-gray-700 dark:text-brada-light/70">{step.description}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default AboutWorkflow;
