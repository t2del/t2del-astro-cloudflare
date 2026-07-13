import { config } from "@/consts";

export async function GET() {
  // 1. Fetch ALL posts (you might need to handle pagination or fetch all at once)
  const res = await fetch(`${config.WP_BLOG_LIST}?per_page=100`); 
  const posts = await res.json();

  // 2. Map posts to URLs
  const urls = posts.map(post => `https://t2del.com/blog/dynamic/${post.slug}/`);
  
  // 3. Construct XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
      ${urls.map(url => `<url><loc>${url}</loc></url>`).join('')}
    </urlset>`;

  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml' }
  });
}