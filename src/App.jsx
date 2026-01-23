import { useEffect, useState } from "react";
import Header from "./components/userPannel/Header";
import Home from "./components/userPannel/Home";
import About from "./components/userPannel/About";
import Skills from "./components/userPannel/Skills";
import Experience from "./components/userPannel/Experience";
import Project from "./components/userPannel/Project";
import Contact from "./components/userPannel/contact";
import LoadingPage from "./components/userPannel/LoadingPage";
import Footer from "./components/userPannel/Footer";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return loading ? (
        <LoadingPage />
    ) : (
        <div className="bg-black text-white min-h-screen font-sans selection:bg-[#00ff88] selection:text-black bg-grid-pattern">
            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-24 pb-20 pt-20">
                <section id="home" className="min-h-screen flex items-center justify-center">
                    <Home />
                </section>

                <section id="about" className="scroll-mt-24">
                    <About />
                </section>

                <section id="skills" className="scroll-mt-24">
                    <Skills />
                </section>

                <section id="experience" className="scroll-mt-24">
                    <Experience />
                </section>

                <section id="project" className="scroll-mt-24">
                    <Project />
                </section>

                <section id="contact" className="scroll-mt-24 mb-20">
                    <Contact />
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default App;