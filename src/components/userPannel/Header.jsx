import { Link } from "react-router-dom";
import userImg from "./img/userImg.png";
import { useState } from "react";
import * as motion from "motion/react-client";
import { useScroll, AnimatePresence } from "framer-motion";

const Header = () => {
  const { scrollYProgress } = useScroll();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/project" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-4 left-0 right-0 z-50">
      <div className="backdrop-blur-md bg-white/70 border border-white/20 px-6 py-2 rounded-full shadow-lg w-[95%] md:w-fit mx-auto transition-all duration-300">
        
        <div className="flex items-center justify-between gap-12">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <motion.img 
              whileHover={{ scale: 1.1 }}
              className="w-10 h-10 rounded-full border border-gray-200" 
              src={userImg} 
              alt="Logo" 
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                className="text-sm font-medium text-slate-600 hover:text-black transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-slate-700"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Animated Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden flex flex-col gap-4 py-4 text-center border-t border-gray-100 mt-2"
            >
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  onClick={() => setOpen(false)} 
                  to={link.path}
                  className="text-slate-600 font-medium hover:text-black"
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scroll Progress Bar */}
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="absolute bottom-0 left-6 right-6 h-[2px] bg-indigo-600 origin-left rounded-full"
        />
      </div>
    </nav>
  );
};

export default Header;