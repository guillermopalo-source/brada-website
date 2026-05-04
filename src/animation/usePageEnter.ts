import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type { RefObject } from "react";
import { ANIMATION_CONFIG } from "./config";

/**
 * Uniform page entrance hook for syncing global page loads (Work, About, Home).
 * Expects elements with class `.page-enter` for initial load animations.
 * @param scopeRef - The main container ref for the page.
 */
export const usePageEnter = (scopeRef: RefObject<HTMLElement | null>) => {
    useGSAP(
        () => {
            if (!scopeRef.current) return;

            const elements = scopeRef.current.querySelectorAll(".page-enter");
            if (elements.length === 0) return;

            gsap.fromTo(
                elements,
                {
                    opacity: 0,
                    y: ANIMATION_CONFIG.y,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: ANIMATION_CONFIG.duration,
                    ease: ANIMATION_CONFIG.ease,
                    stagger: ANIMATION_CONFIG.stagger,
                    clearProps: "filter",
                }
            );
        },
        { scope: scopeRef }
    );
};
