import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import type { RefObject } from "react";
import { ANIMATION_CONFIG } from "./config";

/**
 * Global hook for animating `.reveal` elements immediately upon mount.
 * @param scopeRef - The container ref where `.reveal` elements are located.
 */
export const useReveal = (scopeRef: RefObject<HTMLElement | null>) => {
    useGSAP(
        () => {
            if (!scopeRef.current) return;

            const elements = scopeRef.current.querySelectorAll(".reveal");
            if (elements.length === 0) return;

            gsap.fromTo(
                elements,
                {
                    y: ANIMATION_CONFIG.y,
                    opacity: 0,
                    filter: `blur(${ANIMATION_CONFIG.blur})`,
                },
                {
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    duration: ANIMATION_CONFIG.duration,
                    stagger: ANIMATION_CONFIG.stagger,
                    ease: ANIMATION_CONFIG.ease,
                    clearProps: "filter",
                }
            );
        },
        { scope: scopeRef }
    );
};
