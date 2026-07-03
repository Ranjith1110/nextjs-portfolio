"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
    SiHtml5, SiCss, SiJavascript, SiReact, SiNextdotjs,
    SiTailwindcss, SiBootstrap, SiMui, SiGreensock,
    SiNodedotjs, SiLaravel, SiMysql, SiPostgresql, SiMongodb,
    SiRedux, SiVercel, SiNetlify, SiRender
} from "react-icons/si";
import {
    FaGitAlt, FaGithub, FaBolt, FaNetworkWired, FaCode, FaServer
} from "react-icons/fa";

export default function Skills() {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const itemsRef = useRef([]);

    const skillCategories = [
        {
            title: "Frontend",
            skills: [
                { name: "HTML5", icon: <SiHtml5 /> },
                { name: "CSS3", icon: <SiCss /> },
                { name: "JavaScript", icon: <SiJavascript /> },
                { name: "React.js", icon: <SiReact /> },
                { name: "Next.js", icon: <SiNextdotjs /> },
                { name: "Tailwind", icon: <SiTailwindcss /> },
                { name: "Bootstrap", icon: <SiBootstrap /> },
                { name: "Material UI", icon: <SiMui /> },
                { name: "GSAP Animation", icon: <SiGreensock /> },
                { name: "AOS", icon: <FaBolt /> }
            ]
        },
        {
            title: "Backend & DataBase",
            skills: [
                { name: "Node.js", icon: <SiNodedotjs /> },
                { name: "Laravel PHP", icon: <SiLaravel /> },
                { name: "MySQL", icon: <SiMysql /> },
                { name: "PostgreSQL", icon: <SiPostgresql /> },
                { name: "MongoDB", icon: <SiMongodb /> }
            ]
        },
        {
            title: "State & APIs",
            skills: [
                { name: "Redux Toolkit", icon: <SiRedux /> },
                { name: "Context API", icon: <FaNetworkWired /> },
                { name: "REST APIs", icon: <FaServer /> },
                { name: "React Hooks", icon: <FaCode /> },
                { name: "Async Fetch", icon: <FaBolt /> }
            ]
        },
        {
            title: "Tools",
            skills: [
                { name: "Git", icon: <FaGitAlt /> },
                { name: "GitHub", icon: <FaGithub /> },
                { name: "Vercel", icon: <SiVercel /> },
                { name: "Netlify", icon: <SiNetlify /> },
                { name: "Render", icon: <SiRender /> }
            ]
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        gsap.fromTo(
                            headingRef.current,
                            { y: 20, opacity: 0 },
                            { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
                        );

                        gsap.fromTo(
                            itemsRef.current,
                            { y: 30, opacity: 0 },
                            { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "power2.out", delay: 0.2 }
                        );

                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-16 px-4 bg-[#fcfcf9]">
            <div className="max-w-7xl mx-auto w-full">

                <div ref={headingRef} className="opacity-0 mb-12 flex flex-col items-center text-center">
                    <h2 className="font-fraunces text-4xl md:text-5xl font-bold text-[#111111] mb-4">
                        What I <span className="italic text-[#8a1c1c]">Work With</span>
                    </h2>
                    <div className="w-16 h-[2px] bg-[#d6a54a]"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            ref={(el) => (itemsRef.current[index] = el)}
                            className="opacity-0 bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[#8a1c1c] transition-all duration-300 flex flex-col h-full group"
                        >
                            <div className="mb-6 border-b border-gray-100 pb-4">
                                <h3 className="font-fraunces text-xl xl:text-xl font-bold text-[#111111] group-hover:text-[#8a1c1c] transition-colors">
                                    {category.title}
                                </h3>
                                <div className="text-[0.7rem] font-bold tracking-[0.1em] text-gray-400 mt-2 uppercase">
                                    {category.skills.length} Technologies
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {category.skills.map((skill, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-2 bg-[#fcfcf9] border border-gray-100 px-3 py-1.5 rounded-lg transition-colors group-hover:bg-red-50/50"
                                    >
                                        <span className="text-[#d6a54a] text-base">
                                            {skill.icon}
                                        </span>
                                        <span className="text-[#5c687d] text-xs font-semibold">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}