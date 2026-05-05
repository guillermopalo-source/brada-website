import React from 'react';

import { Link, useParams } from 'react-router-dom';

import { motion, AnimatePresence } from 'framer-motion';

import SecondaryBradaLogo from '@/components/custom/SecondaryBradaLogo';



interface FullScreenMenuProps {

    isOpen: boolean;

    onClose: () => void;

}



const EASE_DRIFTIME = [0.22, 1, 0.36, 1]; //



const FullScreenMenu: React.FC<FullScreenMenuProps> = ({ isOpen, onClose }) => {

    const { lang } = useParams();



    const menuItems = [

        { label: 'Home', path: `/${lang}` },

        { label: 'Work', path: `/${lang}/work` },

        { label: 'About', path: `/${lang}/about` },

        { label: 'Latest', path: `/${lang}/work/lemon-cash` },

    ];



    const subTextClass = "text-neutral-500 dark:text-neutral-400";

    const accentColor = "text-black dark:text-brada-light";



    // Animation variants matching the site's reveal style

    const overlayVariants = {

        hidden: { opacity: 0 },

        visible: {

            opacity: 1,

            transition: { duration: 0.4, ease: "easeOut" }

        },

        exit: {

            opacity: 0,

            transition: { duration: 0.4, ease: "easeIn", delay: 0.2 }

        }

    };



    const containerVariants = {

        hidden: { opacity: 0 },

        visible: {

            opacity: 1,

            transition: {

                staggerChildren: 0.08,

                delayChildren: 0.1

            }

        },

        exit: {

            opacity: 0,

            transition: {

                staggerChildren: 0.05,

                staggerDirection: -1

            }

        }

    };



    const itemVariants = {

        hidden: {

            opacity: 0,

            y: 30,

            filter: 'blur(10px)'

        },

        visible: {

            opacity: 1,

            y: 0,

            filter: 'blur(0px)',

            transition: {

                duration: 0.6,

                ease: EASE_DRIFTIME

            }

        },

        exit: {

            opacity: 0,

            y: 20,

            filter: 'blur(5px)',

            transition: {

                duration: 0.4,

                ease: "easeIn"

            }

        }

    };



    // Prevent scroll when open

    React.useEffect(() => {

        if (isOpen) {

            document.body.style.overflow = 'hidden';

        } else {

            document.body.style.overflow = '';

        }

        return () => { document.body.style.overflow = ''; };

    }, [isOpen]);



    // Handle ESC Key to close menu

    React.useEffect(() => {

        const handleKeyDown = (e: KeyboardEvent) => {

            if (e.key === 'Escape' && isOpen) onClose();

        };

        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);

    }, [isOpen, onClose]);



    return (

        <AnimatePresence>

            {isOpen && (

                <motion.div

                    initial="hidden"

                    animate="visible"

                    exit="exit"

                    variants={overlayVariants}

                    className="fixed inset-0 bg-brada-light dark:bg-black z-[50] overflow-y-auto selection:bg-black selection:text-brada-light dark:selection:bg-brada-light dark:selection:text-black text-black dark:text-brada-light transition-colors duration-500 flex flex-col"

                >

                    {/* 1. Header: LOGO + CLOSE */}

                    <div className="absolute top-0 left-0 w-full pt-[20px] px-[30px] pb-[30px] flex justify-between items-start z-50">

                        <motion.div variants={itemVariants}>
                            <Link to={`/${lang ?? ''}`} onClick={onClose} aria-label="Home">
                                <SecondaryBradaLogo className="w-32 md:w-40 h-auto object-contain transition-all duration-500 text-black dark:text-brada-light pt-2" />
                            </Link>
                        </motion.div>

                        <motion.button

                            variants={itemVariants}

                            onClick={onClose}

                            className="flex items-center justify-center cursor-pointer focus:outline-none transition-all duration-300 hover:opacity-70 mt-2"

                        >

                            <div className="flex items-center gap-2">

                                <span className="text-[16px] font-normal text-black dark:text-brada-light transition-colors duration-500 border-b-[1.2px] border-black/20 dark:border-brada-light/50 pb-[3px] leading-none">

                                    Close

                                </span>

                                <kbd className="px-[6px] py-[2px] text-[11px] font-semibold font-inter tracking-wide rounded-[4px] transition-colors duration-500 bg-black text-brada-light dark:bg-brada-light dark:text-black min-w-[28px] flex items-center justify-center border-none shadow-none">

                                    esc

                                </kbd>

                            </div>

                        </motion.button>

                    </div>



                    {/* 2. Main Content */}

                    <motion.div
                        variants={containerVariants}
                        className="flex-1 grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] lg:grid-cols-[1.1fr_0.9fr] xl:grid-cols-2 gap-[clamp(2rem,5vw,6rem)] w-full max-w-full mx-auto px-[clamp(1.5rem,4vw,4rem)] pt-24 pb-6 md:pb-8 min-h-0 content-start md:content-between"
                    >

                        {/* LEFT COLUMN: Navigation */}

                        <div className="min-w-0 flex flex-col md:gap-y-4 max-md:gap-2">

                            {menuItems.map((item) => (

                                <motion.div key={item.label} variants={itemVariants}>

                                    <Link
                                        to={item.path}
                                        onClick={() => { onClose(); window.scrollTo(0, 0); }}
                                        className="relative group cursor-pointer w-fit max-md:w-full overflow-visible"
                                    >

                                        <span className="block text-[clamp(4rem,8.5vw,10rem)] md:text-[11vw] xl:text-[clamp(4.5rem,9vw,10rem)] max-md:text-[15vw] leading-[1.02] font-inter font-black tracking-tight uppercase opacity-0 select-none pointer-events-none" aria-hidden="true">
                                            {item.label}
                                            {item.label === 'Latest' && <span className="ml-2">●</span>}
                                        </span>
                                        <span className={`absolute top-0 left-0 block text-[clamp(4rem,8.5vw,10rem)] md:text-[11vw] xl:text-[clamp(4.5rem,9vw,10rem)] max-md:text-[15vw] leading-[1.02] font-inter font-black tracking-tight uppercase transition-none group-hover:font-garamond group-hover:!font-normal group-hover:italic group-hover:normal-case max-w-full text-black dark:text-brada-light cursor-pointer ${(item.label === 'Home' || item.label === 'Work') ? 'group-hover:translate-y-[0.04em]' : ''}`}>
                                            {item.label}
                                            {item.label === 'Latest' && <span className="text-red-600 text-[1.2rem] max-md:text-[6vw] align-top ml-2">●</span>}
                                        </span>

                                    </Link>

                                </motion.div>

                            ))}

                        </div>



                        {/* RIGHT COLUMN: Services + Contact */}
                        <div className="min-w-0 flex flex-col space-y-12 max-md:space-y-4 lg:pl-12 xl:pl-40 md:pl-2 items-start text-left">

                            {/* Contact Block */}
                            <motion.div variants={itemVariants} className="space-y-1 mt-2 md:mt-0 lg:mt-0 xl:mt-8">
                                <h4 className={`text-[17px] md:text-[14px] lg:text-[16px] xl:text-[17px] max-md:text-[15px] tracking-tight mb-0 font-medium ${subTextClass}`}>Say Hello!</h4>

                                <div className="space-y-1.5 text-[15px]">

                                    {[
                                        { label: 'General', email: 'hola@brada.agency' },
                                        { label: 'Join us', email: 'people@brada.agency' },
                                        { label: 'Partnerships', email: 'newbusiness@brada.agency' }
                                    ].map((contact) => (
                                        <p key={contact.label} className="flex items-center gap-2">
                                            <span className={`${subTextClass} text-[17px] md:text-[14px] lg:text-[15px] xl:text-[17px] max-md:text-[16px]`}>{contact.label}</span>
                                            <a href={`mailto:${contact.email}`} className="relative group/email text-black dark:text-brada-light tracking-wider flex items-baseline gap-1 leading-[1.1] w-fit">
                                                <span className="relative pb-[1px] border-b-[1.2px] border-black/20 dark:border-brada-light/50 text-[15px] md:text-[12px] lg:text-[13px] xl:text-[15px] max-md:text-[15px]">
                                                    {contact.email}
                                                    <span className="absolute bottom-[-1.2px] left-0 w-full h-[1.3px] bg-current origin-left scale-x-0 group-hover/email:scale-x-100 transition-transform duration-500 ease-out" />
                                                </span>
                                                <span className="text-[17px] md:text-[14px] lg:text-[15px] xl:text-[17px] max-md:text-[15px] translate-y-[2px] opacity-100 group-hover/email:translate-x-0.5 group-hover/email:-translate-y-0.5 transition-transform duration-300">↗</span>
                                            </a>
                                        </p>
                                    ))}

                                </div>

                            </motion.div>

                             {/* Social Block */}
                            <motion.div variants={itemVariants} className="space-y-1 mt-8 max-md:mt-0">
                                <h4 className={`text-[17px] md:text-[14px] lg:text-[15px] xl:text-[17px] max-md:text-[15px] tracking-tight mb-0 font-medium ${subTextClass}`}>Social</h4>
                                <div className="flex flex-col max-[425px]:flex-row max-[425px]:flex-wrap gap-y-1.5 max-[425px]:gap-x-4 text-[15px]">
                                    {[
                                        { label: 'LinkedIn', url: 'https://www.linkedin.com/company/bradaagency/' },
                                        { label: 'Instagram', url: 'https://www.instagram.com/brada.agency/' },
                                        { label: 'YouTube', url: 'https://www.youtube.com/@brada.agency' },
                                    ].map((social) => (
                                        <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" className="relative group/social text-black dark:text-brada-light tracking-wider flex items-baseline gap-1 leading-[1.1] w-fit">
                                            <span className="relative pb-[1px] border-b-[1.2px] border-black/20 dark:border-brada-light/50 text-[15px] md:text-[12px] lg:text-[13px] xl:text-[15px] max-md:text-[15px]">
                                                {social.label}
                                                <span className="absolute bottom-[-1.2px] left-0 w-full h-[1.3px] bg-current origin-left scale-x-0 group-hover/social:scale-x-100 transition-transform duration-500 ease-out" />
                                            </span>
                                            <span className="text-[17px] md:text-[14px] lg:text-[15px] xl:text-[17px] max-md:text-[15px] translate-y-[2px] opacity-100 group-hover/social:translate-x-0.5 group-hover/social:-translate-y-0.5 transition-transform duration-300">↗</span>
                                        </a>
                                    ))}
                                </div>
                            </motion.div>


                            {/* Services Block */}
                            <motion.div variants={itemVariants} className="hidden md:block space-y-1 mt-8">
                                <h4 className={`text-[17px] md:text-[14px] lg:text-[15px] xl:text-[17px] tracking-tight mb-0 font-medium ${subTextClass}`}>Our Services</h4>
                                <ul className={`space-y-1.5 text-[17px] md:text-[13px] lg:text-[14px] xl:text-[17px] font-light leading-snug ${accentColor}`}>
                                    {['Branding', 'Creative Direction', 'Brand Experience', 'On-site, Hybrid and Virtual Events.', 'Film Production', 'Photography', 'Social Media', 'Creative Campaigns'].map((service) => (
                                        <li key={service}><span className="inline-block pb-[2px] transition-colors border-b-[1.2px] border-black/20 dark:border-brada-light/50">{service}</span></li>
                                    ))}
                                </ul>
                            </motion.div>

                        </div>



                    </motion.div>

                    {/* Internal Footer — fixed at bottom */}
                    <motion.div variants={itemVariants} className="w-full px-[clamp(1.5rem,4vw,4rem)] pb-6 text-[13px] text-neutral-500 dark:text-neutral-400 space-y-1 leading-[1.1] shrink-0">
                        <p>BA - SYD to WORLDWIDE.</p>
                        <p>© Copyright Brada™Agency 2026. Steal is bad karma.</p>
                    </motion.div>

                </motion.div>

            )}

        </AnimatePresence>

    );

};



export default FullScreenMenu;