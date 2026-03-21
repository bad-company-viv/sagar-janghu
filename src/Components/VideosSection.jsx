import { motion } from "framer-motion";
import { useReveal } from "./useReveal";

const videos = [
    {
        title: "Anantham Journey",
        videoUrl: "/videos/anantham-journey.mp4",
        description: "Discover the vision and journey behind Anantham Projects - creating premium residential communities.",
    },
    {
        title: "Delhi-Gurgaon Real Estate Insights",
        videoUrl: "/videos/delhi-gurgaon-expensive.mp4",
        description: "Understanding the real estate market dynamics and pricing trends in Delhi-Gurgaon region.",
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

export default function VideosSection() {
    const { ref, isInView } = useReveal();

    return (
        <section id="videos" className="py-28 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-16 text-center"
                >
                    <p className="text-xs font-semibold tracking-[0.25em] text-[#1C2B4A] uppercase mb-4">
                        Insights
                    </p>
                    <h2 className="text-4xl md:text-5xl font-light text-[#1C1C1C] tracking-tight leading-tight">
                        Video <span className="font-semibold">Content</span>
                    </h2>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-6">
                    {videos.map((video, i) => (
                        <motion.div
                            key={i}
                            custom={i}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={cardVariants}
                            whileHover={{ y: -6, transition: { duration: 0.3 } }}
                            className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-[#1C2B4A]/20 hover:shadow-xl hover:shadow-[#1C2B4A]/5 transition-all duration-300 w-full max-w-sm"
                        >
                            <div className="relative aspect-[9/16] bg-gray-100 overflow-hidden">
                                <video
                                    controls
                                    className="w-full h-full object-cover"
                                    poster="/Anantham.png"
                                >
                                    <source src={video.videoUrl} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-[#1C1C1C] mb-2">
                                    {video.title}
                                </h3>
                                <p className="text-sm text-[#777] leading-relaxed">
                                    {video.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
