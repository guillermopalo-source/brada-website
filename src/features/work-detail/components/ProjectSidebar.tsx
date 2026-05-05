import ScrollReveal from '@/components/custom/ScrollReveal';

export default function ProjectSidebar({ project }: { project: any }) {
    if (!project) return null;
    return (
        <div className="flex flex-col gap-6 md:gap-8 bg-transparent text-left py-12 lg:py-0 lg-sidebar-content">
            <style>{`
                @media (min-width: 1024px) and (max-width: 1279px) {
                    .lg-sidebar-content {
                        gap: 22px !important;
                    }
                    .lg-sidebar-content h2 { font-size: 1.05rem !important; }
                    .lg-sidebar-content p, 
                    .lg-sidebar-content span:not(.tag-item) { font-size: 0.85rem !important; }
                    .lg-sidebar-content h3 { font-size: 1.25rem !important; }
                    .lg-sidebar-content .tag-item { 
                        font-size: 10.5px !important; 
                        padding: 5px 9px !important;
                    }
                }

                @media (min-width: 768px) and (max-width: 1023px) {
                    .lg-sidebar-content p,
                    .lg-sidebar-content h2,
                    .lg-sidebar-content h3 {
                        max-width: 80% !important;
                    }
                }
            `}</style>
            {/* Logo */}
            {project.sidebar?.logo && (
                <ScrollReveal>
                    {project.useMask ? (
                        <div
                            className={`${project.sidebar.logoClassName ?? 'w-[80px] md:w-[100px]'} h-auto relative bg-black dark:bg-brada-light transition-colors duration-500`}
                            style={{
                                WebkitMask: `url("${project.sidebar.logo}") no-repeat left center / contain`,
                                mask: `url("${project.sidebar.logo}") no-repeat left center / contain`
                            }}
                        >
                            {/* Ghost image to preserve proportions */}
                            <img
                                src={project.sidebar.logo}
                                alt=""
                                className="w-full h-auto object-contain object-left opacity-0 pointer-events-none select-none"
                                aria-hidden="true"
                            />
                        </div>
                    ) : project.sidebar.logoLight ? (
                        <>
                            {/* Dark mode logo */}
                            <img
                                src={project.sidebar.logo}
                                alt="Client Logo"
                                className={`${project.sidebar.logoClassName ?? 'w-[80px] md:w-[100px]'} h-auto object-contain object-left hidden dark:block`}
                            />
                            {/* Light mode logo */}
                            <img
                                src={project.sidebar.logoLight}
                                alt="Client Logo"
                                className={`${project.sidebar.logoClassName ?? 'w-[80px] md:w-[100px]'} h-auto object-contain object-left block dark:hidden`}
                            />
                        </>
                    ) : (
                        <img
                            src={project.sidebar.logo}
                            alt="Client Logo"
                            className={`${project.sidebar.logoClassName ?? 'w-[80px] md:w-[100px]'} h-auto object-contain object-left`}
                        />
                    )}
                </ScrollReveal>
            )}
            {project.sidebar?.title && (
                <ScrollReveal delay={50}>
                    <h2 className="text-lg -mt-3 md:text-l font-semibold text-foreground">
                        {project.sidebar.title}
                    </h2>
                </ScrollReveal>
            )}
            {/* Project */}
            {project.sidebar?.project && (
                <ScrollReveal delay={100}>
                    <div className="flex flex-col gap-1.5">
                        <span className="text-foreground font-medium text-sm md:text-base tracking-wide border-b border-foreground/30 pb-1 w-fit mb-1">
                            Claim
                        </span>
                        <p className="text-foreground/80 font-inter text-sm md:text-base font-medium">
                            {project.sidebar.project}
                        </p>
                    </div>
                </ScrollReveal>
            )}

            {/* Campaign */}
            {project.sidebar?.campaign && (
                <ScrollReveal delay={200}>
                    <div className="flex flex-col gap-1.5">
                        <span className="text-foreground font-medium text-sm md:text-base tracking-wide border-b border-foreground/30 pb-1 w-fit mb-1">
                            Campaign
                        </span>
                        <h3 className="text-foreground font-inter font-bold text-xl md:text-2xl leading-tight">
                            {project.sidebar.campaign}
                        </h3>
                    </div>
                </ScrollReveal>
            )}

            {/* Brief */}
            {project.sidebar?.brief && (
                <ScrollReveal delay={300}>
                    <div className="flex flex-col gap-1.5">
                        <span className="text-foreground font-medium text-sm md:text-base tracking-wide border-b border-foreground/30 pb-1 w-fit mb-1">
                            Project brief
                        </span>
                        <p className="text-foreground/70 text-sm md:text-[0.95rem] leading-normal">
                            {project.sidebar.brief}
                        </p>
                    </div>
                </ScrollReveal>
            )}

            {/* Overview */}
            {project.sidebar?.overview && (
                <ScrollReveal delay={400}>
                    <div className="flex flex-col gap-1.5">
                        <span className="text-foreground font-medium text-sm md:text-base tracking-wide border-b border-foreground/30 pb-1 w-fit mb-1">
                            Overview
                        </span>
                        <p className="text-foreground/70 text-sm md:text-[0.95rem] leading-normal">
                            {project.sidebar.overview}
                        </p>
                    </div>
                </ScrollReveal>
            )}

            {/* Tags */}
            {project.sidebar?.tags && (
                <ScrollReveal delay={500}>
                    <div className="flex flex-col gap-2">
                        <span className="text-foreground font-medium text-sm md:text-base tracking-wide border-b border-foreground/30 pb-1 w-fit mb-1">
                            Tags
                        </span>

                        <div className="flex flex-wrap gap-2">
                            {project.sidebar.tags.map((tag: string, index: number) => (
                                <span
                                    key={index}
                                    className="px-3 py-1.5 border border-foreground/30 rounded-lg text-[10px] sm:text-xs text-foreground/80 uppercase tracking-widest leading-none tag-item"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                    </div>
                </ScrollReveal>
            )}
        </div>
    );
}