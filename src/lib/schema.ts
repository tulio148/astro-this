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

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "DanceSchool"],
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    image: absoluteUrl("/images/hero.avif"),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Perth",
      addressRegion: "WA",
      addressCountry: "AU",
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Perth, Western Australia",
    },
    sameAs: siteConfig.socialProfiles,
    priceRange: "$$",
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
