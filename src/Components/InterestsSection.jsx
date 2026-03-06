import { motion } from "framer-motion";
import { useReveal } from "./useReveal";
import { Dumbbell, BookOpen, Mountain } from "lucide-react";

const interests = [
    { icon: Dumbbell, label: "Fitness & Training", desc: "Committed to physical discipline and peak performance." },
    { icon: BookOpen, label: "Reading", desc: "Continuous learning across finance, history, and philosophy." },
    { icon: Mountain, label: "Adventure Sports", desc: "Embracing challenge and the outdoors." },
];

export default function InterestsSection() {
    const { ref, isInView } = useReveal();

    return (
        <section id="interests" className="py-28 px-6 bg-[#FAFAF8]">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-16"
                >
                    <p className="text-xs font-semibold tracking-[0.25em] text-[#1C2B4A] uppercase mb-4">
                        Beyond Work
                    </p>
                    <h2 className="text-4xl md:text-5xl font-light text-[#1C1C1C] tracking-tight leading-tight mb-6">
                        Personal <span className="font-semibold">Interests</span>
                    </h2>
                    <p className="text-[#666] text-base leading-relaxed max-w-xl">
                        Sagar believes in continuous personal growth and maintaining a thoughtful balance between
                        professional ambition and personal development.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {interests.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                                whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.25 } }}
                                className="group p-8 bg-white border border-gray-100 rounded-2xl hover:border-[#1C2B4A]/20 hover:shadow-lg hover:shadow-[#1C2B4A]/5 transition-all duration-300 cursor-default flex gap-5 items-start"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#EEF1F7] group-hover:bg-[#1C2B4A] flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                                    <Icon className="w-5 h-5 text-[#1C2B4A] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[#1C1C1C] mb-2">{item.label}</h3>
                                    <p className="text-sm text-[#777] leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}