import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "Omnifood Cares",
    description:
      "A modern food delivery website with responsive design and smooth animations.",
    link: "https://omnifood-cares.netlify.app",
    tools: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with React and Tailwind CSS.",
    link: "#",
    tools: ["React", "Tailwind"],
  },
  {
    title: "Weather App",
    description:
      "Fetches real-time weather data from an API. Built using HTML, CSS, and JS.",
    link: "#",
    tools: ["HTML", "JS", "API"],
  },
];

function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.section
      id="projects"
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="py-20 px-6 md:px-12 bg-background-light dark:bg-background-dark text-center"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-secondary">
          Projects
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-white/80 dark:bg-white/5 p-6 rounded-xl shadow hover:shadow-lg border border-muted transition duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold text-primary mb-2">
                {project.title}
              </h3>

              <p className="text-text-light dark:text-text-dark text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {project.tools.map((tool, toolIdx) => (
                  <span
                    key={toolIdx}
                    className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full border border-primary"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-secondary hover:underline text-sm font-medium transition"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
