import { motion } from "framer-motion";
import { useReveal } from "./useReveal";
import {
    Building2,
    Briefcase,
    Factory,
    MapPin,
    TrendingUp,
    HardHat,
    Lightbulb,
} from "lucide-react";

const expertise = [
    { icon: Building2, label: "Residential Real Estate Development" },
    { icon: Briefcase, label: "Commercial Real Estate" },
    { icon: Factory, label: "Industrial Real Estate" },
    { icon: MapPin, label: "Land Acquisition & Project Structuring" },
    { icon: TrendingUp, label: "Real Estate Investment & Capital Markets" },
    { icon: HardHat, label: "Construction Strategy & Project Execution" },
    { icon: Lightbulb, label: "Development Advisory" },
];

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
    }),
};

export default function ExpertiseSection() {
    const { ref, isInView } = useReveal();

    return (
        <section id="expertise" className="py-28 px-6 bg-[#FAFAF8]">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-16"
                >
                    <p className="text-xs font-semibold tracking-[0.25em] text-[#1C2B4A] uppercase mb-4">
                        Expertise
                    </p>
                    <h2 className="text-4xl md:text-5xl font-light text-[#1C1C1C] tracking-tight leading-tight">
                        Areas of <span className="font-semibold">Expertise</span>
                    </h2>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {expertise.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={i}
                                custom={i}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                variants={cardVariants}
                                whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.25 } }}
                                className="group p-6 bg-white border border-gray-100 rounded-2xl hover:border-[#1C2B4A]/20 hover:shadow-xl hover:shadow-[#1C2B4A]/5 transition-all duration-300 cursor-default flex flex-col gap-4"
                            >
                                <div className="w-10 h-10 rounded-xl bg-[#EEF1F7] group-hover:bg-[#1C2B4A] flex items-center justify-center transition-colors duration-300">
                                    <Icon className="w-5 h-5 text-[#1C2B4A] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <p className="text-sm font-medium text-[#333] leading-snug">{item.label}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}