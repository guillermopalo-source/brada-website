import ScrollReveal from '@/components/custom/ScrollReveal'
import MediaRenderer from '@/components/custom/MediaRenderer'
import GalleryInteractiveVideo from '@/components/custom/GalleryInteractiveVideo'
import type { Project, GalleryItem, GalleryImageDef } from '@/lib/projects'

export default function ProjectGallery({ project }: { project: Project }) {
    if (!project.gallery || project.gallery.length === 0) return null

    const normalizeMedia = (media: string | GalleryImageDef) => {
        if (typeof media === 'string') {
            return { src: media }
        }

        return {
            src: media.src,
            width: media.width,
            height: media.height,
            className: media.className || ''
        }
    }

    return (
        <div className="flex flex-col gap-6 md:gap-8 mb-32 md:mb-48 lg-gallery-container">
            <style>{`
                @media (min-width: 1024px) and (max-width: 1279px) {
                    .lg-centered-text-block {
                        margin-left: 2.5rem !important;
                        gap: 3.5rem !important;
                        width: calc(100% - 2rem) !important;
                    }
                    .lg-centered-text-block h3 {
                        font-size: 2.6rem !important;
                        margin-top: 10px !important;
                    }
                    .lg-centered-image-wrapper {
                        margin-left: 0 !important;
                        margin-top: 55px !important;
                        flex: 1 !important;
                    }
                    .lg-centered-image-wrapper > div {
                        max-width: 210px !important;
                    }
                    .lg-custom-img-left {
                        max-width: 520px !important;
                    }
                    .lg-custom-img-right {
                        max-width: 270px !important;
                        margin-top: 10px !important;
                    }
                    .lg-items-center {
                        align-items: center !important;
                    }
                    .lg-custom-img-up {
                        margin-top: 20px !important;
                    }
                    .lg-emy-large {
                        max-width: 380px !important;
                    }
                    .lg-lemy-body {
                        max-width: 240px !important;
                        margin-left: auto !important;
                        margin-right: auto !important;
                    }
                    .lg-lemy-video {
                        max-width: 240px !important;
                        margin-left: auto !important;
                        margin-right: auto !important;
                    }
                    .lg-bottom-section {
                        margin-top: 1rem !important;
                        margin-bottom: 0 !important;
                        gap: 1rem !important;
                    }
                    .lg-scaled-grid-8 {
                        grid-template-columns: 3fr 1fr !important;
                        gap: 3rem !important;
                    }
                    .lg-img-8-1 {
                        max-width: 90px !important;
                        margin-left: auto !important;
                        margin-right: auto !important;
                    }
                    .lg-gallery-text-block {
                        gap: 3rem !important;
                    }
                    .lg-gallery-text-block h3 {
                        font-size: 0.85rem !important;
                        white-space: nowrap !important;
                    }
                    .lg-gallery-text-block p {
                        font-size: 0.9rem !important;
                        line-height: normal !important;
                    }
                    .lg-text-wrapper {
                        max-width: 30rem !important;
                    }
                    .lg-text-row {
                        margin-top: 6rem !important;
                        margin-bottom: 6rem !important;
                        padding-top: 0 !important;
                        padding-bottom: 0 !important;
                    }
                }

                @media (max-width: 767px) {
                    .lg-custom-img-container {
                        max-width: 100% !important;
                        width: 100% !important;
                        display: flex !important;
                        justify-content: center !important;
                    }
                    .lg-custom-img-container img,
                    .lg-custom-img-container video {
                        width: 100% !important;
                        height: auto !important;
                    }
                }

                @media (min-width: 768px) and (max-width: 1023px) {
                    .lg-gallery-text-block h3 {
                        white-space: nowrap !important;
                    }
                    .lg-gallery-text-block p {
                        font-size: 0.95rem !important;
                        line-height: 1.3 !important;
                        max-width: 90% !important;
                    }
                    .lg-text-row {
                        margin-top: 6rem !important;
                        margin-bottom: 6rem !important;
                        padding-top: 0 !important;
                        padding-bottom: 0 !important;
                    }
                    .lg-gallery-text-block {
                        margin-top: 0 !important;
                        margin-bottom: 0 !important;
                        padding-top: 2rem !important;
                        padding-bottom: 2rem !important;
                    }
                    .lg-centered-text-block {
                        margin-top: 20px !important;
                        margin-bottom: 20px !important;
                        justify-content: center !important;
                        text-align: center !important;
                    }
                    .lg-centered-text-block h3 {
                        font-size: 3rem !important;
                        text-align: center !important;
                        margin: -80px auto 0 !important;
                        width: 100% !important;
                    }
                    .lg-centered-image-wrapper {
                        margin: 0 auto !important;
                        justify-content: center !important;
                    }
                    .lg-centered-image-wrapper > div {
                        max-width: 220px !important;
                        margin: 0 auto !important;
                    }
                    .lg-img-8-0,
                    .lg-custom-img-left, .lg-custom-img-right,
                    .lg-custom-img-container {
                        margin: 0 auto !important;
                        display: block !important;
                        width: auto !important;
                        max-width: 100% !important;
                    }
                    .lg-img-8-1 {
                        margin: 0 auto !important;
                        display: block !important;
                        width: auto !important;
                        max-width: 80px !important;
                    }
                    .lg-generic-custom-grid {
                        grid-template-columns: 1fr 1fr !important;
                        justify-items: center !important;
                        align-items: center !important;
                        gap: 2rem !important;
                        width: 100% !important;
                    }
                    .lg-generic-custom-grid > div {
                        margin: 0 auto !important;
                        transform: none !important;
                    }
                    .lg-generic-custom-grid .lg-custom-img-container {
                        margin: 0 auto !important;
                        width: 100% !important;
                        max-width: 280px !important;
                    }
                    .lg-generic-custom-grid img, .lg-generic-custom-grid video {
                        margin: 0 !important;
                    }
                    
                    .lg-scaled-grid-8 {
                        grid-template-columns: 2.5fr 1fr !important;
                        justify-items: center !important;
                        align-items: center !important;
                        gap: 2rem !important;
                        width: 100% !important;
                    }
                    .lg-scaled-grid-8 .lg-img-8-0 .lg-custom-img-container {
                        max-width: 100% !important;
                    }
                    .lg-custom-grid-2,
                    .lg-custom-grid-7 {
                        grid-template-columns: 1fr 1fr !important;
                        justify-items: center !important;
                        align-items: center !important;
                        gap: 2rem !important;
                        width: 100% !important;
                    }
                    .lg-custom-grid-7 .lg-custom-img-container {
                        max-width: 280px !important;
                        width: 100% !important;
                    }
                    .lg-custom-grid-2 .lg-custom-img-container {
                        max-width: 280px !important;
                        width: 100% !important;
                        aspect-ratio: 1 / 1 !important;
                    }
                    .lg-custom-grid-2 > div,
                    .lg-custom-grid-7 > div {
                        margin-top: 0 !important;
                        margin-bottom: 0 !important;
                    }
                    .lg-custom-grid-2 img, .lg-custom-grid-2 video {
                        margin-top: 0 !important;
                        margin-bottom: 0 !important;
                        width: 100% !important;
                        height: 100% !important;
                        object-fit: cover !important;
                    }
                    .lg-custom-grid-7 img, .lg-custom-grid-7 video {
                        margin-top: 0 !important;
                        margin-bottom: 0 !important;
                    }
                    .lg-bottom-section {
                        align-items: center !important;
                        justify-items: center !important;
                    }
                    .lg-bottom-section .lg-custom-img-container {
                        max-width: 240px !important;
                        width: 100% !important;
                    }
                    .lg-lemy-body, .lg-lemy-video {
                        margin-left: auto !important;
                        margin-right: auto !important;
                        margin-top: 0 !important;
                    }
                    .converse-overlay-text {
                        left: calc(50% + 1rem) !important;
                        width: calc(50% - 1rem) !important;
                        transform: none !important;
                        display: flex !important;
                        justify-content: center !important;
                        top: auto !important;
                        bottom: -3rem !important;
                    }
                    .converse-grid-bottom {
                        align-items: center !important;
                    }
                    .converse-img-8 .lg-custom-img-container {
                        max-width: 340px !important;
                    }
                    .lg-generic-custom-grid > div.converse-img-2 {
                        transform: translateY(2rem) !important;
                    }
                    .maxibon-overlay-text {
                        left: calc(50% + 1rem) !important;
                        width: calc(50% - 1rem) !important;
                        transform: none !important;
                        display: flex !important;
                        justify-content: center !important;
                    }
                    .maxibon-img-2 .lg-custom-img-container,
                    .maxibon-img-4 .lg-custom-img-container,
                    .maxibon-img-5 .lg-custom-img-container {
                        max-width: 320px !important;
                    }
                    .maxibon-grid-bottom {
                        align-items: center !important;
                    }
                    .ba-img-1 .lg-custom-img-container,
                    .ba-img-5 .lg-custom-img-container {
                        max-width: 320px !important;
                    }
                    .ba-grid-top, .ba-grid-bottom {
                        align-items: center !important;
                    }
                    .cashapp-img-4 .lg-custom-img-container,
                    .cashapp-img-5 .lg-custom-img-container {
                        max-width: 340px !important;
                    }
                    .cashapp-grid {
                        align-items: center !important;
                    }
                    .itau-img-1 .lg-custom-img-container,
                    .itau-img-2 .lg-custom-img-container,
                    .itau-img-4 .lg-custom-img-container,
                    .itau-img-5 .lg-custom-img-container,
                    .itau-img-6 .lg-custom-img-container,
                    .itau-img-7 .lg-custom-img-container {
                        max-width: 330px !important;
                    }
                    .itau-overlay-text {
                        left: calc(50% + 1rem) !important;
                        width: calc(50% - 1rem) !important;
                        transform: none !important;
                        display: flex !important;
                        justify-content: center !important;
                    }
                    .itau-grid-1, .itau-grid-2 {
                        align-items: center !important;
                    }
                    .lg-gallery-container > div,
                    .lg-gallery-container > div > div {
                        margin-bottom: 0 !important;
                    }
                    .lg-gallery-container > div:last-child,
                    .lg-gallery-container > div:last-child > div {
                        margin-bottom: 0 !important;
                        padding-bottom: 0 !important;
                    }
                }
            `}</style>

            {project.gallery.map((row: GalleryItem, index: number) => {

                return (
                    <div key={index} className="w-full">

                        {/* FULL WIDTH */}
                        {row.type === 'full' && typeof row.src === 'string' && (
                            <div className={row.className}>
                                <ScrollReveal>
                                    <div className={`w-full overflow-hidden ${row.bg ?? 'bg-black'} ${row.aspect || 'aspect-video'}`}>
                                        <MediaRenderer
                                            src={row.src}
                                            alt={`Gallery row ${index}`}
                                        />
                                    </div>
                                </ScrollReveal>
                            </div>
                        )}

                        {/* INTERACTIVE VIDEO */}
                        {row.type === 'interactive-video' && typeof row.src === 'string' && (
                            <div className="w-full">
                                <GalleryInteractiveVideo 
                                    src={row.src} 
                                    thumb={row.thumb} 
                                    loop={row.loop} 
                                    aspect={row.aspect || 'aspect-[16/9]'} 
                                />
                            </div>
                        )}

                        {/* HALF GRID */}
                        {row.type === 'half' && Array.isArray(row.src) && (
                            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${row.className || ''}`}>
                                {row.src.map((media, i) => {

                                    const item = normalizeMedia(media)

                                    return (
                                        <ScrollReveal key={i} delay={i * 200}>
                                            <div className={`${row.aspect || 'aspect-video'} overflow-hidden bg-black`}>
                                                <MediaRenderer
                                                    src={item.src}
                                                    alt={`Gallery ${index}-${i}`}
                                                />
                                            </div>
                                        </ScrollReveal>
                                    )
                                })}
                            </div>
                        )}

                        {/* CUSTOM LAYOUT */}
                        {row.type === 'custom' && Array.isArray(row.src) && (
                            <div className={`grid auto-flow-col relative lg-generic-custom-grid ${row.className || ''}`}>
                                {row.src.map((media, i) => {

                                    const item = normalizeMedia(media)

                                    return (
                                        <ScrollReveal key={i} delay={i * 200} className={item.className}>
                                            <div
                                                className="overflow-hidden bg-transparent flex-shrink-0 lg-custom-img-container"
                                                style={{
                                                    maxWidth: item.width ? `${item.width}px` : undefined,
                                                    aspectRatio: item.width && item.height
                                                        ? `${item.width} / ${item.height}`
                                                        : undefined
                                                }}
                                            >
                                                <MediaRenderer
                                                    src={item.src}
                                                    alt={`Gallery custom ${index}-${i}`}
                                                />
                                            </div>
                                        </ScrollReveal>
                                    )
                                })}
                                {row.overlayText && (
                                    <div className={row.overlayClassName || 'absolute inset-0 flex items-center justify-center z-10'}>
                                        <h3
                                            className={`text-foreground whitespace-pre-line ${row.overlayTextClassName || ''}`}
                                            style={{
                                                fontFamily: "'Covered By Your Grace', cursive",
                                                fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                                                lineHeight: '0.9'
                                            }}
                                        >
                                            {row.overlayText}
                                        </h3>
                                    </div>
                                )}
                                <style>{`
                                    .lg-custom-grid-7 img {
                                        height: 100% !important;
                                        object-fit: cover !important;
                                    }
                                    .lg-custom-grid-7 .lg-custom-img-container {
                                        display: flex;
                                        align-items: stretch;
                                    }
                                `}</style>
                            </div>
                        )}

                        {/* TEXT BLOCK */}
                        {row.type === 'text' && (
                            row.variant === 'centered' ? (

                                <div className={`flex flex-col md:flex-row gap-8 md:gap-20 text-left md:my-8 items-center w-full lg-centered-text-block lg-text-row ${row.className || ''}`}>
                                    <ScrollReveal>
                                        <div className="shrink-0 w-full md:w-auto flex flex-col justify-center">
                                            <h3
                                                className={`text-foreground text-center md:text-left whitespace-pre-line ${row.titleClassName || ''}`}
                                                style={{
                                                    fontFamily: "'Covered By Your Grace', cursive",
                                                    fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                                                    lineHeight: '0.9'
                                                }}
                                            >
                                                {row.title}
                                            </h3>
                                        </div>
                                    </ScrollReveal>

                                    {typeof row.src === 'string' && (
                                        <ScrollReveal
                                            delay={100}
                                            className="flex-1 w-full lg:w-1/2 ml-auto flex justify-center items-center lg-centered-image-wrapper"
                                        >
                                            <div className="w-full max-w-[280px]">
                                                <MediaRenderer
                                                    src={row.src}
                                                    alt="Inline image"
                                                    className={`w-full h-auto object-contain ${row.imageClassName || ''}`}
                                                />
                                            </div>
                                        </ScrollReveal>
                                    )}

                                </div>

                            ) : (

                                <div className={`flex flex-col md:flex-row gap-2 md:gap-24 md:py-12 items-start w-full lg-gallery-text-block lg-text-row ${row.className || ''}`}>
                                    <ScrollReveal>
                                        <div className="shrink-0">
                                            <h3 className={`text-foreground font-inter font-bold text-sm md:text-base uppercase tracking-wider ${row.titleClassName || ''}`}>
                                                {row.title}
                                            </h3>
                                        </div>
                                    </ScrollReveal>

                                    {row.text && (
                                        <ScrollReveal delay={100} className="max-w-2xl lg-text-wrapper">
                                            <p className="text-foreground/80 text-sm md:text-base leading-normal text-left">
                                                {row.text}
                                            </p>
                                        </ScrollReveal>
                                    )}

                                </div>

                            )
                        )}

                    </div>
                )

            })}

        </div>
    )
}