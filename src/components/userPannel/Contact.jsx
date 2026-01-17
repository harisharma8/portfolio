import { useState } from "react";
import * as motion from "framer-motion";

const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    
    const formData = new FormData(e.target);
    const scriptURL = "https://script.google.com/macros/s/AKfycbxQPkxJe0bvouEOiVU-2SycTjqTXCuILYnf3YgWiEZjvmm5oNZSJDwY-WCUo5wvdVv-/exec"; // Paste your Web App URL here

    try {
      await fetch(scriptURL, { method: "POST", body: formData });
      setStatus("Message Sent!");
      e.target.reset();
    } catch (error) {
      setStatus("Error! Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center pt-20">
      <form onSubmit={handleSubmit} className="bg-white/5 p-8 rounded-3xl border border-white/10 flex flex-col gap-4 w-full max-w-md">
        <input name="name" type="text" placeholder="Your Name" required className="p-4 rounded-xl bg-white/10 outline-none" />
        <input name="email" type="email" placeholder="Your Email" required className="p-4 rounded-xl bg-white/10 outline-none" />
        <textarea name="message" placeholder="Your Message" required className="p-4 rounded-xl bg-white/10 outline-none h-32" />
        <button type="submit" className="bg-indigo-600 p-4 rounded-xl font-bold">{status || "Send Message"}</button>
      </form>
    </div>
  );
};

export default Contact;