import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-03-19",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

export interface DanceClass {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  style: "samba" | "brazilianFunk";
  level: "beginner" | "intermediate" | "advanced" | "allLevels";
  description?: string;
  instructor?: string;
  date: string;
  time: string;
  durationMinutes?: number;
  price?: number;
  image?: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
}
