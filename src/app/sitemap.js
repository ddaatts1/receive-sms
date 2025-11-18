import { countries } from "@/lib/data/countries";
import { getAllPhoneNumbers } from "@/lib/data/phoneNumbers";

export default async function sitemap() {
    const baseUrl = "https://receive-sms.vercel.app";

    const staticPages = [
        "",
        "/sms",
        "/country",
    ].map((path) => ({
        url: `${baseUrl}${path}`,
        lastModified: new Date().toISOString(),
        changefreq: "hourly",
        priority: 1.0,
    }));

    const countryPages = countries.map((c) => ({
        url: `${baseUrl}/country/${c.slug}`,
        lastModified: new Date().toISOString(),
        changefreq: "hourly",
        priority: 0.9,
    }));

    const phoneNumbers = getAllPhoneNumbers();
    const smsPages = phoneNumbers.map((p) => ({
        url: `${baseUrl}/sms/${p.number}`,
        lastModified: new Date().toISOString(),
        changefreq: "hourly",
        priority: 0.8,
    }));

    return [
        ...staticPages,
        ...countryPages,
        ...smsPages
    ];
}
