import "./App.css";
import Hero from "./assets/components/Hero";
import About from "./assets/components/About";
import Navbar from "./assets/components/Navbar";
import Skills from "./assets/components/Skills";
import Projects from "./assets/components/Projects";
import Contact from "./assets/components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./assets/components/Footer";
import ScrollToTop from "./assets/components/ScrollToTop";
import ScrollProgress from "./assets/components/ScrollProgress";
import DarkModeToggle from "./assets/components/DarkModeToggle";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      <Toaster position="top-right" reverseOrder={false} />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop />
      <DarkModeToggle />
    </div>
  );
}

export default App;
