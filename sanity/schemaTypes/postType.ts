import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "This will be auto-generated from the title",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        maxLength: 96,
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/[,\s().:']/g, "-")
            .replace(/[^\w-]+/g, "")
            .replace(/--+/g, "-")
            .replace(/^-+/, "")
            .replace(/-+$/, ""),
      },
    }),
    defineField({
      name: "summary",
      type: "text",
      title: "Summary",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "mainImage",
      type: "image",
      title: "Post Image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
    }),
    defineField({
      title: "Block Content",
      name: "blockContent",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative text",
            },
          ],
        },
      ],
    }),
  ],
});

// preview: {
//   select: {
//     title: "title",
//     author: "author.name",
//     media: "mainImage",
//   },
//   prepare(selection) {
//     const { author } = selection;
//     return { ...selection, subtitle: author && `by ${author}` };
//   },
// },

// defineField({
//   name: "author",
//   type: "reference",
//   to: { type: "author" },
// }),
// defineField({
//   name: "categories",
//   type: "array",
//   of: [defineArrayMember({ type: "reference", to: { type: "category" } })],
// }),
