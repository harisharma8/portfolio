import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Terminal = () => {
    const [text, setText] = useState("");
    const fullText = `> const hari = new Developer();
> hari.location = "Jaipur, India";
> hari.education = "B.Tech CSE (2nd Year)";
> hari.skills = ["Full Stack", "AI/ML", "DSA"];
> hari.passion = "Solving real-world problems";
> console.log(hari.intro());
"Hello! I am an enthusiastic learner eager to leverage my skills in a challenging role."`;

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) clearInterval(interval);
        }, 30);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full max-w-3xl mx-auto my-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/10 shadow-2xl"
            >
                {/* Terminal Header */}
                <div className="bg-[#1a1a1a] px-4 py-2 flex items-center gap-2 border-b border-white/5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-2 text-xs text-gray-400 font-mono">hari@portfolio:~</span>
                </div>

                {/* Terminal Body */}
                <div className="p-6 font-mono text-sm md:text-base min-h-[200px]">
                    <pre className="whitespace-pre-wrap text-gray-300">
                        {text}
                        <span className="inline-block w-2.5 h-5 bg-[#00ff88] ml-1 animate-pulse align-middle"></span>
                    </pre>
                </div>
            </motion.div>
        </div>
    );
};

export default Terminal;
