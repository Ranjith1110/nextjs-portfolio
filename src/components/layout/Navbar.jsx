"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import Button from "@/components/ui/Button";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef(null);
    const marqueeRef = useRef(null);
    const linksRef = useRef([]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { name: "About", href: "/about" },
        { name: "Experience", href: "/experience" },
        { name: "Skills", href: "/skills" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
    ];

    useEffect(() => {
        gsap.to(marqueeRef.current, {
            xPercent: -50,
            repeat: -1,
            duration: 20,
            ease: "linear",
        });

        const tl = gsap.timeline();
        tl.from(navRef.current, {
            y: -50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
        }).from(
            linksRef.current,
            {
                y: -10,
                opacity: 0,
                duration: 0.4,
                stagger: 0.1,
                ease: "power2.out",
            },
            "-=0.4"
        );
    }, []);

    return (
        <header ref={navRef} className="fixed w-full z-50 shadow-sm flex flex-col">

            <div className="w-full bg-[#111111] border-b border-black flex items-center overflow-hidden h-9">
                <div className="bg-[#8a1c1c] text-[#e8dcb8] px-2 md:px-6 h-full flex items-center text-xs font-bold tracking-widest z-10 shrink-0 shadow-[4px_0_10px_rgba(0,0,0,0.5)]">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#d6a54a] mr-1 md:mr-3 animate-pulse"></span>
                    AVAILABLE FOR WORK
                </div>

                <div className="flex whitespace-nowrap text-[#a3a3a3] text-xs font-semibold tracking-wider" ref={marqueeRef}>
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex items-center font-fraunces italic text-[10px]">
                            <span className="mx-4 text-[#d6a54a]">♦</span> FULL STACK DEVELOPER
                            <span className="mx-4 text-[#d6a54a]">♦</span> MERN STACK DEVELOPER
                            <span className="mx-4 text-[#d6a54a]">♦</span> FRONTEND DEVELOPER
                            <span className="mx-4 text-[#d6a54a]">♦</span> GSAP ANIMATION MAGIC
                            <span className="mx-4 text-[#d6a54a]">♦</span> NEXT.JS EXPERT
                            <span className="mx-4 text-[#d6a54a]">♦</span> REACT & TAILWIND
                            <span className="mx-4 text-[#d6a54a]">♦</span> CREATIVE DESIGNER
                        </div>
                    ))}
                </div>
            </div>

            <nav className="w-full bg-[#fcfcf9]">
                <div className="max-w-7xl mx-auto px-1">
                    <div className="flex justify-between items-center h-14">

                        <div>
                            <Link href="/" className="text-2xl font-bold text-gray-900 tracking-tight font-fraunces italic">
                                Ranjith's Portfolio
                            </Link>
                        </div>

                        <div className="hidden lg:flex items-center gap-1">
                            <div className="flex space-x-2">
                                {navLinks.map((link, index) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        ref={(el) => (linksRef.current[index] = el)}
                                        className="group relative text-[#5c687d] hover:text-gray-900 px-1 py-2 text-base font-medium transition-colors"
                                    >
                                        {link.name}
                                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#8a1c1c] transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                ))}
                            </div>

                            <div className="border-l border-gray-400 pl-2">
                                <Button href="/resume" variant="primary" size="sm">
                                    Resume
                                </Button>
                            </div>
                        </div>

                        <div className="lg:hidden flex items-center">
                            <button
                                onClick={toggleMenu}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:bg-gray-200 focus:outline-none transition-colors"
                                aria-expanded={isOpen}
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                ) : (
                                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {isOpen && (
                    <div className="lg:hidden bg-[#fcfcf9] border-t border-gray-200 shadow-xl">
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-3 rounded-md text-base font-semibold text-gray-700 hover:text-[#8a1c1c] hover:bg-red-50"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 flex flex-col gap-3">
                                <Button href="/resume" variant="primary">
                                    Resume
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}