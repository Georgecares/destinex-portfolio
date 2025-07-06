import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur border-b border-muted shadow-sm"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-primary">
          Destinex<span className="text-text-light dark:text-text-dark">.</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-text-light dark:text-text-dark hover:text-primary transition"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-text-light dark:text-text-dark"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.ul
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="md:hidden bg-background-light dark:bg-background-dark px-6 py-4 space-y-4"
        >
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="block text-text-light dark:text-text-dark hover:text-primary transition"
                onClick={() => setOpen(false)}
              >
                {link}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
}

export default Navbar;
