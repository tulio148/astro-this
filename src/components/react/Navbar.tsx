import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedHamburger from "./AnimatedHamburger";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import React from "react";
import logoNoBg from "../../images/icon/logoNoBg.webp";

const menuVariants = {
  closed: {
    opacity: 0,
    y: -12,
    transition: {
      duration: 0.12,
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.16,
      when: "beforeChildren",
      staggerChildren: 0.025,
    },
  },
};
const itemVariants = {
  closed: { opacity: 0, y: 12, transition: { duration: 0.12 } },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.16 },
  },
};

// Navigation links with corresponding paths
const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Classes", path: "/samba-classes-perth" },
  { name: "Workshops", path: "/private-samba-workshops-perth" },
  { name: "Book a Show", path: "/book-a-samba-show-perth" },
  { name: "Costume Hire", path: "/samba-costume-hire-perth" },
  { name: "About", path: "/about" },
];

const CTA_LINKS = [
  { name: "Book a Class", path: "/samba-classes-perth#class-times" },
  { name: "Request a Quote", path: "/#contact" },
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

  useEffect(() => {
    document.documentElement.style.overflow = isMenuOpen ? "hidden" : "";
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setHasScrolled(false);
  };

  return (
    // <motion.nav
    //   className={"fixed top-0 left-0 px-6 py-4 right-0 bg-db-pink z-50"}
    //   initial="hidden"
    //   animate={hasScrolled ? "visible" : "hidden"}
    //   variants={navbarVariants}
    // >
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-colors duration-300 ${
        isMenuOpen
          ? "bottom-0 overflow-y-auto bg-gradient-to-br from-slate-950 via-db-pink to-slate-950 text-white"
          : hasScrolled
            ? "bg-db-pink/92 shadow-lg backdrop-blur-md"
            : "bg-transparent"
      }`}
    >
      <div className="relative z-50 mx-auto max-w-7xl px-4 py-4 sm:px-6">
        <div className="flex justify-between items-center h-12">
          <a href="/" className="text-xl font-bold text-white">
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
                className="mx-auto h-auto w-[62px] lg:w-[70px] drop-shadow-lg"
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
            className="relative z-40 flex flex-col text-white"
          >
            <div className="mx-auto flex w-full max-w-5xl flex-col justify-start px-7 pb-10 pt-4 sm:px-10 sm:pb-12 sm:pt-8">
              <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
                <a href="/" onClick={handleLinkClick}>
                  <img
                    src={logoNoBg.src}
                    alt="Dance Bloc Brazil Logo"
                    width={150}
                    height={100}
                    className="w-[88px] sm:w-[120px]"
                  />
                </a>
              </motion.div>

              <div className="grid gap-1 sm:gap-2">
                {NAV_LINKS.map(({ name, path }) => (
                  <motion.div key={name} variants={itemVariants}>
                    <a
                    className={`group flex items-center justify-between gap-6 border-b border-white/12 py-2 transition hover:text-db-green ${
                        currentPath === path ? "text-db-green" : "text-white"
                      }`}
                      href={path}
                      onClick={handleLinkClick}
                    >
                      <span className="text-3xl sm:text-4xl lg:text-5xl font-black leading-none tracking-normal">
                        {name}
                      </span>
                      <motion.span
                        className="shrink-0"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <ChevronRight
                          className="w-6 h-6 sm:w-9 sm:h-9"
                          strokeWidth={1.5}
                          size={48}
                        />
                      </motion.span>
                    </a>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={itemVariants}
                className="mt-6 grid gap-3 sm:flex sm:flex-wrap"
              >
                {CTA_LINKS.map(({ name, path }) => (
                  <a
                    key={name}
                    href={path}
                    onClick={handleLinkClick}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-db-green/70 bg-db-green px-6 py-3 text-xs sm:text-sm font-black uppercase tracking-[0.16em] text-db-pink drop-shadow-[0_1px_1px_rgba(255,255,255,0.55)] shadow-[0_14px_32px_rgba(0,204,129,0.25)] transition hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-db-pink hover:drop-shadow-none"
                  >
                    {name}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
