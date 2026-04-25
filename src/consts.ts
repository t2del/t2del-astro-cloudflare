// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Astro Blog";
export const SITE_DESCRIPTION = "Welcome to my website!";

/**
 * Site metadata for HTML head and SEO
 */
export const metadata = {
  /** Main site title */
  title: "Astro starter theme with Tailwind CSS",
  /** Site description for meta tags and search engines */
  description: "Astro starter with Tailwind CSS — fast, accessible, and ready to customize.",
  /** SEO keywords */
  keywords: "Astro, starter, theme, basics, tutorial, example",
  /** Search engine crawling instructions */
  robots: "index, follow",
  /** Site author name */
  author: "Dennis Macapagal",
  /** Default social sharing image */
  image: "/images/site-image.jpg",
  /** Open Graph content type */
  type: "website" as const, // 'website' | 'article'

};

/**
 * Site deployment and build configuration
 */
export const config = {
  /** Site's deploy URL - must start with https:// or http:// */
  url: "https://www.t2del.com/",
  /** Base path for deployment (e.g. "/blog" for GitHub Pages) */
  base: "/",
  /** Number of blog posts displayed per page */
  postsPerPage: 6,
  projectsPerPage: 8,
    WP_BLOG_LIST: "https://block.t2del.com/wp-json/wp/v2/posts?_embed",
    WP_BLOG_POST: "https://block.t2del.com/wp-json/wp/v2/posts",
  NUM_POSTS_ON_HOMEPAGE: 4,
  NUM_WORKS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 4,
  NUM_PROJECTS_ON_PROECTS: 8,
};

/**
 * Analytics and tracking configuration
 */
export const analytics = {
  /** Plausible Analytics settings */
  plausible: {
    /** Domain to track */
    domain: "mnyorba.github.io",
    /** Self-hosted Plausible instance URL */
    apiHost: "https://analytics.mnyorba.dev",
  },
  /** Google Tag Manager configuration */
  google: {
    /** GTM container ID */
    id: "",
    ga4: "G-JZRLM8LG36",
  },
};

/**
 * Internationalization and date formatting settings
 */
export const locale = {
  /** Default site locale */
  default: "en-US",
  /** Date formatting configuration */
  date: {
    /** Locale for date formatting */
    locale: "en-US",
    /** Intl.DateTimeFormat options */
    options: {
      year: "numeric",
      month: "long",
      day: "numeric",
    } as Intl.DateTimeFormatOptions,
  },
};
