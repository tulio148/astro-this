import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedHamburger from "./AnimatedHamburger";
import { ArrowUpRight, ChevronDown, MessageCircle } from "lucide-react";
import React from "react";
import logoNoBg from "../../images/icon/logoNoBg.webp";

type NavChild = {
  name: string;
  path: string;
};

type NavGroup = {
  label: string;
  children: NavChild[];
};

type NavLink = {
  name: string;
  path: string;
  groups?: NavGroup[];
  children?: NavChild[];
};

const NAV_LINKS: NavLink[] = [
  { name: "Home", path: "/" },
  {
    name: "Book a Show",
    path: "/book-a-samba-show-perth",
    groups: [
      {
        label: "Corporate",
        children: [
          { name: "Corporate Events", path: "/corporate-entertainment-perth" },
          { name: "Galas & Award Nights", path: "/gala-dinners-award-nights-perth" },
          { name: "Conferences & Launches", path: "/conference-and-launch-entertainment-perth" },
          { name: "Client & Networking Events", path: "/client-networking-events-perth" },
        ],
      },
      {
        label: "Celebrations",
        children: [
          { name: "Weddings", path: "/wedding-entertainment-perth" },
          { name: "Hens Parties", path: "/hens-party-perth" },
          { name: "Private Events", path: "/private-events-perth" },
        ],
      },
      {
        label: "Other",
        children: [
          { name: "Festivals", path: "/festival-entertainment-perth" },
          { name: "Roving Entertainment", path: "/roving-entertainment-perth" },
        ],
      },
    ],
  },
  {
    name: "Workshops",
    path: "/private-samba-workshops-perth",
    children: [
      { name: "Corporate Team Building", path: "/corporate-team-building-perth" },
      { name: "Virtual & Specialist", path: "/virtual-specialist-workshops-perth" },
      { name: "School Programs", path: "/school-workshops-perth" },
      { name: "Community Workshops", path: "/community-workshops-perth" },
    ],
  },
  {
    name: "Classes",
    path: "/samba-classes-perth",
    children: [
      { name: "Beginner Samba", path: "/beginner-samba-classes-perth" },
      { name: "Intermediate Samba", path: "/intermediate-samba-classes-perth" },
      { name: "Brazil Fit", path: "/brazil-fit" },
      { name: "Class Schedule", path: "/samba-classes-perth#schedule" },
    ],
  },
  {
    name: "Costume Hire",
    path: "/samba-costume-hire-perth",
    children: [
      { name: "Browse Collection", path: "/samba-costume-hire-perth" },
      { name: "Carnival Costumes", path: "/carnival-costume-hire-perth" },
      { name: "Photoshoot Hire", path: "/costume-hire-photoshoot-perth" },
      { name: "Group Hire", path: "/group-costume-hire-perth" },
      { name: "Festival Hire", path: "/festival-costume-hire-perth" },
      { name: "Styling Add-ons", path: "/styling-add-ons" },
    ],
  },
  {
    name: "About",
    path: "/about",
    children: [
      { name: "Our Story", path: "/about" },
      { name: "Our People", path: "/our-people" },
      { name: "Community", path: "/community" },
      { name: "Media & Press", path: "/media-and-press" },
    ],
  },
];

const CTA_LINKS = [
  { name: "Request a Quote", path: "/book-a-samba-show-perth#show-enquiry" },
  { name: "Book a Class", path: "/samba-classes-perth#class-times" },
];

// TODO: Update with the real WhatsApp number before launch.
// Format: https://wa.me/61XXXXXXXXX?text=URL-encoded-message
const WHATSAPP_URL =
  "https://wa.me/61XXXXXXXXX?text=Hi%2C%20I'm%20interested%20in%20Dance%20Bloc%20Brazil%20entertainment.";

const menuVariants = {
  closed: { opacity: 0, y: -12, transition: { duration: 0.12 } },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.16, when: "beforeChildren", staggerChildren: 0.025 },
  },
};

const itemVariants = {
  closed: { opacity: 0, y: 12, transition: { duration: 0.12 } },
  open: { opacity: 1, y: 0, transition: { duration: 0.16 } },
};

const dropdownVariants = {
  closed: {
    opacity: 0,
    y: -8,
    clipPath: "inset(0 0 100% 0)",
    transition: { duration: 0.12, ease: [0.4, 0, 0.2, 1] },
  },
  open: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0 0 0% 0)",
    transition: {
      duration: 0.22,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.035,
    },
  },
};

const dropdownItemVariants = {
  closed: { opacity: 0, y: -6, transition: { duration: 0.1 } },
  open: { opacity: 1, y: 0, transition: { duration: 0.14, ease: [0.22, 1, 0.36, 1] } },
};

type NavbarProps = { currentPath?: string; hasHero?: boolean };

const normalizePath = (path = "") => {
  const withoutHash = path.split("#")[0];
  if (withoutHash === "/") return "/";
  return withoutHash.replace(/\/$/, "");
};

const Navbar = ({ currentPath, hasHero = false }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const [panelLeft, setPanelLeft] = useState(16);
  const [openMobileItem, setOpenMobileItem] = useState<string | null>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const triggerRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const toggleMenu = useCallback(() => setIsMenuOpen((p) => !p), []);

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = isMenuOpen ? "hidden" : "";
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    return () => {
      if (hoverTimer.current) clearTimeout(hoverTimer.current);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setHoveredNav(null);
    setOpenMobileItem(null);
  };

  const getPanelWidth = (link: NavLink) => (link.groups ? 560 : 240);

  const updatePanelPosition = (name: string) => {
    const link = NAV_LINKS.find((navLink) => navLink.name === name);
    const trigger = triggerRefs.current[name];
    if (!link || !trigger || typeof window === "undefined") return;

    const panelWidth = getPanelWidth(link);
    const triggerRect = trigger.getBoundingClientRect();
    const viewportPadding = 16;
    const idealLeft = triggerRect.left + triggerRect.width / 2 - panelWidth / 2;
    const maxLeft = window.innerWidth - panelWidth - viewportPadding;
    setPanelLeft(Math.max(viewportPadding, Math.min(idealLeft, maxLeft)));
  };

  const handleNavEnter = (name: string) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    updatePanelPosition(name);
    setHoveredNav(name);
  };

  const handleNavLeave = () => {
    hoverTimer.current = setTimeout(() => setHoveredNav(null), 80);
  };

  const isActive = (path: string) => normalizePath(currentPath) === normalizePath(path);
  const isNavActive = (link: NavLink) =>
    isActive(link.path) ||
    Boolean(link.children?.some((child) => isActive(child.path))) ||
    Boolean(link.groups?.some((group) => group.children.some((child) => isActive(child.path))));
  const hoveredLink = NAV_LINKS.find((link) => link.name === hoveredNav);

  useEffect(() => {
    if (!hoveredNav) return;

    const onResize = () => updatePanelPosition(hoveredNav);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [hoveredNav]);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-colors duration-300 ${
        isMenuOpen
          ? "bottom-0 overflow-y-auto bg-gradient-to-br from-slate-950 via-db-pink to-slate-950 text-white"
          : hasHero && !hasScrolled
            ? "bg-transparent"
            : hasScrolled
            ? "bg-db-pink/92 shadow-lg backdrop-blur-md"
            : "bg-db-pink shadow-lg"
      }`}
    >
      <div className="relative z-50 mx-auto max-w-7xl px-4 py-4 sm:px-6">
        <div className="flex h-12 items-center justify-between gap-4">
          <a href="/" onClick={handleLinkClick} className="shrink-0">
            <img
              src={logoNoBg.src}
              alt="Dance Bloc Brazil Logo"
              className="h-auto w-[62px] lg:w-[70px] drop-shadow-lg"
              width={70}
              height={40}
            />
          </a>

          <div
            className="hidden flex-1 items-center justify-center gap-0.5 lg:flex"
            onMouseLeave={handleNavLeave}
          >
            {NAV_LINKS.filter((link) => link.name !== "Home").map((link) => {
              const hasDropdown = Boolean(link.groups || link.children);
              const isHovered = hoveredNav === link.name;
              const active = isNavActive(link);

              return (
                <div
                  key={link.name}
                  ref={(node) => {
                    triggerRefs.current[link.name] = node;
                  }}
                  className="relative"
                  onMouseEnter={() => hasDropdown && handleNavEnter(link.name)}
                >
                  <a
                    href={link.path}
                    onClick={handleLinkClick}
                    className={`flex items-center gap-1 rounded-none px-3 py-2 text-sm font-black transition-colors ${
                      active ? "text-db-green" : "text-white/85 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {hasDropdown && (
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-200 ${
                          isHovered ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </a>

                </div>
              );
            })}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            {!isMenuOpen && (
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get a Quote via WhatsApp"
                className="flex min-h-10 items-center gap-2 rounded-full bg-db-green px-4 text-xs font-black uppercase tracking-[0.14em] text-white drop-shadow-[0_1px_1px_rgba(255,255,255,0.55)] transition hover:bg-white hover:text-db-pink"
                data-track="WhatsAppQuoteClick"
              >
                <MessageCircle className="h-4 w-4 shrink-0" />
                <span className="hidden lg:inline">Get a Quote</span>
              </a>
            )}

            <div className="lg:hidden">
              <AnimatedHamburger isOpen={isMenuOpen} toggle={toggleMenu} />
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute left-0 right-0 top-full z-40 hidden lg:block">
        <AnimatePresence>
          {hoveredLink && (
            <motion.div
              key={hoveredLink.name}
              initial="closed"
              animate="open"
              exit="closed"
              variants={dropdownVariants}
              onMouseEnter={() => handleNavEnter(hoveredLink.name)}
              onMouseLeave={handleNavLeave}
              className="pointer-events-auto absolute top-0 origin-top overflow-hidden rounded-none bg-db-pink/92 shadow-[0_28px_70px_rgba(158,0,150,0.38)] backdrop-blur-md"
              style={{ left: panelLeft, width: getPanelWidth(hoveredLink) }}
            >
              {hoveredLink.groups ? (
                <div className="p-5">
                  <div className="grid grid-cols-3 gap-6">
                    {hoveredLink.groups.map((group) => (
                      <motion.div key={group.label} variants={dropdownItemVariants}>
                        <p className="mb-3 px-2.5 text-base font-black uppercase tracking-[0.22em] text-white">
                          {group.label}
                        </p>
                        <ul className="space-y-0.5">
                          {group.children.map((child) => (
                            <motion.li key={child.path} variants={dropdownItemVariants}>
                              <a
                                href={child.path}
                                onClick={handleLinkClick}
                                className={`block rounded-none px-2.5 py-1.5 text-base font-semibold transition-colors ${
                                  isActive(child.path)
                                    ? "bg-white/14 text-db-green"
                                    : "text-white/78 hover:bg-white/12 hover:text-white"
                                }`}
                              >
                                {child.name}
                              </a>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    variants={dropdownItemVariants}
                    className="mt-4 border-t border-white/14 pt-3"
                  >
                    <a
                      href={hoveredLink.path}
                      onClick={handleLinkClick}
                      className="text-xs font-black uppercase tracking-[0.18em] text-db-green transition-colors hover:text-white"
                    >
                      View all show options →
                    </a>
                  </motion.div>
                </div>
              ) : (
                <div className="py-2">
                  {hoveredLink.children?.map((child) => (
                    <motion.a
                      key={child.path}
                      href={child.path}
                      onClick={handleLinkClick}
                      variants={dropdownItemVariants}
                      className={`block rounded-none px-4 py-2.5 text-base font-semibold transition-colors ${
                        isActive(child.path)
                          ? "bg-white/14 text-db-green"
                          : "text-white/78 hover:bg-white/12 hover:text-white"
                      }`}
                    >
                      {child.name}
                    </motion.a>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="menu"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="relative z-40 flex flex-col text-white lg:hidden"
          >
            <div className="mx-auto flex w-full max-w-5xl flex-col px-7 pb-12 pt-4 sm:px-10">
              <div className="grid gap-0">
                {NAV_LINKS.map(({ name, path, groups, children }) => {
                  const hasChildren = Boolean(groups || children);
                  const isOpen = openMobileItem === name;

                  return (
                    <motion.div key={name} variants={itemVariants}>
                      <div className="border-b border-white/12">
                        <div className="flex items-center justify-between py-3.5">
                          <a
                            href={path}
                            onClick={handleLinkClick}
                            className={`text-2xl font-black leading-none tracking-normal transition hover:text-db-green sm:text-3xl ${
                              isNavActive({ name, path, groups, children }) ? "text-db-green" : "text-white"
                            }`}
                          >
                            {name}
                          </a>
                          {hasChildren && (
                            <button
                              type="button"
                              onClick={() => setOpenMobileItem(isOpen ? null : name)}
                              aria-label={`Toggle ${name} submenu`}
                              className="ml-4 rounded-full p-2 text-white/50 transition-colors hover:text-white"
                            >
                              <ChevronDown
                                className={`h-5 w-5 transition-transform duration-200 ${
                                  isOpen ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                          )}
                        </div>

                        <AnimatePresence initial={false}>
                          {isOpen && hasChildren && (
                            <motion.div
                              key="children"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="pb-4">
                                {groups ? (
                                  <div className="space-y-4">
                                    {groups.map((group) => (
                                      <div key={group.label}>
                                        <p className="mb-2 px-3 text-base font-black uppercase tracking-[0.22em] text-white">
                                          {group.label}
                                        </p>
                                        <div className="grid grid-cols-2 gap-1.5">
                                          {group.children.map((child) => (
                                            <a
                                              key={child.path}
                                              href={child.path}
                                              onClick={handleLinkClick}
                                              className={`rounded-lg px-3 py-2 text-sm font-semibold transition hover:bg-white/14 hover:text-white ${
                                                isActive(child.path)
                                                  ? "bg-white/14 text-db-green"
                                                  : "bg-white/8 text-white/80"
                                              }`}
                                            >
                                              {child.name}
                                            </a>
                                          ))}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                ) : (
                                  <div className="grid grid-cols-2 gap-1.5">
                                    {children!.map((child) => (
                                      <a
                                        key={child.path}
                                        href={child.path}
                                        onClick={handleLinkClick}
                                        className={`rounded-lg px-3 py-2 text-sm font-semibold transition hover:bg-white/14 hover:text-white ${
                                          isActive(child.path)
                                            ? "bg-white/14 text-db-green"
                                            : "bg-white/8 text-white/80"
                                        }`}
                                      >
                                        {child.name}
                                      </a>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div variants={itemVariants} className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
                {CTA_LINKS.map(({ name, path }) => (
                  <a
                    key={name}
                    href={path}
                    onClick={handleLinkClick}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-db-green px-6 py-3 text-xs font-black uppercase tracking-[0.16em] text-white drop-shadow-[0_1px_1px_rgba(255,255,255,0.55)] transition hover:bg-white hover:text-db-pink"
                    data-track={name === "Book a Class" ? "BookClassClick" : "ShowEnquiryClick"}
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
