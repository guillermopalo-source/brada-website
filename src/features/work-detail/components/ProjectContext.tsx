import ScrollReveal from '@/components/custom/ScrollReveal';
import MediaRenderer from '@/components/custom/MediaRenderer';
import type { Project } from '@/lib/projects';

export default function ProjectContext({ project }: { project: Project }) {
    if (!project || !project.body) return null;

    return (
        <div className="flex flex-col md:flex-row gap-8 md:gap-32 text-left items-start w-full">
            {project.body?.text?.[0] && (
                <ScrollReveal>
                    <div className="shrink-0">
                        <h3 className="text-foreground font-inter font-bold text-sm md:text-base uppercase tracking-wider">
                            {project.body.text[0]}
                        </h3>
                    </div>
                </ScrollReveal>
            )}

            <div className="flex-1 w-full lg:w-3/4 ml-auto flex flex-col gap-6">
                {project.context?.logo && (
                    <ScrollReveal delay={100}>
                        <MediaRenderer src={project.context.logo} alt="Context Logo" className="w-32 md:w-48 h-auto object-contain mb-2" />
                    </ScrollReveal>
                )}

                {project.body?.text?.[1] && (
                    <ScrollReveal delay={100}>
                        <h4 className="text-xl md:text-2xl font-bold font-inter text-foreground">
                            {project.body.text[1]}
                        </h4>
                    </ScrollReveal>
                )}

                {project.body?.text?.[2] && (
                    <ScrollReveal delay={100}>
                        <p className="text-foreground/80 text-sm md:text-base leading-relaxed text-justify max-w-2xl whitespace-pre-line">
                            {project.body.text[2]}
                        </p>
                    </ScrollReveal>
                )}

                {project.context?.inlineImage && (
                    <ScrollReveal delay={100}>
                        <div className="my-4 w-full max-w-2xl rounded-2xl overflow-hidden">
                            <MediaRenderer src={project.context.inlineImage} alt="Context Inline" className="w-full h-auto object-cover" />
                        </div>
                    </ScrollReveal>
                )}

                {project.body?.text?.[3] && (
                    <ScrollReveal delay={100}>
                        <h4 className="text-xl md:text-2xl font-bold font-inter text-foreground mt-4">
                            {project.body.text[3]}
                        </h4>
                    </ScrollReveal>
                )}

                {project.body?.text?.[4] && (
                    <ScrollReveal delay={100}>
                        <p className="text-foreground/80 text-sm md:text-base leading-relaxed text-justify max-w-2xl whitespace-pre-line">
                            {project.body.text[4]}
                        </p>
                    </ScrollReveal>
                )}

                {project.context?.avatarImage && (
                    <ScrollReveal delay={100}>
                        <div className="mt-4 w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden">
                            <MediaRenderer src={project.context.avatarImage} alt="Avatar Image" className="w-full h-full object-cover" />
                        </div>
                    </ScrollReveal>
                )}
            </div>
        </div>
    );
}