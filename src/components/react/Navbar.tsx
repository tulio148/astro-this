import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedHamburger from "./AnimatedHamburger";
import { ChevronRight } from "lucide-react";
import React from "react";
import logoNoBg from "../../images/icon/logoNoBg.webp";
import Picture from "astro/components/Picture.astro";

const navbarVariants = {
  hidden: { y: -80, opacity: 0, transition: { duration: 0.01 } },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 340, damping: 30 },
  },
};

const menuVariants = {
  closed: {
    opacity: 0,
    clipPath: "circle(30px at calc(100% - 40px) 40px)",
    transition: {
      duration: 0.05,
    },
  },
  open: {
    opacity: 1,
    clipPath: "circle(150% at calc(100% - 40px) 40px)",
    transition: {
      duration: 0.1,
      when: "beforeChildren",
      staggerChildren: 0.015,
    },
  },
};
const itemVariants = {
  closed: { opacity: 0, scaleY: 0.1, transition: { duration: 0.2 } },
  open: {
    opacity: 1,
    scaleY: 1,
    originY: 1,
    transition: { duration: 0.1 },
  },
};

// Navigation links with corresponding paths
const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Classes", path: "/classes" },
  { name: "Costume Hire", path: "/costume-hire" },
  { name: "Show for Hire", path: "/show-for-hire" },
];

// Props for navigation with client:only
type NavbarProps = {
  currentPath?: string;
};

const Navbar = ({ currentPath }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Toggle menu
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setHasScrolled(false);
  };

  return (
    <motion.nav
      className={"fixed top-0 left-0 px-6 py-4 right-0 bg-db-pink z-50"}
      initial="hidden"
      animate={hasScrolled ? "visible" : "hidden"}
      variants={navbarVariants}
    >
      <div className="container mx-auto sm:px-16">
        <div className="flex justify-between items-center h-12">
          <a href="/" className="text-xl font-bold text-gray-800">
            <picture>
              <source
                srcSet={logoNoBg.src}
                media="(max-width: 480px)"
                width="30"
                height="20"
              />
              <source
                srcSet={logoNoBg.src}
                media="(max-width: 768px)"
                width="50"
                height="30"
              />
              <img
                src={logoNoBg.src}
                alt="Dance Bloc Brazil Logo"
                className="mx-auto h-auto w-[70px] lg:w-[70px]"
                width={70}
                height={40}
              />
            </picture>
          </a>
          <AnimatedHamburger isOpen={isMenuOpen} toggle={toggleMenu} />
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-db-pink flex flex-col items-center justify-center z-40 "
          >
            <div className="flex flex-col justify-center h-full w-full px-10 max-w-4xl">
              <motion.div variants={itemVariants} className="mb-12">
                <a href="/" onClick={handleLinkClick}>
                  <img
                    src={logoNoBg.src}
                    alt="Dance Bloc Brazil Logo"
                    width={150}
                    height={100}
                    className=""
                  />
                </a>
              </motion.div>

              {NAV_LINKS.map(({ name, path }) => (
                <motion.div key={name} variants={itemVariants} className="mb-6">
                  <a
                    className="flex items-center w-fit"
                    href={path}
                    onClick={handleLinkClick}
                  >
                    <button className="flex items-center text-left justify-between gap-2 text-4xl font-thin tracking-wider text-white transition-colors cursor-pointer">
                      {name}{" "}
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <ChevronRight
                          className="w-5 h-5"
                          strokeWidth={"1px"}
                          size={48}
                        />
                      </motion.div>
                    </button>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
