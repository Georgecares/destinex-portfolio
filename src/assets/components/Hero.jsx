import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-background-light dark:bg-background-dark transition-colors duration-300"
    >
      <motion.img
        src="https://ui-avatars.com/api/?name=Destiny+Ekhosuehi&background=6E7DAB&color=fff&size=200"
        alt="Profile"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-6 border-4 border-white dark:border-muted shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      />

      <motion.h1
        className="text-4xl md:text-5xl font-bold text-text-light dark:text-text-dark mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        Destiny Ekhosuehi
      </motion.h1>

      <motion.h2
        className="text-xl md:text-2xl text-primary font-semibold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        Frontend Developer
      </motion.h2>

      <motion.p
        className="text-gray-700 dark:text-muted text-base md:text-lg max-w-2xl mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        I craft modern, responsive, and interactive user experiences using
        React, Tailwind CSS, and the latest web technologies.
      </motion.p>

      <motion.a
        href="mailto:ekhosuehidestiny037@gmail.com"
        className="inline-block bg-primary text-white dark:text-white px-6 py-3 rounded-full text-base font-medium shadow hover:bg-secondary dark:hover:bg-secondary transition duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Contact Me
      </motion.a>
    </section>
  );
}

export default Hero;
