import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RefObject } from "react";
import { ANIMATION_CONFIG } from "./config";

gsap.registerPlugin(ScrollTrigger);

/**
 * Encapsulates the horizontal scroll and Lando parallax logic for Work section.
 * @param trackRef - The moving train container ref.
 * @param horizontalSectionRef - The pinned parent container ref.
 */
export const useHorizontalScroll = (
    trackRef: RefObject<HTMLElement | null>,
    horizontalSectionRef: RefObject<HTMLElement | null>
) => {
    useGSAP(
        () => {
            const mm = gsap.matchMedia();

            mm.add("(min-width: 1024px)", () => {
                const track = trackRef.current;
                const horizontalSection = horizontalSectionRef.current;

                if (!track || !horizontalSection) return;

                // Reset position before calculating
                gsap.set(track, { x: 0 });

                const getScrollAmount = () =>
                    track.scrollWidth - horizontalSection.offsetWidth;

                // Secondary UI entrance (assuming .secondary-ui is inside horizontalSectionRef)
                gsap.fromTo(
                    ".secondary-ui",
                    { opacity: 0, y: 20 },
                    {
                        opacity: 1,
                        y: 0,
                        ease: ANIMATION_CONFIG.ease,
                        scrollTrigger: {
                            trigger: horizontalSection,
                            start: "top 80%",
                            end: "top 50%",
                            scrub: true,
                        },
                    }
                );

                // Lando projects entrance
                gsap.fromTo(
                    ".lando-entry",
                    {
                        x: 150,
                        y: 100,
                        opacity: 0
                    },
                    {
                        x: 0,
                        y: 0,
                        opacity: 1,
                        duration: ANIMATION_CONFIG.duration,
                        stagger: ANIMATION_CONFIG.stagger,
                        ease: ANIMATION_CONFIG.ease,
                        scrollTrigger: {
                            trigger: horizontalSection,
                            start: "top 70%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );

                // Horizontal moving train
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: horizontalSection,
                        start: "top top",
                        end: () => `+=${getScrollAmount()}`,
                        pin: true,
                        scrub: 1,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                    },
                });

                tl.to(track, {
                    x: () => -getScrollAmount(),
                    ease: "none",
                }, 0);

                // Parallax items (used in WorkPage)
                const parallaxItems = gsap.utils.toArray<HTMLElement>(".gsap-parallax-item");
                parallaxItems.forEach((item) => {
                    const speed = parseFloat(item.dataset.speed || "1");
                    tl.to(
                        item,
                        {
                            x: () => -300 * speed,
                            ease: "none",
                        },
                        0
                    );
                });

                // Filters Reveal (used in WorkPage)
                gsap.to(".gsap-filters-reveal", {
                    opacity: 1,
                    filter: "blur(0px)",
                    scrollTrigger: {
                        trigger: horizontalSection,
                        start: "top center",
                        end: "top top",
                        scrub: true,
                    },
                });
            });

            // Cleanup matchMedia not strictly required but good practice,
            // though useGSAP handles standard effects.
            return () => {
                mm.revert();
            };
        },
        { scope: horizontalSectionRef } // Note: scope is the container
    );
};
