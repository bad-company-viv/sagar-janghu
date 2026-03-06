import { motion } from "framer-motion";
import { useReveal } from "./useReveal";
import { Mail, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
    const { ref, isInView } = useReveal();

    return (
        <section id="contact" className="py-28 px-6 bg-[#1C2B4A] text-white">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-16"
                >
                    <p className="text-xs font-semibold tracking-[0.25em] text-white/40 uppercase mb-4">
                        Get In Touch
                    </p>
                    <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-tight mb-6">
                        Let's <span className="font-semibold">Connect</span>
                    </h2>
                    <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-lg mx-auto">
                        Sagar is open to connecting with professionals, investors, and collaborators
                        interested in real estate development and innovative projects.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="mailto:sagarjanghu@gmail.com"
                        className="group flex items-center gap-3 px-8 py-4 bg-white text-[#1C2B4A] font-semibold text-sm rounded-full hover:bg-gray-100 transition-colors duration-300"
                    >
                        <Mail className="w-4 h-4" />
                        sagarjanghu@gmail.com
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/sagar-janghu/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-semibold text-sm rounded-full hover:bg-white/10 transition-colors duration-300"
                    >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </a>

                    <a
                        href="https://www.instagram.com/propertytalkswith_sagarjanghu/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-semibold text-sm rounded-full hover:bg-white/10 transition-colors duration-300"
                    >
                        <Instagram className="w-4 h-4" />
                        Instagram
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-24 pt-8 border-t border-white/10 flex items-center justify-center"
                >
                    <p className="text-white/30 text-xs">
                        © {new Date().getFullYear()} · All rights reserved
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
