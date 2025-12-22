import { countries } from "@/lib/data/countries";
import connectDB from "@/lib/mongodb";
import Post from "@/models/Post";

export default async function sitemap() {
  const baseUrl = "https://sms-receiver.online";

  // Static pages
  const staticPages = [
    "",
    "/country",
    "/sms",
    "/posts"
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

  // Blog posts pages
  await connectDB();
  const posts = await Post.find().lean();
  const postPages = posts.map(post => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: post.createdAt.toISOString(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticPages, ...countryPages, ...postPages];
}
