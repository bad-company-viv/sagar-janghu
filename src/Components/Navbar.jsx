import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Journey", href: "#journey" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <a
                    href="#"
                    onClick={(e) => handleNavClick(e, "body")}
                    className="text-[#1C1C1C] font-semibold text-6xl tracking-tight"
                >
                    SJ
                </a>

                {/* Desktop */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            onClick={(e) => handleNavClick(e, l.href)}
                            className="text-sm text-[#555] hover:text-[#1C1C1C] transition-colors duration-200 tracking-wide"
                        >
                            {l.label}
                        </a>
                    ))}
                    <a
                        href="mailto:sagarjanghu@gmail.com"
                        className="text-sm bg-[#1C2B4A] text-white px-5 py-2 rounded-full hover:bg-[#2a3d66] transition-colors duration-200 tracking-wide"
                    >
                        Connect
                    </a>
                </div>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden flex flex-col gap-1.5 p-1"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <motion.span
                        animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                        className="block w-5 h-0.5 bg-[#1C1C1C]"
                    />
                    <motion.span
                        animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                        className="block w-5 h-0.5 bg-[#1C1C1C]"
                    />
                    <motion.span
                        animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                        className="block w-5 h-0.5 bg-[#1C1C1C]"
                    />
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4"
                    >
                        {links.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                onClick={(e) => handleNavClick(e, l.href)}
                                className="text-sm text-[#555] hover:text-[#1C1C1C] transition-colors py-1"
                            >
                                {l.label}
                            </a>
                        ))}
                        <a
                            href="mailto:sagarjanghu@gmail.com"
                            className="text-sm bg-[#1C2B4A] text-white px-5 py-2 rounded-full text-center"
                        >
                            Connect
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}