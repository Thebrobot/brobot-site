import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		author: z.string().default('Brobot Media'),
		tags: z.array(z.string()).default([]),
		// Blog-to-FAQ: industry slugs this post applies to (e.g. ["real-estate", "hvac"])
		vertical: z.array(z.string()).optional(),
		// Blog-to-FAQ: "Question" = show in Recently Answered if not already in industry FAQ
		type: z.enum(["Question", "Article"]).optional(),
		// For type "Question": the question this post answers (used for duplicate detection)
		question: z.string().optional(),
	}),
});

export const collections = { blog };
