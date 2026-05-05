import { useEffect, useRef, useState } from 'react';
import GetInTouchLogo from '@/components/custom/GetInTouchLogo';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px' } // Trigger slightly earlier
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    'Branding',
    'Creative Direction',
    'Brand Experience',
    'On-site, hybrid and virtual events',
    'Film Production',
    'Photography',
    'Social Media',
    'Creative Campaigns',
    'Art Direction',
  ];

  return (
    <footer
      ref={footerRef}
      className="relative w-full pt-8 md:pt-16 lg:pt-32 xl:pt-48 pb-0 bg-transparent font-['Inter_Tight']"
    >
      <div className="w-full">

        {/* 1. Main Structure (Responsive Grid) */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-12 md:gap-x-8 lg:gap-x-0 lg:gap-y-0 transition-all duration-1000 ease-driftime ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* Column 1 (Left): Logo */}
          <div className="md:col-span-2 lg:col-span-3 xl:col-span-4 flex justify-start items-start">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="transition-opacity duration-300 focus:outline-none text-brada-light [.light_&]:text-black"
              aria-label="Back to top"
            >
              <GetInTouchLogo className="w-[85vw] md:w-auto h-auto transition-all duration-500" />
            </button>
          </div>

          {/* Column 2 (Center): Contact & Social */}
          <div className="md:col-span-1 lg:col-span-5 xl:col-span-4 flex flex-col gap-6 lg:pl-28">

            {/* Say Hello Block */}
            <div className="flex flex-col gap-2">
              <h3 className="text-[#999999] text-base lg:text-sm xl:text-base font-normal">Say Hello</h3>
              <div className="flex flex-col gap-1">

                {/* General */}
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                  <span className="text-[#999999] text-base lg:text-sm xl:text-base tracking-wider">General</span>
                  <a href="mailto:hola@brada.agency" className="group text-brada-light [.light_&]:text-black text-base lg:text-sm xl:text-base tracking-wider relative flex items-baseline gap-1 leading-[1.1] w-fit">
                    <span className="relative pb-[1px] border-b-[1.2px] border-black/20 dark:border-brada-light/50">
                      hola@brada.agency
                      {/* Thicker hover underline that appears progressively from left to right */}
                      <span className="absolute bottom-[-1.2px] left-0 w-full h-[1.3px] bg-current origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                    </span>
                    <span className="text-[1.2em] translate-y-[0.15em] transition-transform duration-300">↗</span>
                  </a>
                </div>

                {/* Join us */}
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                  <span className="text-[#999999] text-base lg:text-sm xl:text-base tracking-wider whitespace-nowrap">Join us</span>
                  <a href="mailto:people@brada.agency" className="group text-brada-light [.light_&]:text-black text-base lg:text-sm xl:text-base tracking-wider relative flex items-baseline gap-1 leading-[1.1] w-fit">
                    <span className="relative pb-[1px] border-b-[1.2px] border-black/20 dark:border-brada-light/50">
                      people@brada.agency
                      <span className="absolute bottom-[-1.2px] left-0 w-full h-[1.3px] bg-current origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                    </span>
                    <span className="text-[1.2em] translate-y-[0.15em] transition-transform duration-300">↗</span>
                  </a>
                </div>

                {/* Partnerships */}
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                  <span className="text-[#999999] text-base lg:text-sm xl:text-base tracking-wider">Partnerships</span>
                  <a href="mailto:newbusiness@brada.agency" className="group text-brada-light [.light_&]:text-black text-base lg:text-sm xl:text-base tracking-wider relative flex items-baseline gap-1 leading-[1.1] w-fit">
                    <span className="relative pb-[1px] border-b-[1.2px] border-black/20 dark:border-brada-light/50">
                      newbusiness@brada.agency
                      <span className="absolute bottom-[-1.2px] left-0 w-full h-[1.3px] bg-current origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                    </span>
                    <span className="text-[1.2em] translate-y-[0.15em] transition-transform duration-300">↗</span>
                  </a>
                </div>

              </div>
            </div>

            {/* Social Block */}
            <div className="flex flex-col gap-2">
              <h3 className="text-[#999999] text-base lg:text-sm xl:text-base font-normal">Social</h3>
              <div className="flex flex-col gap-1">
                <a href="https://www.linkedin.com/company/bradaagency/" target="_blank" rel="noopener noreferrer" className="group text-brada-light [.light_&]:text-black text-base lg:text-sm xl:text-base tracking-wider relative flex items-baseline gap-1 w-fit leading-[1.2]">
                  <span className="relative pb-[1px] border-b-[1.2px] border-black/20 dark:border-brada-light/50">
                    LinkedIn
                    <span className="absolute bottom-[-1.2px] left-0 w-full h-[1.3px] bg-current origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                  </span>
                  <span className="text-[1.2em] translate-y-[0.15em] transition-transform duration-300">↗</span>
                </a>
                <a href="https://instagram.com/brada.agency" target="_blank" rel="noopener noreferrer" className="group text-brada-light [.light_&]:text-black text-base lg:text-sm xl:text-base tracking-wider relative flex items-baseline gap-1 w-fit leading-[1.2]">
                  <span className="relative pb-[1px] border-b-[1.2px] border-black/20 dark:border-brada-light/50">
                    Instagram
                    <span className="absolute bottom-[-1.2px] left-0 w-full h-[1.3px] bg-current origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                  </span>
                  <span className="text-[1.2em] translate-y-[0.15em] transition-transform duration-300">↗</span>
                </a>
                <a href="https://www.youtube.com/@brada.agency" target="_blank" rel="noopener noreferrer" className="group text-brada-light [.light_&]:text-black text-base lg:text-sm xl:text-base tracking-wider relative flex items-baseline gap-1 w-fit leading-[1.2]">
                  <span className="relative pb-[1px] border-b-[1.2px] border-black/20 dark:border-brada-light/50">
                    YouTube
                    <span className="absolute bottom-[-1.2px] left-0 w-full h-[1.3px] bg-current origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                  </span>
                  <span className="text-[1.2em] translate-y-[0.15em] transition-transform duration-300">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 3 (Right): Our Services */}
          <div className="md:col-span-1 lg:col-span-4 flex flex-col gap-2 md:pl-8 lg:pl-16 xl:pl-28">
            <h3 className="text-[#999999] text-base lg:text-sm xl:text-base font-normal">Our Services</h3>
            <ul className="flex flex-col gap-2">
              {services.map((service, index) => (
                <li key={index} className="text-brada-light [.light_&]:text-black text-base lg:text-sm xl:text-base leading-[1.2] tracking-wider cursor-default w-fit">
                  <span className="border-b-[1.2px] border-black/20 dark:border-brada-light/50 pb-[2px]">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 2. Sub-footer (Bottom Layout) */}
        <div className={`mt-12 md:mt-32 pt-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-2 md:gap-8 transition-all duration-1000 ease-driftime delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          {/* Left: Location & Copyright */}
          <div className="flex flex-col gap-0 leading-[1.2]">
            <p className="text-[#999999] text-[13px] uppercase tracking-wide">
              BA - SYD <span className="italic font-serif">TO</span> WORLDWIDE.
            </p>
            <p className="text-[#999999] text-[13px]">
              © Copyright Brada™Agency 2026. Steal is bad karma.
            </p>
          </div>

          {/* Right: Low-carbon statement */}
          <div className="max-w-xs md:text-right">
            <p className="text-[#999999] text-[13px] leading-[1.2]">
              This website has been built following low-carbon principles of web design and development.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
