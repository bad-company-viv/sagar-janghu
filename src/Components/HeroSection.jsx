import { motion } from "framer-motion";

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center pt-24 pb-20 px-6 overflow-hidden"
        >
            {/* Subtle background grid */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(#1C1C1C 1px, transparent 1px), linear-gradient(90deg, #1C1C1C 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Accent blob */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle, rgba(28,43,74,0.06) 0%, transparent 70%)",
                }}
            />

            <div className="max-w-6xl mx-auto w-full">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Text */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="order-2 lg:order-1"
                    >
                        <motion.p
                            variants={fadeUp}
                            className="text-xs font-semibold tracking-[0.25em] text-[#1C2B4A] uppercase mb-6"
                        >
                            Real Estate & Finance Professional
                        </motion.p>

                        <motion.h1
                            variants={fadeUp}
                            className="text-5xl md:text-6xl lg:text-7xl font-light text-[#1C1C1C] leading-[1.1] tracking-tight mb-6"
                        >
                            Sagar
                            <br />
                            <span className="font-semibold">Janghu</span>
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            className="text-[#888] text-sm font-medium tracking-widest uppercase mb-8 border-l-2 border-[#1C2B4A] pl-4"
                        >
                            Real Estate Developer · Investment & Finance
                        </motion.p>

                        <motion.p
                            variants={fadeUp}
                            className="text-[#555] text-base md:text-lg leading-relaxed max-w-lg mb-10"
                        >
                            A real estate developer and investment professional with experience spanning finance, Real Estate Development, and construction across the real estate lifecycle. MBA from ESADE Business School and CFA Charterholder, bringing institutional expertise to premium real estate development in India. Serving as Joint Secretary of the Gurugram Home Developers Association (GHDA), advocating for industry growth and policy reforms.
                        </motion.p>

                        <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                            <a
                                href="#journey"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector("#journey")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="px-7 py-3 bg-[#1C2B4A] text-white text-sm font-medium rounded-full hover:bg-[#2a3d66] transition-all duration-300 hover:shadow-lg hover:shadow-[#1C2B4A]/20"
                            >
                                View Experience
                            </a>
                            <a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="px-7 py-3 border border-[#1C2B4A] text-[#1C2B4A] text-sm font-medium rounded-full hover:bg-[#1C2B4A] hover:text-white transition-all duration-300"
                            >
                                Connect
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Portrait */}
                    <motion.div
                        variants={fadeIn}
                        initial="hidden"
                        animate="visible"
                        className="order-1 lg:order-2 flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            {/* Decorative ring */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                                className="absolute -inset-4 rounded-full border border-[#1C2B4A]/10"
                            />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
                                className="absolute -inset-8 rounded-full border border-[#1C2B4A]/05"
                            />

                            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden relative bg-[#E8EDF4]">
                                <img
                                    src="/profile.webp"
                                    alt="Sagar Janghu portrait"
                                    className="w-full h-full object-cover"
                                    loading="eager"
                                    fetchPriority="high"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll cue */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-[10px] tracking-[0.2em] text-[#AAA] uppercase">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                        className="w-px h-8 bg-gradient-to-b from-[#AAA] to-transparent"
                    />
                </motion.div>
            </div>
        </section>
    );
}
