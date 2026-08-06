import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

// Masked line-by-line reveal
export const RevealLines = ({ lines, className = "", delay = 0 }) => (
  <span className="block">
    {lines.map((line, i) => (
      <span key={i} className="block overflow-hidden">
        <motion.span
          className={`block ${className}`}
          initial={{ y: "110%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1.1, ease: EASE, delay: delay + i * 0.12 }}
        >
          {line}
        </motion.span>
      </span>
    ))}
  </span>
);

// Scroll-triggered fade/rise
export const Reveal = ({ children, className = "", delay = 0, y = 40 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.9, ease: EASE, delay }}
  >
    {children}
  </motion.div>
);
