"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import {
    FaEnvelope, FaPhoneAlt, FaMapMarkerAlt,
    FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp, FaArrowUp, FaCheckCircle, FaTimes
} from "react-icons/fa";
import Button from "@/components/ui/Button";

export default function Contact() {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const contentRef = useRef(null);
    const formRef = useRef(null);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [formStatus, setFormStatus] = useState("idle");
    const [validationError, setValidationError] = useState("");
    const [showScrollTop, setShowScrollTop] = useState(false);

    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyiRYYFRDQRaiKm2Sr_dqqv2BeiWV0xcc2f8rHCQHzWQzyTaMUt_X79ml82-leAzYMC/exec";

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (validationError) setValidationError("");
        if (formStatus !== "idle") setFormStatus("idle");
    };

    const validateForm = () => {
        if (!formData.name.trim()) return "Name is required.";
        if (!formData.email.trim()) return "Email is required.";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) return "Please enter a valid email address.";
        if (!formData.message.trim()) return "Message cannot be empty.";
        return "";
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const error = validateForm();
        if (error) {
            setValidationError(error);
            return;
        }

        setFormStatus("submitting");

        const formDataObj = new FormData(e.target);

        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                body: formDataObj,
            });
            setFormStatus("success");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            setFormStatus("error");
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        let timer;
        if (formStatus === "success") {
            timer = setTimeout(() => {
                setFormStatus("idle");
            }, 5000);
        }
        return () => clearTimeout(timer);
    }, [formStatus]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

                        tl.fromTo(
                            headingRef.current,
                            { y: 30, opacity: 0 },
                            { y: 0, opacity: 1, duration: 0.8 }
                        );

                        tl.fromTo(
                            contentRef.current.children,
                            { y: 40, opacity: 0 },
                            { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 },
                            "-=0.4"
                        );

                        tl.fromTo(
                            formRef.current,
                            { y: 40, opacity: 0 },
                            { y: 0, opacity: 1, duration: 0.8 },
                            "-=0.6"
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
        <section ref={sectionRef} className="py-24 px-4 bg-[#faf4e6] relative overflow-hidden" id="contact">
            <div className="max-w-7xl mx-auto w-full">

                <div ref={headingRef} className="opacity-0 mb-16 flex flex-col items-center text-center">
                    <h2 className="font-fraunces text-4xl md:text-5xl font-bold text-[#111111] mb-2">
                        Get in <span className="italic text-[#8a1c1c]">Touch</span>
                    </h2>
                    <div className="w-16 h-[2px] bg-[#d6a54a] mt-4"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                    <div ref={contentRef} className="flex flex-col opacity-100">
                        <div className="opacity-0 mb-8">
                            <h3 className="font-fraunces text-3xl font-bold text-[#111111] mb-4">
                                Let's Work Together.
                            </h3>
                            <p className="text-[#5c687d] text-lg leading-relaxed max-w-md">
                                I'm currently available for freelance projects and full-time opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                            </p>
                        </div>

                        <div className="opacity-0 flex flex-col gap-6 mb-10">
                            <a href="mailto:ranjithram878@gmail.com" className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-200 group-hover:border-[#8a1c1c] group-hover:bg-[#8a1c1c] transition-all duration-300">
                                    <FaEnvelope className="text-[#d6a54a] text-lg group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <div className="text-[0.65rem] font-bold tracking-[0.15em] text-gray-400 uppercase mb-1">Email</div>
                                    <div className="text-lg font-semibold text-[#111111] group-hover:text-[#8a1c1c] transition-colors">ranjithram878@gmail.com</div>
                                </div>
                            </a>

                            <a href="tel:+916382823550" className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-200 group-hover:border-[#8a1c1c] group-hover:bg-[#8a1c1c] transition-all duration-300">
                                    <FaPhoneAlt className="text-[#d6a54a] text-lg group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <div className="text-[0.65rem] font-bold tracking-[0.15em] text-gray-400 uppercase mb-1">Phone</div>
                                    <div className="text-lg font-semibold text-[#111111] group-hover:text-[#8a1c1c] transition-colors">+91 63828 23550</div>
                                </div>
                            </a>

                            <div className="flex items-center gap-4 group">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-gray-200 group-hover:border-[#8a1c1c] group-hover:bg-[#8a1c1c] transition-all duration-300">
                                    <FaMapMarkerAlt className="text-[#d6a54a] text-lg group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <div className="text-[0.65rem] font-bold tracking-[0.15em] text-gray-400 uppercase mb-1">Location</div>
                                    <div className="text-lg font-semibold text-[#111111] group-hover:text-[#8a1c1c] transition-colors">Sithali, Perambalur, Tamil Nadu, India.</div>
                                </div>
                            </div>
                        </div>

                        <div className="opacity-0 flex flex-wrap gap-4">
                            <a href="https://github.com/Ranjith1110" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-200 hover:border-[#8a1c1c] hover:bg-[#8a1c1c] hover:text-white text-[#111111] transition-all duration-300">
                                <FaGithub className="text-lg" />
                            </a>
                            <a href="https://www.linkedin.com/in/ranjithnatarajan009/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-200 hover:border-[#8a1c1c] hover:bg-[#8a1c1c] hover:text-white text-[#111111] transition-all duration-300">
                                <FaLinkedinIn className="text-lg" />
                            </a>
                            <a href="https://wa.me/916382823550" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-200 hover:border-[#8a1c1c] hover:bg-[#8a1c1c] hover:text-white text-[#111111] transition-all duration-300">
                                <FaWhatsapp className="text-lg" />
                            </a>
                            <a href="https://www.instagram.com/ranjith_natarajan_._1910/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-gray-200 hover:border-[#8a1c1c] hover:bg-[#8a1c1c] hover:text-white text-[#111111] transition-all duration-300">
                                <FaInstagram className="text-lg" />
                            </a>
                        </div>
                    </div>

                    <div ref={formRef} className="opacity-0 bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#faf4e6] rounded-bl-full -z-10 opacity-50"></div>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                            {validationError && (
                                <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-lg border border-red-200 font-semibold">
                                    {validationError}
                                </div>
                            )}

                            {formStatus === "error" && (
                                <div className="bg-red-50 text-red-600 text-sm px-4 py-3 rounded-lg border border-red-200 font-semibold">
                                    Something went wrong. Please try again later or email me directly.
                                </div>
                            )}

                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-xs font-bold tracking-widest text-gray-500 uppercase">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full bg-[#fcfcf9] border ${validationError.includes("Name") ? "border-red-400" : "border-gray-200"} rounded-lg px-4 py-3 text-[#111111] focus:outline-none focus:border-[#8a1c1c] focus:ring-1 focus:ring-[#8a1c1c] transition-colors`}
                                    placeholder="John Doe"
                                    disabled={formStatus === "submitting"}
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-xs font-bold tracking-widest text-gray-500 uppercase">Email Address</label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full bg-[#fcfcf9] border ${validationError.includes("email") ? "border-red-400" : "border-gray-200"} rounded-lg px-4 py-3 text-[#111111] focus:outline-none focus:border-[#8a1c1c] focus:ring-1 focus:ring-[#8a1c1c] transition-colors`}
                                    placeholder="john@example.com"
                                    disabled={formStatus === "submitting"}
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-xs font-bold tracking-widest text-gray-500 uppercase">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className={`w-full bg-[#fcfcf9] border ${validationError.includes("Message") ? "border-red-400" : "border-gray-200"} rounded-lg px-4 py-3 text-[#111111] focus:outline-none focus:border-[#8a1c1c] focus:ring-1 focus:ring-[#8a1c1c] transition-colors resize-none`}
                                    placeholder="Hello, I'd like to talk about..."
                                    disabled={formStatus === "submitting"}
                                ></textarea>
                            </div>

                            <Button
                                type="submit"
                                variant="primary"
                                size="lg"
                                className={`w-full mt-2 uppercase tracking-[0.15em] text-xs py-4 rounded-lg ${formStatus === "submitting" ? "opacity-70 cursor-not-allowed" : ""}`}
                                disabled={formStatus === "submitting"}
                            >
                                {formStatus === "submitting" ? "Sending..." : "Send Message"}
                            </Button>
                        </form>
                    </div>

                </div>
            </div>

            <div
                className={`fixed bottom-24 right-4 md:right-8 z-50 flex items-center gap-3 bg-green-50 text-green-800 px-5 py-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-green-200 transition-all duration-500 transform ${formStatus === "success" ? "translate-x-0 opacity-100 visible" : "translate-x-[150%] opacity-0 invisible"}`}
            >
                <FaCheckCircle className="text-green-500 text-xl shrink-0" />
                <div className="flex flex-col">
                    <span className="text-sm font-bold">Message Sent</span>
                    <span className="text-xs font-medium text-green-700/80">I will get back to you shortly!</span>
                </div>
                <button
                    onClick={() => setFormStatus("idle")}
                    className="ml-2 text-green-600 hover:text-green-800 transition-colors"
                >
                    <FaTimes />
                </button>
            </div>

            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-4 md:right-8 z-50 p-3.5 bg-[#111111] text-white rounded-full shadow-xl hover:bg-[#8a1c1c] hover:-translate-y-1 transition-all duration-300 ease-in-out ${showScrollTop ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-10 invisible'}`}
                aria-label="Scroll to top"
            >
                <FaArrowUp className="text-lg" />
            </button>
        </section>
    );
}