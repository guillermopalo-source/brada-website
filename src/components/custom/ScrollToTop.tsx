import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenis } from 'lenis/react';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const lenis = useLenis();

    // Bloquear restauración nativa del navegador (una sola vez)
    useLayoutEffect(() => {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
    }, []);

    // Reset sincrónico en cada cambio de ruta (pre-paint)
    useLayoutEffect(() => {
        // 1. Reset nativo inmediato
        window.scrollTo(0, 0);

        // 2. Parar Lenis, forzar posición, reanudar
        if (lenis) {
            lenis.stop();
            lenis.scrollTo(0, { immediate: true, force: true });

            // Esperamos un frame para que el DOM se estabilice con el nuevo contenido
            requestAnimationFrame(() => {
                lenis.scrollTo(0, { immediate: true, force: true });
                lenis.start();
            });
        }
    }, [pathname, lenis]);

    return null;
};

export default ScrollToTop;