"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "@/components/ui/Button";

export default function Hero() {
    const heroRef = useRef(null);
    const textRefs = useRef([]);
    const statsRefs = useRef([]);
    const lineRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.fromTo(
            textRefs.current,
            { y: 80, opacity: 0, rotation: 3 },
            { y: 0, opacity: 1, rotation: 0, duration: 1.2, stagger: 0.15, delay: 0.2 }
        )
            .fromTo(
                lineRef.current,
                { scaleX: 0 },
                { scaleX: 1, duration: 1, transformOrigin: "left center" },
                "-=0.8"
            )
            .fromTo(
                statsRefs.current,
                { opacity: 0, x: 20 },
                { opacity: 1, x: 0, duration: 0.8, stagger: 0.1 },
                "-=0.6"
            );
    }, []);

    return (
        <section ref={heroRef} className="min-h-[90vh] px-2 py-10 flex flex-col justify-center overflow-hidden">
            <div className="max-w-[1400px] bg-[#faf4e6] mx-auto px-3 py-6 md:px-8 md:py-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-4">

                <div className="lg:col-span-8 flex flex-col justify-center relative">

                    <h1 className="font-fraunces text-[48px] leading-[1] lg:text-[78px] tracking-tight text-[#111111]">
                        <div className="overflow-hidden pb-1 lg:pb-2">
                            <div ref={(el) => (textRefs.current[1] = el)}>
                                Hi, There!
                            </div>
                        </div>
                        <div className="overflow-hidden pb-1 lg:pb-2 relative w-max">
                            <div ref={(el) => (textRefs.current[2] = el)}>
                                I'm <span className="italic text-[#8a1c1c]">Ranjith...</span>
                            </div>
                        </div>
                        <div className="overflow-hidden pb-1 lg:pb-2">
                            <div ref={(el) => (textRefs.current[3] = el)}>
                                I'm a <span className="italic text-[#8a1c1c]">Software Developer</span>
                            </div>
                        </div>
                        <div className="overflow-hidden pb-2 lg:pb-4">
                            <div ref={(el) => (textRefs.current[4] = el)}>
                                and a Video Editor.
                            </div>
                        </div>
                    </h1>

                    <div className="overflow-hidden mt-6 md:mt-2 mb-10 lg:mb-6 max-w-3xl">
                        <p ref={(el) => (textRefs.current[5] = el)} className="font-fraunces text-lg sm:text-xl md:text-2xl text-gray-800 italic">
                            Bridging the gap between design and code. Currently working as a Software Developer at Nizcare Pvt Ltd, crafting modern web experiences and engaging visual stories.
                        </p>
                    </div>

                    <div className="overflow-hidden">
                        <div>
                            <Button href="/projects" variant="outline" size="md">
                                My Work
                            </Button>

                        </div>
                    </div>
                </div>

                <div className="lg:col-span-4 flex flex-col justify-end pb-4 lg:pb-8">
                    <div ref={lineRef} className="w-full h-[1px] bg-gray-900 mb-8 hidden lg:block"></div>

                    <div className="flex flex-col gap-6 lg:gap-8 relative border-t border-gray-900 pt-8 lg:border-t-0 lg:pt-0">

                        <div className="absolute -right-29 top-1/2 -translate-y-1/2 rotate-90 text-[0.55rem] tracking-[0.3em] text-gray-300 uppercase whitespace-nowrap hidden lg:block">
                            Software Devoloper · Tamil Nadu
                        </div>

                        <div ref={(el) => (statsRefs.current[0] = el)} className="grid grid-cols-[80px_1fr] sm:grid-cols-[100px_1fr] items-start">
                            <div className="text-[0.65rem] font-bold tracking-[0.2em] text-gray-400 mt-1">ROLE</div>
                            <div>
                                <div className="font-fraunces text-lg sm:text-xl font-bold text-gray-900 leading-tight italic">Ranjith</div>
                                <div className="text-[0.65rem] sm:text-xs font-bold tracking-[0.1em] text-gray-500 mt-1 uppercase">Software Devoloper & Video Editor.</div>
                            </div>
                        </div>

                        <div ref={(el) => (statsRefs.current[1] = el)} className="grid grid-cols-[80px_1fr] sm:grid-cols-[100px_1fr] items-start border-t border-gray-200 pt-6">
                            <div className="text-[0.65rem] font-bold tracking-[0.2em] text-gray-400 mt-1">EXP</div>
                            <div>
                                <div className="font-fraunces text-lg sm:text-xl font-bold text-[#8a1c1c] italic">Active</div>
                                <div className="text-[0.65rem] sm:text-xs font-bold tracking-[0.1em] text-gray-500 mt-1 uppercase">Software Devoloper at Nizcare Pvt Ltd.</div>
                            </div>
                        </div>

                        <div ref={(el) => (statsRefs.current[2] = el)} className="grid grid-cols-[80px_1fr] sm:grid-cols-[100px_1fr] items-start border-t border-gray-200 pt-6">
                            <div className="text-[0.65rem] font-bold tracking-[0.2em] text-gray-400 mt-1">BASE</div>
                            <div>
                                <div className="font-fraunces text-lg sm:text-xl font-bold text-[#8a1c1c] italic">Perambalur</div>
                                <div className="text-[0.65rem] sm:text-xs font-bold tracking-[0.1em] text-gray-500 mt-1 uppercase">Tamil Nadu, India.</div>
                            </div>
                        </div>

                        <div ref={(el) => (statsRefs.current[3] = el)} className="grid grid-cols-[80px_1fr] sm:grid-cols-[100px_1fr] items-start border-t border-gray-200 pt-6">
                            <div className="text-[0.65rem] font-bold tracking-[0.2em] text-gray-400 mt-1">STACK</div>
                            <div>
                                <div className="font-fraunces text-lg sm:text-xl font-bold text-[#8a1c1c] italic">JavaScript, MERN</div>
                                <div className="text-[0.65rem] sm:text-xs font-bold tracking-[0.1em] text-gray-500 mt-1 uppercase">React js, Next js, GSAP & Tailwind.</div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}