import { Linkedin, Twitter, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark border-t border-muted">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold text-secondary">Destinex</h2>
          <p className="text-sm text-muted mt-1">
            © {new Date().getFullYear()} Destiny Ekhosuehi. All rights reserved.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary transition"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://twitter.com/@Superb_fan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary transition"
          >
            <Twitter size={20} />
          </a>
          <a
            href="https://instagram.com/georgecares_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-primary transition"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
