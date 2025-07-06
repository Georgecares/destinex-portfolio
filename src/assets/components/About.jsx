import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.section
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="py-20 px-6 md:px-12 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">
          About Me
        </h2>
        <p className="text-base md:text-lg text-gray-700 dark:text-muted leading-relaxed">
          I'm{" "}
          <span className="font-semibold text-secondary">
            Destiny Ekhosuehi
          </span>
          , a passionate frontend developer with a focus on building accessible,
          user-friendly, and responsive web interfaces using modern technologies
          like <span className="text-primary font-medium">React</span> and{" "}
          <span className="text-primary font-medium">Tailwind CSS</span>. I
          enjoy solving real-world problems through code and transforming ideas
          into interactive, elegant solutions.
        </p>
      </div>
    </motion.section>
  );
}

export default About;
