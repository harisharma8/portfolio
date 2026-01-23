import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Tech Solutions Inc.",
      period: "June 2024 - Present",
      description: "Developing scalable web applications using the MERN stack. Collaborating with cross-functional teams to deliver high-quality software solutions.",
      tech: ["React", "Node.js", "MongoDB", "Redux"]
    },
    // Add more experiences here if needed
  ];

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-6">
          Work <span className="text-[#00ff88]">Experience</span>
        </h2>
        <div className="h-1 w-20 bg-[#00ff88] rounded-full"></div>
      </motion.div>

      <div className="relative border-l border-white/10 ml-4 md:ml-10 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[5px] top-0 w-3 h-3 rounded-full bg-[#00ff88] shadow-[0_0_10px_#00ff88]"></div>

            <div className="glass-panel p-8 rounded-3xl border-l-4 border-l-[#00ff88]">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  <p className="text-[#00ff88] font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-400 mt-2 md:mt-0 font-mono border border-white/10 px-3 py-1 rounded-full">{exp.period}</span>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, idx) => (
                  <span key={idx} className="text-xs font-medium text-gray-400 bg-white/5 px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;