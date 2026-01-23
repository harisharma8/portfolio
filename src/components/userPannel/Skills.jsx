import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Frontend",
    skills: ["React.js", "Tailwind CSS", "Redux", "HTML5/CSS3", "Framer Motion", "JavaScript (ES6+)"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Python", "SQL"]
  },
  {
    category: "Tools & Others",
    skills: ["Git/GitHub", "VS Code", "Postman", "Vercel/Netlify", "Docker", "Figma"]
  }
];

const Skills = () => {
  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-6">
          My <span className="text-[#00ff88]">Skills</span>
        </h2>
        <div className="h-1 w-20 bg-[#00ff88] rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-panel p-8 rounded-3xl hover:border-[#00ff88]/30 transition-all duration-300 hover:-translate-y-2"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#00ff88] rounded-full"></span>
              {category.category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:bg-[#00ff88]/10 hover:border-[#00ff88]/50 hover:text-[#00ff88] transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;