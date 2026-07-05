import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*';

function ScrambleText({ text, start = false, delay = 0 }) {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        if (!start) return;
        
        let isMounted = true;
        let iteration = 0;
        let interval = null;
        let timeoutId = null;

        const run = () => {
            interval = setInterval(() => {
                if (!isMounted) return;

                setDisplayText(
                    text
                        .split('')
                        .map((char, index) => {
                            if (index < iteration) {
                                return text[index];
                            }
                            if (char === ' ' || char === '-' || char === '—') return char;
                            return chars[Math.floor(Math.random() * chars.length)];
                        })
                        .join('')
                );

                if (iteration >= text.length) {
                    clearInterval(interval);
                }

                iteration += 1/3;
            }, 30);
        };

        if (delay > 0) {
            timeoutId = setTimeout(run, delay);
        } else {
            run();
        }

        return () => {
            if (interval) clearInterval(interval);
            if (timeoutId) clearTimeout(timeoutId);
            isMounted = false;
        };
    }, [text, start, delay]);

    return <span>{displayText}</span>;
}

export default function LoadingScreen() {
    const location = useLocation();
    const [hasEntered, setHasEntered] = useState(() => {
        return sessionStorage.getItem('portfolio_entered') === 'true';
    });
    const [isInitialLoading, setIsInitialLoading] = useState(!hasEntered);
    const [isTransitionLoading, setIsTransitionLoading] = useState(false);
    const [scrambleStart, setScrambleStart] = useState(false);

    // Track the initial mount/entry to skip transition loader on first paint
    const isFirstEntry = useRef(true);

    // Start scramble animation on mount if not entered yet
    useEffect(() => {
        if (!hasEntered) {
            const timer = setTimeout(() => {
                setScrambleStart(true);
            }, 400);
            return () => clearTimeout(timer);
        }
    }, [hasEntered]);

    // Handle Route Change Transitions
    useEffect(() => {
        if (!hasEntered) return;

        // Skip transition on initial entry or initial mount
        if (isFirstEntry.current) {
            isFirstEntry.current = false;
            return;
        }

        setIsTransitionLoading(true);
        
        // Lock scrolling during transition
        document.body.style.overflow = 'hidden';
        
        // Reset scroll to top
        window.scrollTo(0, 0);

        const timer = setTimeout(() => {
            setIsTransitionLoading(false);
            document.body.style.overflow = '';
        }, 1200); // 1.2 seconds transition

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = '';
        };
    }, [location.pathname, hasEntered]);

    const handleEnterSite = () => {
        setHasEntered(true);
        sessionStorage.setItem('portfolio_entered', 'true');
        setIsInitialLoading(false);
    };

    return (
        <>
            <AnimatePresence mode="wait">
                {/* 1. Initial Entry Loading Screen */}
                {isInitialLoading && (
                    <motion.div
                        key="entry-loader"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
                        onClick={handleEnterSite}
                        className="fixed inset-0 z-[9999] bg-[#0c0c0c] text-white flex flex-col items-center justify-center p-8 select-none cursor-pointer"
                    >
                        {/* Glowing ambient background grids */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_1px,_transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-60"></div>
                        
                        <div className="w-full max-w-4xl relative z-10 flex flex-col items-center justify-center px-4">
                            <div className="flex flex-col items-center w-full space-y-6">
                                <h1 className="font-hero text-[32px] md:text-[54px] tracking-tight leading-tight uppercase font-light text-paper text-center select-none">
                                    <ScrambleText 
                                        text="Welcome to the portfolio" 
                                        start={scrambleStart} 
                                    />
                                </h1>
                                
                                <div className="font-ui-nav text-[16px] md:text-[22px] tracking-[0.15em] uppercase text-smoke select-none self-center md:self-end md:mr-16 min-h-[30px] opacity-80">
                                    <ScrambleText 
                                        text="— manas upadhyay" 
                                        start={scrambleStart} 
                                        delay={1200}
                                    />
                                </div>
                            </div>
                            
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 0.4, y: 0 }}
                                transition={{ delay: 2.5, duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                                className="font-ui-nav text-ui-nav tracking-[0.3em] uppercase text-smoke mt-16"
                            >
                                click to continue
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {/* 2. Page transition loader */}
                {isTransitionLoading && (
                    <motion.div
                        key="transition-loader"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[9998] bg-[#0e0e0e] text-paper flex flex-col items-center justify-center pointer-events-auto"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.02)_1px,_transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>
                        
                        <div className="relative z-10 flex flex-col items-center space-y-6">
                            <span className="font-ui-nav text-ui-nav tracking-[0.4em] uppercase text-smoke animate-pulse">
                                Loading Context
                            </span>
                            <div className="w-48 h-[1px] bg-white/10 overflow-hidden relative">
                                <motion.div 
                                    initial={{ left: "-100%" }}
                                    animate={{ left: "100%" }}
                                    transition={{ duration: 1.2, ease: "easeInOut", repeat: 0 }}
                                    className="absolute top-0 bottom-0 w-24 bg-white/80"
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
