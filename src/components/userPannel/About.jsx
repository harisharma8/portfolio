import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-6">
                    About <span className="text-[#00ff88]">Me</span>
                </h2>
                <div className="h-1 w-20 bg-[#00ff88] rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="glass-panel p-8 rounded-3xl"
                >
                    <p className="text-gray-300 leading-relaxed text-lg mb-6">
                        I am a passionate <span className="text-[#00ff88] font-medium">Computer Science Engineer</span> with a deep love for problem-solving and building scalable web applications.
                    </p>
                    <p className="text-gray-300 leading-relaxed text-lg mb-6">
                        My journey started with C++ and Data Structures, eventually evolving into full-stack development. I enjoy bridging the gap between engineering and design — combining my technical knowledge with my keen eye for aesthetics to create a beautiful product.
                    </p>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        When I'm not coding, I'm likely exploring new AI tools, contributing to open source, or solving algorithmic challenges on LeetCode.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                    {[
                        { count: "00", label: "Years Experience" },
                        { count: "02+", label: "Projects Completed" },
                        { count: "01+", label: "Happy Clients" },
                        { count: "10+", label: "DSA Problems" }
                    ].map((stat, index) => (
                        <div key={index} className="glass-panel p-6 rounded-2xl flex flex-col justify-center items-center text-center hover:border-[#00ff88]/50 transition-colors duration-300 group">
                            <h3 className="text-4xl font-bold text-white mb-2 group-hover:text-[#00ff88] transition-colors">{stat.count}</h3>
                            <p className="text-gray-400 text-sm">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default About;