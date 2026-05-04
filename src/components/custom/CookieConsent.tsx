import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GA_ID = 'G-Y8JF2P7D25';

function loadGA(id: string) {
    if (document.getElementById('ga-script')) return;

    const script1 = document.createElement('script');
    script1.id = 'ga-script';
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${id}', { anonymize_ip: true });
    `;
    document.head.appendChild(script2);
}

const CookieConsent: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('brada_cookie_consent');
        if (!consent) {
            setTimeout(() => setIsVisible(true), 1500);
        } else if (consent === 'accepted') {
            loadGA(GA_ID);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('brada_cookie_consent', 'accepted');
        loadGA(GA_ID);
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.aside
                    role="dialog"
                    aria-label="Cookie consent"
                    initial={{ x: '120%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: '120%', opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed right-6 top-1/2 -translate-y-1/2 z-[200] w-[320px] bg-black text-brada-light border border-dashed border-brada-light/40 p-6 flex flex-col gap-5 rounded-lg"
                >
                    {/* Title + GIF */}
                    <div className="flex items-start justify-between gap-2">
                        <p className="font-inter font-black text-[13px] uppercase tracking-[0.08em] leading-snug">
                            OH SURPRISE!<br />WE USE COOKIES!
                        </p>
                        <img src="/assets/heart.gif" alt="" className="w-8 h-8 object-contain shrink-0" />
                    </div>

                    {/* Body */}
                    <p className="font-inter font-normal text-[12px] uppercase tracking-[0.05em] leading-relaxed text-brada-light/80">
                        Well, it's not that we use them ourselves. Google Analytics does.
                        We just wanted to know how many people visit us — so you know,
                        accept or don't.
                    </p>

                    {/* Accept button */}
                    <button
                        onClick={handleAccept}
                        className="w-full border border-brada-light/40 py-3 font-inter font-black text-[13px] uppercase tracking-[0.1em] hover:bg-brada-light hover:text-black transition-colors duration-300 cursor-pointer rounded-md"
                    >
                        Accept
                    </button>
                </motion.aside>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;