import type { MetadataRoute } from "next";

import { categories } from "@/lib/tools";
import { getPublicTools } from "@/lib/public-tools";
import { siteOrigin } from "@/lib/site-config";
import { isToolIndexable } from "@/lib/seo";
import { blogPosts } from "@/lib/blog-posts";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteOrigin();
  const publicTools = (await getPublicTools()).filter(isToolIndexable);

  // No blanket lastModified: the site has no real per-page change-date
  // source, and stamping every URL with "now" on each request is a false
  // freshness signal. An omitted date is better than a wrong one. A blog
  // post's lastModified appears only when that post carries a verified
  // dateModified/datePublished of its own.
  return [
    { url: `${base}/`, priority: 1 },
    { url: `${base}/tools`, priority: 0.9 },
    ...categories
      .filter((category) => publicTools.some((tool) => tool.category === category))
      .map((category) => ({
        url: `${base}/category/${category}`,
        priority: 0.8,
      })),
    ...publicTools.map((tool) => ({
      url: `${base}/tools/${tool.id}`,
      priority: 0.7,
    })),
    { url: `${base}/blog`, priority: 0.5 },
    { url: `${base}/about`, priority: 0.4 },
    ...blogPosts.map((post) => {
      const postDate = post.dateModified ?? post.datePublished;
      return {
        url: `${base}/blog/${post.slug}`,
        ...(postDate ? { lastModified: new Date(postDate) } : {}),
        priority: 0.6,
      };
    }),
  ];
}
