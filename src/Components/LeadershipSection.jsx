import { motion } from "framer-motion";
import { useReveal } from "./useReveal";
import { Globe } from "lucide-react";

export default function LeadershipSection() {
    const { ref, isInView } = useReveal();

    return (
        <section id="leadership" className="py-28 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <p className="text-xs font-semibold tracking-[0.25em] text-[#1C2B4A] uppercase mb-4">
                            Leadership
                        </p>
                        <h2 className="text-4xl md:text-5xl font-light text-[#1C1C1C] tracking-tight leading-tight mb-8">
                            Community &{" "}
                            <span className="font-semibold">Leadership</span>
                        </h2>
                        <p className="text-[#666] text-base md:text-lg leading-relaxed">
                            Sagar serves as a{" "}
                            <span className="font-semibold text-[#1C1C1C]">Board Member</span> of the ESADE
                            Alumni Delhi Chapter, contributing to the alumni network and fostering collaboration
                            among professionals across India.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        whileHover={{ y: -4, transition: { duration: 0.3 } }}
                        className="group p-8 bg-gradient-to-br from-[#1C2B4A] to-[#2a3d66] rounded-2xl text-white cursor-default"
                    >
                        <Globe className="w-8 h-8 text-white/60 mb-6" />
                        <p className="text-xs font-semibold tracking-widest uppercase text-white/50 mb-2">
                            Board Member
                        </p>
                        <h3 className="text-xl font-semibold mb-3">ESADE Alumni — Delhi Chapter</h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                            Contributing to one of the world's leading business school alumni networks, building
                            meaningful professional connections across the Indian market.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}