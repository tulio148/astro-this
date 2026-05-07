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
  const path = pathname.endsWith("/") && pathname !== "/" ? pathname.slice(0, -1) : pathname;
  return absoluteUrl(path);
}

export function titleWithBrand(title: string) {
  return title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`;
}
