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
  base: "",
  /** Number of blog posts displayed per page */
  postsPerPage: 6,
  projectsPerPage: 8,
    WP_BLOG_LIST: "https://denn-block.instawp.xyz/wp-json/wp/v2/posts?_embed",
    WP_BLOG_POST: "https://denn-block.instawp.xyz/wp-json/wp/v2/posts",
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

/**
 * Skill categories and proficiency levels for display on the site
 */
export const skills = [
  { name: "PHP", level: 3 },
  { name: "Laravel", level: 3 },
  { name: "HTML", level: 5 },
  { name: "CSS", level: 5 },
  { name: "Sass / Less", level: 3 },
  { name: "Bootstrap", level: 4 },
  { name: "TailwindCSS", level: 4 },
  { name: "JavaScript", level: 4 },
  { name: "TypeScript", level: 3 },
  { name: "React", level: 4 },
  { name: "Astrojs", level: 3 },
  { name: "Node.js", level: 4 },
  { name: "WordPress", level: 2 },
  { name: "MySQL", level: 3 },
  { name: "Azure", level: 1 },
];

/**
 * Introduction
 */
export const introduction = {
  shortDesc: "A Full-Stack Developer with more than 10 years of relevant experience in web programming. Bringing up-to-date industry skills in front-end and back-end technology such as PHP, HTML, CSS, JavaScript, MySQL and hands-on experience with CMS such as WordPress. Detail-oriented and motivated to drive project completion on target with exceptional quality and guaranteed client satisfaction.",
};