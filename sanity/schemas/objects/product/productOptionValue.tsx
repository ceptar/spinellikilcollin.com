import {SunIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const productOptionValue = defineType({
  title: 'Option Value',
  name: 'productOptionValue',
  type: 'object',
  fields: [
    defineField({
      name: 'value',
      title: 'Name',
      type: 'string',
      readOnly: false,
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'array',
      description: 'An alternate description to display when this variant is selected',
      of: [
        {
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
            ],
          },
        },
      ],
    }),
    defineField({
      title: 'Swatch',
      name: 'swatch',
      type: 'image',
    }),
    defineField({
      title: 'Hover Image',
      name: 'hover_image',
      type: 'image',
    }),
    defineField({
      title: 'Variant Animation',
      description: 'Cloudinary Video ID (looping render)',
      name: 'animation',
      type: 'string',
    }),
    defineField({
      title: 'Content Blocks',
      name: 'contentAfter',
      description:
        'These blocks will appear below the product header whenever the swatch is selected.',
      type: 'array',
      of: [{type: 'imageTextBlock'}],
    }),
    defineField({
      title: 'Stone',
      name: 'stone',
      type: 'reference',
      description: 'If Karat swatch, link to associated stone.',
      weak: true,
      to: [{type: 'stone'}],
    }),
  ],
  preview: {
    select: {
      title: 'value',
      media: 'swatch',
    },
  },
  // preview: {
  //   select: {
  //     name: 'name',
  //   },
  //   prepare(selection) {
  //     const {name} = selection

  //     return {
  //       title: name,
  //     }
  //   },
  // },
})
