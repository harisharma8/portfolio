import { SpinnerInfinity } from "spinners-react";
import bgGif from "./img/bg.gif";
import * as motion from "motion/react-client";

const LoadingPage = () => {
  return (
    <div 
      className="h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bgGif})` }}
    >
      {/* Dark Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Spinner Container with Glass effect */}
        <div className="p-10 rounded-[3rem] bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl flex flex-col items-center">
          <SpinnerInfinity 
            size="80" 
            thickness={100} 
            speed={100} 
            color="#ef4444" 
            secondaryColor="rgba(255, 255, 255, 0.1)" 
          />
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mt-6 flex flex-col items-center"
          >
            <span className="text-white font-medium tracking-widest text-lg uppercase">
              Loading
            </span>
            <span className="text-gray-400 text-xs mt-2 font-light">
              Preparing your experience...
            </span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingPage;