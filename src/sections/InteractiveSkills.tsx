import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollReveal from '@/components/custom/ScrollReveal';
import AsteriscoSkillsImg from '@/assets/skills_img/asterico_skills.svg';
import BrandingTitleImg from '@/assets/skills_img/branding_title.gif';
import ExperienceTitleImg from '@/assets/skills_img/skills_experience-1_1x.png';
import ContentTitleImg from '@/assets/skills_img/skills_content.png';
import SocialTitleImg from '@/assets/skills_img/skills_social.png';

const titleImages: Record<string, string> = {
    BRANDING: BrandingTitleImg,
    EXPERIENCE: ExperienceTitleImg,
    CONTENT: ContentTitleImg,
    SOCIAL: SocialTitleImg,
};

type SkillContent = {
    title: string;
    list: string[];
};

const skillsData: Record<string, SkillContent> = {
    BRANDING: {
        title: 'BRANDING',
        list: [
            'Strategy',
            'Corporate Design',
            'Logo Design',
            'Identity & Naming',
            'Campaings 360',
            'Creative Direction'
        ],
    },
    EXPERIENCE: {
        title: 'EXPERIENCE',
        list: [
            'Experience 360°',
            'Storytelling',
            'On-site, hybrid & virtual events',
            'BTL Experiences',
            'Activations',
            'Team Building',
            'Internal Marketing'
        ],
    },
    CONTENT: {
        title: 'CONTENT',
        list: [
            'Direction',
            'Film Production',
            'Photography',
            'Color & Edit',
            'Motion Design & 3D',
            'Photoshoot'
        ],
    },
    SOCIAL: {
        title: 'SOCIAL',
        list: [
            'Strategy',
            'Consulting',
            'Creative Campaigns',
            'Art Direction',
            'Key Visual System',
            'Copywriting'
        ],
    }
};

const InteractiveSkills = () => {
    const [hoveredSkill, setHoveredSkill] = useState<string>('BRANDING');
    const sectionRef = useRef<HTMLDivElement>(null);
    const svgRef = useRef<SVGSVGElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    // GSAP Setup
    if (typeof window !== "undefined") {
        gsap.registerPlugin(ScrollTrigger, useGSAP);
    }

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%", // Triggers animation when section crosses 75% of viewport height
                once: true // Ensures it only animates once
            }
        });

        if (svgRef.current) {
            // Animate the strokeDashoffset from 1000 to 0 to "draw" the line
            tl.to(svgRef.current, {
                strokeDashoffset: 0,
                duration: 0.6,
                ease: "power2.out"
            }, 0);
        }

        if (lineRef.current) {
            tl.fromTo(lineRef.current, { scaleX: 0 }, {
                scaleX: 1,
                duration: 0.5,
                ease: "power2.out"
            }, 0.05); // Starts drawing slightly after the squiggles
        }
    }, { scope: sectionRef });

    const handleMouseEnter = (skillTitle: string) => {
        setHoveredSkill(skillTitle);
    };

    return (
        <section ref={sectionRef} id="interactive-skills" className="w-full pt-0 pb-8 lg:pb-20 bg-transparent overflow-hidden mt-12 md:-mt-48 lg:-mt-64 relative z-30">
            <div className="w-full max-w-[1600px] mx-auto">

                {/* Header Section */}
                <div className="mb-4 lg:mb-16 px-4 sm:px-8 lg:px-14 xl:px-16 relative w-full">
                    <div className="relative w-full z-10 transition-transform lg:-ml-12">
                        <div className="relative inline-block items-start justify-center">
                            <h2
                                className="text-foreground dark:text-[#fcfbed] text-[3.5rem] sm:text-[4.5rem] lg:text-[5rem] xl:text-[6rem] uppercase leading-none z-10 relative"
                                style={{ fontFamily: "'Covered By Your Grace', cursive" }}
                            >
                                SKILLS SET
                            </h2>
                            {/* Animated Underline (Squiggles) */}
                            <svg
                                ref={svgRef}
                                className="skills-underline absolute -bottom-1 sm:-bottom-2 lg:-bottom-3 left-0 w-[110%] h-auto z-20 pointer-events-none"
                                viewBox="0 0 400 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ strokeDasharray: '1000', strokeDashoffset: '1000' }}
                            >
                                <path
                                    d="M5 15 Q 100 5, 200 12 T 395 10 M10 22 Q 150 12, 250 18 T 390 25 M2 18 Q 50 10, 150 15 T 250 20"
                                    stroke="#e3ff00"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                        {/* Animated Long Line (Spans strictly to the right edge) */}
                        <div
                            ref={lineRef}
                            className="absolute -bottom-0 lg:-bottom-[6px] left-0 w-full lg:w-[calc(100%+3rem)] h-[3px] sm:h-[4px] bg-[#e3ff00] rounded-full origin-left z-0 pointer-events-none"
                        />
                    </div>
                </div>

                {/* ENVOLVEMOS TODO EL BLOQUE PRINCIPAL EN UN SCROLLREVEAL */}
                <ScrollReveal delay={200}> {/* <-- Agregamos un delay sutil para que entre después del título */}
                    {/* Main Interactive Layout: Responsive cols */}
                    <div className="flex flex-col md:flex-row items-start justify-between w-full relative px-4 sm:px-8 lg:px-14 xl:px-16 gap-12 lg:gap-0 mt-2 md:mt-8">

                        {/* Left Column: Titles */}
                        <div className="w-full md:w-1/2 lg:w-[40%] flex flex-col gap-4 lg:gap-4 z-10 lg:-ml-12">
                            {Object.values(skillsData).map((skill) => (
                                <div key={skill.title} className="flex flex-col">
                                    <div
                                        className="relative flex items-center cursor-pointer group w-fit"
                                        onMouseEnter={() => handleMouseEnter(skill.title)}
                                    >
                                        <h3 className={`text-[13vw] md:text-[3rem] lg:text-[3.4rem] min-[1040px]:text-[3.8rem] xl:text-[4.25rem] font-inter font-black leading-none uppercase tracking-[0.01em] transition-colors duration-300 text-foreground dark:text-[#fcfbed]`}>
                                            {skill.title}
                                        </h3>

                                        {/* Asterisk converted to an image asset */}
                                        <div className={`absolute -right-[28px] lg:-right-[36px] xl:-right-[40px] top-1/2 -translate-y-1/2 transition-transform duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] pointer-events-none ${hoveredSkill === skill.title ? 'opacity-100' : 'opacity-0'}`}
                                        >
                                            <img
                                                src={AsteriscoSkillsImg}
                                                alt="*"
                                                className="h-6 lg:h-[34px] xl:h-10 w-auto"
                                            />
                                        </div>
                                    </div>

                                    {/* Mobile Accordion List (< 768px) */}
                                    <div className={`grid transition-all duration-500 ease-in-out md:hidden ${hoveredSkill === skill.title ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                                        <div className="overflow-hidden">
                                            <ul className="flex flex-col gap-1 pb-4">
                                                {skill.list.map((item, idx) => (
                                                    <li key={idx} className="text-foreground dark:text-[#fcfbed] font-normal opacity-70 text-[0.95rem] tracking-[0.05em] whitespace-nowrap leading-tight" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Center Column: Dynamic List */}
                        <div className="hidden lg:block w-full lg:w-[25%] relative min-h-[400px] lg:ml-14 xl:ml-8 lg:pl-0 lg:mt-0">
                            {Object.values(skillsData).map((skill) => (
                                <ul
                                    key={`list-${skill.title}`}
                                    className={`absolute left-0 top-0 w-full flex flex-col gap-1 transition-all duration-150 ease-in-out
                                        ${hoveredSkill === skill.title
                                            ? 'opacity-100 blur-0 pointer-events-auto'
                                            : 'opacity-0 blur-md pointer-events-none'
                                        }
                                    `}
                                >
                                    {skill.list.map((item, idx) => (
                                        <li key={idx} className="text-foreground dark:text-[#fcfbed] font-normal opacity-80 text-sm lg:text-[0.82rem] min-[1040px]:text-[0.9rem] xl:text-base tracking-[0.05em] whitespace-nowrap lg:-mb-1" style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400, lineHeight: 1.3 }}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            ))}
                        </div>

                        {/* Right Column: Image Reveal (Tablet & Desktop) */}
                        <div className="w-full md:w-1/2 lg:w-[30%] flex-col items-start lg:items-end justify-start mt-0 pt-0 hidden md:flex">
                            <div className="relative w-full max-w-[320px] lg:max-w-[420px] aspect-[400/210] mt-0 overflow-hidden">
                                {Object.values(skillsData).map((skill) => (
                                    <img
                                        key={`img-${skill.title}`}
                                        src={titleImages[skill.title]}
                                        alt={skill.title}
                                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] ${hoveredSkill === skill.title ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-full scale-95'}`}
                                    />
                                ))}
                            </div>

                            {/* Tablet Text Block (768px - 1023px) */}
                            <div className="hidden md:block lg:hidden relative min-h-[250px] w-full mt-6">
                                {Object.values(skillsData).map((skill) => (
                                    <ul
                                        key={`tablet-list-${skill.title}`}
                                        className={`absolute left-0 top-0 w-full flex flex-col gap-1 transition-opacity duration-300 ease-in-out
                                            ${hoveredSkill === skill.title ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'}
                                        `}
                                    >
                                        {skill.list.map((item, idx) => (
                                            <li key={idx} className="text-foreground dark:text-[#fcfbed] font-normal opacity-80 text-base tracking-[0.05em] whitespace-nowrap leading-none" style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                ))}
                            </div>
                        </div>

                    </div>
                </ScrollReveal> {/* <-- Cerramos el ScrollReveal que envuelve la grilla */}
            </div>
        </section>
    );
};

export default InteractiveSkills;