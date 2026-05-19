import { motion } from "framer-motion";
import React from "react";

type AnimatedHamburgerProps = { isOpen: boolean; toggle: () => void };

const AnimatedHamburger = ({ isOpen, toggle }: AnimatedHamburgerProps) => {
  const topLineVariants = {
    closed: {
      rotate: 0,
      x: "-50%",
      y: -8,
      transition: {
        ease: "easeOut",
        duration: 0.15,
      },
    },
    open: {
      rotate: 45,
      x: "-50%",
      y: 0,
      transition: {
        y: { duration: 0.05, ease: "easeOut" },
        rotate: { delay: 0.05, duration: 0.15, ease: [0.4, 0.0, 0.2, 1] },
      },
    },
  };

  const middleLineVariants = {
    closed: {
      opacity: 1,
      x: "-50%",
      y: 0,
      transition: {
        ease: "easeIn",
        duration: 0.4,
      },
    },
    open: {
      opacity: 0,
      x: "-50%",
      y: 0,
      transition: {
        duration: 0.05,
        ease: "easeIn",
      },
    },
  };

  const bottomLineVariants = {
    closed: {
      rotate: 0,
      x: "-50%",
      y: 8,
      transition: {
        ease: "easeOut",
        duration: 0.2,
      },
    },
    open: {
      rotate: -45,
      x: "-50%",
      y: 0,
      transition: {
        y: { duration: 0.1, ease: "easeOut" },
        rotate: { delay: 0.05, duration: 0.2, ease: [0.4, 0.0, 0.2, 1] },
      },
    },
  };
  return (
    <button
      onClick={toggle}
      className={`z-50 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full transition duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-db-green/35 lg:h-16 lg:w-16 ${
        isOpen
          ? "bg-db-pink text-white"
          : "bg-slate-950/58 text-white hover:bg-db-pink/90"
      }`}
      aria-label="Toggle navigation menu"
      aria-expanded={isOpen}
    >
      <motion.div
        className="group relative h-10 w-10 rounded-full transition-colors duration-200 focus:outline-none lg:h-11 lg:w-11"
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          variants={topLineVariants}
          animate={isOpen ? "open" : "closed"}
          className="absolute left-1/2 top-1/2 h-[3px] w-7 rounded-full bg-white/90 shadow-sm shadow-slate-950/50 lg:w-8"
        />
        <motion.span
          variants={middleLineVariants}
          animate={isOpen ? "open" : "closed"}
          className="absolute left-1/2 top-1/2 h-[3px] w-7 rounded-full bg-db-green/90 shadow-sm shadow-slate-950/50 transition-all duration-200 group-hover:w-6 lg:w-8"
        />

        <motion.span
          variants={bottomLineVariants}
          animate={isOpen ? "open" : "closed"}
          className="absolute left-1/2 top-1/2 h-[3px] w-7 rounded-full bg-white/90 shadow-sm shadow-slate-950/50 lg:w-8"
        />
      </motion.div>
    </button>
  );
};

export default AnimatedHamburger;
