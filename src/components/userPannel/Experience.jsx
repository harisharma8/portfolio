import Masonry from "react-masonry-css";
import "./styles.css";
import * as motion from "motion/react-client";

const images = [
  "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=500", // React
  "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?q=80&w=500", // Frontend
  "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=500", // Coding
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=500", // JS
  "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=500", // Dev
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=500", // Laptop
];

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
};

const Experience = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-black text-white mb-4">Experience Gallery</h2>
        <p className="text-gray-400">A visual look at my journey and technical milestones.</p>
      </motion.div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="card group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
          >
            <motion.img
              src={src}
              alt={`milestone-${index}`}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <p className="text-white font-medium text-sm">Project Milestone #{index + 1}</p>
            </div>
          </motion.div>
        ))}
      </Masonry>
    </div>
  );
};

export default Experience;