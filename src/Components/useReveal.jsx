import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const useReveal = (threshold = 0.1) => {
    const controls = useAnimation();
    const [ref, isInView] = useInView({ threshold, triggerOnce: true });

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [controls, isInView]);

    return { ref, controls, isInView };
};
