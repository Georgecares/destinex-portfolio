import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaFigma,
  FaComments,
  FaLightbulb,
  FaUsers,
  FaUserCheck,
  FaHandsHelping,
  FaClipboardList,
  FaBrain,
} from "react-icons/fa";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";

const technicalSkills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind CSS", icon: <FaCss3Alt className="text-teal-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
  { name: "Responsive Design", icon: <FaFigma className="text-pink-500" /> },
  { name: "Git & GitHub", icon: <FaGitAlt className="text-red-500" /> },
];

const softSkills = [
  { name: "Communication", icon: <FaComments className="text-blue-500" /> },
  {
    name: "Strategic Planning",
    icon: <FaClipboardList className="text-indigo-500" />,
  },
  {
    name: "Problem Solving",
    icon: <FaLightbulb className="text-yellow-400" />,
  },
  { name: "Leadership", icon: <FaUsers className="text-red-500" /> },
  {
    name: "Team Collaboration",
    icon: <FaHandsHelping className="text-green-500" />,
  },
  {
    name: "Customer Relations",
    icon: <FaUserCheck className="text-pink-500" />,
  },
  {
    name: "Adaptability",
    icon: <HiOutlineSwitchHorizontal className="text-teal-500" />,
  },
  { name: "Critical Thinking", icon: <FaBrain className="text-purple-500" /> },
];

function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.section
      id="skills"
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="py-20 px-6 md:px-12 bg-white dark:bg-gray-900 text-center"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-secondary dark:text-white">
          Technical Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {technicalSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow hover:scale-105 transition-transform"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {skill.name}
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-secondary dark:text-white">
          Soft Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {softSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow hover:scale-105 transition-transform"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Skills;
