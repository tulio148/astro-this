## src/components/AnimatedHamburger.astro

```astro
---
import AnimatedHamburgerReact from "./react/AnimatedHamburger";

interface Props {
  isOpen: boolean;
  toggle: () => void;
}

const { isOpen, toggle } = Astro.props;
---

<AnimatedHamburgerReact client:load isOpen={isOpen} toggle={toggle} />


```

## src/components/Button.astro

```astro
---
// Click button, get confetti!
// Styled by Tailwind :)
---

<button
  class="appearance-none py-2 px-4 bg-db-pink text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75"
>
  <slot />
</button>

<script>
  import confetti from "canvas-confetti";
  const button = document.body.querySelector("button");

  if (button) {
    button.addEventListener("click", () => confetti());
  }
</script>

```

## src/components/Card.astro

```astro
---
interface Props {
  class?: string;
  cardClass?: string;
}

const { class: className = "", cardClass = "" } = Astro.props;
---

<div
  class={`flex h-full flex-col justify-center items-stretch card-animate ${className}`}
>
  <div
    class={`group relative flex h-full w-full overflow-hidden rounded-xl border bg-white px-6 py-9 shadow-[0_18px_50px_rgba(158,0,150,0.10)] transition-all duration-300 hover:-translate-y-1 hover:border-db-pink/80 hover:shadow-[0_22px_60px_rgba(158,0,150,0.16)] sm:p-10 ${cardClass || "db-border-alt-a"}`}
  >
    <div
      class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-db-green via-db-light-pink to-db-pink opacity-80"
    ></div>
    <div
      class="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-db-light-pink/8 transition-transform duration-500 group-hover:scale-125"
    ></div>
    <div class="relative z-10 flex w-full">
      <slot />
    </div>
  </div>
</div>

```

## src/components/ClassCard.astro

```astro
---
import { Image } from "astro:assets";
interface Props {
  title: string;
  day: string;
  time: string;
  instructor: string;
  level: string;
  spots?: number;
}

const { title, day, time, instructor, level, spots } = Astro.props;
---

<div class="class-card opacity-0 transform translate-y-8">
  <div
    class="group relative overflow-hidden rounded-xl border border-db-pink/80 bg-white shadow-[0_18px_48px_rgba(158,0,150,0.10)] transition hover:-translate-y-1 hover:border-db-pink/80 hover:shadow-[0_22px_60px_rgba(158,0,150,0.15)]"
  >
    <!-- Decorative elements -->
    <div
      class="absolute -right-10 -top-10 w-32 h-32 bg-db-light-pink/10 rounded-full"
    >
    </div>
    <div
      class="absolute -left-8 -bottom-8 w-24 h-24 bg-db-green/10 rounded-full"
    >
    </div>

    <div class="relative z-10 p-6">
      <div class="mb-4">
        <h3 class="text-xl font-black text-db-pink mb-2">{title}</h3>
        <div
          class="h-0.5 w-24 -mt-3 bg-gradient-to-r from-db-pink to-transparent rounded-full"
        >
        </div>
      </div>

      <ul class="space-y-2 mb-6">
        <li class="flex items-start">
          <span class="text-db-pink font-black w-28">Day:</span>
          <span>{day}</span>
        </li>
        <li class="flex items-start">
          <span class="text-db-pink font-black w-28">Time:</span>
          <span>{time}</span>
        </li>
        <li class="flex items-start">
          <span class="text-db-pink font-black w-28">Instructor:</span>
          <span>{instructor}</span>
        </li>
        <li class="flex items-start">
          <span class="text-db-pink font-black w-28">Level:</span>
          <span>{level}</span>
        </li>
        {
          spots && (
            <li class="flex items-start">
              <span class="text-db-pink font-black w-28">Spots left:</span>
              <span>{spots}</span>
            </li>
          )
        }
      </ul>

      <a
        href="/samba-classes-perth"
        class="inline-flex min-h-12 items-center justify-center rounded-full bg-db-green px-7 py-3 text-sm font-black uppercase tracking-[0.14em] text-white drop-shadow-[0_1px_1px_rgba(255,255,255,0.55)] shadow-[0_14px_30px_rgba(0,204,129,0.24)] transition-all duration-300 hover:bg-db-pink hover:text-white group-hover:-translate-y-0.5"
      >
        Book Now
      </a>
    </div>
  </div>
</div>

<script>
  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".class-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add(
                "opacity-100",
                "translate-y-0",
                "transition-all",
                "duration-700",
                "ease-out",
              );
            }, index * 150);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    cards.forEach((card) => {
      observer.observe(card);
    });
  });
</script>

```

## src/components/ContactForm.astro

```astro
---
interface Props {
  title?: string;
  subtitle?: string;
}

const { title, subtitle } = Astro.props;
const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white/85 px-5 py-4 text-db-pink outline-none transition placeholder:text-slate-400 focus:border-db-pink/80 focus:bg-white focus:ring-4 focus:ring-db-green/15";
---

<div
  class="contact-form-shell relative overflow-hidden rounded-xl border border-db-pink/80 bg-white p-6 shadow-[0_24px_70px_rgba(158,0,150,0.12)] sm:p-10"
>
  <div
    class="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-db-green via-db-light-pink to-db-pink"
  >
  </div>
  <div
    class="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-db-light-pink/10"
  >
  </div>
  <div class="relative">
    {
      title && (
        <h2 class="text-2xl sm:text-3xl font-black text-db-pink">{title}</h2>
      )
    }
    {
      subtitle && (
        <p class="mt-3 mb-8 text-slate-600 leading-relaxed">{subtitle}</p>
      )
    }

    <form
      action="https://formsubmit.co/21dbfa7873979896e61cbcaa32d7a872"
      method="POST"
      class="space-y-5 contact-form"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label for="name" class="block mb-2 text-sm font-black text-db-pink">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            class={inputClass}
          />
        </div>
        <div>
          <label for="email" class="block mb-2 text-sm font-black text-db-pink">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            class={inputClass}
          />
        </div>
      </div>

      <div>
        <label for="phone" class="block mb-2 text-sm font-black text-db-pink">
          Phone Number
        </label>
        <input type="tel" id="phone" name="phone" class={inputClass} />
      </div>

      <div>
        <label for="subject" class="block mb-2 text-sm font-black text-db-pink">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          class={inputClass}
        />
      </div>

      <div>
        <label for="message" class="block mb-2 text-sm font-black text-db-pink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          class={`${inputClass} resize-none`}></textarea>
      </div>

      <input
        type="hidden"
        name="_next"
        value="https://danceblocbrazil.com/thank-you"
      />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="box" />
      <input type="text" name="_honey" style="display:none" />
      <input type="hidden" name="_autopilot" value="true" />

      <button
        type="submit"
        class="inline-flex min-h-14 w-full items-center justify-center rounded-full bg-db-green px-9 py-4 text-sm font-black uppercase tracking-[0.16em] text-white drop-shadow-[0_1px_1px_rgba(255,255,255,0.55)] shadow-[0_18px_38px_rgba(0,204,129,0.30)] transition hover:-translate-y-0.5 hover:bg-db-pink hover:text-white hover:shadow-[0_22px_45px_rgba(158,0,150,0.25)] focus:outline-none focus:ring-4 focus:ring-db-green/25 md:w-auto"
      >
        Send Message
      </button>
    </form>
  </div>
</div>

```

## src/components/CostumeCard.astro

```astro
---
// Astro props
import { Image } from "astro:assets";
import CostumeCardReact from "./react/CostumeCard";

interface Props {
  title: string;
  description: string;
  color: string;
  size: string;
  material: string;
  price: string;
  image: any;
}

const { title, description, color, size, material, price, image } = Astro.props;
---

<CostumeCardReact
  client:load
  title={title}
  description={description}
  color={color}
  size={size}
  material={material}
  price={price}
  image={image}
/>

```

## src/components/FAQItem.astro

```astro
---
interface Props {
  question: string;
  answer: string;
}

const { question, answer } = Astro.props;
---

<div
  class="faq-item mb-5 cursor-pointer overflow-hidden rounded-xl border border-db-pink/80 bg-white px-5 py-5 shadow-[0_14px_35px_rgba(158,0,150,0.08)] transition hover:border-db-pink/80 hover:shadow-[0_18px_45px_rgba(158,0,150,0.12)] sm:px-7 sm:py-6 last:mb-0"
  role="button"
  tabindex="0"
  aria-expanded="false"
>
  <button
    type="button"
    class="faq-question flex w-full cursor-pointer items-center justify-between gap-6 text-left"
    aria-expanded="false"
  >
    <span class="text-lg sm:text-xl font-black leading-snug text-db-pink">
      {question}
    </span>
  </button>
  <div
      class="faq-answer max-h-0 overflow-hidden transition-all duration-500 ease-in-out"
  >
    <p class="max-w-3xl pt-5 text-base sm:text-lg leading-relaxed text-slate-600">
      {answer}
    </p>
    <div class="mt-5 h-px w-full bg-gradient-to-r from-db-green/50 via-db-pink/15 to-transparent rounded-full"></div>
  </div>
</div>

<script>
  document.addEventListener("astro:page-load", () => {
    const faqItems = document.querySelectorAll(".faq-item");

    const toggleFaq = (item) => {
      const trigger = item.querySelector(".faq-question");
      const answer = item.querySelector(".faq-answer");
      const isOpen = item.getAttribute("aria-expanded") === "true";

      item.setAttribute("aria-expanded", String(!isOpen));
      trigger?.setAttribute("aria-expanded", String(!isOpen));
      answer?.classList.toggle("max-h-0", isOpen);
      answer?.classList.toggle("max-h-96", !isOpen);

      document.querySelectorAll(".faq-item").forEach((otherItem) => {
        if (otherItem === item) return;
        otherItem.setAttribute("aria-expanded", "false");
        const otherTrigger = otherItem.querySelector(".faq-question");
        const otherAnswer = otherItem.querySelector(".faq-answer");
        otherTrigger?.setAttribute("aria-expanded", "false");
        otherAnswer?.classList.add("max-h-0");
        otherAnswer?.classList.remove("max-h-96");
      });
    };

    faqItems.forEach((item) => {
      item.addEventListener("click", () => {
        toggleFaq(item);
      });

      item.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          toggleFaq(item);
        }
      });
    });
  });
</script>

```

## src/components/Footer.astro

```astro
---
import faviconpng from "../images/icon/faviconpng-removebg-preview.png";
import Picture from "astro/components/Picture.astro";
const currentYear = new Date().getFullYear();
---

<footer
  class="bg-gradient-to-br from-db-pink via-db-pink to-db-light-pink text-white py-14 mt-16 relative overflow-hidden"
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      <div>
        <p class="text-xl leading-relaxed mb-6 max-w-xl text-white">
          Brazilian samba classes, event entertainment, workshops, and costume
          hire in Perth.
        </p>
        <p class="mb-6 text-white/85">Email: info@danceblocbrazil.com</p>

        <Picture
          src={faviconpng}
          alt="Dance Bloc Brazil Logo"
          width={150}
          height={150}
          class="bg-gradient-to-b from-black/50 via-black/40 to-black/80 p-3 rounded-3xl border border-white/15 image-overlay"
        />
      </div>

      <div class="flex flex-col items-start md:items-end">
        <div class="flex space-x-6 mb-8">
          <a
            href="https://instagram.com/DanceBlocBrazil"
            target="_blank"
            rel="noopener noreferrer"
            class="transform hover:scale-110 transition-transform"
            aria-label="Instagram"
          >
            <svg
              height="40"
              viewBox="0 0 64 64"
              width="40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill-rule="evenodd">
                <path
                  d="m48 64h-32a16.0007 16.0007 0 0 1 -16-16v-32a16.0007 16.0007 0 0 1 16-16h32a16 16 0 0 1 16 16v32a16 16 0 0 1 -16 16"
                  fill="#ff3a55"></path>
                <path
                  d="m30 18h18a9.0006 9.0006 0 0 0 .92-17.954c-.306-.017-.609-.046-.92-.046h-32a16.0007 16.0007 0 0 0 -16 16v32a30.0007 30.0007 0 0 1 30-30"
                  fill="#ff796c"></path>
                <path
                  d="m48 32a16 16 0 1 0 16 16v-32a16 16 0 0 1 -16 16"
                  fill="#e00047"></path>
              </g>
              <circle cx="44.5" cy="19.5" fill="#fff" r="2.5"></circle>
              <path
                d="m32 24a8 8 0 1 1 -8 8 8.0042 8.0042 0 0 1 8-8zm0-4a12 12 0 1 1 -12 12 12.0057 12.0057 0 0 1 12-12z"
                fill="#fff"
                fill-rule="evenodd"></path>
              <path
                d="m52 22a10 10 0 0 0 -10-10h-20a10 10 0 0 0 -10 10v20a10 10 0 0 0 10 10h20a10 10 0 0 0 10-10zm4 0a14 14 0 0 0 -14-14h-20a14 14 0 0 0 -14 14v20a14 14 0 0 0 14 14h20a14 14 0 0 0 14-14z"
                fill="#fff"
                fill-rule="evenodd"></path>
            </svg>
          </a>
          <a
            href="https://facebook.com/DanceBlocBrazil"
            target="_blank"
            rel="noopener noreferrer"
            class="transform hover:scale-110 transition-transform"
            aria-label="Facebook"
          >
            <svg
              height="40"
              viewBox="0 0 64 64"
              width="40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill-rule="evenodd">
                <path
                  d="m32 64h-16a16.0007 16.0007 0 0 1 -16-16v-32a16.0007 16.0007 0 0 1 16-16h32a16 16 0 0 1 16 16v32a16 16 0 0 1 -16 16h-6a5 5 0 0 0 -10 0z"
                  fill="#3764b9"></path>
                <path
                  d="m30 18h18a9.0006 9.0006 0 0 0 .92-17.954c-.306-.017-.609-.046-.92-.046h-32a16.0007 16.0007 0 0 0 -16 16v32a30.0007 30.0007 0 0 1 30-30"
                  fill="#507dd2"></path>
                <path
                  d="m48 32a16 16 0 1 0 16 16v-32a16 16 0 0 1 -16 16"
                  fill="#1e4ba0"></path>
                <path
                  d="m52 18a2 2 0 0 1 -2 2h-6a2 2 0 0 0 -2 2v8h7.56a2 2 0 0 1 1.9612 2.392c-.3713 1.857-.8757 4.379-1.2 6a2 2 0 0 1 -1.9612 1.608h-6.36v24h-10v-24h-6a2 2 0 0 1 -2-2v-6a2 2 0 0 1 2-2h6v-8a12 12 0 0 1 12-12h6a2 2 0 0 1 2 2z"
                  fill="#fff"></path>
              </g>
            </svg>
          </a>
          <a
            href="https://tiktok.com/@danceblocbrazil"
            target="_blank"
            rel="noopener noreferrer"
            class="transform hover:scale-110 transition-transform"
            aria-label="TikTok"
          >
            <svg
              height="40"
              viewBox="0 0 405.82 405.82"
              width="40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="translate(-2.24 -1.18)">
                <path
                  d="m408.07 204.09c0 112.06-90.85 202.91-202.92 202.91h-.38c-111.89-.21-202.53-91-202.53-202.91s90.64-202.71 202.53-202.91h.38c112.07 0 202.92 90.82 202.92 202.91z"
                ></path>
                <path
                  d="m204.77 1.18v405.82c-111.89-.21-202.53-91-202.53-202.91s90.64-202.71 202.53-202.91z"
                  fill="#0c0c0c"></path>
                <path
                  d="m315.56 147.92-.25 41.57a100.19 100.19 0 0 1 -24-3.22 101.52 101.52 0 0 1 -33.65-15.83c0 4.25.06 10.59.06 18.3 0 10.26 0 16.09-.06 22.28-.18 38.24.77 45.64-2.59 60.76a78.83 78.83 0 0 1 -2.86 10.75c-6.46 18-20.54 32.42-34.89 40.09a69.47 69.47 0 0 1 -12.55 5.17c-27.12 8.22-59.71 1-76.53-19l-.11-.12-.13-.17c-14.29-17.24-17.41-44.12-17.71-51 0-.88-.06-1.74-.06-1.74a84.38 84.38 0 0 1 4-27.72c2.9-9.26 12.45-28.59 33.9-40.33a74.14 74.14 0 0 1 43.74-8.37l-.49 42.07c-.85-.22-21.4-5.09-34.89 8.91-12.22 12.68-11.43 33.11-2.76 44.68.46.62.95 1.22 1.46 1.78 4.85 5.41 11 7.44 15.15 8.86a50.15 50.15 0 0 0 17.07 2.5 31.3 31.3 0 0 0 17.34-5.57c14.1-9.58 16-26.64 16.07-27.61q-.26-82.38-.49-164.76v-.05l26.43-.47h.43l3.83-.07a80.81 80.81 0 0 0 14.09 28 78.29 78.29 0 0 0 6.6 7.4 84.91 84.91 0 0 0 31.3 19.34h.08a90.74 90.74 0 0 0 12.47 3.57z"
                  fill="#fd2854"></path>
                <path
                  d="m303.61 166.73h-.08a91.72 91.72 0 0 1 -42.53-3.23 90.55 90.55 0 0 1 -26.62-13.89 269.58 269.58 0 0 1 0 88c-5.71 34.24-9.29 55.7-28.4 69.43-.4.29-.81.58-1.22.85-26.39 17.87-63.26 9-76.77.59l-.2-.12-.38-.24a88.54 88.54 0 0 1 -12.48-10 72.81 72.81 0 0 1 -22.11-51.47 78 78 0 0 1 4.87-29.21c2.25-6 10.61-27.34 33.9-40.33a75.7 75.7 0 0 1 48.92-8.28q-.1 5-.19 10v.07l-.39 21.1a63.8 63.8 0 0 0 -22.29-1.24c-6 .74-11.88 1.43-18.13 5.36a36.37 36.37 0 0 0 -15.78 22.52 30.31 30.31 0 0 0 -.8 13.86c.24 1.32 2 10.49 9.4 17.07 2.49 2.21 3.55 2.3 7.18 5.69 3.2 3 4 4.44 6.93 6.93 0 0 .72.61 1.9 1.47a2.15 2.15 0 0 0 .24.18 42.89 42.89 0 0 0 5.07 3.19c7.33 3.84 20.45 4.25 30.07-.42 13.31-6.47 20.57-21.35 20.54-30.19q-.24-82.41-.49-164.81h.92l40.82-.24a32.32 32.32 0 0 0 1.31 9.41c.1.33.2.64.31 1s.18.53.27.78a45 45 0 0 0 2.19 4.86l.57 1.15v.09a.12.12 0 0 0 0 .08l.09.19.09.18a3.79 3.79 0 0 0 .18.34c.06.13.13.26.2.39.38.73.9 1.69 1.49 2.77.37.67.76 1.34 1.16 2l.43.71c.21.36.43.72.65 1.07l.8 1.27c3.11 4.91 8.57 13.18 16.31 19.43 10.88 8.78 23.38 11.26 31.22 12 .05 2.46.11 4.92.16 7.38q.44 11.14.67 22.26z"
                  fill="#24f6fa"></path>
                <path
                  d="m303.74 178.48a89.19 89.19 0 0 1 -57.25-18.13v88c-.2 3.37-3.15 40.54-36.73 61-1.66 1-3.33 1.93-5 2.79-31.59 16.12-62.46 3.49-65.51 2.18a40.94 40.94 0 0 1 -8.66-4c-.85-.53-1.68-1.08-2.47-1.65l-.71-.53c-20.6-15.64-21.45-47.5-21.58-52.2a84.38 84.38 0 0 1 4-27.72c3.4-10.85 13.55-29.14 33.9-40.33a74.07 74.07 0 0 1 36.63-9v.07q-.25 15.85-.5 31.71c-2.15-.58-15.33-3.9-28.21 4.21a36.37 36.37 0 0 0 -15.78 22.52 32.43 32.43 0 0 0 -.8 13.85 31.66 31.66 0 0 0 7.78 15.26 36.46 36.46 0 0 0 5.53 5.17 2.15 2.15 0 0 0 .24.18 31.4 31.4 0 0 0 5.07 3.19l.06.05a31.38 31.38 0 0 0 33.68 13.14 37.37 37.37 0 0 0 8.47-2.86 33.53 33.53 0 0 0 8.87-6.14c10.12-9.73 11.6-23.19 11.67-24l-.44-164.89 4.4-.09 26.43-.52h.38c.1.26.21.52.32.78.61 1.47 1.34 3.1 2.19 4.86l.57 1.15v.09a.12.12 0 0 0 0 .08l.09.19.09.18a3.79 3.79 0 0 0 .18.34c.06.13.13.26.2.39.46.9 1 1.83 1.49 2.77.37.67.76 1.34 1.16 2l.43.71.65 1.07.8 1.27a98.26 98.26 0 0 0 16.31 19.43 98.5 98.5 0 0 0 31.3 19.34h.08c.13 7.41.26 14.84.38 22.25z"
                  fill="#fff"></path>
                <path
                  d="m315.56 147.92-.25 41.57a100.19 100.19 0 0 1 -24-3.22 101.52 101.52 0 0 1 -33.65-15.83c0 4.25.06 10.59.06 18.3 0 10.26 0 16.09-.06 22.28-.18 38.24.77 45.64-2.59 60.76a78.83 78.83 0 0 1 -2.86 10.75c-6.46 18-20.54 32.42-34.89 40.09a69.47 69.47 0 0 1 -12.55 5.17v-248.18l40.82-.24a32.32 32.32 0 0 0 1.31 9.41c.1.33.2.64.31 1l3.83-.07a80.81 80.81 0 0 0 14.09 28 78.29 78.29 0 0 0 6.6 7.4c10.88 8.78 23.38 11.26 31.22 12 .05 2.46.11 4.92.16 7.38a90.74 90.74 0 0 0 12.45 3.43z"
                  opacity=".17"></path>
              </g>
            </svg>
          </a>
        </div>

        <ul class="flex flex-wrap gap-5 text-sm">
          <li>
            <a href="/" class="hover:text-db-green transition-colors">Home</a>
          </li>
          <li>
            <a href="/about" class="hover:text-db-green transition-colors"
              >About</a
            >
          </li>
          <li>
            <a
              href="/samba-classes-perth"
              class="hover:text-db-green transition-colors">Classes</a
            >
          </li>
          <li>
            <a
              href="/book-a-samba-show-perth"
              class="hover:text-db-green transition-colors">Show for Hire</a
            >
          </li>
          <li>
            <a
              href="/samba-costume-hire-perth"
              class="hover:text-db-green transition-colors">Costume Hire</a
            >
          </li>
          <li>
            <a
              href="/private-samba-workshops-perth"
              class="hover:text-db-green transition-colors">Workshops</a
            >
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-white/20 mt-8 pt-8 text-center">
      <p class="text-sm">
        &copy; {currentYear} Dance Bloc Brazil. All rights reserved. <span
          class="hidden md:inline">|</span
        ><br class="md:hidden" /> Brazilian samba in Perth.
      </p>
      <p class="text-sm mt-2 text-white/80 hover:text-white transition-colors">
        <a
          href="https://edgeify.com.au"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center"
        >
          Created by <span
            class="font-bold tracking-wider ml-1 text-blue-200 hover:underline"
            >Edgeify Digital</span
          >
        </a>
      </p>
    </div>
  </div>
</footer>

```

## src/components/Hero.astro

```astro
---
import type { ImageMetadata } from "astro";
import Picture from "astro/components/Picture.astro";

interface Props {
  title: string;
  subtitle: string;
  backgroundImage?: ImageMetadata;
  mobileImage?: ImageMetadata;
  imagePosition?: "left" | "center" | "right";
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

const {
  title,
  subtitle,
  backgroundImage,
  mobileImage,
  imagePosition = "center",
  primaryCta,
  secondaryCta,
} = Astro.props;
---

<section
  class="relative min-h-screen flex items-end overflow-hidden bg-slate-950"
  style={`--image-position: ${imagePosition}`}
>
  {
    backgroundImage && (
      <>
        {mobileImage && (
          <Picture
            src={mobileImage}
            alt=""
            class="absolute inset-0 z-0 h-full w-full object-cover hero-image-mobile"
            widths={[480, 768]}
            sizes="(max-width: 768px) 480px, 768px"
            loading="eager"
            fetchpriority="high"
          />
        )}
        <Picture
          src={backgroundImage}
          alt=""
          class={`absolute inset-0 z-0 h-full w-full object-cover hero-image ${
            mobileImage ? "hidden md:block" : ""
          }`}
          widths={[480, 768, 1024, 1280, 1920]}
          sizes="(max-width: 768px) 480px, (max-width: 1024px) 768px, (max-width: 1280px) 1024px, 1920px"
          loading="eager"
          fetchpriority="high"
        />
      </>
    )
  }

  <div class="absolute inset-0 z-10 bg-black/10"></div>
  <div
    class="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/20 to-black/10"
  >
  </div>

  <div
    class="container pb-[80px] md:pb-[100px] mx-auto px-6 sm:px-10 lg:px-16 relative z-20"
  >
    <div class="max-w-4xl">
      <div class="overflow-hidden rounded-3xl px-5 py-5 sm:px-7 sm:py-6">
        <h1
          class="hero-reveal-item hero-reveal-title max-w-4xl text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.92] text-white text-balance hero-title"
        >
          {title}
        </h1>
        <p
          class="hero-reveal-item hero-reveal-subtitle mt-4 max-w-3xl text-lg sm:text-xl md:text-2xl lg:text-xl font-light text-white tracking-wide hero-subtitle leading-tight text-balance"
        >
          {subtitle}
        </p>

        {
          (primaryCta || secondaryCta) && (
            <div class="hero-reveal-item hero-reveal-cta mt-6 flex flex-col sm:flex-row gap-3">
              {primaryCta && (
                <a
                  href={primaryCta.href}
                  class="inline-flex min-h-12 items-center justify-center rounded-full bg-db-green px-8 py-3 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-db-pink"
                >
                  {primaryCta.label}
                </a>
              )}
              {secondaryCta && (
                <a
                  href={secondaryCta.href}
                  class="inline-flex min-h-12 items-center justify-center rounded-full bg-db-pink px-8 py-3 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-db-pink"
                >
                  {secondaryCta.label}
                </a>
              )}
            </div>
          )
        }
      </div>
    </div>
  </div>
</section>

<style>
  .hero-image {
    object-position: var(--image-position);
  }

  .hero-image-mobile {
    object-position: center;
  }

  .hero-title {
    letter-spacing: 0;
    text-shadow: 4px 4px 14px rgba(0, 0, 0, 0.55);
  }

  .hero-subtitle {
    text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.32);
  }
</style>

```

## src/components/Hero.tsx

```tsx
import React from "react";
import type { ImageMetadata } from "astro";

interface Props {
  title: string;
  subtitle: string;
  backgroundImage?: ImageMetadata;
  mobileImage?: ImageMetadata;
  imagePosition?: "left" | "center" | "right";
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function Hero({
  title,
  subtitle,
  backgroundImage,
  mobileImage,
  imagePosition = "center",
  primaryCta,
  secondaryCta,
}: Props) {
  return (
    <section
      className="relative min-h-screen flex items-end overflow-hidden bg-slate-950"
      style={{ objectPosition: imagePosition }}
    >
      {backgroundImage && (
        <>
          {mobileImage && (
            <img
              src={mobileImage.src}
              alt=""
              className="absolute inset-0 z-0 h-full w-full object-cover md:hidden"
              style={{ objectPosition: "center" }}
            />
          )}
          <img
            src={backgroundImage.src}
            alt=""
            className={`absolute inset-0 z-0 h-full w-full object-cover ${
              mobileImage ? "hidden md:block" : ""
            }`}
          />
        </>
      )}

      <div className="absolute inset-0 z-10 bg-black/10" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-black/20 to-black/10" />

      <div className="container pb-[80px] md:pb-[100px] mx-auto px-6 sm:px-10 lg:px-16 relative z-20">
        <div className="max-w-4xl">
          <div className="overflow-hidden rounded-3xl px-5 py-5 sm:px-7 sm:py-6">
            <h1 className="hero-reveal-item hero-reveal-title max-w-4xl text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.92] text-white text-balance hero-title drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              {title}
            </h1>

            <p className="hero-reveal-item hero-reveal-subtitle mt-4 max-w-3xl text-lg sm:text-xl md:text-2xl font-light text-white tracking-wide hero-subtitle leading-tight text-balance drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              {subtitle}
            </p>

            {(primaryCta || secondaryCta) && (
              <div className="hero-reveal-item hero-reveal-cta mt-6 flex flex-col sm:flex-row gap-3">
                {primaryCta && (
                  <a
                    href={primaryCta.href}
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-db-green px-8 py-3 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-db-pink"
                  >
                    {primaryCta.label}
                  </a>
                )}
                {secondaryCta && (
                  <a
                    href={secondaryCta.href}
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-db-pink px-8 py-3 text-sm font-black uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-db-pink"
                  >
                    {secondaryCta.label}
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
```

## src/components/HomeTermCard.astro

```astro
---
interface Props {
  name: string;
  level: string;
  summary: string;
  dateBegin: string;
  dateEnd: string;
  time: string;
  location: string;
  price: string;
  bookingLink: string;
  class?: string;
}

const {
  name,
  level,
  summary,
  dateBegin,
  dateEnd,
  time,
  location,
  price,
  bookingLink,
  class: className = "",
} = Astro.props;

const dateValue = dateBegin && dateEnd ? `${dateBegin} - ${dateEnd}` : "To be confirmed";
const timeValue = time || "To be confirmed";
const locationValue = location || "To be confirmed";
const priceValue = price || "To be confirmed";
---

<div class={`group overflow-hidden rounded-xl border bg-white p-5 shadow-[0_14px_38px_rgba(158,0,150,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:border-db-pink/80 hover:shadow-[0_18px_46px_rgba(158,0,150,0.14)] sm:p-6 ${className || "db-border-alt-a"}`}>
  <div class="mb-4 flex items-start justify-between gap-3">
    <h3 class="text-xl font-black leading-tight text-db-pink">{name}</h3>
    <span class="shrink-0 rounded-full border border-db-pink/80 bg-db-light-pink/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-db-pink">
      {level}
    </span>
  </div>

  <p class="mb-5 text-base leading-relaxed text-slate-600">{summary}</p>

  <div class="mb-5 space-y-2.5 rounded-xl border border-slate-200/80 bg-slate-50/75 p-4 text-sm">
    <p class="flex items-start gap-2"><span class="font-black text-db-pink">Date:</span><span class="text-slate-600">{dateValue}</span></p>
    <p class="flex items-start gap-2"><span class="font-black text-db-pink">Time:</span><span class="text-slate-600">{timeValue}</span></p>
    <p class="flex items-start gap-2"><span class="font-black text-db-pink">Location:</span><span class="text-slate-600">{locationValue}</span></p>
    <p class="flex items-start gap-2"><span class="font-black text-db-pink">Price:</span><span class="text-slate-600">{priceValue}</span></p>
  </div>

  <a
    href={bookingLink}
    target="_blank"
    rel="noopener noreferrer"
    class="block w-full rounded-full bg-db-green px-6 py-2.5 text-center text-xs font-black uppercase tracking-[0.14em] text-white drop-shadow-[0_1px_1px_rgba(255,255,255,0.55)] shadow-[0_14px_30px_rgba(0,204,129,0.26)] transition-all hover:-translate-y-0.5 hover:bg-db-pink hover:text-white hover:shadow-[0_18px_38px_rgba(158,0,150,0.24)]"
    data-track="BookClassClick"
    data-track-params={JSON.stringify({
      class_name: name,
      class_level: level,
      class_price: price,
      class_location: location,
    })}
  >
    Book now
  </a>
</div>

```

## src/components/MediaPlaceholder.astro

```astro
---
interface Props {
  title: string;
  assetNeed: string;
  ratio: string;
  subject: string;
  options: string[];
  generationBasePrompt?: string;
  promptSuggestions?: string[];
  class?: string;
}

const {
  title,
  assetNeed,
  ratio,
  subject,
  options,
  generationBasePrompt,
  promptSuggestions = [],
  class: className = "",
} = Astro.props;
---

<div
  class={`reveal-on-scroll relative min-h-[280px] overflow-hidden rounded-3xl border-2 border-dashed border-db-pink/80 bg-white/45 p-6 sm:p-8 text-db-pink shadow-[0_18px_55px_rgba(158,0,150,0.08)] ${className}`}
  data-launch-blocker="media-placeholder"
>
  <div
    class="motion-ribbon absolute -left-20 top-10 h-20 w-[140%] rotate-[-8deg] rounded-full bg-db-green/10 blur-xl"
  >
  </div>
  <div
    class="motion-ribbon-alt absolute -right-24 bottom-8 h-24 w-[120%] rotate-[11deg] rounded-full bg-db-light-pink/10 blur-xl"
  >
  </div>
  <div
    class="absolute inset-4 rounded-xl border border-dashed border-db-pink/80"
  ></div>
  <div
    class="relative z-10 flex min-h-[220px] flex-col items-center justify-center text-center"
  >
    <p
      class="mb-3 text-xs font-black uppercase tracking-[0.22em] text-db-green"
    >
      Wireframe media space
    </p>
    <h3 class="text-xl sm:text-2xl font-black leading-tight">{title}</h3>
    <p class="mt-3 text-sm font-bold uppercase tracking-[0.14em] text-db-pink/70">
      {ratio}
    </p>
    <p class="mt-4 max-w-md text-sm text-slate-500">
      Replace before launch with real Dance Bloc Brazil media.
    </p>
    <p class="sr-only">{assetNeed}</p>
    <p class="sr-only">{subject}</p>
    <ul class="sr-only">
      {options.map((option) => <li>{option}</li>)}
    </ul>

    {
      promptSuggestions.length > 0 && (
        <details class="mt-6 w-full max-w-3xl rounded-xl border border-db-pink/80 bg-white/80 p-4 text-left shadow-sm">
          <summary class="cursor-pointer text-xs font-black uppercase tracking-[0.18em] text-db-pink">
            Generation prompt suggestions
          </summary>
          {
            generationBasePrompt && (
              <>
                <p class="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-db-green">
                  Shared base prompt
                </p>
                <p class="mt-2 text-sm leading-relaxed text-slate-600">
                  {generationBasePrompt}
                </p>
              </>
            )
          }
          <p class="mt-4 text-xs font-bold uppercase tracking-[0.14em] text-db-green">
            Complete prompts
          </p>
          <ul class="mt-2 space-y-2 text-sm leading-relaxed text-slate-600">
            {promptSuggestions.map((prompt) => <li>{prompt}</li>)}
          </ul>
        </details>
      )
    }
  </div>
</div>

```

## src/components/Navbar.astro

```astro
---
import NavbarReact from "./react/Navbar";

const { currentPath } = Astro.props;
---

<NavbarReact client:load currentPath={currentPath} />


```

## src/components/Navigation.astro

```astro
---
import Navbar from "./Navbar.astro";
const currentPath = Astro.url.pathname;
---

<Navbar currentPath={currentPath} />

```

## src/components/SectionContainer.astro

```astro
---
interface Props {
  class?: string;
  id?: string;
  wide?: boolean;
  spacing?: "default" | "hero-offset" | "footer-offset";
}

const {
  class: className = "",
  id,
  wide = false,
  spacing = "default",
} = Astro.props;
const widthClass = wide ? "max-w-none" : "max-w-7xl";
const spacingClass = {
  default: "section-spacing-default",
  "hero-offset": "section-spacing-hero-offset",
  "footer-offset": "section-spacing-footer-offset",
}[spacing];
---

<section
  id={id}
  class={`section-container reveal-section ${spacingClass} px-6 sm:px-10 lg:px-16 mx-auto ${className}`}
>
  <div class={`${widthClass} mx-auto`}>
    <slot />
  </div>
</section>

```

## src/components/SectionTitle.astro

```astro
---
interface Props {
  title: string;
  subtitle?: string;
  class?: string;
  align?: "left" | "center";
}

const { title, subtitle, class: className, align = "left" } = Astro.props;
const alignment =
  align === "center"
    ? "mx-auto text-center items-center"
    : "text-left items-start";
---

<div
  class:list={[
    "section-title flex max-w-5xl flex-col gap-4",
    alignment,
    className,
  ]}
>
  <h2
    class="relative py-2 text-5xl md:text-7xl font-black leading-[0.92] text-db-pink drop-shadow-[0_10px_18px_rgba(158,0,150,0.16)] text-balance"
  >
    {title}
    <span
      class="absolute -z-50 bottom-3 sm:bottom-4 left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-db-green/90 via-db-pink/40 to-db-green/90 shadow-[0_4px_16px_rgba(0,204,129,0.4),0_4px_16px_rgba(158,0,150,0.3)]"
    ></span>
  </h2>
  {
    subtitle && (
      <p class="max-w-5xl text-lg md:text-xl leading-relaxed text-slate-600/90 text-balance tracking-wide">
        {subtitle}
      </p>
    )
  }
</div>

```

## src/components/SeoRedirect.astro

```astro
---
import { absoluteUrl } from "../lib/site";

interface Props {
  to: string;
  label: string;
}

const { to, label } = Astro.props;
const target = absoluteUrl(to);
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <meta name="robots" content="noindex, follow" />
    <link rel="canonical" href={target} />
    <meta http-equiv="refresh" content={`0; url=${to}`} />
    <title>{label} | Dance Bloc Brazil</title>
  </head>
  <body>
    <p>
      This page has moved to <a href={to}>{label}</a>.
    </p>
  </body>
</html>

```

## src/components/TermCard.astro

```astro
---
interface Props {
  name: string;
  level: string;
  dateBegin: string;
  dateEnd: string;
  time: string;
  location: string;
  price: string;
  bookingLink: string;
  description: string;
  showDetails?: boolean;
  enableMobileReadMore?: boolean;
}

const {
  name,
  level,
  dateBegin,
  dateEnd,
  time,
  location,
  price,
  bookingLink,
  description,
  showDetails = true,
  enableMobileReadMore = false,
} = Astro.props;

const descriptionParagraphs = description
  .split(/\n\s*\n/)
  .map((paragraph) => paragraph.trim())
  .filter(Boolean);

const thirtyMinuteRegex = /^((?:First|Second)\s*30\s*min(?:utes)?)([\s\S]*)$/i;
---

<div
  class="group overflow-hidden rounded-xl border border-db-pink/80 bg-white shadow-[0_18px_48px_rgba(158,0,150,0.09)] transition-all duration-300 hover:-translate-y-1 hover:border-db-pink/80 hover:shadow-[0_22px_60px_rgba(158,0,150,0.14)]"
>
  <div
    class="h-1.5 bg-gradient-to-r from-db-green via-db-light-pink to-db-pink"
  >
  </div>
  <div class="p-7 sm:p-8">
    <div class="flex justify-between items-start mb-4">
      <h3 class="text-2xl font-black leading-tight text-db-pink">{name}</h3>
      <span
        class="ml-4 shrink-0 rounded-full border border-db-pink/80 bg-db-light-pink/10 px-3 py-1 text-sm font-bold text-db-pink"
      >
        {level}
      </span>
    </div>

    {
      enableMobileReadMore ? (
        <div class="mb-6">
          <div class="hidden md:block space-y-4">
            {descriptionParagraphs.map((paragraph) => {
              const thirtyMinuteMatch = paragraph.match(thirtyMinuteRegex);

              return (
                <p class="text-slate-600 text-lg leading-relaxed whitespace-pre-line">
                  {paragraph.toLowerCase() === "class structure:" ? (
                    <span class="underline">Class structure:</span>
                  ) : thirtyMinuteMatch ? (
                    <>
                      <strong>{thirtyMinuteMatch[1]}</strong>
                      {thirtyMinuteMatch[2]}
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              );
            })}
          </div>

          <div class="md:hidden" data-read-more-container>
            <div
              data-read-more-content
              class="space-y-4 overflow-hidden max-h-7 transition-[max-height] duration-300"
            >
              {descriptionParagraphs.map((paragraph) => {
                const thirtyMinuteMatch = paragraph.match(thirtyMinuteRegex);

                return (
                  <p class="text-slate-600 text-lg leading-relaxed whitespace-pre-line">
                    {paragraph.toLowerCase() === "class structure:" ? (
                      <span class="underline">Class structure:</span>
                    ) : thirtyMinuteMatch ? (
                      <>
                        <strong>{thirtyMinuteMatch[1]}</strong>
                        {thirtyMinuteMatch[2]}
                      </>
                    ) : (
                      paragraph
                    )}
                  </p>
                );
              })}
            </div>
            <button
              type="button"
              class="mt-2 text-sm font-semibold text-db-pink"
              data-read-more-toggle
              aria-expanded="false"
            >
              Read more
            </button>
          </div>
        </div>
      ) : (
        <div class="mb-6 space-y-4">
          {descriptionParagraphs.map((paragraph) => {
            const thirtyMinuteMatch = paragraph.match(thirtyMinuteRegex);

            return (
              <p class="text-slate-600 text-lg leading-relaxed whitespace-pre-line">
                {paragraph.toLowerCase() === "class structure:" ? (
                  <span class="underline">Class structure:</span>
                ) : thirtyMinuteMatch ? (
                  <>
                    <strong>{thirtyMinuteMatch[1]}</strong>
                    {thirtyMinuteMatch[2]}
                  </>
                ) : (
                  paragraph
                )}
              </p>
            );
          })}
        </div>
      )
    }

    {
      showDetails !== false && (
        <div class="space-y-4 mb-6 rounded-xl border border-slate-200/80 bg-slate-50/70 p-5">
          <div class="flex items-start">
            <svg
              class="w-5 h-5 text-db-pink mt-0.5 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <div>
              <span class="text-slate-600 font-medium">Dates:</span>
              <span class="text-db-pink ml-2">
                {dateBegin} - {dateEnd}
              </span>
            </div>
          </div>

          <div class="flex items-start">
            <svg
              class="w-5 h-5 text-db-pink mt-0.5 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <span class="text-slate-600 font-medium">Time:</span>
              <span class="text-db-pink ml-2">{time}</span>
            </div>
          </div>

          <div class="flex items-start">
            <svg
              class="w-5 h-5 text-db-pink mt-0.5 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <div>
              <span class="text-slate-600 font-medium">Location:</span>
              <span class="text-db-pink ml-2">{location}</span>
            </div>
          </div>

          <div class="flex items-start">
            <svg
              class="w-5 h-5 text-db-pink mt-0.5 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <span class="text-slate-600 font-medium">Price:</span>
              <span class="text-db-pink ml-2">{price}</span>
            </div>
          </div>
        </div>
      )
    }

    {
      showDetails === false && price && (
        <div class="mb-6 rounded-xl border border-slate-200/80 bg-slate-50/70 p-5">
          <span class="text-slate-600 font-medium">Price:</span>
          <span class="text-db-pink ml-2">{price}</span>
        </div>
      )
    }

    <a
      href={bookingLink}
      target="_blank"
      rel="noopener noreferrer"
      class="block w-full rounded-full bg-db-green px-6 py-3 text-center font-black uppercase tracking-[0.14em] text-white drop-shadow-[0_1px_1px_rgba(255,255,255,0.55)] shadow-[0_14px_30px_rgba(0,204,129,0.26)] transition-all hover:-translate-y-0.5 hover:bg-db-pink hover:text-white hover:shadow-[0_18px_38px_rgba(158,0,150,0.24)]"
      data-track="BookClassClick"
      data-track-params={JSON.stringify({
        class_name: name,
        class_level: level,
        class_price: price,
        class_location: location,
      })}
    >
      Book Now
    </a>
  </div>
</div>

<script>
  const initializeMobileReadMore = () => {
    document.querySelectorAll("[data-read-more-toggle]").forEach((button) => {
      if (button.dataset.bound === "true") return;

      const container = button.closest("[data-read-more-container]");
      const content = container?.querySelector("[data-read-more-content]");
      if (!content) return;

      if (content.scrollHeight <= content.clientHeight + 1) {
        button.classList.add("hidden");
        return;
      }

      button.dataset.bound = "true";
      button.addEventListener("click", () => {
        const isExpanded = button.getAttribute("aria-expanded") === "true";

        button.setAttribute("aria-expanded", String(!isExpanded));
        button.textContent = isExpanded ? "Read more" : "Read less";

        content.classList.toggle("max-h-7", isExpanded);
        content.classList.toggle("max-h-none", !isExpanded);
      });
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeMobileReadMore);
  } else {
    initializeMobileReadMore();
  }
</script>

```

## src/components/TestimonialCard.astro

```astro
---
import { Image } from "astro:assets";
// Import the SVG icon
import Quote from "../images/icon/quote.svg";

interface Props {
  quote: string;
  author: string;
  image?: any;
}

const { quote, author, image = "/images/avatar-placeholder.jpg" } = Astro.props;
---

<div class="testimonial-card relative mt-24 opacity-0 transform translate-y-10">
  <div class="absolute -top-28 bg-db-pink/40 rounded-full w-64 h-64">
    <Image
      src={image}
      alt={author}
      width={200}
      height={200}
      class="w-full h-full object-contain rounded-full border-x-4 border-db-pink/80"
    />
  </div>
  <div
    class="pt-40 pb-8 px-8 bg-white rounded-xl shadow-lg border border-db-pink/80"
  >
    <h3 class="font-bold text-xl text-center tracking-wider text-db-pink mb-6">
      {author}
    </h3>
    <div class="relative">
      <div class="absolute -left-4 -top-4 text-6xl text-db-pink/30">
        <img src={Quote.src} alt="Quote" class="w-6 h-6" />
      </div>
      <p
        class="relative px-2 z-10 text-center text-db-pink text-balance leading-relaxed"
      >
        {quote}
      </p>
      <div class="absolute -right-4 -bottom-4 text-6xl text-db-pink rotate-180">
        <img src={Quote.src} alt="Quote" class="w-6 h-6" />
      </div>
    </div>
  </div>
</div>

<script>
  // Simple fade-in animation for testimonial cards
  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".testimonial-card");

    function animateCards() {
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        if (isVisible) {
          setTimeout(() => {
            card.classList.add("opacity-100", "translate-y-0");
            card.classList.add("transition-all", "duration-700", "ease-out");
          }, index * 150);
        }
      });
    }

    // Initial check
    animateCards();

    // On scroll
    window.addEventListener("scroll", animateCards, { passive: true });
  });
</script>

```

## src/components/react/AnimatedHamburger.tsx

```tsx
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
```

## src/components/react/CostumeCard.tsx

```tsx
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
    <div className="motion-card group overflow-hidden rounded-xl border border-db-pink/80 bg-white shadow-[0_18px_48px_rgba(158,0,150,0.10)]">
      <div className="image-container aspect-[3/4] overflow-hidden rounded-b-[2rem] relative">
        <img
          src={image.src}
          alt={title}
          width={400}
          height={533}
          className="costume-image w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/10 transition duration-300 group-hover:bg-black/0"></div>
        <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/20 bg-slate-950/72 px-4 py-3 text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-300">
            Quick hire check
          </p>
          <p className="mt-1 text-sm font-bold leading-snug">
            Confirm size, pieces, deposit, and date before booking.
          </p>
        </div>
      </div>

      <div className="content p-6">
        <h3 className="title mb-3 text-2xl font-black text-[var(--color-primary,#9E0096)]">
          {title}
        </h3>

        <div className="tags flex flex-wrap gap-2 mb-4">
          <span className="tag tag-size rounded-full border border-db-pink/80 bg-pink-50 px-3 py-1 text-xs font-bold text-pink-900">
            {size}
          </span>
          <span className="tag tag-color rounded-full border border-db-pink/80 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-900">
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

        <p className="material text-sm text-db-pink mb-5">
          <span className="material-label font-semibold">Material: </span>
          {material}
        </p>

        <div className="footer flex items-center justify-between gap-4 border-t border-gray-200 pt-4">
          <span className="price text-xl font-black text-[var(--color-primary,#9E0096)]">
            {price}/day
          </span>
          <a
            href="/samba-costume-hire-perth#book-costume"
            className="motion-cta book-button rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-black uppercase tracking-[0.12em] text-db-pink drop-shadow-[0_1px_1px_rgba(255,255,255,0.55)] shadow-[0_12px_25px_rgba(52,211,153,0.28)] transition duration-200 ease-in-out hover:bg-[var(--color-primary,#9E0096)] hover:text-white hover:shadow-md"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}
```

## src/components/react/Navbar.tsx

```tsx
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
  { name: "Instant Quote Estimate", path: "/#contact" },
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
            <div className="mx-auto flex w-full max-w-5xl flex-col justify-start px-7 pb-12 pt-6 sm:px-10 sm:pb-14 sm:pt-10">
              <div className="grid gap-4 sm:gap-6">
                {NAV_LINKS.map(({ name, path }) => (
                  <motion.div key={name} variants={itemVariants}>
                    <a
                      className={`group flex items-center justify-between gap-6 border-b border-white/12 py-4 transition hover:text-db-green ${
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
                className="mt-6 grid gap-4 sm:flex sm:flex-wrap"
              >
                {CTA_LINKS.map(({ name, path }) => (
                  <a
                    key={name}
                    href={path}
                    onClick={handleLinkClick}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-db-pink/80 bg-db-green px-6 py-3 text-xs sm:text-sm font-black uppercase tracking-[0.16em] text-white drop-shadow-[0_1px_1px_rgba(255,255,255,0.55)] shadow-[0_14px_32px_rgba(0,204,129,0.25)] transition hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-db-pink hover:drop-shadow-none"
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
```

## src/components/react/ServicePathSelector.tsx

```tsx
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
            const borderVariant =
              idx % 2 === 0 ? "db-border-alt-a" : "db-border-alt-b";

            return (
              <button
                key={path.key}
                type="button"
                onClick={() => goTo(idx)}
                className={`motion-card group grid min-h-[118px] grid-cols-[48px_1fr] gap-4 rounded-xl border p-5 text-left transition ${
                  selected
                    ? "border-db-pink/80 bg-slate-950 text-white shadow-[0_22px_55px_rgba(0,204,129,0.18)]"
                    : `${borderVariant} bg-white text-db-pink shadow-[0_14px_36px_rgba(158,0,150,0.07)] hover:border-db-pink/80`
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

        <div className="relative min-h-[520px] overflow-hidden rounded-xl border border-db-pink/80 bg-slate-950 text-white shadow-[0_28px_80px_rgba(15,23,42,0.22)]">
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
        <div className="relative overflow-hidden rounded-xl border border-db-pink/80 bg-slate-950 text-white shadow-[0_24px_62px_rgba(15,23,42,0.24)]">
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
                <div className="rounded-xl border border-db-pink/80 bg-slate-950/20 p-4 backdrop-blur-[1px]">
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
```

## src/data/costumes.ts

```ts
import princesaCostume from "../images/costumes/princesa-rosa.avif";
import blueQueenCostume from "../images/costumes/blue-queen.avif";
import goldFireCostume from "../images/costumes/gold-fire.avif";
import rioSunriseCostume from "../images/costumes/rio-sunrise.avif";
import emeraldEmpressCostume from "../images/costumes/emerald-empress.avif";
import bahiaBeautyCostume from "../images/costumes/bahia-beauty.avif";
import blueAngelCostume from "../images/costumes/blue-angel.avif";
import brazilianFireCostume from "../images/costumes/brazilian-fire.avif";
import passistaSunsetCostume from "../images/costumes/passista-sunset.avif";

export interface Costume {
  title: string;
  description: string;
  color: string;
  size: string;
  material: string;
  availability: string;
  price: string;
  image: any; // Using any for now since we're dealing with image imports
}

export const costumes: Costume[] = [
  {
    title: "Princesa Rosa",
    description:
      "A pink and silver samba bikini costume with yellow accents, a feathered headpiece, neckpiece, wrist cuffs, and leg cuffs. Handcrafted by a Brazilian atelier and suited to performances, themed events, and photoshoots.",
    color: "pink, silver, pops of yellow",
    size: "S/M",
    material: "Fabric, Feathers, Rhinestones, Sequins, Beads",
    availability: "Available",
    price: "$100",
    image: princesaCostume,
  },
  {
    title: "Blue Queen",
    description:
      "A light blue and silver samba bikini costume with a feathered headpiece, neckpiece, arm and wrist cuffs, and leg cuffs. A polished option for stage performances, Carnival-style events, and visual activations.",
    color: "silver, blue, pops of white",
    size: "S/M",
    material: "Fabric, Feathers, Rhinestones, Sequins, Beads",
    availability: "Available",
    price: "$120",
    image: blueQueenCostume,
  },
  {
    title: "Gold Fire",
    description:
      "A red and gold samba bikini costume with strong colour contrast and stage-ready detailing. Suitable for performances, themed parties, and event entertainment.",
    color: "red, gold",
    size: "M",
    material: "Fabric, Feathers, Rhinestones, Sequins, Beads",
    availability: "Available",
    price: "$80",
    image: goldFireCostume,
  },
  {
    title: "Rio Sunrise",
    description:
      "A bright pink and yellow samba bikini costume with matching neckpiece, arm and wrist cuffs, and leg cuffs. A vivid choice for photoshoots, performances, and Carnival-inspired events.",
    color: "pink, yellow",
    size: "M",
    material: "Fabric, Feathers, Rhinestones, Sequins, Beads",
    availability: "Available",
    price: "$100",
    image: rioSunriseCostume,
  },
  {
    title: "Emerald Empress",
    description:
      "A green and silver samba bikini costume with feathered headpiece, neckpiece, arm and wrist cuffs, and leg cuffs. The green feather detail creates a strong Carnival-style silhouette.",
    color: "green, silver, pops of white",
    size: "S/M",
    material: "Fabric, Feathers, Rhinestones, Sequins, Beads",
    availability: "Available",
    price: "$120",
    image: emeraldEmpressCostume,
  },
  {
    title: "Bahia Beauty",
    description:
      "A blue and gold samba bikini costume with neckpiece, arm and wrist cuffs, and leg cuffs. A strong colourway for stage, themed events, and performance bookings.",
    color: "blue, gold",
    size: "M",
    material: "Fabric, Feathers, Rhinestones, Sequins, Beads",
    availability: "Available",
    price: "$100",
    image: bahiaBeautyCostume,
  },
  {
    title: "Blue Angel",
    description:
      "A blue and white samba costume with headpiece, bra, bikini belt, neckpiece, arm and wrist cuffs, and leg cuffs. The blue and white contrast gives the outfit a clean, bright stage look.",
    color: "blue, white",
    size: "M",
    material: "Fabric, Feathers, Rhinestones, Sequins, Beads",
    availability: "Available",
    price: "$100",
    image: blueAngelCostume,
  },
  {
    title: "Brazilian Fire",
    description:
      "An orange, red, and silver samba costume with headpiece, neckpiece, bra, bikini belt, wrist cuffs, and leg cuffs. A warm colour palette for Carnival-style events and performances.",
    color: "orange, red, silver",
    size: "S",
    material: "Fabric, Feathers, Rhinestones, Sequins, Beads",
    availability: "Available",
    price: "$100",
    image: brazilianFireCostume,
  },
  {
    title: "Passista Sunset",
    description:
      "A pink, silver, and yellow samba bikini costume with headpiece, bra, bikini belt, neckpiece, arm and wrist cuffs, and leg cuffs. A colourful option for performers and themed event styling.",
    color: "pink, silver, yellow",
    size: "S/M",
    material: "Fabric, Feathers, Rhinestones, Sequins, Beads",
    availability: "Available",
    price: "$120",
    image: passistaSunsetCostume,
  },
];
```

## src/data/terms.ts

```ts
export interface Term {
  name: string;
  level: string;
  dateBegin: string;
  dateEnd: string;
  time: string;
  location: string;
  price: string;
  bookingLink: string;
  description: string;
  showDetails?: boolean;
}

export const terms: Term[] = [
  {
    name: "Samba no Pé – Beginners",
    level: "Beginner",
    dateBegin: "3rd June 2026",
    dateEnd: "24th June 2026",
    time: "7:00pm - 8:00pm",
    location: "Balcatta",
    price: "$88",
    bookingLink: "https://square.link/u/f5mi66pX?src=sheet",
    description: `Perfect for absolute beginners.

Step into the vibrant world of Brazilian samba with a course designed especially for those starting their journey. You’ll learn the samba basic step, build confidence in your movement, and develop rhythm and coordination in a fun, supportive environment.

Class structure:

First 30min (7:00–7:30pm)
A beginner-focused session covering samba basics, technique, and simple steps, with plenty of guidance and individual feedback.

Second 30min (7:30–8:00pm)
Join our intermediate dancers for a fun, high-energy choreography session. This section is designed to be beginner-friendly, with options to suit all levels - helping you build confidence, coordination, and enjoy the full samba vibe.`,
  },
  {
    name: "Samba no Pé – Intermediate",
    level: "Intermediate",
    dateBegin: "3rd June 2026",
    dateEnd: "24th June 2026",
    time: "7:30pm - 8:30pm",
    location: "Balcatta",
    price: "$88",
    bookingLink: "https://square.link/u/1DlOZlSe?src=sheet",
    description: `For dancers with some samba experience.

Ready to level up? This class is designed for dancers who already know the samba basic and want to refine technique, build stamina, and take on more challenging choreography.

Class structure:

First 30min (7:30–8:00pm)
Begin with a shared, high-energy choreography session alongside the beginner group. This section focuses on coordination, musicality, arm styling, and endurance through a dynamic routine, helping you build performance quality.

Second 30min (8:00–8:30pm)
A dedicated intermediate session with more focused technique work, drills, and skill development to help you clean your movement and progress with confidence.

Expect a challenge, plenty of growth, and lots of samba energy.`,
  },
  {
    name: "Samba no Pé – Casual Class",
    level: "Casual",
    dateBegin: "",
    dateEnd: "",
    time: "",
    location: "",
    price: "$25",
    bookingLink: "https://square.link/u/i9DNtnt3?src=sheet",
    description:
      "Can’t make the full term but still want to join here and there? No problem. Jump into class whenever it suits you.",
    showDetails: false,
  },
];
```

## src/env.d.ts

```ts
/// <reference types="astro/client" />
/// <reference types="@sanity/astro/module" />
```

## src/layouts/Layout.astro

```astro
---
import "@fontsource-variable/raleway";
import {
  absoluteUrl,
  canonicalUrl,
  siteConfig,
  titleWithBrand,
} from "../lib/site";
import "../styles/global.css";
import { ClientRouter } from "astro:transitions";
import Navigation from "../components/Navigation.astro";
import Footer from "../components/Footer.astro";

interface Props {
  title: string;
  description: string;
  image?: string;
  url?: string;
  canonical?: string;
  structuredData?: any[];
  pageEvent?: string;
  noindex?: boolean;
  ogType?: "website" | "article";
}

const {
  title,
  description = siteConfig.defaultDescription,
  image = "/images/hero.avif",
  url,
  canonical,
  structuredData = [],
  pageEvent = "",
  noindex = false,
  ogType = "website",
} = Astro.props;

const pageTitle = titleWithBrand(title);
const canonicalHref = canonical
  ? absoluteUrl(canonical)
  : url
    ? absoluteUrl(url)
    : canonicalUrl(Astro.url.pathname);
const socialImage = absoluteUrl(image);
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" type="image/png" href="/images/icon/faviconpng.png" />
    <link
      rel="apple-touch-icon"
      type="image/png"
      href="/images/icon/faviconpng.png"
    />
    <meta name="generator" content={Astro.generator} />

    <ClientRouter />

    <title>{pageTitle}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonicalHref} />
    <meta name="author" content={siteConfig.name} />
    <meta
      name="robots"
      content={noindex ? "noindex, follow" : "index, follow"}
    />

    <meta property="og:type" content={ogType} />
    <meta property="og:url" content={canonicalHref} />
    <meta property="og:title" content={pageTitle} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={socialImage} />
    <meta property="og:site_name" content={siteConfig.name} />
    <meta property="og:locale" content={siteConfig.locale} />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={canonicalHref} />
    <meta property="twitter:title" content={pageTitle} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={socialImage} />

    <meta name="theme-color" content={siteConfig.themeColor} />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta
      name="apple-mobile-web-app-status-bar-style"
      content="black-translucent"
    />
    <meta name="format-detection" content="telephone=no" />
    <meta name="language" content="English" />

    {
      structuredData.map((data) => (
        <script type="application/ld+json" set:html={JSON.stringify(data)} />
      ))
    }

    <script is:inline define:vars={{ pageEvent }}>
      !(function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js"
      );
      fbq("init", "1320158689084358");
      fbq("track", "PageView");
      if (pageEvent) {
        fbq("track", pageEvent);
      }
    </script>
    <noscript
      ><img
        height="1"
        width="1"
        style="display:none"
        src="https://www.facebook.com/tr?id=1320158689084358&ev=PageView&noscript=1"
      /></noscript
    >
  </head>
  <body class="bg-[#fbfaf8] text-db-pink antialiased">
    <Navigation />

    <main class="pt-0">
      <slot />
    </main>

    <Footer />
    <script>
      document.addEventListener("astro:page-load", () => {
        const revealItems = document.querySelectorAll(
          ".reveal-on-scroll, .reveal-section"
        );

        if (!("IntersectionObserver" in window)) {
          revealItems.forEach((item) => item.classList.add("is-visible"));
          return;
        }

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
        );

        revealItems.forEach((item, index) => {
          if (item instanceof HTMLElement) {
            item.style.transitionDelay = `${Math.min(index % 6, 5) * 45}ms`;
          }
          observer.observe(item);
        });
      });
    </script>
  </body>
</html>

```

## src/layouts/main.astro

```astro
---
import '../styles/global.css';
const { content } = Astro.props;
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <title>{content.title}</title>
  </head>
  <body>
    <slot />
  </body>
</html>

```

## src/lib/mediaPrompts.ts

```ts
export const mediaPromptBase =
  "Mixed-media Brazilian samba visual for Dance Bloc Brazil in Perth, premium editorial photography blended with subtle graphic movement ribbons, vivid brand accents in deep magenta #9E0096, electric pink #FF00F7, and green #00CC81, Carnival-inspired feathers, sequins, rhythm, confident movement, warm natural skin tones, modern clean composition, energetic but polished, no text, no logos, no distorted hands, no extra limbs, no fake signage.";

export function mediaPrompt(scene: string) {
  return `${mediaPromptBase} Scene: ${scene}`;
}
```

## src/lib/pixelEvents.js

```js
/**
 * Facebook Pixel tracking utilities
 */

/**
 * Track a button click event
 * @param {string} eventName - The name of the event to track
 * @param {Object} params - Optional parameters to include with the event
 */
export function trackButtonClick(eventName, params = {}) {
  if (typeof fbq !== "undefined") {
    fbq("track", eventName, params);
  } else {
    console.warn("Facebook Pixel not loaded");
  }
}

/**
 * Initialize click tracking for elements with data-track attribute
 * Usage: Add data-track="EventName" to any button or link element
 * Optional: Add data-track-params="{\"param_name\":\"value\"}" for additional parameters
 */
export function initClickTracking() {
  document.querySelectorAll("[data-track]").forEach((element) => {
    element.addEventListener("click", () => {
      const eventName = element.getAttribute("data-track");
      let params = {};

      const paramsAttr = element.getAttribute("data-track-params");
      if (paramsAttr) {
        try {
          params = JSON.parse(paramsAttr);
        } catch (e) {
          console.error("Invalid data-track-params JSON", e);
        }
      }

      trackButtonClick(eventName, params);
    });
  });
}
```

## src/lib/schema.ts

```ts
import { absoluteUrl, siteConfig } from "./site";

type Faq = {
  question: string;
  answer: string;
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    sameAs: siteConfig.socialProfiles,
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Perth, Western Australia",
    },
  };
}

export function serviceSchema({
  name,
  description,
  url,
  image,
}: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(url),
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Perth, Western Australia",
    },
    ...(image ? { image: absoluteUrl(image) } : {}),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

export function costumeItemListSchema({
  url,
  items,
}: {
  url: string;
  items: Array<{ title: string; description: string; price: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    url: absoluteUrl(url),
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: item.title,
        description: item.description,
        offers: {
          "@type": "Offer",
          price: item.price.replace(/[^0-9.]/g, ""),
          priceCurrency: "AUD",
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };
}
```

## src/lib/site.ts

```ts
export const siteConfig = {
  name: "Dance Bloc Brazil",
  domain: "danceblocbrazil.com",
  url: "https://danceblocbrazil.com",
  email: "info@danceblocbrazil.com",
  locale: "en_AU",
  region: "WA",
  country: "AU",
  city: "Perth",
  classSuburb: "Balcatta",
  themeColor: "#9E0096",
  defaultDescription:
    "Brazilian samba classes, event entertainment, private workshops, and Carnival-style costume hire in Perth.",
  socialProfiles: [
    "https://instagram.com/DanceBlocBrazil",
    "https://facebook.com/DanceBlocBrazil",
    "https://tiktok.com/@danceblocbrazil",
  ],
};

export function absoluteUrl(pathOrUrl = "/") {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }

  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${siteConfig.url}${path}`;
}

export function canonicalUrl(pathname = "/") {
  const path =
    pathname.endsWith("/") && pathname !== "/"
      ? pathname.slice(0, -1)
      : pathname;
  return absoluteUrl(path);
}

export function titleWithBrand(title: string) {
  return title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;
}
```

## src/pages/about.astro

```astro
---
import "../styles/global.css";
import Layout from "../layouts/Layout.astro";
import SectionContainer from "../components/SectionContainer.astro";
import SectionTitle from "../components/SectionTitle.astro";
import Hero from "../components/Hero.astro";
import MediaPlaceholder from "../components/MediaPlaceholder.astro";
import { Picture } from "astro:assets";
import abouthero from "../images/abouthero.avif";
import dancers from "../images/dancers.avif";
import { organizationSchema } from "../lib/schema";

const title = "About Dance Bloc Brazil | Brazilian Samba in Perth";
const description =
  "Learn about Dance Bloc Brazil, our samba classes, event entertainment, private workshops, and costume hire in Perth.";
const url = "/about";

const approachPoints = [
  {
    title: "Clarity",
    body: "Classes and enquiries should feel easy to understand, whether someone is new to samba or planning an event.",
  },
  {
    title: "Rhythm",
    body: "Samba no pe technique, timing, musicality, and movement quality sit at the centre of the work.",
  },
  {
    title: "Confidence",
    body: "Students and workshop groups are guided at a realistic pace so they can move with more ease.",
  },
  {
    title: "Respect",
    body: "Brazilian samba is presented with care for its energy, visual culture, and performance context.",
  },
  {
    title: "Professionalism",
    body: "Event bookings and costume hire need clear details, reliable communication, and polished presentation.",
  },
];

const testimonialNeeds = [
  "Student feedback about beginner class confidence and progression",
  "Event organiser feedback about run-sheet fit, audience response, and visual impact",
  "Workshop organiser feedback about group participation and ease of planning",
  "Costume hire feedback about fit, detail, pickup or return, and styling support",
];
---

<Layout
  title={title}
  description={description}
  image={abouthero.src}
  url={url}
  structuredData={[organizationSchema()]}
>
  <Hero
    title="About Dance Bloc Brazil"
    subtitle="A Perth-based Brazilian samba business offering samba no pe classes, event entertainment, workshops, and costume hire."
    backgroundImage={dancers}
    primaryCta={{ label: "View Classes", href: "/samba-classes-perth" }}
    secondaryCta={{ label: "Contact Us", href: "/#contact" }}
  />

  <SectionContainer spacing="hero-offset">
    <div class="grid grid-cols-1 md:grid-cols-2 section-grid-wide items-center">
      <div>
        <SectionTitle
          title="Samba in the studio, streets, and stages"
          subtitle="Dance Bloc Brazil helps people experience Brazilian samba through movement, celebration, and visually striking performance."
          class="section-intro"
        />

        <div class="space-y-6 text-lg text-slate-600 leading-relaxed">
          <p>
            Dance Bloc Brazil offers samba no pe classes in Balcatta, private
            samba workshops, event entertainment, and Carnival-style costume
            hire across Perth.
          </p>
          <p>
            The business is built around clear instruction, welcoming class
            energy, strong visual performance, and practical booking details for
            students, event organisers, and costume hire clients.
          </p>
        </div>
      </div>

      <Picture
        src={abouthero}
        alt="Dance Bloc Brazil samba performers in colourful costumes"
        widths={[320, 480, 640, 800, 1200]}
        sizes="(max-width: 480px) 320px, (max-width: 768px) 480px, 800px"
        class="w-full h-full object-cover image-overlay"
      />
    </div>
  </SectionContainer>

  <SectionContainer>
    <MediaPlaceholder
      title="Trust-building people asset"
      assetNeed="People-focused asset for the about page."
      ratio="Portrait 4:5 or landscape editorial photo"
      subject="Show the teacher, team, class community, or preparation context in a way that builds trust."
      options={[
        "Teacher or team portrait",
        "Class or community photo",
        "Performance backstage or prep photo",
      ]}
      promptSuggestions={[
        "File: about-teacher-portrait.avif. Create a trust-building teacher portrait for Dance Bloc Brazil. Show a samba teacher in a clean Perth studio, standing with warm confidence and approachable energy. Use soft natural light, tasteful samba styling, practical dancewear or subtle costume detail, and restrained magenta-green brand accents. Portrait 4:5, no text, no logos, no fake signage, no distorted hands.",
        "File: about-class-community.avif. Create a class-community photo after samba practice, with students gathered around the teacher and smiling naturally. The scene should feel real, welcoming, and beginner-friendly, with studio context visible but uncluttered. Landscape editorial photo, warm skin tones, no text, no logos, no fake signage, no distorted hands, no extra limbs.",
        "File: about-backstage-preparation.avif. Create a backstage preparation image showing a dancer or team member getting ready for a samba event. Include careful costume handling, feathers, sequins, mirror light, makeup or hair prep, and a calm professional mood. Portrait 4:5, documentary editorial style, no text, no logos, no fake signage, no distorted hands.",
      ]}
    />
  </SectionContainer>

  <SectionContainer class="bg-db-green/5">
    <div
      class="grid grid-cols-1 section-grid-wide lg:grid-cols-[0.85fr_1.15fr] lg:items-start"
    >
      <SectionTitle
        title="Meet the teacher and team"
        subtitle="The strongest about-page asset should show the people behind the classes, workshops, performances, and costume care."
      />

      <div class="space-y-6 text-lg leading-relaxed text-slate-600">
        <p>
          This section should be completed with real teacher or team details:
          teaching background, samba experience, class approach, performance
          context, and the practical care taken with client bookings.
        </p>
        <p>
          Keep the copy specific and human. Students need to know they will be
          guided clearly; event organisers need to know the booking will be
          handled professionally.
        </p>
      </div>
    </div>
  </SectionContainer>

  <SectionContainer>
    <SectionTitle
      title="Our approach"
      subtitle="Dance Bloc Brazil should feel energetic, welcoming, visually strong, and easy to organise."
      class="section-intro"
    />

    <div class="grid grid-cols-1 gap-5 md:grid-cols-5">
      {
        approachPoints.map((point) => (
          <div class="motion-card motion-band reveal-on-scroll min-h-[220px] rounded-xl bg-slate-950 bg-[linear-gradient(135deg,#0f172a,#2a103d,#0f172a)] p-6 text-white shadow-[0_22px_55px_rgba(15,23,42,0.16)]">
            <h3 class="text-2xl font-black text-db-green">{point.title}</h3>
            <p class="mt-4 text-base leading-relaxed text-white/78">
              {point.body}
            </p>
          </div>
        ))
      }
    </div>
  </SectionContainer>

  <SectionContainer>
    <MediaPlaceholder
      title="Behind-the-scenes trust media"
      assetNeed="Behind-the-scenes media that shows preparation, rehearsal, costume care, or class community."
      ratio="Landscape 16:9 or three 4:5 images"
      subject="Show the work behind the classes, shows, workshops, and costume hire so visitors can trust the people and process."
      options={[
        "Rehearsal or class preparation photo",
        "Costume care and detail photo",
        "Teacher or team working with students",
      ]}
      promptSuggestions={[
        "File: about-rehearsal-preparation.avif. Create a behind-the-scenes rehearsal image with a samba dancer checking movement in a studio while a costume rack sits nearby. Show preparation, focus, and professional care rather than a staged performance. Landscape 16:9, warm editorial lighting, subtle magenta-green motion accents, no text, no logos, no fake signage, no distorted hands.",
        "File: about-costume-care-detail.avif. Create a detailed costume-care image showing hands carefully arranging feathers, rhinestones, cuffs, belt, and headpiece pieces on a clean table. Emphasize care, condition, texture, and preparation for hire or performance. Landscape or 4:5 editorial close-up, no text, no logos, no fake signage, no distorted hands.",
        "File: about-student-guidance.avif. Create a teacher-guidance image with a samba teacher helping a small student group adjust posture, timing, or arm position. The mood should be patient, practical, and community-focused. Bright studio setting, natural expressions, portrait 4:5 or landscape 16:9, no text, no logos, no fake signage, no distorted hands, no extra limbs.",
      ]}
    />
  </SectionContainer>

  <SectionContainer class="bg-db-light-pink/5">
    <SectionTitle
      title="Testimonials to collect"
      subtitle="Use real quotes only. These are the proof categories needed before replacing this planning section."
      class="section-intro"
    />

    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      {
        testimonialNeeds.map((need) => (
          <div
            class="motion-card reveal-on-scroll rounded-xl border border-db-pink/80 bg-white p-6 text-lg font-bold leading-relaxed text-slate-700 shadow-[0_14px_36px_rgba(158,0,150,0.08)]"
            data-launch-blocker="testimonial-placeholder"
          >
            {need}
          </div>
        ))
      }
    </div>
  </SectionContainer>

  <SectionContainer class="bg-db-light-pink/5">
    <SectionTitle
      title="What we offer"
      subtitle="Four connected ways to work with Dance Bloc Brazil."
      class="section-intro"
    />

    <div class="grid grid-cols-1 md:grid-cols-2 section-grid-base text-lg text-slate-600">
      <div>
        <h3 class="text-2xl font-bold mb-4 text-db-pink">Samba classes</h3>
        <p>
          Beginner, intermediate, and casual samba no pe classes in Balcatta,
          with no partner needed.
        </p>
      </div>
      <div>
        <h3 class="text-2xl font-bold mb-4 text-db-pink">Private workshops</h3>
        <p>
          Group samba workshops for team building, hens parties, birthdays,
          schools, community groups, and special events.
        </p>
      </div>
      <div>
        <h3 class="text-2xl font-bold mb-4 text-db-pink">
          Event entertainment
        </h3>
        <p>
          Brazilian samba dancers for weddings, corporate events, private
          parties, festivals, launches, and themed celebrations.
        </p>
      </div>
      <div>
        <h3 class="text-2xl font-bold mb-4 text-db-pink">Costume hire</h3>
        <p>
          Samba and Carnival-style costume hire for performances, themed events,
          photoshoots, and special occasions.
        </p>
      </div>
    </div>
  </SectionContainer>

  <SectionContainer spacing="footer-offset" class="bg-db-green/5">
    <SectionTitle
      title="Ready to join or enquire?"
      subtitle="Start with classes, request a show or workshop quote, or check costume availability."
      class="section-intro"
    />

    <div class="mt-8 flex flex-wrap gap-4">
      <a
        href="/samba-classes-perth"
        class="bg-db-pink hover:bg-db-light-pink text-white font-bold py-3 px-8 rounded-lg transition-colors inline-block"
      >
        View Classes
      </a>
      <a
        href="/book-a-samba-show-perth"
        class="bg-white hover:bg-gray-100 text-db-pink border border-db-pink/80 font-bold py-3 px-8 rounded-lg transition-colors inline-block"
      >
        Instant Quote Estimate
      </a>
      <a
        href="/#contact"
        class="bg-white hover:bg-gray-100 text-db-pink border border-db-pink/80 font-bold py-3 px-8 rounded-lg transition-colors inline-block"
      >
        Contact Us
      </a>
    </div>
  </SectionContainer>
</Layout>

```

## src/pages/beginner-samba-classes-perth.astro

```astro
---
import "../styles/global.css";
import Layout from "../layouts/Layout.astro";
import SectionContainer from "../components/SectionContainer.astro";
import SectionTitle from "../components/SectionTitle.astro";
import MediaPlaceholder from "../components/MediaPlaceholder.astro";
import FAQItem from "../components/FAQItem.astro";
import Hero from "../components/Hero.astro";
import danceclassHero from "../images/danceclassHero.avif";
import { terms } from "../data/terms";
import { faqSchema, serviceSchema } from "../lib/schema";

const title = "Beginner Samba Classes Perth | No Partner or Experience Needed";
const description =
  "Start samba no pe in a welcoming beginner class in Balcatta. Learn the basics, build confidence, and join at your own pace.";
const url = "/beginner-samba-classes-perth";
const beginnerTerm = terms.find((term) => term.level === "Beginner");
const bookingUrl =
  beginnerTerm?.bookingLink ?? "/samba-classes-perth#class-times";

const faqs = [
  {
    question: "Is this class really for beginners?",
    answer:
      "Yes. Beginner classes start with the samba basic, rhythm, coordination, posture, and simple movement patterns.",
  },
  {
    question: "What if I have no rhythm?",
    answer:
      "That is a normal starting point. The class breaks movement down clearly so you can build timing and confidence gradually.",
  },
  {
    question: "Will I be the only new person?",
    answer:
      "Beginner classes are designed for new and returning dancers, so you are not expected to arrive already knowing the style.",
  },
  {
    question: "Can I try casually before committing?",
    answer:
      "Casual options are listed when available. A full term is best for steady progress, but casual classes can help you start.",
  },
];

const structuredData = [
  serviceSchema({
    name: "Beginner samba classes in Perth",
    description,
    url,
    image: danceclassHero.src,
  }),
  faqSchema(faqs),
];
---

<Layout
  title={title}
  description={description}
  image={danceclassHero.src}
  url={url}
  structuredData={structuredData}
>
  <Hero
    title="Beginner Samba Classes in Perth"
    subtitle="Start samba no pe in Balcatta with no partner or previous dance experience needed."
    backgroundImage={danceclassHero}
    primaryCta={{ label: "Book the Beginner Course", href: bookingUrl }}
    secondaryCta={{
      label: "See All Classes",
      href: "/samba-classes-perth#class-times",
    }}
  />

  <SectionContainer spacing="hero-offset">
    <SectionTitle
      title="Your first samba class"
      subtitle="The beginner pathway is built for people who want to start clearly, safely, and without pressure to already know the style."
      class="section-intro"
    />

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 text-lg text-slate-600">
      <div>
        <h3 class="text-2xl font-bold text-db-pink mb-4">Who it is for</h3>
        <ul class="space-y-3">
          <li>First-time samba students</li>
          <li>People who want a solo dance class without a partner</li>
          <li>Dancers returning after time away</li>
          <li>Anyone who wants rhythm, movement, confidence, and fitness</li>
        </ul>
      </div>

      <div>
        <h3 class="text-2xl font-bold text-db-pink mb-4">What you learn</h3>
        <ul class="space-y-3">
          <li>The samba basic step and timing</li>
          <li>Posture, hips, arms, and coordination</li>
          <li>Simple drills to build confidence</li>
          <li>Beginner-friendly choreography options</li>
        </ul>
      </div>
    </div>
  </SectionContainer>

  <SectionContainer>
    <MediaPlaceholder
      title="Beginner reassurance media"
      assetNeed="First-timer reassurance asset for the beginner samba page."
      ratio="16:9 video or 4:5 portrait image"
      subject="Show what a first class looks like without making beginners feel intimidated."
      options={[
        "Teacher explaining a beginner step",
        "Small beginner group in class",
        "Short what-your-first-class-looks-like video",
      ]}
    />
  </SectionContainer>

  <SectionContainer class="bg-db-light-pink/5">
    <SectionTitle
      title="Before you arrive"
      subtitle="Simple preparation is enough."
      class="section-intro"
    />

    <div class="grid grid-cols-1 md:grid-cols-3 section-grid-base text-lg text-slate-600">
      <div>
        <h3 class="text-xl font-bold text-db-pink mb-3">Wear</h3>
        <p>
          Comfortable clothes and sneakers or dance shoes with non-marking
          soles.
        </p>
      </div>
      <div>
        <h3 class="text-xl font-bold text-db-pink mb-3">Bring</h3>
        <p>
          A water bottle and an open mind. You do not need special equipment.
        </p>
      </div>
      <div>
        <h3 class="text-xl font-bold text-db-pink mb-3">Expect</h3>
        <p>
          Clear guidance, repetition, music, movement, and a beginner-friendly
          pace.
        </p>
      </div>
    </div>
  </SectionContainer>

  <SectionContainer>
    <SectionTitle
      title="Beginner FAQs"
      subtitle="Common questions before starting samba."
      class="section-intro"
    />

    <div class="max-w-5xl mx-auto">
      {
        faqs.map((faq) => (
          <FAQItem question={faq.question} answer={faq.answer} />
        ))
      }
    </div>
  </SectionContainer>

  <SectionContainer spacing="footer-offset">
    <SectionTitle
      title="Ready to start?"
      subtitle="Book the beginner course if it is available, or view all current class options."
      class="section-intro"
    />

    <div class="flex flex-wrap gap-4">
      <a
        href={bookingUrl}
        class="bg-db-pink hover:bg-db-light-pink text-white font-bold py-3 px-8 rounded-lg transition-colors inline-block"
      >
        Book the Beginner Course
      </a>
      <a
        href="/samba-classes-perth#class-times"
        class="bg-white hover:bg-gray-100 text-db-pink border border-db-pink/80 font-bold py-3 px-8 rounded-lg transition-colors inline-block"
      >
        See All Class Times
      </a>
    </div>
  </SectionContainer>
</Layout>

```

## src/pages/book-a-samba-show-perth.astro

```astro
---
import "../styles/global.css";
import Layout from "../layouts/Layout.astro";
import SectionContainer from "../components/SectionContainer.astro";
import SectionTitle from "../components/SectionTitle.astro";
import Hero from "../components/Hero.astro";
import FAQItem from "../components/FAQItem.astro";
import ContactForm from "../components/ContactForm.astro";
import { Picture } from "astro:assets";
import showForHireHero from "../images/showhero.avif";
import noBgDancer1 from "../images/noBgDancer1.avif";
import servicePathShows from "../images/service-path-shows.avif";
import { faqSchema, serviceSchema } from "../lib/schema";

const title = "Brazilian Samba Show Hire Perth | Samba Dancers for Events";
const description =
  "Book Brazilian samba dancers in Perth for weddings, corporate events, parties, festivals, and themed entertainment.";
const url = "/book-a-samba-show-perth";

const faqs = [
  {
    question: "What events can you perform at?",
    answer:
      "Dance Bloc Brazil can provide samba entertainment for weddings, corporate events, private parties, festivals, launches, and themed events in Perth.",
  },
  {
    question: "Can bookings include live music or drumming?",
    answer:
      "Yes. Live musicians or drummers can be discussed as part of the booking options. Availability and format depend on the event requirements.",
  },
  {
    question: "How far ahead should I enquire?",
    answer:
      "Send your enquiry as early as possible, especially for weekends and peak event periods. Four to six weeks of notice is a helpful guide.",
  },
  {
    question: "Can the show be tailored to my event?",
    answer:
      "Yes. The performance format, number of dancers, timing, music options, and costume direction can be discussed during the quote process.",
  },
];

const structuredData = [
  serviceSchema({
    name: "Brazilian samba show hire in Perth",
    description,
    url,
    image: showForHireHero.src,
  }),
  faqSchema(faqs),
];

const performanceFormats = [
  {
    title: "Feature show",
    body: "A focused performance moment for the run sheet, reception, stage, or launch program.",
  },
  {
    title: "Roving dancers",
    body: "Visual energy through the room, useful for arrivals, photo moments, and guest atmosphere.",
  },
  {
    title: "Entrance moment",
    body: "A short, high-impact arrival or reveal for a couple, host, product, or celebration.",
  },
  {
    title: "Guest interaction",
    body: "A simple participation moment that brings guests into the samba energy without pressure.",
  },
];

const quoteDetails = [
  "Event date, suburb, venue type, and approximate timing",
  "Audience size, room layout, and available performance space",
  "Preferred format: feature show, roving, entrance, interaction, or a mix",
  "Sound setup, run-sheet constraints, and costume or theme direction",
];
---

<Layout
  title={title}
  description={description}
  image={showForHireHero.src}
  url={url}
  structuredData={structuredData}
  pageEvent="BookSambaShowView"
>
  <Hero
    title="Brazilian Samba Show Hire in Perth"
    subtitle="Book samba dancers, Carnival-style costumes, and optional live music or drumming for Perth events."
    backgroundImage={showForHireHero}
    primaryCta={{ label: "Instant Quote Estimate", href: "#show-enquiry" }}
    secondaryCta={{
      label: "Wedding & Corporate",
      href: "/wedding-corporate-event-entertainment-perth",
    }}
  />

  <SectionContainer spacing="hero-offset">
    <SectionTitle
      title="Samba entertainment for your run sheet"
      subtitle="Add a high-energy performance moment, roving visual impact, or interactive celebration to your event."
      class="section-intro"
    />

    <div class="grid grid-cols-1 md:grid-cols-2 section-grid-wide items-center">
      <Picture
        src={noBgDancer1}
        alt="Brazilian samba dancer available for event entertainment in Perth"
        widths={[320, 480, 640, 800, 1200]}
        sizes="(max-width: 480px) 320px, (max-width: 768px) 480px, 800px"
        class="w-full h-full max-h-[720px] object-cover transition-transform duration-700 hover:scale-[1.02] image-overlay"
      />

      <div class="text-slate-600 text-lg leading-relaxed space-y-6">
        <p>
          Dance Bloc Brazil offers Brazilian samba show hire for weddings,
          corporate events, private parties, festivals, launches, and themed
          celebrations across Perth.
        </p>
        <p>
          Bookings can be shaped around your event: a feature performance,
          roving dancers, guest interaction, Carnival-style costumes, and
          optional live music or drumming where suitable.
        </p>
        <a
          href="#show-enquiry"
          class="inline-block px-8 py-3 bg-db-pink text-white font-bold rounded-lg hover:bg-db-light-pink transition-colors"
        >
          Instant Quote Estimate
        </a>
      </div>
    </div>
  </SectionContainer>

  <SectionContainer>
    <Picture
      src={servicePathShows}
      alt="Brazilian samba dancers performing in Carnival costumes at a Perth event"
      widths={[480, 720, 960, 1200, 1440]}
      sizes="(max-width: 768px) 100vw, 1120px"
      class="reveal-on-scroll aspect-[16/9] w-full overflow-hidden rounded-xl object-cover shadow-[0_24px_70px_rgba(15,23,42,0.16)]"
      loading="lazy"
    />
  </SectionContainer>

  <SectionContainer>
    <SectionTitle
      title="Performance formats"
      subtitle="The booking can be shaped as one polished moment or a sequence that moves through the event."
      class="section-intro"
    />

    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
      {
        performanceFormats.map((format) => (
          <div class="motion-card motion-band reveal-on-scroll min-h-[220px] rounded-xl bg-slate-950 bg-[linear-gradient(135deg,#0f172a,#3c0f4a,#0f172a)] p-7 text-white shadow-[0_22px_55px_rgba(15,23,42,0.16)]">
            <h3 class="text-2xl font-black text-db-green">{format.title}</h3>
            <p class="mt-4 text-base leading-relaxed text-white/78">
              {format.body}
            </p>
          </div>
        ))
      }
    </div>
  </SectionContainer>

  <SectionContainer class="bg-db-light-pink/5">
    <SectionTitle
      title="Event types"
      subtitle="Choose the format that fits your audience, venue, and timing."
      class="section-intro"
    />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        class="bg-white p-6 rounded-xl border border-db-pink/80 shadow-md shadow-db-pink/5"
      >
        <h3 class="text-xl font-bold mb-3 text-db-pink">Corporate Events</h3>
        <p class="text-slate-600">
          Gala nights, launches, conferences, team celebrations, and client
          events.
        </p>
      </div>

      <div
        class="bg-white p-6 rounded-xl border border-db-pink/80 shadow-md shadow-db-pink/5"
      >
        <h3 class="text-xl font-bold mb-3 text-db-pink">Weddings</h3>
        <p class="text-slate-600">
          Reception entrances, feature performances, guest interaction, and
          themed wedding moments.
        </p>
      </div>

      <div
        class="bg-white p-6 rounded-xl border border-db-pink/80 shadow-md shadow-db-pink/5"
      >
        <h3 class="text-xl font-bold mb-3 text-db-pink">Private Parties</h3>
        <p class="text-slate-600">
          Birthdays, anniversaries, hens parties, and celebrations that need a
          strong visual moment.
        </p>
      </div>

      <div
        class="bg-white p-6 rounded-xl border border-db-pink/80 shadow-md shadow-db-pink/5"
      >
        <h3 class="text-xl font-bold mb-3 text-db-pink">Festivals</h3>
        <p class="text-slate-600">
          Stage shows, roving entertainment, cultural programs, and public event
          activations.
        </p>
      </div>
    </div>

    <div class="mt-12 text-center">
      <a
        href="/wedding-corporate-event-entertainment-perth"
        class="inline-block text-db-pink font-bold hover:text-db-light-pink"
      >
        View wedding and corporate entertainment details
      </a>
    </div>
  </SectionContainer>

  <SectionContainer>
    <SectionTitle
      title="What we need to quote"
      subtitle="Clear logistics help the quote match the event, venue, and run sheet."
      class="section-intro"
    />

    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      {
        quoteDetails.map((detail) => (
          <div class="motion-card reveal-on-scroll rounded-xl border border-db-pink/80 bg-white p-6 text-lg font-bold leading-relaxed text-slate-700 shadow-[0_14px_36px_rgba(158,0,150,0.08)]">
            {detail}
          </div>
        ))
      }
    </div>
  </SectionContainer>

  <SectionContainer>
    <SectionTitle
      title="Show hire FAQs"
      subtitle="Useful answers before requesting a quote."
      class="section-intro"
    />

    <div class="max-w-5xl mx-auto">
      {
        faqs.map((faq) => (
          <FAQItem question={faq.question} answer={faq.answer} />
        ))
      }
    </div>
  </SectionContainer>

  <SectionContainer spacing="footer-offset" id="show-enquiry">
    <div class="grid grid-cols-1 md:grid-cols-2 section-grid-wide">
      <div>
        <SectionTitle
          title="Instant Quote Estimate"
          subtitle="Tell us about your event, date, venue, audience, and the kind of samba entertainment you have in mind."
        />

        <ol class="mt-8 space-y-3 text-lg text-slate-600 list-decimal pl-5">
          <li>Send your event details through the enquiry form.</li>
          <li>
            We discuss timing, format, dancers, music options, and costumes.
          </li>
          <li>You receive a quote shaped around your event requirements.</li>
          <li>
            Your booking is confirmed once details and deposit are finalised.
          </li>
        </ol>
      </div>

      <ContactForm
        title="Event Inquiry"
        subtitle="Share the date, venue, guest numbers, and whether you are interested in dancers only or dancers with live music/drumming."
      />
    </div>
  </SectionContainer>
</Layout>

```

## src/pages/classes.astro

```astro
---
import SeoRedirect from "../components/SeoRedirect.astro";
---

<SeoRedirect to="/samba-classes-perth" label="Samba Classes Perth" />

```

## src/pages/contact.astro

```astro
---
import SeoRedirect from "../components/SeoRedirect.astro";
---

<SeoRedirect to="/#contact" label="Contact Dance Bloc Brazil" />

```

## src/pages/costume-hire.astro

```astro
---
import SeoRedirect from "../components/SeoRedirect.astro";
---

<SeoRedirect to="/samba-costume-hire-perth" label="Samba Costume Hire Perth" />

```

## src/pages/index.astro

```astro
---
import "../styles/global.css";
import Layout from "../layouts/Layout.astro";
import SectionContainer from "../components/SectionContainer.astro";
import SectionTitle from "../components/SectionTitle.astro";
import Hero from "../components/Hero.tsx";
import Card from "../components/Card.astro";
import MediaPlaceholder from "../components/MediaPlaceholder.astro";
import FAQItem from "../components/FAQItem.astro";
import ContactForm from "../components/ContactForm.astro";
import HomeTermCard from "../components/HomeTermCard.astro";
import ServicePathSelector from "../components/react/ServicePathSelector";
import Picture from "astro/components/Picture.astro";
import { terms } from "../data/terms";
import { faqSchema, organizationSchema, serviceSchema } from "../lib/schema";
// Import images
import hero from "../images/hero.avif";
import heroMobile from "../images/hero-mobile.avif";
import showForHireHero from "../images/showhero.avif";
import costumeHireHero from "../images/costumeHireHeroAvif.avif";
import noBgDancer3 from "../images/noBgDancer3.avif";
import noBgDancer1 from "../images/noBgDancer1.avif";
import noBgDancer2 from "../images/noBgDancer2.avif";
import cartoonDancerDouble from "../images/CartoonDancerDouble.avif";
import servicePathClasses from "../images/service-path-classes.avif";
import servicePathWorkshops from "../images/service-path-workshops.avif";
import servicePathShows from "../images/service-path-shows.avif";
import servicePathCostumes from "../images/service-path-costumes.avif";

const title = "Brazilian Samba in Perth | Classes, Shows & Costume Hire";
const description =
  "Join Brazilian samba classes in Perth, book event entertainment, plan a private workshop, or hire Carnival-style costumes from Dance Bloc Brazil. Classes in Balcatta.";
const image = hero.src;
const url = "/";

// FAQ Schema
const homeFaqs = [
  {
    question: "Do I need any prior dance experience to take your classes?",
    answer:
      "No. Beginner samba classes are designed for people starting from the basics, and you do not need a partner to join.",
  },
  {
    question: "What should I wear to class?",
    answer:
      "Wear comfortable clothing you can move in and sneakers or dance shoes with non-marking soles. Bring water and choose clothes that feel good for movement.",
  },
  {
    question: "Can I book Dance Bloc Brazil for an event?",
    answer:
      "Yes. Dance Bloc Brazil offers Brazilian samba show hire, event entertainment, and private workshops in Perth. Live music or drumming can be discussed as part of the booking.",
  },
  {
    question: "Can I hire costumes without booking dancers?",
    answer:
      "Yes. Samba and Carnival-style costumes can be hired separately, subject to availability, size, deposit, and return terms.",
  },
];

const structuredData = [
  organizationSchema(),
  serviceSchema({
    name: "Brazilian samba classes, event entertainment, workshops, and costume hire in Perth",
    description,
    url,
    image,
  }),
  faqSchema(homeFaqs),
];

const servicePaths = [
  {
    key: "classes",
    label: "Start learning",
    title: "Samba classes",
    description:
      "Join beginner-friendly samba no pe classes in Balcatta with clear steps, rhythm work, and a realistic path into intermediate training.",
    href: "/samba-classes-perth#class-times",
    cta: "Book a Class",
    image: servicePathClasses.src,
    imageAlt:
      "Beginner samba class in a bright Perth studio with students following the teacher",
  },
  {
    key: "workshops",
    label: "Bring a group",
    title: "Private workshops",
    description:
      "Plan an active group workshop for teams, hens parties, birthdays, schools, community groups, or event programs.",
    href: "/private-samba-workshops-perth#workshop-enquiry",
    cta: "Instant Quote Estimate",
    image: servicePathWorkshops.src,
    imageAlt:
      "Private samba workshop group learning a routine together in an event room",
  },
  {
    key: "shows",
    label: "Lift the room",
    title: "Book a show",
    description:
      "Add samba dancers, Carnival-style costumes, guest interaction, and optional live music or drumming to a Perth event.",
    href: "/book-a-samba-show-perth#show-enquiry",
    cta: "Instant Quote Estimate",
    image: servicePathShows.src,
    imageAlt:
      "Brazilian samba dancers performing in Carnival costumes at a Perth event",
  },
  {
    key: "costumes",
    label: "Make it visual",
    title: "Costume hire",
    description:
      "Hire standout samba and Carnival-style costumes for themed events, photoshoots, performances, and celebrations.",
    href: "/samba-costume-hire-perth#book-costume",
    cta: "Check Costume Availability",
    image: servicePathCostumes.src,
    imageAlt:
      "Brazilian Carnival costume details with feathers, rhinestones, cuffs, and headpiece",
  },
];

const journeySteps = [
  {
    title: "First class",
    body: "Start with samba no pe basics, timing, posture, and movement patterns that make sense from the first session.",
  },
  {
    title: "Rhythm and confidence",
    body: "Build coordination, stamina, musicality, and the confidence to move with more freedom.",
  },
  {
    title: "Progression",
    body: "Move into intermediate training when the basic step, rhythm, and class pace feel familiar.",
  },
  {
    title: "Performance energy",
    body: "Use the same samba foundations in workshops, event moments, choreography, and optional performance pathways.",
  },
];

const trustPoints = [
  {
    label: "Teaching",
    title: "Clear beginner pathways",
    body: "Level guidance, practical foundations, and a realistic route into confident samba no pe training.",
  },
  {
    label: "Samba",
    title: "Brazilian samba across classes and events",
    body: "One focused style connects weekly classes, workshops, performances, and Carnival-style costume hire.",
  },
  {
    label: "Booking",
    title: "Perth-based booking support",
    body: "Local enquiry support helps students and event organisers move from questions to clear next steps.",
  },
  {
    label: "Visuals",
    title: "High-impact costumes and movement",
    body: "Bold costumes, stage energy, and polished samba moments create memorable visuals for classes and events.",
  },
];

const getTermSummary = (description: string) =>
  description
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .find(
      (paragraph) =>
        paragraph.length > 0 &&
        paragraph.toLowerCase() !== "class structure:" &&
        !/^first\s*30\s*min/i.test(paragraph) &&
        !/^second\s*30\s*min/i.test(paragraph),
    ) ?? "Join this class and keep building your samba with clear, practical progression.";

// Helper function to format date to day name
// function getDayName(dateString: string) {
//   const date = new Date(dateString);
//   return date.toLocaleDateString("en-US", { weekday: "long" });
// }
---

<Layout
  title={title}
  description={description}
  image={image}
  url={url}
  structuredData={structuredData}
  pageEvent="HomePageView"
>
  <!-- Skip Navigation Link -->
  <a
    href="#main-content"
    class="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:text-db-pink"
  >
    Skip to main content
  </a>

  <main id="main-content">
    <!-- <div class="relative h-[65vh] flex items-center"> -->
    <Hero
      client:load
      title="Brazilian Samba Classes, Shows and Costume Hire in Perth"
      subtitle="Dance Bloc Brazil brings samba no pe classes, event entertainment, private workshops, and Carnival-style costume hire to Perth."
      backgroundImage={hero}
      mobileImage={heroMobile}
      imagePosition="center"
      primaryCta={{
        label: "Book a Class",
        href: "/samba-classes-perth#class-times",
      }}
      secondaryCta={{ label: "Explore Services", href: "#about" }}
    />
    <!-- </div> -->

    <!-- About Section -->
    <SectionContainer spacing="hero-offset" id="about">
      <div
        class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 section-grid-base items-center"
      >
        <SectionTitle
          title="Start in the studio, bring it to the stage"
          subtitle="Dance Bloc Brazil brings Brazilian samba to Perth through beginner-friendly classes, vibrant event performances, private workshops, and Carnival-style costume hire."
          class="section-intro"
        />
        <div
          class="relative aspect-[4/5] sm:aspect-square overflow-hidden rounded-[48%_52%_44%_56%/55%_43%_57%_45%] bg-gradient-to-br from-db-light-pink/10 via-white to-db-green/10 p-4 shadow-[0_24px_70px_rgba(158,0,150,0.14)] ring-1 ring-db-pink/10"
        >
          <Picture
            src={noBgDancer3}
            alt="Samba dancer in a bright Brazilian costume representing Dance Bloc Brazil classes and performances"
            widths={[480, 640, 800, 1200]}
            sizes="(max-width: 480px) 320px, (max-width: 640px) 480px, (max-width: 800px) 640px, 1200px"
            class="w-full h-full object-contain transition-transform duration-700 hover:scale-105 image-overlay"
            loading="eager"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 section-grid-base section-block-gap lg:grid-cols-3">
        <div class="flex h-full flex-col gap-6">
          <Card cardClass="db-border-alt-a">
            <div
              class="flex min-h-[298px] flex-col justify-center text-left sm:min-h-[260px]"
            >
              <h3
                class="max-w-[11ch] text-3xl font-black leading-tight text-db-pink"
              >
                Learn Samba no Pe
              </h3>
              <p class="mt-5 leading-relaxed text-lg text-slate-600">
                Learn the foundations of Brazilian samba no pe in a class format
                built for confidence, rhythm, and clear progression from the
                first step.
              </p>
            </div>
          </Card>
          <a
            href="/beginner-samba-classes-perth"
            class="motion-cta group flex min-h-[72px] items-center justify-between gap-4 rounded-full border border-db-pink/80 bg-db-pink px-7 py-4 text-white font-black shadow-[0_18px_40px_rgba(158,0,150,0.22)] transition hover:-translate-y-0.5 hover:border-db-pink/80 hover:bg-db-green hover:text-db-pink hover:drop-shadow-[0_1px_1px_rgba(255,255,255,0.55)] hover:shadow-[0_22px_44px_rgba(0,204,129,0.24)]"
          >
            <span>Beginner Samba Classes</span>
            <span
              class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/16 text-xl leading-none transition group-hover:translate-x-1 group-hover:bg-white/80"
            >
              →
            </span>
          </a>
        </div>

        <div class="flex h-full flex-col gap-6">
          <Card cardClass="db-border-alt-b">
            <div
              class="flex min-h-[298px] flex-col justify-center text-left sm:min-h-[260px]"
            >
              <h3
                class="max-w-[11ch] text-3xl font-black leading-tight text-db-pink"
              >
                Book Event Entertainment
              </h3>
              <p class="mt-5 leading-relaxed text-lg text-slate-600">
                Bring samba dancers, Carnival-style costumes, and optional live
                music or drumming to weddings, corporate events, private
                parties, and festivals.
              </p>
            </div>
          </Card>
          <a
            href="/private-samba-workshops-perth"
            class="motion-cta group flex min-h-[72px] items-center justify-between gap-4 rounded-full border border-db-pink/80 bg-db-pink px-7 py-4 text-white font-black shadow-[0_18px_40px_rgba(158,0,150,0.22)] transition hover:-translate-y-0.5 hover:border-db-pink/80 hover:bg-db-green hover:text-db-pink hover:drop-shadow-[0_1px_1px_rgba(255,255,255,0.55)] hover:shadow-[0_22px_44px_rgba(0,204,129,0.24)]"
          >
            <span>Private Samba Workshops</span>
            <span
              class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/16 text-xl leading-none transition group-hover:translate-x-1 group-hover:bg-white/80"
            >
              →
            </span>
          </a>
        </div>

        <div class="flex h-full flex-col gap-6">
          <Card cardClass="db-border-alt-a">
            <div
              class="flex min-h-[298px] flex-col justify-center text-left sm:min-h-[260px]"
            >
              <h3
                class="max-w-[12ch] text-3xl font-black leading-tight text-db-pink"
              >
                Plan a Workshop or Costume Hire
              </h3>
              <p class="mt-5 leading-relaxed text-lg text-slate-600">
                Create a private group workshop, hire standout costumes, or add
                a visual samba element to a photoshoot, themed event, or
                performance.
              </p>
            </div>
          </Card>
          <a
            href="/wedding-corporate-event-entertainment-perth"
            class="motion-cta group flex min-h-[72px] items-center justify-between gap-4 rounded-full border border-db-pink/80 bg-db-pink px-7 py-4 text-white font-black shadow-[0_18px_40px_rgba(158,0,150,0.22)] transition hover:-translate-y-0.5 hover:border-db-pink/80 hover:bg-db-green hover:text-db-pink hover:drop-shadow-[0_1px_1px_rgba(255,255,255,0.55)] hover:shadow-[0_22px_44px_rgba(0,204,129,0.24)]"
          >
            <span>Wedding & Corporate Entertainment</span>
            <span
              class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/16 text-xl leading-none transition group-hover:translate-x-1 group-hover:bg-white/80"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </SectionContainer>

    <SectionContainer id="choose-path">
      <SectionTitle
        title="Choose your samba path"
        subtitle="Start with the route that matches what you need now, then move between classes, workshops, shows, and costume hire when the moment is right."
        class="section-intro"
      />

      <ServicePathSelector client:load paths={servicePaths} />
    </SectionContainer>

    <!-- Terms Section -->
    <SectionContainer id="terms">
      <div
        class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 section-grid-base justify-center items-center"
      >
        <div
          class="relative order-2 sm:order-1 aspect-[4/5] sm:aspect-square overflow-hidden rounded-[56%_44%_51%_49%/42%_58%_42%_58%] bg-gradient-to-br from-db-green/10 via-white to-db-light-pink/10 p-4 shadow-[0_24px_70px_rgba(158,0,150,0.14)] ring-1 ring-db-pink/10"
        >
          <Picture
            src={noBgDancer1}
            alt="Dance Bloc Brazil samba dancer promoting upcoming class terms in Perth"
            widths={[480, 640, 800, 1200]}
            sizes="(max-width: 480px) 320px, (max-width: 640px) 480px, (max-width: 800px) 640px, 1200px"
            class="w-full h-full object-contain transition-transform duration-700 hover:scale-105 image-overlay"
            loading="eager"
          />
        </div>

        <div class="order-1 sm:order-2">
          <SectionTitle
            title="Upcoming Samba Terms"
            subtitle="Join samba no pe classes in Balcatta, with beginner, intermediate, and casual options when available."
            class="section-intro"
          />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 section-grid-base section-block-gap">
        {
          terms.length > 0 ? (
            terms.map((term, index) => (
              <HomeTermCard
                name={term.name}
                level={term.level}
                summary={getTermSummary(term.description)}
                dateBegin={term.dateBegin}
                dateEnd={term.dateEnd}
                time={term.time}
                location={term.location}
                price={term.price}
                bookingLink={term.bookingLink}
                class={index % 2 === 0 ? "db-border-alt-a" : "db-border-alt-b"}
              />
            ))
          ) : (
            <div class="md:col-span-2 text-center p-8 bg-db-light-pink/5 rounded-xl border db-border-alt-a">
              <h3 class="text-2xl font-bold mb-4 text-db-pink">
                We're Planning Our Next Term
              </h3>
              <p class="mb-6 text-slate-600">
                We are currently planning our future terms and classes. Leave
                your email below to be notified when new classes are available!
              </p>
              <form class="max-w-md mx-auto">
                <div class="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    class="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-db-pink"
                    required
                  />
                  <button
                    type="submit"
                    class="px-6 py-2 bg-db-pink text-white rounded-lg hover:bg-db-light-pink transition-colors"
                  >
                    Notify Me
                  </button>
                </div>
              </form>
            </div>
          )
        }
      </div>

      <div class="text-center section-block-gap">
        <a
          href="/samba-classes-perth"
          class="motion-cta inline-flex min-h-14 items-center justify-center rounded-full bg-db-green px-9 py-4 text-sm font-black uppercase tracking-[0.16em] text-white drop-shadow-[0_1px_1px_rgba(255,255,255,0.55)] shadow-[0_18px_38px_rgba(0,204,129,0.30)] transition hover:bg-db-pink hover:text-white hover:shadow-[0_22px_45px_rgba(158,0,150,0.25)]"
        >
          <span class="sr-only"
            >View all available samba class terms at Dance Bloc Brazil</span
          >
          Book a Class
        </a>
      </div>
    </SectionContainer>

    <SectionContainer id="journey" class="bg-db-light-pink/5">
      <SectionTitle
        title="From first step to stage energy"
        subtitle="Classes build the movement foundation; workshops, shows, and costume hire give that energy different places to go."
        class="section-intro"
      />

      <div class="grid grid-cols-1 gap-5 md:grid-cols-4">
        {
          journeySteps.map((step, index) => (
            <div class={`motion-card reveal-on-scroll relative min-h-[250px] overflow-hidden rounded-xl border bg-white p-6 shadow-[0_18px_45px_rgba(158,0,150,0.08)] ${index % 2 === 0 ? "db-border-alt-a" : "db-border-alt-b"}`}>
              <div class="absolute left-6 right-6 top-10 h-2 rounded-full bg-db-green/18" />
              <div class="timeline-pulse relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-db-pink text-xl font-black text-white shadow-[0_12px_30px_rgba(158,0,150,0.22)]">
                {index + 1}
              </div>
              <h3 class="relative z-10 mt-8 text-2xl font-black text-db-pink">
                {step.title}
              </h3>
              <p class="relative z-10 mt-4 text-base leading-relaxed text-slate-600">
                {step.body}
              </p>
            </div>
          ))
        }
      </div>
    </SectionContainer>

    <!-- Shows Section -->
    <SectionContainer id="shows">
      <div
        class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 section-grid-base items-center mb-28"
      >
        <div
          class="relative aspect-[4/5] sm:aspect-square overflow-hidden rounded-[42%_58%_58%_42%/54%_44%_56%_46%] bg-gradient-to-l from-transparent to-db-light-pink/10 from-10% p-4 shadow-[0_24px_70px_rgba(158,0,150,0.10)]"
        >
          <Picture
            src={noBgDancer2}
            alt="Dance Bloc Brazil samba dancer for Perth event entertainment"
            widths={[480, 640, 800, 1200]}
            sizes="(max-width: 480px) 320px, (max-width: 640px) 480px, (max-width: 800px) 640px, 1200px"
            class="w-full h-full object-contain transition-transform duration-700 hover:scale-105 image-overlay"
            loading="eager"
          />
        </div>
        <SectionTitle
          title="Brazilian samba for events"
          subtitle="Book dancers, costumes, show moments, and optional live music or drumming for Perth weddings, corporate events, private parties, festivals, and launches."
          class="section-intro"
        />
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 section-grid-base section-block-gap items-center">
        <div
          class="aspect-[4/5] md:aspect-video rounded-xl overflow-hidden shadow-[0_24px_70px_rgba(158,0,150,0.14)] ring-1 ring-db-pink/10"
        >
          <Picture
            src={showForHireHero}
            alt="Dance Bloc Brazil Brazilian samba performance for events in Perth"
            widths={[320, 480, 640, 800, 1200]}
            sizes="(max-width: 480px) 320px, (max-width: 768px) 480px, (max-width: 1024px) 640px, 1200px"
            class="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02] image-overlay"
            loading="eager"
          />
        </div>

        <div
          class="flex flex-col justify-center rounded-xl border db-border-alt-a bg-white p-8 shadow-[0_18px_50px_rgba(158,0,150,0.10)]"
        >
          <h3 class="text-3xl font-black mb-4 text-db-pink">
            Book us for your next event
          </h3>
          <p class="mb-8 leading-relaxed text-lg text-slate-600">
            Dance Bloc Brazil can shape a feature performance, roving visual
            moment, or interactive samba element around your event. Dancers,
            Carnival-style costumes, recorded music, and optional live music or
            drumming can be discussed during enquiry.
          </p>
          <a
            href="/book-a-samba-show-perth"
            data-astro-prefetch
            class="motion-cta inline-flex min-h-14 w-fit items-center justify-center rounded-full bg-db-green px-8 py-4 text-sm font-black uppercase tracking-[0.14em] text-white drop-shadow-[0_1px_1px_rgba(255,255,255,0.55)] shadow-[0_16px_35px_rgba(0,204,129,0.28)] transition hover:bg-db-pink hover:text-white hover:shadow-[0_20px_42px_rgba(158,0,150,0.24)]"
          >
            <span class="sr-only"
              >Learn more about booking Brazilian samba dancers for your next
              event</span
            >
            Instant Quote Estimate
          </a>
        </div>
      </div>
    </SectionContainer>

    <SectionContainer
      id="why-dance-bloc"
      class="bg-[linear-gradient(180deg,rgba(0,204,129,0.08),rgba(0,204,129,0.04))]"
    >
      <div
        class="grid grid-cols-1 section-grid-wide lg:grid-cols-[0.85fr_1.15fr] lg:items-center"
      >
        <SectionTitle
          title="Why Dance Bloc Brazil"
          subtitle="Clear teaching, practical booking details, and visually strong samba moments for Perth classes and events."
        />

        <div class="grid gap-5 sm:grid-cols-2">
          {
            trustPoints.map((point, index) => (
              <div class={`motion-card reveal-on-scroll flex min-h-[310px] flex-col justify-between rounded-xl border bg-white p-7 shadow-[0_18px_44px_rgba(0,204,129,0.10)] ${index % 2 === 0 ? "db-border-alt-a" : "db-border-alt-b"}`}>
                <div class="flex items-center justify-between gap-4">
                  <p class="text-xs font-black uppercase tracking-[0.18em] text-db-green">
                    {point.label}
                  </p>
                  <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-db-green/10 text-sm font-black text-db-pink">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div class="mt-8">
                  <h3 class="text-2xl font-black leading-tight text-db-pink">
                    {point.title}
                  </h3>
                  <p class="mt-4 text-base leading-relaxed text-slate-600">
                    {point.body}
                  </p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </SectionContainer>

    <!-- Costumes Section -->
    <SectionContainer id="costumes">
      <SectionTitle
        title="Carnival-style costume hire"
        subtitle="Hire samba and Carnival-style costumes for performances, themed events, photoshoots, and special occasions in Perth."
        class="mb-8"
      />

      <div class="grid grid-cols-1 md:grid-cols-2 section-grid-wide section-block-gap items-center">
        <div
          class="flex flex-col justify-center order-2 md:order-1 rounded-xl border db-border-alt-a bg-white p-8 shadow-[0_18px_50px_rgba(158,0,150,0.10)]"
        >
          <h3 class="text-3xl font-black mb-6 text-db-pink">
            Samba Costume Hire
          </h3>
          <p class="mb-8 leading-relaxed text-slate-600 text-lg">
            Browse costume pieces with feathers, rhinestones, sequins, and bold
            colour. Hire is subject to size, availability, deposit, and return
            terms, with optional styling, hair, and makeup add-ons available on
            request.
          </p>
          <a
            href="/samba-costume-hire-perth"
            data-astro-prefetch
            class="motion-cta inline-flex min-h-14 w-fit items-center justify-center rounded-full bg-db-green px-8 py-4 text-sm font-black uppercase tracking-[0.14em] text-white drop-shadow-[0_1px_1px_rgba(255,255,255,0.55)] shadow-[0_16px_35px_rgba(0,204,129,0.28)] transition hover:bg-db-pink hover:text-white hover:shadow-[0_20px_42px_rgba(158,0,150,0.24)]"
          >
            <span class="sr-only"
              >Browse the Dance Bloc Brazil samba costume hire collection for
              hire</span
            >
            Check Costume Availability
          </a>
        </div>

        <div
          class="aspect-video rounded-xl overflow-hidden shadow-[0_24px_70px_rgba(158,0,150,0.14)] ring-1 ring-db-pink/10 order-1 md:order-2"
        >
          <Picture
            src={costumeHireHero}
            alt="Brazilian samba costumes available for hire in Perth"
            width={800}
            height={450}
            class="w-full h-full object-cover transition-transform duration-700 hover:scale-105 image-overlay"
            loading="eager"
          />
        </div>
      </div>
    </SectionContainer>

    <!-- Proof Media Placeholder -->
    <SectionContainer id="proof">
      <SectionTitle
        title="Real moments needed before launch"
        subtitle="This section intentionally blocks launch until real class, event, or costume media is supplied. Prompt suggestions are included for visual direction only."
        class="section-intro"
      />

      <MediaPlaceholder
        title="Homepage proof/media strip"
        assetNeed="Real class or event proof that supports the main service pathways before launch."
        ratio="Landscape 16:9 video or three 4:5 images"
        subject="Show real Dance Bloc Brazil class atmosphere, event performance, and costume hire proof."
        options={[
          "20-45 second class atmosphere video",
          "Event performance reel",
          "Three-photo strip covering class, show, and costume hire",
        ]}
        promptSuggestions={[
          "File: homepage-class-proof-strip.avif. Create a three-panel proof image for the homepage showing Dance Bloc Brazil class atmosphere in Balcatta: panel one has beginner students warming up, panel two has the teacher demonstrating samba no pe footwork, panel three has a small group moving together with relaxed confidence. Use natural studio lighting, practical activewear, warm skin tones, and subtle magenta-green motion accents. Wide 16:9 strip, no text, no logos, no fake signage, no distorted hands, no extra limbs.",
          "File: homepage-show-performance.avif. Create a premium event-performance image for the homepage. Show samba dancers in Carnival-style costumes performing at a Perth event with audience reaction, stage lighting, feathers, sequins, and confident movement. The composition should feel like real event proof, not a poster. Landscape 16:9, vivid but polished, restrained magenta-green accents, no text, no logos, no fake signage, no distorted hands, no extra limbs.",
          "File: homepage-costume-detail.avif. Create a homepage costume-detail image showing feathers, rhinestones, cuffs, headpiece, belt, beads, and sequins arranged in a clean editorial layout. Prioritize sharp texture, hire-condition clarity, and premium styling. Landscape 16:9, soft studio light, neutral background with small magenta-green Dance Bloc Brazil accents, no text, no logos, no fake signage.",
        ]}
      />
    </SectionContainer>

    <!-- FAQ Section -->
    <SectionContainer id="faq">
      <Picture
        src={cartoonDancerDouble}
        alt="Dance Bloc Brazil samba dancers illustration for frequently asked questions"
        width={600}
        height={600}
        class="mx-auto mb-[-48px] max-w-[360px] rounded-[42%_58%_48%_52%/54%_42%_58%_46%]"
      />
      <SectionTitle
        title="Frequently Asked Questions"
        subtitle="Key details for samba classes, event entertainment, workshops, and costume hire."
      />

      <div class="max-w-5xl mx-auto section-block-gap">
        <FAQItem
          question="Do I need any prior dance experience to take your classes?"
          answer={homeFaqs[0].answer}
        />

        <FAQItem
          question="What should I wear to class?"
          answer={homeFaqs[1].answer}
        />

        <FAQItem
          question="Do I need a partner for the classes?"
          answer="No partner is necessary. Samba no pe classes focus on individual technique, rhythm, and movement, so you can come alone or with a friend."
        />

        <FAQItem
          question="Do you offer drop-in classes?"
          answer="Casual options are listed when available. Regular attendance is helpful for progress, but casual classes are a useful way to join when you cannot commit to a full term."
        />

        <FAQItem
          question="What's the atmosphere like?"
          answer="Classes are welcoming, energetic, and focused on learning at a realistic pace. You can expect movement, rhythm, encouragement, and clear guidance."
        />

        <FAQItem
          question="Can I take photos or videos to post to my social media?"
          answer="You can share your own class moments, but please avoid filming classmates without permission. Tag @danceblocbrazil if you post."
        />

        <FAQItem
          question="Will I have to perform?"
          answer="Performance opportunities may come up, but they are optional. You can join classes for learning, fitness, confidence, and enjoyment without performing."
        />
      </div>
    </SectionContainer>

    <!-- Contact Section -->
    <SectionContainer spacing="footer-offset" id="contact">
      <SectionTitle
        title="Get in Touch"
        subtitle="Have a class, show, workshop, or costume hire question? Send an enquiry and we will point you to the right next step."
        class="section-intro"
      />

      <ContactForm />
    </SectionContainer>
  </main>
</Layout>

```

## src/pages/private-samba-workshops-perth.astro

```astro
---
import "../styles/global.css";
import Layout from "../layouts/Layout.astro";
import SectionContainer from "../components/SectionContainer.astro";
import SectionTitle from "../components/SectionTitle.astro";
import FAQItem from "../components/FAQItem.astro";
import ContactForm from "../components/ContactForm.astro";
import Hero from "../components/Hero.astro";
import { Picture } from "astro:assets";
import danceclassHero from "../images/danceclassHero.avif";
import servicePathWorkshops from "../images/service-path-workshops.avif";
import { faqSchema, serviceSchema } from "../lib/schema";

const title = "Private Samba Workshops Perth | Team Building, Parties & Events";
const description =
  "Book a private Brazilian samba workshop in Perth for team building, hens parties, birthdays, schools, community groups, or special events.";
const url = "/private-samba-workshops-perth";

const faqs = [
  {
    question: "Who are private samba workshops for?",
    answer:
      "Workshops can suit team building, hens parties, birthdays, schools, community groups, and event programs. The format is shaped around the group.",
  },
  {
    question: "Do participants need dance experience?",
    answer:
      "No. Workshop content can be beginner-friendly and adjusted for confidence, group size, and event style.",
  },
  {
    question: "Can you come to our venue?",
    answer:
      "Venue and travel details can be discussed during enquiry. Include your suburb, venue type, group size, and preferred date.",
  },
  {
    question: "How long is a workshop?",
    answer:
      "Duration depends on the group and event format. Share your run sheet or preferred timing so the workshop can be scoped properly.",
  },
];

const structuredData = [
  serviceSchema({
    name: "Private samba workshops in Perth",
    description,
    url,
    image: danceclassHero.src,
  }),
  faqSchema(faqs),
];

const workshopFlow = [
  "Welcome the group and set the energy at a comfortable level.",
  "Warm up with simple rhythm and movement games.",
  "Teach samba basics with options for different confidence levels.",
  "Build a short routine or group moment around the event purpose.",
  "Finish with a shared run-through, photo moment, or event handoff.",
];

const fitFor = [
  "Team-building sessions that need movement without pressure",
  "Hens parties, birthdays, and private celebrations",
  "Schools, community groups, and cultural programs",
  "Event activations where guests should participate, not only watch",
];
---

<Layout
  title={title}
  description={description}
  image={danceclassHero.src}
  url={url}
  structuredData={structuredData}
>
  <Hero
    title="Private Samba Workshops in Perth"
    subtitle="Book a Brazilian samba workshop for team building, hens parties, birthdays, schools, community groups, and events."
    backgroundImage={danceclassHero}
    primaryCta={{
      label: "Instant Quote Estimate",
      href: "#workshop-enquiry",
    }}
    secondaryCta={{ label: "See Classes", href: "/samba-classes-perth" }}
  />

  <SectionContainer spacing="hero-offset">
    <SectionTitle
      title="A group activity with movement and energy"
      subtitle="Private workshops are designed for organisers who want something active, inclusive, and easy to brief."
      class="section-intro"
    />

    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-slate-600"
    >
      <div
        class="bg-white rounded-xl border border-db-pink/80 p-6 shadow-md shadow-db-pink/5"
      >
        <h3 class="text-xl font-bold text-db-pink mb-3">Team Building</h3>
        <p>
          Bring the group together through rhythm, movement, and shared focus.
        </p>
      </div>
      <div
        class="bg-white rounded-xl border border-db-pink/80 p-6 shadow-md shadow-db-pink/5"
      >
        <h3 class="text-xl font-bold text-db-pink mb-3">Hens & Birthdays</h3>
        <p>Add a lively activity to a private celebration or themed party.</p>
      </div>
      <div
        class="bg-white rounded-xl border border-db-pink/80 p-6 shadow-md shadow-db-pink/5"
      >
        <h3 class="text-xl font-bold text-db-pink mb-3">Schools & Community</h3>
        <p>Introduce Brazilian samba movement in an accessible group format.</p>
      </div>
      <div
        class="bg-white rounded-xl border border-db-pink/80 p-6 shadow-md shadow-db-pink/5"
      >
        <h3 class="text-xl font-bold text-db-pink mb-3">Event Programs</h3>
        <p>Use a workshop as an interactive activation or guest experience.</p>
      </div>
    </div>
  </SectionContainer>

  <SectionContainer>
    <Picture
      src={servicePathWorkshops}
      alt="Private samba workshop group learning a routine together in an event room"
      widths={[480, 720, 960, 1200, 1440]}
      sizes="(max-width: 768px) 100vw, 1120px"
      class="reveal-on-scroll aspect-[16/9] w-full overflow-hidden rounded-xl object-cover shadow-[0_24px_70px_rgba(15,23,42,0.16)]"
      loading="lazy"
    />
  </SectionContainer>

  <SectionContainer>
    <SectionTitle
      title="Workshop flow"
      subtitle="The structure stays simple, active, and easy for organisers to brief."
      class="section-intro"
    />

    <div class="grid grid-cols-1 gap-4 lg:grid-cols-5">
      {
        workshopFlow.map((step, index) => (
          <div class="motion-card reveal-on-scroll min-h-[188px] rounded-xl border border-db-pink/80 bg-white p-6 shadow-[0_14px_36px_rgba(158,0,150,0.08)]">
            <p class="text-sm font-black uppercase tracking-[0.18em] text-db-green">
              {index + 1}
            </p>
            <p class="mt-4 text-lg font-bold leading-relaxed text-slate-700">
              {step}
            </p>
          </div>
        ))
      }
    </div>
  </SectionContainer>

  <SectionContainer class="bg-db-green/5">
    <SectionTitle
      title="Good fit for"
      subtitle="Workshops can be shaped for group confidence, timing, venue, and event purpose."
      class="section-intro"
    />

    <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
      {
        fitFor.map((item) => (
          <div class="motion-card motion-band reveal-on-scroll rounded-xl bg-slate-950 bg-[linear-gradient(135deg,#0f172a,#34104a,#0f172a)] p-7 text-white shadow-[0_22px_55px_rgba(15,23,42,0.16)]">
            <p class="text-lg font-black leading-relaxed">{item}</p>
          </div>
        ))
      }
    </div>
  </SectionContainer>

  <SectionContainer class="bg-db-light-pink/5">
    <SectionTitle
      title="Workshop details to plan"
      subtitle="The best quote comes from clear group and venue information."
      class="section-intro"
    />

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 text-lg text-slate-600">
      <div>
        <h3 class="text-2xl font-bold mb-4 text-db-pink">Format options</h3>
        <ul class="space-y-3">
          <li>Beginner-friendly samba movement session</li>
          <li>Team-building or social group format</li>
          <li>Event activation with simple guest participation</li>
          <li>Theme-aligned workshop for private celebrations</li>
        </ul>
      </div>

      <div>
        <h3 class="text-2xl font-bold mb-4 text-db-pink">Enquiry details</h3>
        <ul class="space-y-3">
          <li>Date, time, suburb, and venue type</li>
          <li>Group size and audience type</li>
          <li>Preferred duration and event purpose</li>
          <li>Any access, sound, or floor-space details</li>
        </ul>
      </div>
    </div>
  </SectionContainer>

  <SectionContainer>
    <SectionTitle
      title="Workshop FAQs"
      subtitle="Answers for organisers before enquiring."
      class="section-intro"
    />

    <div class="max-w-5xl mx-auto">
      {
        faqs.map((faq) => (
          <FAQItem question={faq.question} answer={faq.answer} />
        ))
      }
    </div>
  </SectionContainer>

  <SectionContainer spacing="footer-offset" id="workshop-enquiry">
    <div class="grid grid-cols-1 md:grid-cols-2 section-grid-wide">
      <div>
        <SectionTitle
          title="Instant Quote Estimate"
          subtitle="Tell us about the group, date, venue, and the kind of workshop experience you want."
        />
      </div>

      <ContactForm
        title="Workshop Inquiry"
        subtitle="Include the group size, suburb, venue type, date, and preferred workshop length."
      />
    </div>
  </SectionContainer>
</Layout>

```

## src/pages/samba-classes-perth.astro

```astro
---
import "../styles/global.css";
import Layout from "../layouts/Layout.astro";
import SectionContainer from "../components/SectionContainer.astro";
import SectionTitle from "../components/SectionTitle.astro";
import TermCard from "../components/TermCard.astro";
import FAQItem from "../components/FAQItem.astro";
import Hero from "../components/Hero.astro";
import { Picture } from "astro:assets";
import classesHero from "../images/classesHero.avif";
import servicePathClasses from "../images/service-path-classes.avif";
import { terms } from "../data/terms";
import { faqSchema, serviceSchema } from "../lib/schema";

const title = "Samba Classes Perth | Beginner to Intermediate Samba no Pe";
const description =
  "Brazilian samba classes in Balcatta for beginners, intermediate dancers, and casual drop-ins. No partner needed.";
const url = "/samba-classes-perth";

const faqs = [
  {
    question: "Do I need dance experience?",
    answer:
      "No. Beginner samba classes are built for people starting from the basics, and the casual option gives you a flexible way to join when available.",
  },
  {
    question: "Do I need a partner?",
    answer:
      "No partner is needed. Samba no pe is a solo Brazilian samba style, so classes focus on individual movement, rhythm, and technique.",
  },
  {
    question: "What should I wear?",
    answer:
      "Wear comfortable clothing you can move in, plus sneakers or dance shoes with non-marking soles. Bring water.",
  },
  {
    question: "Can I join casually?",
    answer:
      "Casual classes are listed when available. If you want steady progress, a full term is the best option.",
  },
];

const structuredData = [
  serviceSchema({
    name: "Samba classes in Perth",
    description,
    url,
    image: classesHero.src,
  }),
  faqSchema(faqs),
];

const firstClassSteps = [
  "Arrive a few minutes early, settle in, and ask any first-class questions.",
  "Warm up with simple rhythm, posture, and coordination work.",
  "Learn the samba no pe basic step with clear timing and repetition.",
  "Add hips, arms, direction changes, and beginner-friendly styling options.",
  "Finish with a short routine or movement phrase that ties the class together.",
];

const progressionSteps = [
  {
    title: "Beginner foundation",
    body: "Build the basic step, timing, balance, and confidence to keep moving.",
  },
  {
    title: "Coordination",
    body: "Layer arms, hips, direction changes, and simple choreography without rushing.",
  },
  {
    title: "Intermediate training",
    body: "Refine technique, stamina, musicality, and performance quality.",
  },
];
---

<Layout
  title={title}
  description={description}
  image={classesHero.src}
  url={url}
  structuredData={structuredData}
  pageEvent="SambaClassesView"
>
  <Hero
    title="Samba Classes in Perth"
    subtitle="Beginner, intermediate, and casual samba no pe classes in Balcatta. No partner needed."
    backgroundImage={classesHero}
    primaryCta={{ label: "See Class Times", href: "#class-times" }}
    secondaryCta={{
      label: "Beginner Classes",
      href: "/beginner-samba-classes-perth",
    }}
  />

  <SectionContainer spacing="hero-offset">
    <SectionTitle
      title="Choose the right class"
      subtitle="Start with the basics, build your technique, or join casually when your schedule allows."
      class="section-intro"
    />

    <div class="grid grid-cols-1 md:grid-cols-3 section-grid-base">
      <div
        class="bg-white rounded-xl border border-db-pink/80 p-8 shadow-md shadow-db-pink/5"
      >
        <h3 class="text-2xl font-bold text-db-pink mb-4">Beginners</h3>
        <p class="text-slate-600 text-lg leading-relaxed mb-6">
          For first-timers and dancers returning after time away. Learn the
          samba basic, timing, coordination, and simple movement patterns.
        </p>
        <a
          href="/beginner-samba-classes-perth"
          class="text-db-pink font-bold hover:text-db-light-pink"
        >
          Start with beginners
        </a>
      </div>

      <div
        class="bg-white rounded-xl border border-db-pink/80 p-8 shadow-md shadow-db-pink/5"
      >
        <h3 class="text-2xl font-bold text-db-pink mb-4">Intermediate</h3>
        <p class="text-slate-600 text-lg leading-relaxed mb-6">
          For dancers who know the samba basic and want more technique, stamina,
          musicality, and choreography practice.
        </p>
        <a
          href="#class-times"
          class="text-db-pink font-bold hover:text-db-light-pink"
        >
          See current terms
        </a>
      </div>

      <div
        class="bg-white rounded-xl border border-db-pink/80 p-8 shadow-md shadow-db-pink/5"
      >
        <h3 class="text-2xl font-bold text-db-pink mb-4">Private Groups</h3>
        <p class="text-slate-600 text-lg leading-relaxed mb-6">
          Planning a team activity, hens party, birthday, or community event?
          Private samba workshops can be shaped around your group.
        </p>
        <a
          href="/private-samba-workshops-perth"
          class="text-db-pink font-bold hover:text-db-light-pink"
        >
          Plan a workshop
        </a>
      </div>
    </div>
  </SectionContainer>

  <SectionContainer>
    <Picture
      src={servicePathClasses}
      alt="Beginner samba class in a bright Perth studio with students following the teacher"
      widths={[480, 720, 960, 1200, 1440]}
      sizes="(max-width: 768px) 100vw, 1120px"
      class="reveal-on-scroll aspect-[16/9] w-full overflow-hidden rounded-xl object-cover shadow-[0_24px_70px_rgba(15,23,42,0.16)]"
      loading="lazy"
    />
  </SectionContainer>

  <SectionContainer class="bg-db-green/5">
    <SectionTitle
      title="Your first class"
      subtitle="A clear class flow helps first-timers know what will happen before they walk in."
      class="section-intro"
    />

    <div class="first-class-timeline reveal-on-scroll">
      <div class="timeline-track" aria-hidden="true"></div>
      {
        firstClassSteps.map((step, index) => (
          <div class="timeline-step" style={`--timeline-index:${index};`}>
            <div class="timeline-badge timeline-pulse" aria-hidden="true">
              <span>{index + 1}</span>
            </div>
            <div class="timeline-panel">
              <p class="text-sm font-black uppercase tracking-[0.18em] text-db-green">
                Step {index + 1}
              </p>
              <p class="mt-4 text-lg font-bold leading-relaxed text-slate-700">
                {step}
              </p>
            </div>
          </div>
        ))
      }
    </div>
  </SectionContainer>

  <SectionContainer id="class-times">
    <SectionTitle
      title="Class times and bookings"
      subtitle="Current term and casual options are listed below. Dates, prices, and booking links should be checked before you book."
      class="section-intro"
    />

    <div class="grid grid-cols-1 md:grid-cols-2 section-grid-base">
      {
        terms.map((term) => (
          <TermCard
            name={term.name}
            level={term.level}
            dateBegin={term.dateBegin}
            dateEnd={term.dateEnd}
            time={term.time}
            location={term.location}
            price={term.price}
            bookingLink={term.bookingLink}
            description={term.description}
            showDetails={term.showDetails}
          />
        ))
      }
    </div>
  </SectionContainer>

  <SectionContainer class="bg-db-light-pink/5">
    <SectionTitle
      title="What to expect"
      subtitle="A practical, welcoming class focused on rhythm, movement, coordination, and confidence."
      class="section-intro"
    />

    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 text-lg text-slate-600"
    >
      <div>
        <h3 class="text-2xl font-bold mb-4 text-db-pink">In class</h3>
        <ul class="space-y-3">
          <li>Samba no pe basics and rhythm work</li>
          <li>Technique drills for feet, hips, posture, and arms</li>
          <li>Beginner-friendly choreography options</li>
          <li>Clear level guidance so you know where to start</li>
        </ul>
      </div>

      <div>
        <h3 class="text-2xl font-bold mb-4 text-db-pink">What to bring</h3>
        <ul class="space-y-3">
          <li>Comfortable clothes for movement</li>
          <li>Sneakers or dance shoes with non-marking soles</li>
          <li>Water bottle</li>
          <li>A willingness to start where you are</li>
        </ul>
      </div>
    </div>
  </SectionContainer>

  <SectionContainer>
    <SectionTitle
      title="Progression path"
      subtitle="You can stay in classes for fitness and confidence, or use the training as a pathway into stronger technique and performance energy."
      class="section-intro"
    />

    <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
      {
        progressionSteps.map((step) => (
          <div class="motion-card motion-band reveal-on-scroll rounded-xl bg-slate-950 bg-[linear-gradient(135deg,#0f172a,#2b0b3a,#0f172a)] p-7 text-white shadow-[0_22px_55px_rgba(15,23,42,0.18)]">
            <h3 class="text-2xl font-black text-db-green">{step.title}</h3>
            <p class="mt-4 text-lg leading-relaxed text-white/78">
              {step.body}
            </p>
          </div>
        ))
      }
    </div>
  </SectionContainer>

  <SectionContainer>
    <SectionTitle
      title="Samba class FAQs"
      subtitle="Answers for first-timers and returning dancers."
      class="section-intro"
    />

    <div class="max-w-5xl mx-auto">
      {
        faqs.map((faq) => (
          <FAQItem question={faq.question} answer={faq.answer} />
        ))
      }
    </div>
  </SectionContainer>

  <SectionContainer spacing="footer-offset">
    <SectionTitle
      title="Want a class for your group?"
      subtitle="Private samba workshops are available for teams, parties, community groups, and event programs."
      class="section-intro"
    />

    <a
      href="/private-samba-workshops-perth"
      class="bg-db-pink hover:bg-db-light-pink text-white font-bold py-3 px-8 rounded-lg transition-colors inline-block"
      data-track="PrivateEventsInquiry"
      data-track-params='{"source":"classes_page", "event_type":"workshop"}'
    >
      Instant Quote Estimate
    </a>
  </SectionContainer>
</Layout>

```

## src/pages/samba-costume-hire-perth.astro

```astro
---
import "../styles/global.css";
import Layout from "../layouts/Layout.astro";
import SectionContainer from "../components/SectionContainer.astro";
import SectionTitle from "../components/SectionTitle.astro";
import FAQItem from "../components/FAQItem.astro";
import ContactForm from "../components/ContactForm.astro";
import Hero from "../components/Hero.astro";
import CostumeCard from "../components/CostumeCard.astro";
import { Picture } from "astro:assets";
import costumeHireHeroImage from "../images/costumeHireHeroAvif.avif";
import noBgDancer4 from "../images/noBgDancer4.avif";
import servicePathCostumes from "../images/service-path-costumes.avif";
import { costumes } from "../data/costumes";
import { costumeItemListSchema, faqSchema, serviceSchema } from "../lib/schema";

const title = "Samba Costume Hire Perth | Brazilian Carnival Costumes";
const description =
  "Hire Brazilian samba and Carnival-style costumes in Perth for performances, themed events, photoshoots, and special occasions.";
const url = "/samba-costume-hire-perth";

const faqs = [
  {
    question: "How do I check costume availability?",
    answer:
      "Send an enquiry with the costume name, event date, hire duration, and any sizing details. Availability is confirmed before booking.",
  },
  {
    question: "Is a deposit required?",
    answer:
      "Yes. A refundable security deposit is required for costume hire and depends on the costume and hire terms.",
  },
  {
    question: "Can I get styling, hair, or makeup help?",
    answer:
      "Styling support, hair, and makeup can be discussed as optional add-ons. They are not included by default.",
  },
  {
    question: "What happens if a costume is damaged?",
    answer:
      "Costumes should be returned in the same condition. Damage, loss, or late returns may affect the security deposit or incur extra charges.",
  },
];

const structuredData = [
  serviceSchema({
    name: "Samba costume hire in Perth",
    description,
    url,
    image: costumeHireHeroImage.src,
  }),
  costumeItemListSchema({
    url,
    items: costumes.map((costume) => ({
      title: costume.title,
      description: costume.description,
      price: costume.price,
    })),
  }),
  faqSchema(faqs),
];

const costumeDetails = [
  "Headpieces, cuffs, neckpieces, belts, and costume pieces are confirmed item by item.",
  "Feathers, rhinestones, sequins, beads, and fabric details should be checked before hire.",
  "Fit, sizing, included pieces, deposit, and condition are confirmed before booking.",
  "Styling, hair, makeup, delivery, or collection support can be discussed as optional add-ons.",
];

const hireTimeline = [
  "Choose the costume or style you want to check.",
  "Send the date, hire duration, sizing, and event or photoshoot details.",
  "Confirm availability, inclusions, hire fee, deposit, and handover plan.",
  "Collect or receive the costume, then return it by the agreed time and condition.",
];
---

<Layout
  title={title}
  description={description}
  image={costumeHireHeroImage.src}
  url={url}
  structuredData={structuredData}
  pageEvent="CostumeHireView"
>
  <Hero
    title="Samba Costume Hire in Perth"
    subtitle="Hire Brazilian samba and Carnival-style costumes for performances, themed events, photoshoots, and special occasions."
    backgroundImage={costumeHireHeroImage}
    primaryCta={{ label: "Check Availability", href: "#book-costume" }}
    secondaryCta={{ label: "Book Dancers", href: "/book-a-samba-show-perth" }}
  />

  <SectionContainer spacing="hero-offset">
    <div class="grid grid-cols-1 md:grid-cols-2 section-grid-wide items-center">
      <div>
        <SectionTitle
          title="Standout costumes, clear hire terms"
          subtitle="Browse costume pieces with feathers, rhinestones, sequins, and bold colour. Hire is subject to size, availability, deposit, and return terms."
          class="section-intro"
        />
        <p class="text-lg leading-relaxed text-slate-600">
          Dance Bloc Brazil offers samba and Carnival-style costume hire in
          Perth for performances, themed events, photoshoots, and celebrations.
          Each booking is confirmed around the costume item, event date, hire
          duration, fit, deposit, and return process.
        </p>
        <div class="mt-8 flex flex-wrap gap-4">
          <a
            href="#book-costume"
            class="text-db-pink font-bold hover:text-db-light-pink"
          >
            Check costume availability
          </a>
          <a
            href="/book-a-samba-show-perth"
            class="text-db-pink font-bold hover:text-db-light-pink"
          >
            Book samba dancers for an event
          </a>
        </div>
      </div>

      <Picture
        src={noBgDancer4}
        alt="Samba costume with feathers and rhinestones available for hire in Perth"
        widths={[320, 480, 640, 800, 1000]}
        sizes="(max-width: 480px) 320px, (max-width: 768px) 480px, 640px"
        class="px-4 md:px-2 max-w-full mx-auto image-overlay"
        loading="lazy"
      />
    </div>
  </SectionContainer>

  <SectionContainer>
    <Picture
      src={servicePathCostumes}
      alt="Brazilian Carnival costume details with feathers, rhinestones, cuffs, and headpiece"
      widths={[480, 720, 960, 1200, 1440]}
      sizes="(max-width: 768px) 100vw, 1120px"
      class="reveal-on-scroll aspect-[16/9] w-full overflow-hidden rounded-xl object-cover shadow-[0_24px_70px_rgba(15,23,42,0.16)]"
      loading="lazy"
    />
  </SectionContainer>

  <SectionContainer class="bg-db-green/5">
    <SectionTitle
      title="Costume detail guide"
      subtitle="The collection shows the style; the hire conversation confirms the exact pieces, fit, and condition."
      class="section-intro"
    />

    <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
      {
        costumeDetails.map((detail) => (
          <div class="motion-card motion-band reveal-on-scroll rounded-xl bg-slate-950 bg-[linear-gradient(135deg,#0f172a,#311047,#0f172a)] p-7 text-white shadow-[0_22px_55px_rgba(15,23,42,0.16)]">
            <p class="text-lg font-black leading-relaxed">{detail}</p>
          </div>
        ))
      }
    </div>
  </SectionContainer>

  <SectionContainer>
    <SectionTitle
      title="Costume collection"
      subtitle="Use the collection as a guide, then enquire to confirm availability, sizing, inclusions, deposit, and pickup or delivery details."
    />
  </SectionContainer>

  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 section-grid-base p-4 max-w-7xl mx-auto"
  >
    {
      costumes.map((costume) => (
        <CostumeCard
          title={costume.title}
          description={costume.description}
          color={costume.color}
          size={costume.size}
          price={costume.price}
          image={costume.image}
          material={costume.material}
        />
      ))
    }
  </div>

  <SectionContainer class="bg-db-light-pink/5">
    <SectionTitle
      title="Hire information"
      subtitle="The exact inclusions and terms are confirmed before booking."
      class="section-intro"
    />

    <div
      class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 text-lg text-slate-600"
    >
      <div>
        <h3 class="text-2xl font-bold mb-4 text-db-pink">Hire process</h3>
        <ol class="space-y-3 list-decimal pl-5">
          <li>Choose the costume or costume style you are interested in.</li>
          <li>Send your event date, hire duration, size, and usage details.</li>
          <li>Confirm availability, inclusions, hire fee, and deposit.</li>
          <li>Collect or arrange handover, then return by the agreed time.</li>
        </ol>
      </div>

      <div>
        <h3 class="text-2xl font-bold mb-4 text-db-pink">Terms</h3>
        <ul class="space-y-3">
          <li>A refundable security deposit is required.</li>
          <li>Costumes must be returned in the same condition.</li>
          <li>Late returns may incur additional charges.</li>
          <li>Damage or loss may reduce or forfeit the deposit.</li>
        </ul>
      </div>

      <div>
        <h3 class="text-2xl font-bold mb-4 text-db-pink">Fit and inclusions</h3>
        <ul class="space-y-3">
          <li>Confirm size and included pieces before booking.</li>
          <li>Ask about fitting or styling support if needed.</li>
          <li>
            Item photos and descriptions are a guide to the available style.
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-2xl font-bold mb-4 text-db-pink">Optional add-ons</h3>
        <ul class="space-y-3">
          <li>Styling guidance can be discussed.</li>
          <li>
            Hair and makeup are optional add-ons, subject to availability.
          </li>
          <li>
            Delivery or collection support may be available by arrangement.
          </li>
        </ul>
      </div>
    </div>
  </SectionContainer>

  <SectionContainer>
    <SectionTitle
      title="Hire timeline"
      subtitle="A simple sequence keeps costume availability, deposit, pickup, and return expectations clear."
      class="section-intro"
    />

    <div class="grid grid-cols-1 gap-4 lg:grid-cols-4">
      {
        hireTimeline.map((step, index) => (
          <div class="motion-card reveal-on-scroll min-h-[200px] rounded-xl border border-db-pink/80 bg-white p-6 shadow-[0_14px_36px_rgba(158,0,150,0.08)]">
            <p class="text-sm font-black uppercase tracking-[0.18em] text-db-green">
              Step {index + 1}
            </p>
            <p class="mt-4 text-lg font-bold leading-relaxed text-slate-700">
              {step}
            </p>
          </div>
        ))
      }
    </div>
  </SectionContainer>

  <SectionContainer>
    <SectionTitle
      title="Costume hire FAQs"
      subtitle="Key details before you enquire."
      class="section-intro"
    />

    <div class="max-w-5xl mx-auto">
      {
        faqs.map((faq) => (
          <FAQItem question={faq.question} answer={faq.answer} />
        ))
      }
    </div>
  </SectionContainer>

  <SectionContainer spacing="footer-offset" id="book-costume">
    <div class="grid grid-cols-1 md:grid-cols-2 section-grid-wide">
      <div>
        <SectionTitle
          title="Check Costume Availability"
          subtitle="Tell us which costume you like, your event date, hire duration, and any fit or styling questions."
        />

        <ul class="mt-8 space-y-3 text-lg text-slate-600">
          <li>Costume name or colour/style preference</li>
          <li>Date and duration of hire</li>
          <li>Your event, photoshoot, or performance details</li>
          <li>Any optional styling, hair, or makeup questions</li>
        </ul>
      </div>

      <ContactForm
        title="Costume Hire Inquiry"
        subtitle="Share the costume name, date, sizing details, and any optional add-ons you want to discuss."
      />
    </div>
  </SectionContainer>
</Layout>

```

## src/pages/show-for-hire.astro

```astro
---
import SeoRedirect from "../components/SeoRedirect.astro";
---

<SeoRedirect to="/book-a-samba-show-perth" label="Brazilian Samba Show Hire Perth" />

```

## src/pages/thank-you.astro

```astro
---
import Layout from "../layouts/Layout.astro";
import SectionContainer from "../components/SectionContainer.astro";
import SectionTitle from "../components/SectionTitle.astro";
import Picture from "astro/components/Picture.astro";
import cartoonDancerDouble from "../images/CartoonDancerDouble.avif";

const title = "Thank You";
const description =
  "Thank you for contacting Dance Bloc Brazil. We'll get back to you soon!";
const image = cartoonDancerDouble.src;
const url = "https://danceblocbrazil.com/thank-you";
---

<Layout title={title} description={description} image={image} url={url} noindex>
  <main class="min-h-screen flex items-center justify-center py-16">
    <SectionContainer spacing="hero-offset">
      <div class="max-w-3xl mx-auto text-center">
        <Picture
          src={cartoonDancerDouble}
          alt="Dance Bloc Brazil thank you illustration"
          width={300}
          height={300}
          class="rounded-full mx-auto mb-8 image-overlay"
        />

        <SectionTitle
          title="Thank You!"
          subtitle="Your message has been sent successfully. We'll get back to you as soon as possible."
          class="section-intro"
        />

        <div class="space-y-6">
          <p class="text-lg text-slate-600">
            We appreciate you reaching out to Dance Bloc Brazil. Our team will
            review your message and respond shortly.
          </p>

          <div class="pt-8">
            <a
              href="/"
              class="inline-block px-8 py-3 bg-gradient-to-r from-db-pink to-db-light-pink text-white font-medium rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Return to Home
            </a>
          </div>
        </div>
      </div>
    </SectionContainer>
  </main>
</Layout>

```

## src/pages/wedding-corporate-event-entertainment-perth.astro

```astro
---
import "../styles/global.css";
import Layout from "../layouts/Layout.astro";
import SectionContainer from "../components/SectionContainer.astro";
import SectionTitle from "../components/SectionTitle.astro";
import MediaPlaceholder from "../components/MediaPlaceholder.astro";
import FAQItem from "../components/FAQItem.astro";
import ContactForm from "../components/ContactForm.astro";
import Hero from "../components/Hero.astro";
import showForHireHero from "../images/showhero.avif";
import { faqSchema, serviceSchema } from "../lib/schema";

const title =
  "Wedding & Corporate Entertainment Perth | Brazilian Samba Dancers";
const description =
  "Add Brazilian samba entertainment to Perth weddings, gala nights, launches, conferences, and corporate celebrations.";
const url = "/wedding-corporate-event-entertainment-perth";

const faqs = [
  {
    question: "Is samba entertainment suitable for formal events?",
    answer:
      "Yes. The format can be shaped around the audience, venue, and run sheet, from a polished feature performance to a more interactive celebration.",
  },
  {
    question: "Can you perform at a wedding reception?",
    answer:
      "Yes. Samba entertainment can be planned for entrances, reception highlights, guest interaction, or themed wedding moments.",
  },
  {
    question: "Can this work for corporate events?",
    answer:
      "Yes. Samba dancers can suit gala nights, launches, conferences, team celebrations, and client events when the format is planned clearly.",
  },
  {
    question: "What do planners need to provide?",
    answer:
      "Provide date, venue, run-sheet timing, available space, audience size, sound setup, and whether you want dancers only or optional live music/drumming.",
  },
];

const structuredData = [
  serviceSchema({
    name: "Wedding and corporate event entertainment in Perth",
    description,
    url,
    image: showForHireHero.src,
  }),
  faqSchema(faqs),
];
---

<Layout
  title={title}
  description={description}
  image={showForHireHero.src}
  url={url}
  structuredData={structuredData}
>
  <Hero
    title="Wedding and Corporate Event Entertainment in Perth"
    subtitle="Brazilian samba dancers for receptions, gala nights, launches, conferences, and corporate celebrations."
    backgroundImage={showForHireHero}
    primaryCta={{
      label: "Plan Your Event Entertainment",
      href: "#event-enquiry",
    }}
    secondaryCta={{ label: "Show Hire", href: "/book-a-samba-show-perth" }}
  />

  <SectionContainer spacing="hero-offset">
    <SectionTitle
      title="Entertainment that fits the event"
      subtitle="Plan a samba performance around your guests, venue, timing, and tone."
      class="section-intro"
    />

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 text-lg text-slate-600">
      <div
        class="bg-white rounded-xl border border-db-pink/80 p-8 shadow-md shadow-db-pink/5"
      >
        <h3 class="text-2xl font-bold text-db-pink mb-4">Weddings</h3>
        <p class="mb-6">
          Add samba dancers to a reception entrance, feature performance, guest
          interaction moment, or themed celebration. The performance can be
          planned around your run sheet and venue.
        </p>
        <a
          href="#event-enquiry"
          class="text-db-pink font-bold hover:text-db-light-pink"
        >
          Ask about wedding entertainment
        </a>
      </div>

      <div
        class="bg-white rounded-xl border border-db-pink/80 p-8 shadow-md shadow-db-pink/5"
      >
        <h3 class="text-2xl font-bold text-db-pink mb-4">Corporate Events</h3>
        <p class="mb-6">
          Use Brazilian samba entertainment for launches, gala dinners,
          conferences, team celebrations, client nights, and branded event
          activations.
        </p>
        <a
          href="#event-enquiry"
          class="text-db-pink font-bold hover:text-db-light-pink"
        >
          Ask about corporate entertainment
        </a>
      </div>
    </div>
  </SectionContainer>

  <SectionContainer>
    <MediaPlaceholder
      title="Wedding and corporate event proof"
      assetNeed="Planner-facing event proof for wedding and corporate entertainment."
      ratio="Landscape 16:9"
      subject="Show a polished event environment that helps planners understand fit, tone, and run-sheet placement."
      options={[
        "Wedding reception performance photo",
        "Corporate or gala event photo",
        "Polished run-sheet or event moment reel",
      ]}
    />
  </SectionContainer>

  <SectionContainer class="bg-db-light-pink/5">
    <SectionTitle
      title="Package pathways"
      subtitle="The exact booking is scoped after your event details are known."
      class="section-intro"
    />

    <div class="grid grid-cols-1 md:grid-cols-3 section-grid-base text-lg text-slate-600">
      <div>
        <h3 class="text-xl font-bold text-db-pink mb-3">Feature Show</h3>
        <p>A planned performance moment for guests to watch and photograph.</p>
      </div>
      <div>
        <h3 class="text-xl font-bold text-db-pink mb-3">Roving Dancers</h3>
        <p>
          Visual energy across arrivals, cocktail hours, festivals, or
          activations.
        </p>
      </div>
      <div>
        <h3 class="text-xl font-bold text-db-pink mb-3">Music Options</h3>
        <p>Recorded music or optional live music/drumming can be discussed.</p>
      </div>
    </div>
  </SectionContainer>

  <SectionContainer>
    <SectionTitle
      title="Planner FAQs"
      subtitle="Details that help make the booking practical."
      class="section-intro"
    />

    <div class="max-w-5xl mx-auto">
      {
        faqs.map((faq) => (
          <FAQItem question={faq.question} answer={faq.answer} />
        ))
      }
    </div>
  </SectionContainer>

  <SectionContainer spacing="footer-offset" id="event-enquiry">
    <div class="grid grid-cols-1 md:grid-cols-2 section-grid-wide">
      <div>
        <SectionTitle
          title="Plan Your Event Entertainment"
          subtitle="Share your date, venue, guest numbers, run-sheet timing, and preferred samba entertainment style."
        />
      </div>

      <ContactForm
        title="Wedding or Corporate Inquiry"
        subtitle="Tell us about the event type, date, venue, guest numbers, and whether you want dancers only or optional music/drumming."
      />
    </div>
  </SectionContainer>
</Layout>

```

## src/styles/global.css

```css
/* @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap'); */
/* @import '@fontsource-variable/raleway'; */
@import "tailwindcss";

body {
  font-family: "Raleway Variable", sans-serif;
}
:root {
  cursor: default;
  --space-section-pad-y-mobile: 4.5rem;
  --space-section-pad-y-desktop: 6.5rem;
  --space-section-gap-mobile: 4rem;
  --space-section-gap-desktop: 6rem;
  --space-section-gap-hero-mobile: 3rem;
  --space-section-gap-hero-desktop: 4.5rem;
  --space-section-gap-footer-mobile: 5rem;
  --space-section-gap-footer-desktop: 7rem;

  --space-block-lg-mobile: 2.5rem;
  --space-block-lg-desktop: 3rem;
  --space-block-md-mobile: 1.5rem;
  --space-block-md-desktop: 2rem;

  --space-grid-tight: 1.25rem;
  --space-grid-base: 2rem;
  --space-grid-wide: 3rem;
}

.section-container {
  padding-block: var(--space-section-pad-y-mobile);
}

.section-container + .section-container {
  margin-top: var(--space-section-gap-mobile);
}

.section-container.section-spacing-hero-offset {
  margin-top: var(--space-section-gap-hero-mobile);
}

.section-container.section-spacing-footer-offset {
  margin-bottom: var(--space-section-gap-footer-mobile);
}

.section-intro {
  margin-bottom: var(--space-block-lg-mobile);
}

.section-block-gap {
  margin-top: var(--space-block-lg-mobile);
}

.section-grid-tight {
  gap: var(--space-grid-tight);
}

.section-grid-base {
  gap: var(--space-grid-base);
}

.section-grid-wide {
  gap: var(--space-grid-wide);
}

@media (min-width: 768px) {
  .section-container {
    padding-block: var(--space-section-pad-y-desktop);
  }

  .section-container + .section-container {
    margin-top: var(--space-section-gap-desktop);
  }

  .section-container.section-spacing-hero-offset {
    margin-top: var(--space-section-gap-hero-desktop);
  }

  .section-container.section-spacing-footer-offset {
    margin-bottom: var(--space-section-gap-footer-desktop);
  }

  .section-intro {
    margin-bottom: var(--space-block-lg-desktop);
  }

  .section-block-gap {
    margin-top: var(--space-block-lg-desktop);
  }
}

@theme {
  --color-db-pink: #9e0096;
  --color-db-light-pink: #ff00f7;
  --color-db-green: #00cc81;
  --color-special-blue: #5c749d;
  --ease-fluid: cubic-bezier(0.3, 0, 0, 1);
  --ease-snappy: cubic-bezier(0.2, 0, 0, 1);
  /* ... */
}

@layer utilities {
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #ffffff;
  }

  ::-webkit-scrollbar-thumb {
    background: #9e0096;
    border-radius: 8px;
    border: 2px solid #ff00f754;
    transition: all 0.3s ease;
    cursor: pointer;
    height: 150px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #2595be85;
  }

  .image-overlay {
    position: relative;
  }

  .image-overlay::after {
    content: "";
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.1);
    pointer-events: none;
  }

  .reveal-on-scroll {
    opacity: 0.72;
    transform: scale(0.985);
    transition:
      opacity 0.8s var(--ease-fluid),
      transform 0.8s var(--ease-fluid);
  }

  .reveal-on-scroll.is-visible {
    opacity: 1;
    transform: scale(1);
  }

  .reveal-section {
    opacity: 0.84;
    transform: scale(0.992);
    transition:
      opacity 0.72s var(--ease-fluid),
      transform 0.72s var(--ease-fluid);
  }

  .reveal-section.is-visible {
    opacity: 1;
    transform: scale(1);
  }

  .hero-reveal-item {
    --hero-reveal-delay: 0ms;
    --hero-reveal-duration: 1530ms;
    opacity: 0;
    transform: translate3d(-18px, -22px, 0);
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    animation: heroDiagonalReveal var(--hero-reveal-duration)
      cubic-bezier(0.1, 0.9, 0.2, 1) var(--hero-reveal-delay) both;
    will-change: clip-path, opacity, transform;
  }

  .hero-reveal-eyebrow {
    --hero-reveal-delay: 240ms;
  }

  .hero-reveal-title {
    --hero-reveal-delay: 690ms;
  }

  .hero-reveal-subtitle {
    --hero-reveal-delay: 1050ms;
  }

  .hero-reveal-cta {
    --hero-reveal-delay: 1440ms;
  }

  .motion-card {
    position: relative;
    overflow: hidden;
    transform: translateZ(0);
    animation: ambientLift 6.5s ease-in-out infinite;
    transition:
      transform 0.28s var(--ease-snappy),
      border-color 0.28s ease,
      box-shadow 0.28s ease;
  }

  .db-border-thin {
    border-style: solid;
    border-width: 1px;
  }

  .db-border-medium {
    border-style: solid;
    border-width: 2px;
  }

  .db-border-pink {
    border-color: #9e0096cc;
  }

  .db-border-green {
    border-color: #9e0096cc;
  }

  .db-border-alt-a {
    border-style: solid;
    border-width: 1px;
    border-color: #9e0096cc;
  }

  .db-border-alt-b {
    border-style: solid;
    border-width: 1px;
    border-color: #9e0096cc;
  }

  .motion-card::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(
      115deg,
      transparent 0%,
      transparent 35%,
      rgba(255, 255, 255, 0.42) 48%,
      transparent 62%,
      transparent 100%
    );
    opacity: 0;
    transform: translateX(-65%);
    transition:
      opacity 0.24s ease,
      transform 0.55s var(--ease-fluid);
  }

  .motion-card:hover {
    transform: scale(1.012);
    border-color: color-mix(in oklab, var(--color-db-green) 55%, transparent);
    box-shadow: 0 24px 58px rgba(158, 0, 150, 0.14);
  }

  .motion-card:hover::before {
    opacity: 1;
    transform: translateX(65%);
  }

  .motion-ribbon {
    animation: ribbonDrift 4.8s ease-in-out infinite;
  }

  .motion-ribbon-alt {
    animation: ribbonDriftAlt 5.6s ease-in-out infinite;
  }

  .motion-band {
    background-size: 180% 180%;
    animation: bandShift 4.8s ease-in-out infinite;
  }

  .timeline-pulse {
    animation: timelinePulse 1.9s ease-in-out infinite;
  }

  .first-class-timeline {
    position: relative;
    display: grid;
    gap: 1.1rem;
    isolation: isolate;
  }

  .timeline-track {
    position: absolute;
    top: 1.15rem;
    bottom: 1.15rem;
    left: 1.1rem;
    width: 2px;
    background: linear-gradient(
      180deg,
      rgba(0, 204, 129, 0.24) 0%,
      rgba(158, 0, 150, 0.6) 45%,
      rgba(255, 0, 247, 0.38) 100%
    );
    transform-origin: top;
    transform: scaleY(0);
    opacity: 0.88;
  }

  .reveal-on-scroll.is-visible .timeline-track {
    animation: timelineTrackDraw 0.85s var(--ease-fluid) 120ms both;
  }

  .timeline-step {
    position: relative;
    display: grid;
    grid-template-columns: auto minmax(0, 1fr);
    column-gap: 0.95rem;
    align-items: start;
    opacity: 0;
    transform: translate3d(0, 18px, 0) rotate(-0.8deg);
  }

  .reveal-on-scroll.is-visible .timeline-step {
    animation: timelineStepIn 0.72s var(--ease-fluid) both;
    animation-delay: calc(var(--timeline-index, 0) * 100ms + 150ms);
  }

  .timeline-step:nth-child(2n) .timeline-panel {
    transform: rotate(-0.45deg);
  }

  .timeline-step:nth-child(2n + 1) .timeline-panel {
    transform: rotate(0.45deg);
  }

  .timeline-badge {
    position: relative;
    z-index: 1;
    margin-top: 0.1rem;
    display: grid;
    place-items: center;
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 9999px;
    border: 2px solid color-mix(in oklab, var(--color-db-pink) 78%, white);
    background: radial-gradient(
      circle at 30% 25%,
      #ffffff 0%,
      #f3f4f6 60%,
      #e2e8f0 100%
    );
    color: var(--color-db-pink);
    box-shadow: 0 0 0 4px rgba(0, 204, 129, 0.13);
    font-weight: 900;
    line-height: 1;
  }

  .timeline-panel {
    position: relative;
    overflow: hidden;
    min-height: 190px;
    border-radius: 0.92rem;
    border: 1px solid #9e0096cc;
    background: linear-gradient(
      140deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(250, 246, 255, 1) 100%
    );
    padding: 1.5rem;
    box-shadow:
      0 14px 36px rgba(0, 204, 129, 0.08),
      0 9px 24px rgba(158, 0, 150, 0.08);
    transition:
      transform 0.3s var(--ease-snappy),
      border-color 0.3s ease,
      box-shadow 0.3s ease;
  }

  .timeline-panel::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(
      115deg,
      transparent 30%,
      rgba(255, 255, 255, 0.42) 48%,
      transparent 66%
    );
    opacity: 0;
    transform: translateX(-65%);
    transition:
      opacity 0.24s ease,
      transform 0.55s var(--ease-fluid);
  }

  .timeline-step:hover .timeline-panel,
  .timeline-step:focus-within .timeline-panel {
    transform: translateY(-2px) rotate(0deg);
    border-color: color-mix(in oklab, var(--color-db-green) 55%, transparent);
    box-shadow: 0 24px 58px rgba(158, 0, 150, 0.14);
  }

  .timeline-step:hover .timeline-panel::before,
  .timeline-step:focus-within .timeline-panel::before {
    opacity: 1;
    transform: translateX(65%);
  }

  .timeline-step:hover .timeline-badge,
  .timeline-step:focus-within .timeline-badge {
    animation-duration: 1.2s;
    border-color: var(--color-db-green);
  }

  @media (min-width: 1024px) {
    .first-class-timeline {
      grid-template-columns: repeat(5, minmax(0, 1fr));
      gap: 1rem;
    }

    .timeline-track {
      top: 1.1rem;
      left: 2.1rem;
      right: 2.1rem;
      bottom: auto;
      width: auto;
      height: 2px;
      transform-origin: left;
      transform: scaleX(0);
      background: linear-gradient(
        90deg,
        rgba(0, 204, 129, 0.24) 0%,
        rgba(158, 0, 150, 0.6) 45%,
        rgba(255, 0, 247, 0.38) 100%
      );
    }

    .timeline-step {
      grid-template-columns: 1fr;
      row-gap: 0.9rem;
    }

    .timeline-badge {
      margin-top: 0;
      justify-self: start;
    }
  }

  .motion-cta {
    position: relative;
    overflow: hidden;
    isolation: isolate;
    animation: ctaBreath 2.6s ease-in-out infinite;
  }

  .motion-cta::after {
    display: none;
  }

  @keyframes ribbonDrift {
    0%,
    100% {
      transform: scaleX(1) rotate(-8deg);
      opacity: 0.48;
    }
    50% {
      transform: scaleX(1.08) rotate(-3deg);
      opacity: 1;
    }
  }

  @keyframes ribbonDriftAlt {
    0%,
    100% {
      transform: scaleX(1) rotate(11deg);
      opacity: 0.48;
    }
    50% {
      transform: scaleX(1.08) rotate(6deg);
      opacity: 1;
    }
  }

  @keyframes bandShift {
    0%,
    100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  @keyframes timelinePulse {
    0%,
    100% {
      box-shadow: 0 0 0 0 rgba(0, 204, 129, 0.45);
    }
    50% {
      box-shadow: 0 0 0 18px rgba(0, 204, 129, 0);
    }
  }

  @keyframes timelineStepIn {
    0% {
      opacity: 0;
      transform: translate3d(0, 18px, 0) rotate(-0.8deg);
    }
    65% {
      opacity: 1;
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0) rotate(0deg);
    }
  }

  @keyframes timelineTrackDraw {
    0% {
      opacity: 0.35;
    }
    100% {
      transform: scale(1);
      opacity: 0.9;
    }
  }

  @keyframes ambientLift {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.006);
    }
  }

  @keyframes ctaBreath {
    0%,
    100% {
      box-shadow: 0 14px 30px rgba(0, 204, 129, 0.24);
    }
    50% {
      box-shadow: 0 20px 44px rgba(0, 204, 129, 0.42);
    }
  }

  @keyframes heroDiagonalReveal {
    0% {
      opacity: 0;
      transform: translate3d(-18px, -22px, 0);
      clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    }
    45% {
      opacity: 1;
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
      clip-path: polygon(-12% -12%, 112% -12%, 112% 112%, -12% 112%);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .reveal-on-scroll,
    .reveal-section,
    .hero-reveal-item,
    .motion-card,
    .motion-ribbon,
    .motion-ribbon-alt,
    .motion-band,
    .timeline-pulse,
    .timeline-step,
    .timeline-track,
    .motion-cta::after {
      opacity: 1;
      transform: none;
      animation: none;
      transition: none;
    }

    .hero-reveal-item {
      clip-path: none;
    }

    .motion-card::before {
      display: none;
    }
  }
}
```
