export interface MediaRendererProps {
    src: string;
    alt?: string;
    className?: string;
}

// Detecta el tipo de asset por extensión o ausencia de ella:
//   .mp4 / .webm  → video inline (gallery, no audio)
//   sin extensión → <picture> avif → webp (rutas de projects.ts)
//   .avif / .webp / .jpg / .png / .gif → <img> directo

export default function MediaRenderer({
    src,
    alt = "",
    className = "w-full h-full object-cover",
}: MediaRendererProps) {

    // Video inline — gallery half video sin audio
    if (src.endsWith(".mp4") || src.endsWith(".webm")) {
        return (
            <video
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                className={className}
            >
                <source src={src.replace(/\.mp4$/, ".webm").replace(/\.webm$/, ".webm")} type="video/webm" />
                <source src={src.replace(/\.webm$/, ".mp4").replace(/\.mp4$/, ".mp4")} type="video/mp4" />
            </video>
        );
    }

    // Sin extensión → ruta de projects.ts → <picture> avif → webp
    const hasExtension = /\.\w{2,5}$/.test(src);
    if (!hasExtension) {
        return (
            <picture style={{ display: 'contents' }}>
                <source srcSet={`${src}.avif`} type="image/avif" />
                <source srcSet={`${src}.webp`} type="image/webp" />
                <img
                    src={`${src}.avif`}
                    alt={alt}
                    loading="lazy"
                    decoding="async"
                    className={className}
                />
            </picture>
        );
    }

    // Extensión explícita — img directo
    return (
        <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            className={className}
        />
    );
}