import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RefObject } from "react";
import { ANIMATION_CONFIG } from "./config";

gsap.registerPlugin(ScrollTrigger);

/**
 * Global hook for animating `.reveal` elements when they enter the viewport.
 * @param scopeRef - The container ref where `.reveal` elements are located.
 */
export const useScrollReveal = (scopeRef: RefObject<HTMLElement | null>) => {
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
                    scrollTrigger: {
                        trigger: scopeRef.current,
                        start: "top 85%", // Triggers when the top of the container hits 85% of the viewport height
                        toggleActions: "play none none reverse",
                    },
                }
            );
        },
        { scope: scopeRef }
    );
};
