// High-performance animation utilities
// Uses CSS transforms and opacity for GPU-accelerated 60fps animations

// Stagger configuration
export interface StaggerConfig {
  delay?: number;
  staggerDelay?: number;
  duration?: number;
  easing?: string;
}

// Default animation configurations
export const defaultStagger: StaggerConfig = {
  delay: 0,
  staggerDelay: 100,
  duration: 700,
  easing: 'cubic-bezier(0.16, 1, 0.3, 1)', // Expo out
};

// Animation variants for scroll-triggered reveals
export const fadeInUp = {
  initial: {
    opacity: 0,
    transform: 'translate3d(0, 40px, 0)',
  },
  animate: {
    opacity: 1,
    transform: 'translate3d(0, 0, 0)',
  },
};

export const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export const scaleIn = {
  initial: {
    opacity: 0,
    transform: 'scale3d(0.95, 0.95, 1)',
  },
  animate: {
    opacity: 1,
    transform: 'scale3d(1, 1, 1)',
  },
};

export const slideInLeft = {
  initial: {
    opacity: 0,
    transform: 'translate3d(-60px, 0, 0)',
  },
  animate: {
    opacity: 1,
    transform: 'translate3d(0, 0, 0)',
  },
};

export const slideInRight = {
  initial: {
    opacity: 0,
    transform: 'translate3d(60px, 0, 0)',
  },
  animate: {
    opacity: 1,
    transform: 'translate3d(0, 0, 0)',
  },
};

// Parallax speeds
export const parallaxSpeeds = {
  slow: 0.1,
  medium: 0.3,
  fast: 0.5,
  extreme: 0.8,
};

// CSS class generator for animated elements
export const getAnimationClasses = (
  isVisible: boolean,
  animation: 'fadeInUp' | 'fadeIn' | 'scaleIn' | 'slideInLeft' | 'slideInRight' = 'fadeInUp'
): string => {
  const baseClasses = 'will-change-transform transition-all';
  const visibilityClass = isVisible
    ? 'opacity-100 translate-x-0 translate-y-0 scale-100'
    : 'opacity-0';

  const initialTransform = {
    fadeInUp: isVisible ? '' : 'translate-y-10',
    fadeIn: '',
    scaleIn: isVisible ? '' : 'scale-95',
    slideInLeft: isVisible ? '' : '-translate-x-16',
    slideInRight: isVisible ? '' : 'translate-x-16',
  };

  return `${baseClasses} ${visibilityClass} ${initialTransform[animation]}`;
};

// Performance-optimized scroll handler using RAF
export const createScrollHandler = (
  callback: (scrollY: number, progress: number) => void
) => {
  let rafId: number | null = null;
  let lastScrollY = -1;

  const handleScroll = () => {
    if (rafId !== null) return;

    rafId = requestAnimationFrame(() => {
      const scrollY = window.scrollY;

      if (scrollY !== lastScrollY) {
        const scrollHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollHeight > 0 ? scrollY / scrollHeight : 0;
        callback(scrollY, progress);
        lastScrollY = scrollY;
      }

      rafId = null;
    });
  };

  return { handleScroll, cleanup: () => rafId && cancelAnimationFrame(rafId) };
};

// Intersection Observer helper for scroll-triggered animations
export const createScrollObserver = (
  elements: Element[],
  callback: (entry: IntersectionObserverEntry, index: number) => void,
  options: IntersectionObserverInit = {}
) => {
  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '-50px 0px',
    ...options,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = elements.indexOf(entry.target);
        callback(entry, index);
        observer.unobserve(entry.target);
      }
    });
  }, defaultOptions);

  elements.forEach((el) => observer.observe(el));

  return observer;
};

// Spring physics for natural motion (simplified)
export const spring = (
  target: number,
  current: number,
  velocity: number,
  stiffness: number = 0.1,
  damping: number = 0.8
) => {
  const force = (target - current) * stiffness;
  const newVelocity = (velocity + force) * damping;
  const newPosition = current + newVelocity;

  return {
    position: newPosition,
    velocity: newVelocity,
    isSettled: Math.abs(newVelocity) < 0.01 && Math.abs(target - newPosition) < 0.01,
  };
};

// Easing functions
export const easings = {
  linear: (t: number) => t,
  easeInQuad: (t: number) => t * t,
  easeOutQuad: (t: number) => 1 - (1 - t) * (1 - t),
  easeInOutQuad: (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2),
  easeOutCubic: (t: number) => 1 - Math.pow(1 - t, 3),
  easeOutExpo: (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
};

// CSS for GPU acceleration
export const gpuAcceleratedStyles = {
  transform: 'translateZ(0)',
  backfaceVisibility: 'hidden' as const,
  perspective: '1000px',
};

// Reduced motion check
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};
