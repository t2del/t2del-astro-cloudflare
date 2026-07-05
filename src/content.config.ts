import { glob } from "astro/loaders";
import { defineCollection, reference } from "astro:content";
import { z } from "astro/zod";

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

/**
 * Work posts collection schema
 *
 * Loads markdown and MDX files from ./src/data/work/
 * Supports categories, tags, featured images, and author references.
 */
const workCollection = defineCollection({
  	// Load Markdown and MDX files in the `src/content/work/` directory.
	loader: glob({ base: "./src/content/work", pattern: "**/*.{md,mdx}" }),
	// Type-check frontmatter using a schema
  	schema: z.object({
		company: z.string(),
		logo: z.string().optional(),
		logoIsSVG: z.boolean().optional(),
		role: z.string(),
		publishDate: z.date().default(new Date()),
		dateStart: z.coerce.date(),
		dateEnd: z.union([z.coerce.date(), z.string()]),
		draft: z.boolean().optional(),
		companySlug: z.string().optional(),
  	}),
});

/**
 * Projects collection schema
 *
 * Loads markdown and MDX files from ./src/data/project/
 * Supports categories, tags, featured images, and author references.
 */
const projectsCollection = defineCollection({
  	// Load Markdown and MDX files in the `src/content/project/` directory.
	loader: glob({ base: "./src/content/project", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		/** Publication date (defaults to current date) */
		publishDate: z.date().default(new Date()),
		/** Last update date (optional) */
		updateDate: z.date().optional(),
		/** Hide from production if true */
		draft: z.boolean().optional(),

		/** Post title (required) */
		title: z.string(),
		/** Post description for SEO and previews */
		description: z.string(),
		/** Featured image with alt text */
		image: z
		.object({
			src: z.string(),
			srcscroll: z.string(),
			alt: z.string(),
		})
		.optional(),

		/** Post categories for organization */
		category: z.array(z.string()).optional(),
		/** Post tags for filtering */
		tag: z.array(z.string()).optional(),
		/** Reference to author from authors collection */
		author: reference("authorsCollection"),
		role: z.string().optional(),
			platform: z.string().optional(),
		siteUrl: z.string().optional(),
		companySlug: z.string().optional(),
	}),
});
/**
 * Authors collection schema
 *
 * Loads author data from JSON files in ./src/data/authors/
 * Referenced by blog posts for author information.
 */
const authorsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.json", base: "./src/content/authors" }),
  schema: z.object({
    /** Author display name */
    name: z.string(),
    /** Author website URL */
    site: z.string().url(),
  }),
});

export const collections = { blog, workCollection, projectsCollection, authorsCollection };
