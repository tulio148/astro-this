import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarDays,
  Music2,
  Sparkles,
  UsersRound,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type PathItem = {
  key: string;
  title: string;
  label: string;
  description: string;
  href: string;
  cta: string;
  image: string;
  imageAlt: string;
};

const iconMap = {
  classes: CalendarDays,
  workshops: UsersRound,
  shows: Music2,
  costumes: Sparkles,
};

interface Props {
  paths: PathItem[];
}

const AUTOPLAY_MS = 4500;
const SWIPE_THRESHOLD = 70;

export default function ServicePathSelector({ paths }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef<number | null>(null);

  const active = paths[activeIndex] ?? paths[0];

  const stopAutoplay = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const startAutoplay = () => {
    stopAutoplay();
    if (paths.length < 2) return;

    intervalRef.current = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((current) => (current + 1) % paths.length);
    }, AUTOPLAY_MS);
  };

  const goTo = (nextIndex: number) => {
    if (paths.length === 0) return;
    const normalized = (nextIndex + paths.length) % paths.length;
    setDirection(normalized > activeIndex ? 1 : -1);
    setActiveIndex(normalized);
  };

  const goNext = () => {
    setDirection(1);
    setActiveIndex((current) => (current + 1) % paths.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setActiveIndex((current) => (current - 1 + paths.length) % paths.length);
  };

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paths.length]);

  if (!active) return null;

  return (
    <>
      <div
        className="hidden lg:grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,1.05fr)] lg:items-stretch"
        onMouseEnter={stopAutoplay}
        onMouseLeave={startAutoplay}
      >
        <div className="grid gap-3">
          {paths.map((path, idx) => {
            const Icon = iconMap[path.key as keyof typeof iconMap] ?? Sparkles;
            const selected = idx === activeIndex;
            const borderVariant = idx % 2 === 0 ? "db-border-alt-a" : "db-border-alt-b";

            return (
              <button
                key={path.key}
                type="button"
                onClick={() => goTo(idx)}
                className={`motion-card group grid min-h-[118px] grid-cols-[48px_1fr] gap-4 rounded-[1.75rem] border p-5 text-left transition ${
                  selected
                    ? "border-db-green bg-slate-950 text-white shadow-[0_22px_55px_rgba(0,204,129,0.18)]"
                    : `${borderVariant} bg-white text-db-pink shadow-[0_14px_36px_rgba(158,0,150,0.07)] hover:border-db-green/60`
                }`}
                aria-pressed={selected}
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${
                    selected
                      ? "bg-db-green text-db-pink drop-shadow-[0_1px_1px_rgba(255,255,255,0.55)]"
                      : "bg-db-light-pink/10 text-db-pink group-hover:bg-db-green group-hover:text-db-pink group-hover:drop-shadow-[0_1px_1px_rgba(255,255,255,0.55)]"
                  }`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-black uppercase tracking-[0.18em] text-db-green">
                    {path.label}
                  </span>
                  <span className="mt-1 block text-2xl font-black leading-tight">
                    {path.title}
                  </span>
                  <span
                    className={`mt-2 block text-base leading-relaxed ${
                      selected ? "text-white/78" : "text-slate-600"
                    }`}
                  >
                    {path.description}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-db-pink/10 bg-slate-950 text-white shadow-[0_28px_80px_rgba(15,23,42,0.22)]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.key}
              initial={{ opacity: 0, x: direction > 0 ? 34 : -34, scale: 1.02 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: direction > 0 ? -34 : 34, scale: 0.98 }}
              transition={{ duration: 0.44, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <img
                src={active.image}
                alt={active.imageAlt}
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.08),rgba(15,23,42,0.36)_52%,rgba(15,23,42,0.88))]" />

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`content-${active.key}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 14 }}
              transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 flex min-h-[520px] flex-col justify-end p-6 sm:p-8"
            >
              <p className="text-xs font-black uppercase tracking-[0.24em] text-db-green">
                Featured service
              </p>
              <h3 className="mt-4 max-w-xl text-4xl font-black leading-[0.95] sm:text-5xl">
                {active.title}
              </h3>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/82">
                {active.description}
              </p>
              <a
                href={active.href}
                className="motion-cta mt-6 inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-full bg-db-green px-6 py-3 text-xs font-black uppercase tracking-[0.16em] text-white drop-shadow-[0_1px_1px_rgba(255,255,255,0.55)] transition hover:bg-white hover:text-db-pink hover:drop-shadow-none"
              >
                {active.cta}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div
        className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 lg:hidden"
        onMouseEnter={stopAutoplay}
        onMouseLeave={startAutoplay}
      >
        <div className="relative overflow-hidden rounded-[2rem] border border-db-pink/10 bg-slate-950 text-white shadow-[0_24px_62px_rgba(15,23,42,0.24)]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`mobile-${active.key}`}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.3}
              onDragEnd={(_, info) => {
                if (info.offset.x > SWIPE_THRESHOLD) {
                  goPrev();
                } else if (info.offset.x < -SWIPE_THRESHOLD) {
                  goNext();
                }
              }}
              initial={{ opacity: 0, x: direction > 0 ? 34 : -34 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -34 : 34 }}
              transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <img
                src={active.image}
                alt={active.imageAlt}
                className="h-[430px] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.04),rgba(15,23,42,0.22)_45%,rgba(15,23,42,0.9))]" />

              <div className="absolute inset-x-0 bottom-0 z-10 p-5">
                <div className="rounded-[1.5rem] border border-db-green/45 bg-slate-950/20 p-4 backdrop-blur-[1px]">
                  <p className="text-[11px] font-black uppercase tracking-[0.2em] text-db-green">
                    {active.label}
                  </p>
                  <h3 className="mt-1 text-[1.9rem] font-black leading-[0.95]">
                    {active.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-white/84">
                    {active.description}
                  </p>
                  <a
                    href={active.href}
                    className="motion-cta mt-4 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-db-green px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.16em] text-white drop-shadow-[0_1px_1px_rgba(255,255,255,0.55)] transition hover:bg-white hover:text-db-pink hover:drop-shadow-none"
                  >
                    {active.cta}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {paths.length > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous service"
                className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/25 bg-slate-900/70 p-2 text-white backdrop-blur-sm transition hover:bg-slate-800"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next service"
                className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/25 bg-slate-900/70 p-2 text-white backdrop-blur-sm transition hover:bg-slate-800"
              >
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </>
          )}
        </div>

        {paths.length > 1 && (
          <div className="mt-4 flex items-center justify-center gap-2">
            {paths.map((path, idx) => (
              <button
                key={path.key}
                type="button"
                onClick={() => goTo(idx)}
                aria-label={`Go to ${path.title}`}
                aria-pressed={idx === activeIndex}
                className={`h-2.5 rounded-full transition-all ${
                  idx === activeIndex
                    ? "w-8 bg-db-pink"
                    : "w-2.5 bg-db-pink/30 hover:bg-db-pink/60"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
