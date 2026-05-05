
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Hero from '@/sections/Hero';

import WorkGrid from '@/sections/WorkGrid';
import OurClients from '@/sections/OurClients';
import InteractiveSkills from '@/sections/InteractiveSkills';
import Marquee from '@/components/custom/Marquee';

const MainAgencyHub = () => {
    const { hash } = useLocation();

    // Handle hash scrolling on mount or update
    useEffect(() => {
        if (hash) {
            const targetId = hash.substring(1);
            const element = document.getElementById(targetId);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [hash]);

    return (
        <>
            <Helmet>
                <title>Brada Agency | Creative Bros.</title>
                <meta name="description" content="We turn briefs into impact. Brada Agency transforms brands into living stories." />
            </Helmet>

            {/* Page-specific content only - Navigation and Footer are in RootLayout */}
            <Hero />

            <InteractiveSkills />

            <div className="relative left-1/2 -translate-x-1/2 w-screen max-w-none overflow-hidden pt-[50px] pb-0 md:py-4 md:-mt-12 lg:-mt-20 lg:py-2 min-[1440px]:-mt-16 min-[1440px]:py-4">
                <Marquee />
            </div>

            <WorkGrid />

            <OurClients />
        </>
    );
};

export default MainAgencyHub;
