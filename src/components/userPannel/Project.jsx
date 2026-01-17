import * as motion from "motion/react-client";

const Project = () => {
  return (
    // pt-32 ensure karta hai ki content navbar ke niche se shuru ho
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 md:px-6 pt-32 md:pt-40">
      <div className="relative w-full max-w-4xl">
        
        {/* Decorative Background Blur - Responsive sizes */}
        <div className="absolute -top-10 -left-10 w-32 h-32 md:w-64 md:h-64 bg-indigo-500/20 rounded-full blur-2xl md:blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 md:w-64 md:h-64 bg-red-500/20 rounded-full blur-2xl md:blur-3xl animate-pulse"></div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 text-center shadow-2xl"
        >
          {/* Animated Construction Emoji */}
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="text-5xl md:text-7xl mb-4 md:mb-6 inline-block"
          >
            🚧
          </motion.div>

          {/* Responsive Heading based on your CV profile */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter leading-tight uppercase">
            CRAFTING <span className="text-indigo-400 font-serif italic">Greatness</span>
          </h1>
          
          {/* Summary Text */}
          <p className="text-gray-300 text-base md:text-xl max-w-md mx-auto font-light leading-relaxed">
            I'm currently developing high-performance 
            <span className="text-indigo-300"> Full Stack & AI</span> projects. 
            They'll be live soon—stay tuned!
          </p>

          {/* Coming Soon Badge */}
          <div className="flex justify-center overflow-hidden">
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 px-6 md:px-10 py-2 md:py-3 bg-indigo-600 text-white text-xs md:text-sm font-bold rounded-full uppercase tracking-widest shadow-lg shadow-indigo-500/20"
            >
              Coming Soon
            </motion.div>
          </div>

          {/* Blurred Project Placeholders - Grid is now responsive */}
          <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 opacity-20 select-none">
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.05 }}
                className="h-24 md:h-32 bg-gray-800 rounded-xl md:rounded-2xl border border-white/10 shadow-inner"
              ></motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default Project;