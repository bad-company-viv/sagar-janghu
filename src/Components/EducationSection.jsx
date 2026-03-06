import { motion } from "framer-motion";
import { useReveal } from "./useReveal";
import { GraduationCap, Award, Users } from "lucide-react";

const credentials = [
    {
        icon: GraduationCap,
        org: "ESADE Business School",
        location: "Barcelona",
        credential: "MBA",
        desc: "Master of Business Administration from one of Europe's leading business schools.",
    },
    {
        icon: Award,
        org: "CFA Institute",
        location: "Global",
        credential: "CFA Charterholder",
        desc: "Chartered Financial Analyst — a globally recognized credential in investment management and financial analysis.",
    },
    {
        icon: Users,
        org: "CFA Society India",
        location: "India",
        credential: "Member",
        desc: "Active member of the CFA Society India, part of the global network of investment professionals.",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
    }),
};

export default function EducationSection() {
    const { ref, isInView } = useReveal();

    return (
        <section id="education" className="py-28 px-6 bg-[#FAFAF8]">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-16"
                >
                    <p className="text-xs font-semibold tracking-[0.25em] text-[#1C2B4A] uppercase mb-4">
                        Credentials
                    </p>
                    <h2 className="text-4xl md:text-5xl font-light text-[#1C1C1C] tracking-tight leading-tight">
                        Education &{" "}
                        <span className="font-semibold">Credentials</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {credentials.map((c, i) => {
                        const Icon = c.icon;
                        return (
                            <motion.div
                                key={i}
                                custom={i}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                variants={cardVariants}
                                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                                className="relative p-8 bg-white border border-gray-100 rounded-2xl hover:border-[#1C2B4A]/20 hover:shadow-xl hover:shadow-[#1C2B4A]/5 transition-all duration-300 cursor-default overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full bg-[#EEF1F7] opacity-60" />
                                <Icon className="w-6 h-6 text-[#1C2B4A] mb-6 relative z-10" />
                                <p className="text-[10px] font-semibold tracking-[0.2em] text-[#999] uppercase mb-2">
                                    {c.location}
                                </p>
                                <h3 className="text-lg font-semibold text-[#1C1C1C] mb-1">{c.org}</h3>
                                <span className="inline-block text-xs font-semibold text-[#1C2B4A] bg-[#EEF1F7] px-3 py-1 rounded-full mb-4">
                                    {c.credential}
                                </span>
                                <p className="text-sm text-[#777] leading-relaxed">{c.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}