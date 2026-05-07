import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CalendarDays,
  Music2,
  Sparkles,
  UsersRound,
  ArrowUpRight,
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

export default function ServicePathSelector({ paths }: Props) {
  const [activeKey, setActiveKey] = useState(paths[0]?.key ?? "");
  const active = paths.find((path) => path.key === activeKey) ?? paths[0];
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setActiveKey((current) => {
        const idx = paths.findIndex((p) => p.key === current);
        const nextIdx = (idx + 1) % paths.length;
        return paths[nextIdx]?.key ?? current;
      });
    }, 4000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [paths]);

  const handleMouseEnter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    if (!intervalRef.current) {
      intervalRef.current = window.setInterval(() => {
        setActiveKey((current) => {
          const idx = paths.findIndex((p) => p.key === current);
          const nextIdx = (idx + 1) % paths.length;
          return paths[nextIdx]?.key ?? current;
        });
      }, 4000);
    }
  };

  return (
    <div
      className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,1.05fr)] lg:items-stretch"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex gap-0 overflow-x-auto snap-x snap-mandatory pb-2 lg:grid lg:gap-3 lg:overflow-visible lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 scrollbar-hide">
        {paths.map((path) => {
          const Icon = iconMap[path.key as keyof typeof iconMap] ?? Sparkles;
          const selected = active.key === path.key;

          return (
            <button
              key={path.key}
              type="button"
              onClick={() => setActiveKey(path.key)}
              className={`motion-card group grid min-h-[118px] w-[80vw] flex-shrink-0 grid-cols-[48px_1fr] gap-4 rounded-[1.75rem] border p-5 text-left transition snap-center mr-[-6vw] z-0 lg:w-auto lg:mr-0 lg:z-auto ${
                selected
                  ? "border-db-green bg-slate-950 text-white shadow-[0_22px_55px_rgba(0,204,129,0.18)] z-10"
                  : "border-db-pink/10 bg-white text-db-pink shadow-[0_14px_36px_rgba(158,0,150,0.07)] hover:border-db-green/60"
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
        <AnimatePresence mode="wait">
          <motion.div
            key={active.key}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
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

        <div className="relative z-10 flex min-h-[520px] flex-col justify-end p-6 sm:p-8">
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
        </div>
      </div>
    </div>
  );
}
