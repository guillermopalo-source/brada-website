import { forwardRef } from 'react';

export interface MediaRendererProps {
    src: string;
    alt?: string;
    className?: string;
    style?: React.CSSProperties;
}

/**
 * MediaRenderer: 
 * - Automágicamente gestiona formatos modernos (AVIF, WebP, WebM).
 * - Soporta densidades x1/x2 si la ruta termina en '_1x'.
 * - Prioriza WebM sobre MP4 para videos.
 */
const MediaRenderer = forwardRef<HTMLImageElement | HTMLVideoElement, MediaRendererProps>(
    ({ src, alt = "", className = "w-full h-full object-cover", style }, ref) => {

        // 1. GESTIÓN DE VIDEOS (.mp4, .webm)
        if (src.endsWith(".mp4") || src.endsWith(".webm")) {
            const base = src.replace(/\.(mp4|webm)$/, "");
            return (
                <video
                    ref={ref as React.Ref<HTMLVideoElement>}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className={className}
                    style={style}
                >
                    <source src={`${base}.webm`} type="video/webm" />
                    <source src={`${base}.mp4`} type="video/mp4" />
                </video>
            );
        }

        // 2. GESTIÓN DE IMÁGENES
        const hasExtension = /\.\w{2,5}$/.test(src);

        // Si no tiene extensión, asumimos que viene de projects.ts y buscamos AVIF/WebP con soporte Retina
        if (!hasExtension) {
            // Buscamos el patrón '_1x' en cualquier parte del string (ej: '_1x', '_1x_h', '_1x_v')
            const retinaPattern = /_1x/;
            const isRetinaReady = retinaPattern.test(src);

            const generateSrcSet = (ext: string) => {
                if (isRetinaReady) {
                    const src2x = src.replace(retinaPattern, '_2x');
                    return `${src}.${ext} 1x, ${src2x}.${ext} 2x`;
                }
                return `${src}.${ext}`;
            };

            return (
                <picture style={{ display: 'contents' }}>
                    <source srcSet={generateSrcSet("avif")} type="image/avif" />
                    <source srcSet={generateSrcSet("webp")} type="image/webp" />
                    <img
                        ref={ref as React.Ref<HTMLImageElement>}
                        src={`${src}.avif`} // Fallback
                        alt={alt}
                        loading="lazy"
                        decoding="async"
                        className={className}
                        style={style}
                    />
                </picture>
            );
        }

        // 3. IMÁGENES CON EXTENSIÓN EXPLÍCITA (Legacy o externas)
        return (
            <img
                ref={ref as React.Ref<HTMLImageElement>}
                src={src}
                alt={alt}
                loading="lazy"
                decoding="async"
                className={className}
                style={style}
            />
        );
    }
);

MediaRenderer.displayName = 'MediaRenderer';

export default MediaRenderer;