"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Experience() {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const itemsRef = useRef([]);

    const experiences = [
        {
            id: 1,
            role: "Fullstack Developer",
            company: "Nizcare Private Limited",
            date: "Jun 2024 - Present",
            location: "Onsite - Tiruchirappalli, Tamil Nadu, India",
            bullets: [
                "Developed and deployed TaskGo, a multi-tenant SaaS task management platform using MongoDB, Express.js, React.js, Node.js, and Tailwind CSS, implementing role-based access control for 3 user hierarchies (Super Admin, Company Admin, and Users) and secure tenant-level data isolation across multiple organizations.",
                "Engineered 15+ core modules and 20+ RESTful APIs, including task management, user management, company administration, reporting, notifications, authentication, authorization, and real-time data synchronization, supporting a healthcare ecosystem serving 3,000+ active users.",
                "Contributed to the development and enhancement of Nizcare’s healthcare platform, enabling seamless operations and integrations for 10+ Third-Party Administrators (TPAs) and 30+ insurance broker partners, helping streamline healthcare and insurance workflows.",
                "Revamped the company’s corporate website and developed a fully responsive admin dashboard using HTML, CSS, Bootstrap, JavaScript, Laravel Blade, PHP, and Laravel, improving UI/UX, cross-browser compatibility, mobile responsiveness, workflow automation, role-based access control (RBAC), and overall application performance.",
            ],
        },
        {
            id: 2,
            role: "Web Developer",
            company: "Freelance",
            date: "Jan 2023 – May 2024",
            location: "Remote - Perambalur, Tamil Nadu, India",
            bullets: [
                "Developed and delivered 10+ responsive web applications and business websites using HTML, CSS, JavaScript, React.js, and Bootstrap, ensuring modern UI/UX design, cross-browser compatibility, performance optimization, scalability, and high client satisfaction.",
            ],
        },
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
                            { y: 20, opacity: 0 },
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
        <section ref={sectionRef} className="py-12 px-4 bg-[#fcfcf9]">
            <div className="max-w-7xl mx-auto w-full">

                <div ref={headingRef} className="opacity-0 mb-8 border-b border-gray-200 pb-4">
                    <h2 className="font-fraunces text-4xl md:text-5xl font-bold text-[#111111] mb-4">
                        Where I've <span className="italic text-[#8a1c1c]">Worked</span>
                    </h2>
                    <div className="w-16 h-[2px] bg-[#d6a54a] ms-2"></div>
                </div>

                <div className="flex flex-col gap-8">
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            ref={(el) => (itemsRef.current[index] = el)}
                            className="opacity-0 flex flex-col md:flex-row gap-4 md:gap-8"
                        >
                            <div className="md:w-[280px] shrink-0 flex flex-col pt-1">
                                <h3 className="font-fraunces text-xl font-bold text-[#111111]">
                                    {exp.company}
                                </h3>
                                <div className="text-[#8a1c1c] font-medium mt-1 mb-2 italic">
                                    {exp.role}
                                </div>
                                <div className="text-[0.7rem] font-bold tracking-[0.1em] text-gray-500 uppercase">
                                    {exp.date}
                                </div>
                                <div className="text-[0.7rem] tracking-wide text-gray-400 mt-1">
                                    {exp.location}
                                </div>
                            </div>

                            <div className="flex-1 md:border-l md:border-gray-200 md:pl-8">
                                <ul className="flex flex-col gap-3">
                                    {exp.bullets.map((bullet, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="text-[#d6a54a] mr-3 mt-1.5 text-[8px] shrink-0">
                                                ♦
                                            </span>
                                            <p className="text-[#5c687d] text-sm md:text-base leading-relaxed">
                                                {bullet}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}