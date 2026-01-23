import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment gateway integration, user authentication, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
    github: "#"
  },
  {
    title: "Portfolio Website",
    description: "A modern, highly interactive portfolio website featuring dark mode, animations, and responsive design.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    link: "#",
    github: "#"
  },
  // Add more projects
];

const Project = () => {
  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-6">
          Featured <span className="text-[#00ff88]">Projects</span>
        </h2>
        <div className="h-1 w-20 bg-[#00ff88] rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-panel p-8 rounded-3xl group hover:border-[#00ff88]/50 transition-all duration-300 relative overflow-hidden"
          >
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-[#00ff88]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-white group-hover:text-[#00ff88] transition-colors">{project.title}</h3>
                <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6 flex-grow">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs font-medium text-[#00ff88] bg-[#00ff88]/10 px-3 py-1 rounded-full border border-[#00ff88]/20">
                    {t}
                  </span>
                ))}
              </div>

              <a href={project.link} className="inline-flex items-center gap-2 text-white font-medium hover:gap-3 transition-all">
                View Project <span className="text-[#00ff88]">→</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;