import * as motion from "motion/react-client";

const skillData = [
  { category: "Frontend", items: ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"] },
  { category: "Backend & DB", items: ["Node.js", "Express", "MongoDB", "Firebase"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "Postman", "Figma"] }
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Superpowers</h2>
          <p className="text-slate-500 text-lg">The tools and technologies I use to bring ideas to life.</p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillData.map((group, groupIdx) => (
            <motion.div 
              key={groupIdx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: groupIdx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100"
            >
              <h3 className="text-xl font-bold mb-6 text-indigo-600 border-b pb-2">
                {group.category}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.1, backgroundColor: "#4f46e5", color: "#fff" }}
                    className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-sm font-medium cursor-default transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;