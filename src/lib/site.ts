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
  const url = new URL(pathname, siteConfig.url);
  const hasFileExtension = /\/[^/?#]+\.[^/?#]+$/.test(url.pathname);

  if (!hasFileExtension && !url.pathname.endsWith("/")) {
    url.pathname = `${url.pathname}/`;
  }

  return url.toString();
}

export function titleWithBrand(title: string) {
  return title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`;
}
