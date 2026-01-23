import { motion } from "framer-motion";
import userImg from "./img/userImg.png";
import Terminal from "./Terminal";

const Home = () => {
  return (
    <div className="w-full relative z-10 flex flex-col gap-16">
      {/* Top Section: Hero Text & Image */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00ff88]/30 bg-[#00ff88]/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse"></span>
            <span className="text-sm font-medium text-[#00ff88] tracking-wide uppercase">Available for New Projects</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.1]"
          >
            Building <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Digital</span>
            <span className="text-[#00ff88] drop-shadow-[0_0_15px_rgba(0,255,136,0.3)]"> Experiences</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed font-light"
          >
            I'm <span className="text-white font-medium">Hari Sharma</span>, a Full Stack Developer specializing in building exceptional digital products. I transform complex problems into beautiful, intuitive interfaces.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center md:justify-start gap-6"
          >
            <a
              href="#project"
              className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-[#00ff88] hover:shadow-[0_0_30px_rgba(0,255,136,0.4)] transition-all duration-300 transform hover:-translate-y-1"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-full hover:border-[#00ff88] hover:text-[#00ff88] transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right Image/Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative group w-full max-w-md mx-auto"
        >
          {/* Glow Effect */}
          <div className="absolute -inset-4 bg-[#00ff88] rounded-full blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

          <div className="relative aspect-square rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#00ff88]/50 transition-colors duration-500">
            <img
              src={userImg}
              alt="Hari Sharma"
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 p-3 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl rounded-bl-none transform translate-x-1/4 -translate-y-1/4 animate-bounce delay-1000">
            <span className="text-2xl">💻</span>
          </div>
          <div className="absolute bottom-0 left-0 p-3 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl rounded-tr-none transform -translate-x-1/4 translate-y-1/4 animate-bounce">
            <span className="text-2xl">⚡</span>
          </div>
        </motion.div>
      </div>

      {/* Terminal Feature - correctly placed below */}
      <div className="w-full max-w-4xl mx-auto px-4 relative z-20">
        <Terminal />
      </div>
    </div>
  );
};

export default Home;