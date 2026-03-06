import { motion } from "framer-motion";
import { useReveal } from "./useReveal";

const roles = [
    {
        title: "Managing Partner",
        org: "Anantham Projects",
        desc: "A real estate development firm focused on residential plotted communities in emerging growth corridors around Gurugram and Sonipat.",
    },
    {
        title: "Managing Partner",
        org: "SYS Developers LLP",
        desc: "A Gurugram-based real estate development and advisory firm engaged in strategic project development and real estate advisory.",
    },
    {
        title: "Business Development Lead",
        org: "NB Constructions",
        desc: "A construction company executing residential and commercial real estate projects in the NCR region.",
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

export default function AboutSection() {
    const { ref, isInView } = useReveal();

    return (
        <section id="about" className="py-28 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-16"
                >
                    <p className="text-xs font-semibold tracking-[0.25em] text-[#1C2B4A] uppercase mb-4">
                        About
                    </p>
                    <h2 className="text-4xl md:text-5xl font-light text-[#1C1C1C] tracking-tight mb-8 max-w-2xl leading-tight">
                        Building long-term value in{" "}
                        <span className="font-semibold">Indian real estate</span>
                    </h2>
                    <p className="text-[#666] text-base md:text-lg leading-relaxed max-w-2xl">
                        Sagar Janghu is a real estate entrepreneur and finance professional focused on creating
                        long-term value in the Indian real estate sector. He began his career as a Real Estate
                        Investment Banking Analyst at J.P. Morgan in Mumbai, gaining deep exposure to real
                        estate transactions, valuations, and capital market advisory.
                    </p>
                </motion.div>

                {/* Role cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {roles.map((role, i) => (
                        <motion.div
                            key={i}
                            custom={i}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={cardVariants}
                            whileHover={{ y: -6, transition: { duration: 0.3 } }}
                            className="group p-8 border border-gray-100 rounded-2xl bg-[#FAFAF8] hover:border-[#1C2B4A]/20 hover:shadow-xl hover:shadow-[#1C2B4A]/5 transition-all duration-300 cursor-default"
                        >
                            <div className="w-8 h-[2px] bg-[#1C2B4A] mb-6 group-hover:w-12 transition-all duration-300" />
                            <p className="text-xs font-semibold tracking-widest text-[#1C2B4A] uppercase mb-2">
                                {role.title}
                            </p>
                            <h3 className="text-lg font-semibold text-[#1C1C1C] mb-4">{role.org}</h3>
                            <p className="text-sm text-[#777] leading-relaxed">{role.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}