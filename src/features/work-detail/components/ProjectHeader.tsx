export default function ProjectHeader({ project }: { project: any }) {
    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-1 px-0 gap-6 md:gap-8 text-left">
            <div className="flex-1 flex flex-col gap-1 md:gap-2">
                <h1 className="text-black dark:text-brada-light transition-colors duration-500 font-inter font-extrabold tracking-tighter uppercase">
                    <span className="page-enter block leading-none text-[1.6rem] sm:text-[2rem] md:text-[2.4rem] lg:text-[3rem] xl:text-[3.8rem] whitespace-pre-line">
                        {project.title}
                        {project.accentTitle && (
                            <span className="inline-block align-baseline normal-case font-normal ml-2 md:ml-4 font-garamond text-[1.12em] tracking-[-0.01em] leading-[0]">
                                {project.accentTitle}
                            </span>
                        )}
                    </span>
                </h1>
                <p className="page-enter text-black dark:text-brada-light/70 text-base sm:text-lg md:text-lg lg:text-base xl:text-xl max-w-4xl leading-[1.1] tracking-wide transition-colors duration-500 whitespace-pre-line">
                    {project.description}
                </p>
            </div>

            {project.headerLogo && (
                <div className={`page-enter hidden md:flex justify-end shrink-0 ${project.headerLogoClassName ?? 'h-[32px] md:h-[48px] lg:h-[60px]'}`}>
                    {project.useMask ? (
                        <div
                            className="h-full w-auto relative bg-black dark:bg-brada-light transition-colors duration-500"
                            style={{
                                WebkitMask: `url("${project.headerLogo}") no-repeat center / contain`,
                                mask: `url("${project.headerLogo}") no-repeat center / contain`
                            }}
                        >
                            <img
                                src={project.headerLogo}
                                alt=""
                                className="h-full w-auto object-contain opacity-0 pointer-events-none select-none"
                                aria-hidden="true"
                            />
                        </div>
                    ) : project.headerLogoLight ? (
                        <>
                            <img src={project.headerLogo} alt="Client Logo" className="h-full w-auto object-contain hidden dark:block" />
                            <img src={project.headerLogoLight} alt="Client Logo" className="h-full w-auto object-contain block dark:hidden" />
                        </>
                    ) : (
                        <img src={project.headerLogo} alt="Client Logo" className="h-full w-auto object-contain" />
                    )}
                </div>
            )}
        </div>
    );
}