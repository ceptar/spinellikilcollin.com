import {defineField, defineType} from 'sanity'

export const shopifySourceCollection = defineType({
  title: 'Shopify source collection data',
  name: 'shopifySourceCollection',
  type: 'object',
  hidden: false,
  readOnly: false,
  fields: [
    defineField({name: 'id', type: 'string', hidden: false}),
    defineField({name: 'handle', type: 'string', hidden: false}),
    defineField({name: 'title', type: 'string', hidden: false}),
    defineField({name: 'image', type: 'shopifySourceImage', hidden: false}),
    defineField({name: 'description', type: 'text', hidden: false}),
    defineField({name: 'descriptionHtml', type: 'text', hidden: false}),
    defineField({name: 'updatedAt', type: 'date', hidden: false}),
    defineField({name: 'products', type: 'shopifySourceProductsConnection', hidden: false}),
  ],
})
