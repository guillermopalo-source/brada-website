import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import AboutWorkflow from '@/sections/AboutWorkflow';
import ScrollReveal from '@/components/custom/ScrollReveal';
import { usePageEnter } from '@/animation/usePageEnter';

const AboutPage = () => {
    const pageRef = useRef<HTMLElement>(null);
    usePageEnter(pageRef);

    return (
        <>
            <Helmet>
                <title>About Us | Brada™</title>
                <meta name="description" content="MORE THAN CREATIVE — cultural. Somos una agencia creativa independiente." />
            </Helmet>

            <main ref={pageRef} className="w-full bg-transparent text-foreground pt-[180px] pb-32 transition-colors duration-500">
                <div className="w-full flex flex-col gap-24 lg:gap-32">

                    {/* BLOCK 1: Hero */}
                    <ScrollReveal>
                        <section className="flex flex-col w-full">
                            <div className="flex flex-col gap-0">
                                <div className="mb-1 sm:mb-2">
                                    <h1 className="text-foreground font-inter font-extrabold text-[2.5rem] sm:text-[3.15rem] md:text-[3.8rem] lg:text-[5.15rem] xl:text-[6.8rem] tracking-tight leading-[0.95] uppercase">
                                        <span className="page-enter block tracking-tight">MORE THAN</span>
                                        <span className="page-enter block tracking-tight">CREATIVE <span className="inline-block">—</span> <span className="font-garamond italic font-normal normal-case tracking-normal text-[1.3em]">cultural.</span></span>
                                        <span className="page-enter block tracking-tight -mt-1 sm:-mt-2 md:-mt-3">ONE CREW. ALL IN.</span>
                                    </h1>
                                </div>
                                <div className="page-enter max-w-2xl text-foreground/70 text-base sm:text-lg md:text-xl leading-relaxed mb-4">
                                    <p>No solo somos proveedores. Somos los que están cuando hay que estar, <br className="hidden md:block" />un verdadero hermano.</p>
                                </div>
                            </div>
                            {/* Hero Banner Image */}
                            <div className="relative left-1/2 -translate-x-1/2 w-screen max-w-none outline-none mt-4 md:mt-6 mb-24 md:mb-0 lg:-mb-12 xl:mb-32">
                                <picture>
                                    <source srcSet="/images/about/hero_about.avif" type="image/avif" />
                                    <source srcSet="/images/about/hero_about.webp" type="image/webp" />
                                    <img
                                        src="/images/about/hero_about.webp"
                                        alt="Creative Culture"
                                        className="w-full h-full object-cover object-center grayscale"
                                    />
                                </picture>
                            </div>
                        </section>
                    </ScrollReveal>

                    {/* BLOCK 2: Creative Bros */}
                    <section className="flex flex-col lg:flex-row items-start justify-between w-full gap-12 lg:gap-8 md:pt-0 lg:pt-8">
                        <ScrollReveal className="w-full lg:w-[45%] xl:w-1/2">
                            <div>
                                <h2 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-6xl xl:text-[5rem] font-inter font-black tracking-tight whitespace-normal leading-[1.1]">
                                    <span className="whitespace-nowrap">CREATIVE BROS.</span> <br /> FOR CHANGE
                                </h2>
                                <p className="font-inter font-light text-[13px] md:text-[14px] tracking-[0.05em] uppercase mt-3 text-foreground/70">
                                    BA - SYD <span className="italic">TO</span> WORLDWIDE.
                                </p>
                            </div>
                        </ScrollReveal>
                        <div className="w-full lg:w-[55%] xl:w-1/2 flex flex-col gap-6 text-xl md:text-[1.2rem] lg:text-[1.15rem] xl:text-[1.35rem] lg:pl-16 xl:pl-20 min-[623px]:max-[1023px]:pr-[104px] text-foreground/80 md:leading-normal lg:leading-snug font-inter font-normal text-left tracking-[0.02em]">
                            <ScrollReveal delay={100}><p>Somos una agencia creativa independiente, nacida para cuestionar lo establecido.</p></ScrollReveal>
                            <ScrollReveal delay={200}><p>Acompañamos marcas que no buscan solo visibilidad, sino relevancia. Partners que entienden el valor de integrarse en la conversación y en la cultura real. Creemos en las ideas que tienen dirección y consecuencia.</p></ScrollReveal>
                            <ScrollReveal delay={300}><p>Conectamos marcas con personas a través de proyectos que tienen sentido, alma y propósito. Nos involucramos como socios creativos, entendiendo el negocio, el contexto y la tensión que rodea a cada marca. Nuestro rol no es hacer piezas; es construir storytelling.</p></ScrollReveal>
                            <ScrollReveal delay={400}><p>Nos mueve la curiosidad, la cultura y la obsesión por entender qué está pasando allá afuera. No trabajamos para llenar espacios; trabajamos para ocupar un lugar.</p></ScrollReveal>
                        </div>
                    </section>

                    {/* BLOCK 3: Workflow */}
                    <AboutWorkflow />

                </div>
            </main>
        </>
    );
};

export default AboutPage;
