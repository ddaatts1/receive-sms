import { countries } from "@/lib/data/countries";

export default function sitemap() {
  const baseUrl = "https://sms-receiver.online";

  // Static pages
  const staticPages = [
    "",
    "/country",
    "/sms",
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "daily",
    priority: 1.0,
  }));

  // Country pages
  const countryPages = countries.map((country) => ({
    url: `${baseUrl}/country/${country.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "hourly",
    priority: 0.8,
  }));

  return [...staticPages, ...countryPages];
}
