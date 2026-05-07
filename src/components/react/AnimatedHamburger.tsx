import { motion } from "framer-motion";
import React from "react";

type AnimatedHamburgerProps = { isOpen: boolean; toggle: () => void };

const AnimatedHamburger = ({ isOpen, toggle }: AnimatedHamburgerProps) => {
  const topLineVariants = {
    closed: {
      rotate: 0,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.15,
      },
    },
    open: {
      rotate: 45,
      y: 10,
      transition: {
        y: { duration: 0.05, ease: "easeOut" },
        rotate: { delay: 0.05, duration: 0.15, ease: [0.4, 0.0, 0.2, 1] },
      },
    },
  };

  const middleLineVariants = {
    closed: {
      opacity: 1,
      transition: {
        ease: "easeIn",
        duration: 0.4,
      },
    },
    open: {
      opacity: 0,
      transition: {
        duration: 0.05,
        ease: "easeIn",
      },
    },
  };

  const bottomLineVariants = {
    closed: {
      rotate: 0,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.2,
      },
    },
    open: {
      rotate: -45,
      y: -10, // Adjusted for three lines
      transition: {
        y: { duration: 0.1, ease: "easeOut" },
        rotate: { delay: 0.05, duration: 0.2, ease: [0.4, 0.0, 0.2, 1] },
      },
    },
  };
  return (
    <button
      onClick={toggle}
      className="z-50 cursor-pointer rounded-full border-2 border-white/50 bg-black/40 p-2 transition hover:scale-105 hover:border-db-green hover:bg-db-pink focus:outline-none focus:ring-4 focus:ring-db-green/30 lg:p-3"
      aria-label="Toggle navigation menu"
    >
      <motion.div
        className="group flex h-10 w-12 flex-col items-center justify-center rounded-full transition-colors duration-200 focus:outline-none lg:h-12 lg:w-14"
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          variants={topLineVariants}
          animate={isOpen ? "open" : "closed"}
          className="mb-2 h-[3px] w-10 rounded-full bg-white shadow-sm shadow-black/40 lg:w-11"
        />
        <motion.span
          variants={middleLineVariants}
          animate={isOpen ? "open" : "closed"}
          className="mb-2 h-[3px] w-10 self-end rounded-full bg-db-green shadow-sm shadow-black/40 transition-all duration-200 group-hover:w-6 lg:w-11"
        />

        <motion.span
          variants={bottomLineVariants}
          animate={isOpen ? "open" : "closed"}
          className="h-[3px] w-10 rounded-full bg-white shadow-sm shadow-black/40 lg:w-11"
        />
      </motion.div>
    </button>
  );
};

export default AnimatedHamburger;
