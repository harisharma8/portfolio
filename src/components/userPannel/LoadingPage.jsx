import { SpinnerInfinity } from "spinners-react";
import * as motion from "motion/react-client";

const LoadingPage = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff88_1px,transparent_1px),linear-gradient(to_bottom,#00ff88_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-10"></div>

      {/* Neon Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#00ff88] rounded-full blur-[100px] opacity-20"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex flex-col items-center"
      >
        <div className="p-12 rounded-[3rem] bg-black/40 backdrop-blur-xl border border-[#00ff88]/30 shadow-[0_0_30px_rgba(0,255,136,0.1)] flex flex-col items-center">
          <SpinnerInfinity
            size="80"
            thickness={100}
            speed={120}
            color="#00ff88"
            secondaryColor="rgba(0, 255, 136, 0.1)"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="mt-8 flex flex-col items-center gap-3"
          >
            <span className="text-white font-bold tracking-[0.2em] text-xl uppercase drop-shadow-[0_0_10px_rgba(0,255,136,0.5)]">
              Loading
            </span>
            <div className="h-1 w-12 bg-[#00ff88] rounded-full"></div>
            <span className="text-[#00ff88] text-xs font-mono tracking-wider">
              System.Initialize()...
            </span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingPage;