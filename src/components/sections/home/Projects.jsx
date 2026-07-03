"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import {
    SiHtml5, SiCss, SiJavascript, SiReact, SiTailwindcss,
    SiBootstrap, SiGreensock, SiNodedotjs, SiExpress,
    SiMongodb, SiLaravel, SiMysql, SiPhp, SiJquery, SiGithub
} from "react-icons/si";
import {
    FaGitAlt, FaBarcode, FaServer, FaRobot, FaMobileAlt,
    FaCode, FaBolt, FaExternalLinkAlt
} from "react-icons/fa";

import nxteye from "@/assets/projects/nxteye.png";
import siddharsresearch from "@/assets/projects/18siddharsresearch.png";
import akkaraiarchitects from "@/assets/projects/akkaraiarchitects.png";
import drreddyspine from "@/assets/projects/drreddyspine.png";
import taskgo from "@/assets/projects/taskgo.png";
import bharathfirstschool from "@/assets/projects/bharathfirstschool.png";
import bharathimanpowers from "@/assets/projects/bharathimanpowers.png";
import mamce from "@/assets/projects/mamce.png";
import vasanthaconstructions from "@/assets/projects/vasanthaconstructions.png";
import vigilixhub from "@/assets/projects/vigilixhub.png";
import Button from "@/components/ui/Button";

export default function Projects() {
    const [visibleCount, setVisibleCount] = useState(6);
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const gridRef = useRef(null);

    const projectsData = [
        {
            title: "Nxteye",
            subtitle: "Optical Management System",
            image: nxteye.src,
            link: "https://nxteye.co.in/",
            technologies: [
                { name: "React.js", icon: <SiReact /> },
                { name: "Tailwind", icon: <SiTailwindcss /> },
                { name: "GSAP", icon: <SiGreensock /> },
                { name: "Barcode Gen", icon: <FaBarcode /> },
                { name: "Git", icon: <FaGitAlt /> },
                { name: "Github", icon: <SiGithub /> },
                { name: "VPS", icon: <FaServer /> },
                { name: "Mongo DB", icon: <SiMongodb /> },
                { name: "Express.js", icon: <SiExpress /> },
                { name: "Node.js", icon: <SiNodedotjs /> }
            ]
        },
        {
            title: "Task Go",
            subtitle: "Task Management System",
            image: taskgo.src,
            link: "https://taskgo.in/",
            technologies: [
                { name: "React.js", icon: <SiReact /> },
                { name: "Tailwind", icon: <SiTailwindcss /> },
                { name: "GSAP", icon: <SiGreensock /> },
                { name: "Mongo DB", icon: <SiMongodb /> },
                { name: "Express.js", icon: <SiExpress /> },
                { name: "Node.js", icon: <SiNodedotjs /> }
            ]
        },
        {
            title: "Vasantha Constructions",
            subtitle: "Business Website & Portal",
            image: vasanthaconstructions.src,
            link: "https://www.vasanthaconstructions.com/",
            technologies: [
                { name: "React.js", icon: <SiReact /> },
                { name: "Tailwind", icon: <SiTailwindcss /> },
                { name: "GSAP", icon: <SiGreensock /> },
                { name: "AI Video", icon: <FaRobot /> },
                { name: "Git", icon: <FaGitAlt /> },
                { name: "Github", icon: <SiGithub /> },
                { name: "VPS", icon: <FaServer /> },
                { name: "Mongo DB", icon: <SiMongodb /> },
                { name: "Express.js", icon: <SiExpress /> },
                { name: "Node.js", icon: <SiNodedotjs /> }
            ]
        },
        {
            title: "Akkarai Architects",
            subtitle: "Architecture Portfolio",
            image: akkaraiarchitects.src,
            link: "https://akkaraiarchitects.com/",
            technologies: [
                { name: "React.js", icon: <SiReact /> },
                { name: "Tailwind", icon: <SiTailwindcss /> },
                { name: "GSAP", icon: <SiGreensock /> },
                { name: "AI Video", icon: <FaRobot /> },
                { name: "Git", icon: <FaGitAlt /> },
                { name: "Github", icon: <SiGithub /> },
                { name: "VPS", icon: <FaServer /> },
                { name: "Mongo DB", icon: <SiMongodb /> },
                { name: "Express.js", icon: <SiExpress /> },
                { name: "Node.js", icon: <SiNodedotjs /> }
            ]
        },
        {
            title: "Dr. Rajendra Reddy",
            subtitle: "Personal Brand & Portfolio",
            image: drreddyspine.src,
            link: "https://drreddyspine.com/",
            technologies: [
                { name: "React.js", icon: <SiReact /> },
                { name: "Tailwind", icon: <SiTailwindcss /> },
                { name: "GSAP", icon: <SiGreensock /> },
                { name: "AI Video", icon: <FaRobot /> },
                { name: "Git", icon: <FaGitAlt /> },
                { name: "Github", icon: <SiGithub /> },
                { name: "VPS", icon: <FaServer /> },
                { name: "Mongo DB", icon: <SiMongodb /> },
                { name: "Express.js", icon: <SiExpress /> },
                { name: "Node.js", icon: <SiNodedotjs /> }
            ]
        },
        {
            title: "M.A.M College",
            subtitle: "Educational Institution Portal",
            image: mamce.src,
            link: "https://www.mamce.org/",
            technologies: [
                { name: "Laravel", icon: <SiLaravel /> },
                { name: "Blade", icon: <FaCode /> },
                { name: "FastBootstrap", icon: <SiBootstrap /> },
                { name: "jQuery", icon: <SiJquery /> },
                { name: "MySQL", icon: <SiMysql /> },
                { name: "AOS", icon: <FaBolt /> }
            ]
        },
        {
            title: "18siddharsresearch!",
            subtitle: "Research & Information Platform",
            image: siddharsresearch.src,
            link: "https://18siddharsresearch.com/",
            technologies: [
                { name: "HTML", icon: <SiHtml5 /> },
                { name: "CSS", icon: <SiCss /> },
                { name: "JavaScript", icon: <SiJavascript /> },
                { name: "Git", icon: <FaGitAlt /> },
                { name: "Github", icon: <SiGithub /> },
                { name: "Media Query", icon: <FaMobileAlt /> }
            ]
        },
        {
            title: "Bharathi Manpowers",
            subtitle: "Manpower Service Portal",
            image: bharathimanpowers.src,
            link: "https://bharathimanpowers.com/",
            technologies: [
                { name: "HTML", icon: <SiHtml5 /> },
                { name: "Tailwind", icon: <SiTailwindcss /> },
                { name: "JavaScript", icon: <SiJavascript /> },
                { name: "Git", icon: <FaGitAlt /> },
                { name: "Github", icon: <SiGithub /> },
                { name: "PHP", icon: <SiPhp /> }
            ]
        },
        {
            title: "VigilixHub",
            subtitle: "Business Service Platform",
            image: vigilixhub.src,
            link: "https://vigilixhub.in/",
            technologies: [
                { name: "HTML", icon: <SiHtml5 /> },
                { name: "Tailwind", icon: <SiTailwindcss /> },
                { name: "JavaScript", icon: <SiJavascript /> },
                { name: "Git", icon: <FaGitAlt /> },
                { name: "Github", icon: <SiGithub /> },
                { name: "PHP", icon: <SiPhp /> }
            ]
        }
    ];

    const toggleShowMore = () => {
        if (visibleCount === 6) {
            setVisibleCount(projectsData.length);
        } else {
            setVisibleCount(6);
            if (sectionRef.current) {
                const yOffset = -80;
                const element = sectionRef.current;
                const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }
    };

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

                        const cards = gridRef.current.querySelectorAll('.project-card');
                        gsap.fromTo(
                            cards,
                            { y: 40, opacity: 0 },
                            { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out", delay: 0.2 }
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

    useEffect(() => {
        if (visibleCount > 6 && gridRef.current) {
            const allCards = Array.from(gridRef.current.querySelectorAll('.project-card'));
            const newCards = allCards.slice(6);

            gsap.fromTo(
                newCards,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" }
            );
        }
    }, [visibleCount]);

    return (
        <section ref={sectionRef} className="py-24 px-4 bg-[#fcfcf9]">
            <div className="max-w-7xl mx-auto w-full">

                <div ref={headingRef} className="opacity-0 mb-16 flex flex-col items-center text-center">
                    <h2 className="font-fraunces text-4xl md:text-5xl font-bold text-[#111111] mb-2">
                        Featured <span className="italic text-[#8a1c1c]">Projects</span>
                    </h2>
                    <div className="w-16 h-[2px] bg-[#d6a54a] mt-4"></div>
                </div>

                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.slice(0, visibleCount).map((project, index) => (
                        <div
                            key={index}
                            className="project-card opacity-0 flex flex-col bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group/card"
                        >
                            <div className="w-full h-56 bg-[#f4f4f4] p-6 flex items-center justify-center relative overflow-hidden border-b border-gray-100">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-contain drop-shadow-md transition-transform duration-500 group-hover/card:scale-105"
                                />
                            </div>

                            <div className="p-6 md:p-8 flex flex-col flex-1 bg-white">
                                <div className="text-[0.65rem] font-bold tracking-[0.15em] text-[#d6a54a] mb-2 uppercase">
                                    {project.subtitle}
                                </div>

                                <h3 className="font-fraunces text-2xl font-bold text-[#111111] mb-6 leading-tight group-hover/card:text-[#8a1c1c] transition-colors">
                                    {project.title}
                                </h3>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.technologies.map((tech, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-1.5 bg-[#fcfcf9] border border-gray-200 text-[#5c687d] px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider"
                                        >
                                            <span className="text-[#d6a54a] text-sm">
                                                {tech.icon}
                                            </span>
                                            {tech.name}
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-auto pt-4 border-t border-gray-100">
                                    <Button
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="outline"
                                        size="md"
                                        className="w-full text-xs uppercase tracking-wider py-3"
                                    >
                                        View Project <FaExternalLinkAlt className="text-[10px]" />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {projectsData.length > 6 && (
                    <div className="mt-16 flex justify-center">
                        <Button
                            onClick={toggleShowMore}
                            variant="primary"
                            size="lg"
                            className="text-xs uppercase tracking-[0.15em] px-8"
                        >
                            {visibleCount === 6 ? "View All Projects" : "Show Less"}
                            <span className="text-lg leading-none mt-[-2px]">
                                {visibleCount === 6 ? "+" : "−"}
                            </span>
                        </Button>
                    </div>
                )}

            </div>
        </section>
    );
}