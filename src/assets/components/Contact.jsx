import { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { Mail, User, MessageCircle } from "lucide-react";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    honey: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.honey) return; // Spam bot detected

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("All fields are required.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("https://formspree.io/f/mdkzvddp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "", honey: "" });
      } else {
        toast.error("Something went wrong.");
      }
    } catch {
      toast.error("Network error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-6 md:px-12 bg-background-light dark:bg-background-dark"
    >
      <Toaster position="top-center" />

      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
          Contact Me
        </h2>
        <p className="text-muted dark:text-muted mb-10">
          I'd love to hear from you! Fill the form below to get in touch.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <input
            type="text"
            name="honey"
            className="hidden"
            autoComplete="off"
            tabIndex="-1"
          />
          <div className="relative">
            <User className="absolute left-3 top-3 text-muted" size={18} />
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full pl-10 py-3 rounded-lg border border-muted bg-white/80 dark:bg-white/10 text-text-light dark:text-text-dark outline-none focus:ring-2 focus:ring-primary transition"
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-muted" size={18} />
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full pl-10 py-3 rounded-lg border border-muted bg-white/80 dark:bg-white/10 text-text-light dark:text-text-dark outline-none focus:ring-2 focus:ring-primary transition"
            />
          </div>
          <div className="relative">
            <MessageCircle
              className="absolute left-3 top-3 text-muted"
              size={18}
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className="w-full pl-10 py-3 rounded-lg border border-muted bg-white/80 dark:bg-white/10 text-text-light dark:text-text-dark outline-none focus:ring-2 focus:ring-primary transition resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-secondary text-white font-medium py-3 rounded-lg transition flex items-center justify-center gap-2"
          >
            {loading && (
              <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
            )}
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </motion.section>
  );
}

export default Contact;
