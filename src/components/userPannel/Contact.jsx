import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="w-full max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass-panel p-10 md:p-16 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00ff88] rounded-full blur-[100px] opacity-10 -z-10"></div>

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Let's Build Something <br />
          <span className="text-[#00ff88]">Intelligent.</span>
        </h2>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Have a project in mind? Looking for a developer who bridges the gap between design and engineering? I'm currently available for new opportunities.
        </p>

        <form
          action="https://script.google.com/macros/s/AKfycbyblDc1vLogN0GRGeDNDFmc2vOIxlWQ4R1prU5e2cKImpA-2VbujCG4HVF77EDgSSKH/exec"
          method="POST"
          className="flex flex-col gap-6 max-w-xl mx-auto mb-12 text-left"
          onSubmit={(e) => {
            e.preventDefault();
            const btn = e.target.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'Sending...';
            btn.disabled = true;

            const formData = new FormData(e.target);
            fetch(e.target.action, {
              method: 'POST',
              body: formData
            })
              .then(() => {
                btn.innerText = 'Message Sent!';
                btn.classList.add('bg-green-500', 'text-white');
                e.target.reset();
                setTimeout(() => {
                  btn.innerText = originalText;
                  btn.disabled = false;
                  btn.classList.remove('bg-green-500', 'text-white');
                }, 3000);
              })
              .catch(() => {
                btn.innerText = 'Error! Try Again';
                btn.disabled = false;
              });
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-gray-400 text-sm ml-2">Name</label>
              <input
                type="text"
                name="Name"
                required
                className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#00ff88] focus:bg-white/10 transition-all placeholder:text-gray-600"
                placeholder="RAM"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-gray-400 text-sm ml-2">Email</label>
              <input
                type="email"
                name="Email"
                required
                className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#00ff88] focus:bg-white/10 transition-all placeholder:text-gray-600"
                placeholder="Ram@example.com"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-400 text-sm ml-2">Message</label>
            <textarea
              name="Message"
              required
              rows="4"
              className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#00ff88] focus:bg-white/10 transition-all resize-none placeholder:text-gray-600"
              placeholder="Tell me about..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-2 w-full px-8 py-4 bg-[#00ff88] text-black font-bold rounded-xl hover:bg-white hover:scale-[1.02] transition-all duration-300 shadow-[0_0_20px_rgba(0,255,136,0.3)]"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 flex items-center justify-center gap-8">
          {/* Social Icons */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
            {/* GitHub */}
            <a href="https://github.com/harisharma12" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00ff88] hover:scale-110 transition-all text-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/hari-sharma-117765289/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00ff88] hover:scale-110 transition-all text-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            </a>

            {/* YouTube */}
            <a href="https://www.youtube.com/@Ramdut_H" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00ff88] hover:scale-110 transition-all text-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/harisharma800/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00ff88] hover:scale-110 transition-all text-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
            </a>

            {/* Email */}
            <a href="mailto:your.harisharma7037@gmail.com" className="text-gray-400 hover:text-[#00ff88] hover:scale-110 transition-all text-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;