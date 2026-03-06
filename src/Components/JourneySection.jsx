import { motion } from "framer-motion";
import { useReveal } from "./useReveal";

const timeline = [
    {
        period: "Early Career",
        role: "Real Estate Investment Banking Analyst",
        org: "J.P. Morgan",
        location: "Mumbai",
        desc: "Worked on real estate transactions, financial modeling, and valuation assignments. Gained deep exposure to real estate capital markets and deal structuring.",
    },
    {
        period: "Current",
        role: "Managing Partner",
        org: "Anantham Projects",
        location: "Gurugram / Sonipat",
        desc: "Leading development of premium residential plotted communities across emerging growth corridors around Gurugram and Sonipat.",
        logo: "/Anantham.png",
    },
    {
        period: "Current",
        role: "Managing Partner",
        org: "SYS Developers LLP",
        location: "Gurugram",
        desc: "Real estate development and advisory firm supporting development planning, project structuring, and strategic advisory.",
        logo: "/sys.webp",
    },
    {
        period: "Current",
        role: "Business Development Lead",
        org: "NB Constructions",
        location: "NCR Region",
        desc: "Supporting construction execution and business development for residential and commercial real estate projects across the NCR.",
        logo: "/nb.webp",
    },
];

function TimelineItem({ item, index, isInView }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, x: isEven ? -40 : 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.18, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -4 }}
            className="group relative grid md:grid-cols-2 gap-8 mb-14 last:mb-0"
        >
            {/* Left column (even) */}
            <div className={`${isEven ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}`}>
                <div className="rounded-2xl border border-[#1C2B4A]/10 bg-gradient-to-b from-white to-[#fafbfd] p-6 md:p-7 shadow-sm transition-all duration-300 group-hover:border-[#1C2B4A]/30 group-hover:shadow-xl group-hover:shadow-[#1C2B4A]/10">
                    <span className="text-xs font-semibold tracking-widest text-[#1C2B4A] uppercase">
                        {item.period}
                    </span>
                    <h3 className="text-xl font-semibold text-[#1C1C1C] mt-1 mb-1">{item.role}</h3>
                    <p className="text-base font-medium text-[#444]">{item.org}</p>
                    {item.logo && (
                        <div className={`mt-5 mb-4 flex ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                            <div className="flex items-center justify-center w-[220px] h-[110px] md:w-[260px] md:h-[130px] rounded-xl border border-[#1C2B4A]/15 bg-white p-4 transition-all duration-300 group-hover:border-[#1C2B4A]/35 group-hover:shadow-md">
                                <img
                                    src={item.logo}
                                    alt={`${item.org} logo`}
                                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        </div>
                    )}
                    <p className="text-xs text-[#999] mt-1 mb-3">{item.location}</p>
                    <p className={`text-sm text-[#666] leading-relaxed max-w-sm ${isEven ? "md:ml-auto" : ""}`}>
                        {item.desc}
                    </p>
                </div>
            </div>

            {/* Centre dot on desktop */}
            <div className="hidden md:flex absolute left-1/2 top-1 -translate-x-1/2 flex-col items-center z-10">
                <div className="w-4 h-4 rounded-full border-2 border-[#1C2B4A] bg-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_0_6px_rgba(28,43,74,0.10)]" />
            </div>
        </motion.div>
    );
}

export default function JourneySection() {
    const { ref, isInView } = useReveal(0.1);

    return (
        <section id="journey" className="py-28 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-20"
                >
                    <p className="text-xs font-semibold tracking-[0.25em] text-[#1C2B4A] uppercase mb-4">
                        Career
                    </p>
                    <h2 className="text-4xl md:text-5xl font-light text-[#1C1C1C] tracking-tight leading-tight">
                        Professional <span className="font-semibold">Journey</span>
                    </h2>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Centre vertical line */}
                    <motion.div
                        initial={{ scaleY: 0 }}
                        animate={isInView ? { scaleY: 1 } : {}}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="hidden md:block absolute left-1/2 top-2 -translate-x-px w-px bg-gradient-to-b from-[#1C2B4A]/30 via-[#1C2B4A]/20 to-transparent origin-top"
                        style={{ height: "calc(100% - 10px)" }}
                    />

                    {timeline.map((item, i) => (
                        <TimelineItem key={i} item={item} index={i} isInView={isInView} />
                    ))}
                </div>
            </div>
        </section>
    );
}
