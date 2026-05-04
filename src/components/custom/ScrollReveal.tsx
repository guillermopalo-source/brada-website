import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    threshold?: number;
    delay?: number;
    start?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    className = '',
    delay = 0,
    start = 'top 92%'
}) => {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!ref.current) return;

        gsap.from(ref.current, {
            opacity: 0,
            y: 20,
            scale: 0.98,
            duration: 0.6,
            delay: delay / 1000,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: ref.current,
                start: start,
                once: true,
            },
        });
    }, { scope: ref });

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
};

export default ScrollReveal;
