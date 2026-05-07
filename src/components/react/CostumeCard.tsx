import { useState } from "react";
import type { ImageMetadata } from "astro";

interface CostumeCardProps {
  title: string;
  description: string;
  color: string;
  size: string;
  material: string;
  price: string;
  image: ImageMetadata;
}

export default function CostumeCard({
  title,
  description,
  color,
  size,
  material,
  price,
  image,
}: CostumeCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-pink-100 bg-white shadow-[0_18px_48px_rgba(158,0,150,0.10)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-emerald-300 hover:shadow-[0_22px_60px_rgba(158,0,150,0.16)]">
      <div className="image-container aspect-[3/4] overflow-hidden rounded-b-[2rem] relative">
        <img
          src={image.src}
          alt={title}
          width={400}
          height={533}
          className="costume-image w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="content p-6">
        <h3 className="title mb-3 text-2xl font-black text-[var(--color-primary,#9E0096)]">
          {title}
        </h3>

        <div className="tags flex flex-wrap gap-2 mb-4">
          <span className="tag tag-size rounded-full border border-pink-100 bg-pink-50 px-3 py-1 text-xs font-bold text-pink-900">
            {size}
          </span>
          <span className="tag tag-color rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-900">
            {color}
          </span>
        </div>

        <div className="relative">
          <p
            className={`description text-md text-slate-600 overflow-hidden transition-all duration-300 ${
              isExpanded ? "" : "line-clamp-3"
            }`}
          >
            {description}
          </p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mb-2 block cursor-pointer font-bold text-[var(--color-primary,#9E0096)] underline"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>

        <p className="material text-sm text-gray-700 mb-5">
          <span className="material-label font-semibold">Material: </span>
          {material}
        </p>

        <div className="footer flex items-center justify-between gap-4 border-t border-gray-200 pt-4">
          <span className="price text-xl font-black text-[var(--color-primary,#9E0096)]">
            {price}/day
          </span>
          <a
            href="/samba-costume-hire-perth#book-costume"
            className="book-button rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-black uppercase tracking-[0.12em] text-slate-950 shadow-[0_12px_25px_rgba(52,211,153,0.28)] transition duration-200 ease-in-out hover:-translate-y-0.5 hover:bg-[var(--color-primary,#9E0096)] hover:text-white hover:shadow-md"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}
