import { useEffect, useRef, useState } from 'react';

const Impact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3, rootMargin: '-50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="impact"
      className="relative w-full py-32 sm:py-40 lg:py-56 bg-transparent overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-brada-light/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-2 sm:px-4 lg:px-8 xl:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-brada-light font-black tracking-tighter leading-[0.9]">
            <span
              className={`block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl transition-all duration-700 ease-driftime ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: '100ms' }}
            >
              WE TURN BRIEFS
            </span>
            <span
              className={`block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mt-2 sm:mt-4 transition-all duration-700 ease-driftime ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: '200ms' }}
            >
              INTO{' '}
              <span className="relative inline-block">
                <span className="relative z-10">IMPACT.</span>
                <span
                  className={`absolute bottom-2 sm:bottom-4 left-0 h-3 sm:h-4 lg:h-6 bg-brada-light/20 -z-0 transition-all duration-500 ease-driftime ${isVisible ? 'w-full' : 'w-0'
                    }`}
                  style={{ transitionDelay: '700ms' }}
                />
              </span>
            </span>
            <span
              className={`block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl mt-2 sm:mt-4 transition-all duration-700 ease-driftime ${isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: '300ms' }}
            >
              BORN <span className="font-garamond italic font-normal tracking-normal">to</span> CHALLENGE.
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Impact;
