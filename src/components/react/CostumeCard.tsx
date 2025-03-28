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
    <div className=" bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 ease-in-out hover:shadow-lg ">
      <div className="image-container aspect-[3/4] overflow-hidden">
        <img
          src={image.src}
          alt={title}
          width={400}
          height={533}
          className="costume-image w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="content p-6">
        <h3 className="title text-2xl font-bold mb-3 text-[var(--color-primary,#d946ef)]">
          {title}
        </h3>

        <div className="tags flex gap-2 mb-4">
          <span className="tag tag-size text-xs px-3 py-1 rounded-full bg-pink-100 text-pink-900">
            {size}
          </span>
          <span className="tag tag-color text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-900">
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
            className="text-[var(--color-primary,#d946ef)] font-semibold  mb-2 block cursor-pointer underline"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>

        <p className="material text-sm text-gray-700 mb-5">
          <span className="material-label font-semibold">Material: </span>
          {material}
        </p>

        <div className="footer flex justify-between items-center pt-4 border-t border-gray-200">
          <span className="price text-xl font-bold text-[var(--color-primary,#d946ef)]">
            {price}/day
          </span>
          <a
            href="/samba-costume-hire-perth#book-costume"
            className="book-button bg-gradient-to-r from-[var(--color-primary,#d946ef)] to-[var(--color-secondary,#ec4899)] text-white font-medium px-4 py-2 rounded-lg transition-transform duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-md"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}
