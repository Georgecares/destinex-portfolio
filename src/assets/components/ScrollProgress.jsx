import { useScroll, motion } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary origin-left z-[9999]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

export default ScrollProgress;
