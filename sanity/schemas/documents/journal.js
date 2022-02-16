import { niceDate } from '../utils'

export const journal = {
  title: 'Journal Entry',
  type: 'document',
  name: 'journalEntry',
  fields: [
    {
      name: 'publishDate',
      label: 'Publish Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: 'MMMM D, YYYY',
      },
    },
    {
      name: 'hero',
      title: 'Hero',
      type: 'hero',
    },
    {
      name: 'title',
      label: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      label: 'Subtitle',
      type: 'string',
    },
    {
      name: 'slug',
      label: 'Page URL',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'thumbnail',
      label: 'Thumbnail',
      type: 'richImage',
    },
    {
      name: 'tags',
      label: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'body',
      label: 'Content',
      type: 'richText',
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    },
  ],
  preview: {
    select: {
      createdAt: '_createdAt',
      publishDate: 'publishDate',
      title: 'title',
      thumbnail: 'thumbnail',
    },
    prepare: ({ title, publishDate, createdAt, thumbnail }) => ({
      title: title,
      subtitle: niceDate(publishDate || createdAt),
      media: thumbnail,
    }),
  },
  orderings: [
    {
      title: 'Publish Date',
      name: 'publishDateDesc',
      by: [
        { field: 'publishDate', direction: 'desc' },
        { field: '_createdAt', direction: 'desc' },
      ],
    },
  ],
}
