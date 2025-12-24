export const revalidate = 3600; // 1 tiếng (SEO rất đẹp)

import { countries } from "@/lib/data/countries";
import connectDB from "@/lib/mongodb";
import Post from "@/models/Post";

export default async function sitemap() {
  const baseUrl = "https://sms-receiver.online";
  const now = new Date().toISOString();

  const staticPages = [
    { path: "", priority: 1.0 },
    { path: "/country", priority: 0.8 },
    { path: "/sms", priority: 0.8 },
    { path: "/posts", priority: 0.8 },
  ].map(p => ({
    url: `${baseUrl}${p.path}`,
    lastModified: now,
    changeFrequency: "daily",
    priority: p.priority,
  }));

  const countryPages = countries.map(country => ({
    url: `${baseUrl}/country/${country.slug}`,
    lastModified: now,
    changeFrequency: "hourly",
    priority: 0.7,
  }));

  await connectDB();
  const posts = await Post.find().lean();

  const postPages = posts.map(post => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: post.updatedAt?.toISOString() || post.createdAt?.toISOString() || now,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticPages, ...countryPages, ...postPages];
}
