import * as motion from "motion/react-client";
import userImg from "./img/userImg.png";
import { Link } from "react-router-dom";

let Home = () => {
  return (
    <div className="relative z-10 min-h-[85vh] flex flex-col items-center justify-center px-6 pt-32 md:pt-40">
      
      {/* Profile Image Section */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
        className="relative mb-10"
      >
        {/* Glow effect for better visibility */}
        <div className="absolute inset-0 bg-indigo-500 rounded-full blur-[100px] opacity-30 -z-10 animate-pulse"></div>
        <img 
          src={userImg} 
          alt="Hari Sharma" 
          className="relative w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-white/10 shadow-2xl object-cover"
        />
      </motion.div>

      {/* Main Glassmorphism Card for Text */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="max-w-5xl bg-black/30 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[3rem] shadow-2xl"
      >
        <div className="space-y-6">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-indigo-400 font-mono tracking-[0.3em] text-xs md:text-sm uppercase drop-shadow-md"
          >
            B.Tech Computer Science • 2nd Year
          </motion.p>

          <motion.h1
            className="text-white text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05] drop-shadow-2xl"
          >
            Full Stack <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-blue-500">
              & AI Developer.
            </span>
          </motion.h1>

          <motion.p
            className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light drop-shadow-sm"
          >
            Hi, I'm <span className="text-white font-semibold">Hari Sharma</span>. 
            I build scalable web apps with <span className="text-indigo-300">React, Node, and Python</span>. 
            Passionate about **Data Structures & Algorithms**.
          </motion.p>
          
          {/* Aligned Buttons */}
          <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-5">
            <Link to="/project" className="w-full md:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:px-12 py-4 bg-white text-black rounded-2xl font-bold shadow-xl hover:bg-gray-200 transition-all"
              >
                See Projects
              </motion.button>
            </Link>

            <a href="https://github.com/harisharma12" target="_blank" rel="noreferrer" className="w-full md:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:px-12 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-bold hover:bg-white/20 transition-all"
              >
                GitHub Profile
              </motion.button>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;