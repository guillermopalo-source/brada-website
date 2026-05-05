import React from 'react';

interface GetInTouchLogoProps {
    className?: string;
}

const GetInTouchLogo: React.FC<GetInTouchLogoProps> = ({ className = "" }) => {
    return (
        <div className={`flex flex-col items-start leading-[1.05] ${className}`}>
            {/* "Get in" - Inter Tight Semi Bold */}
            <span className="text-brada-light [.light_&]:text-black font-inter font-semibold text-[clamp(4.5rem,14vw,8rem)] md:text-[5.5rem] lg:text-[5.2rem] xl:text-[6.5rem] tracking-normal mb-1 md:mb-2">
                Get in
            </span>

            {/* "—touch" - ITC Garamond Italic with Red Underline */}
            <div className="relative inline-block leading-none">
                <span className="text-brada-light [.light_&]:text-black font-garamond italic font-normal text-[clamp(5.2rem,16vw,9rem)] md:text-[6rem] lg:text-[6rem] xl:text-[7.5rem] tracking-normal flex items-center gap-1 md:gap-2">
                    <span className="inline-block w-8 md:w-16 h-[2.5px] md:h-[4px] bg-brada-light [.light_&]:bg-black -translate-y-[0.1em]"></span>
                    touch
                </span>

                {/* Hand-drawn Underline SVG - Moving even higher to overlap baseline more */}
                <div className="absolute bottom-[8px] md:bottom-[15px] left-4 md:left-12 w-[80%] md:w-[90%] pointer-events-none opacity-90">
                    <svg
                        viewBox="0 0 300 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-auto"
                    >
                        <path
                            d="M5 12C45 9 120 7 295 14M10 16C60 14 150 13 290 18"
                            stroke="#D12B2B"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="animate-in fade-in duration-1000"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default GetInTouchLogo;
