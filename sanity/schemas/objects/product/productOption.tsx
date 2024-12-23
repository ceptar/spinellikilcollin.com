import {SunIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const productOption = defineType({
  title: 'Product option',
  name: 'productOption',
  type: 'object',
  // icon: SunIcon,
  fields: [
    // Name
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      readOnly: false,
    }),
    // Values
    {
      title: 'Values',
      name: 'values',
      type: 'array',
      of: [{type: 'productOptionValue'}],
    },
  ],
  preview: {
    select: {
      name: 'name',
    },
    prepare(selection) {
      const {name} = selection

      return {
        title: name,
      }
    },
  },
})

// export const productOptionValue = {
//   fields: [
//     {
//       title: 'Description',
//       name: 'description',
//       type: 'array',
//       description: 'An alternate description to display when this variant is selected',
//       of: [
//         {
//           type: 'block',
//           styles: [{title: 'Normal', value: 'normal'}],
//           marks: {
//             decorators: [
//               {title: 'Strong', value: 'strong'},
//               {title: 'Emphasis', value: 'em'},
//             ],
//           },
//         },
//       ],
//     },
//     {
//       title: 'Swatch',
//       name: 'swatch',
//       type: 'image',
//     },
//     {
//       title: 'Hover Image',
//       name: 'hover_image',
//       type: 'image',
//     },
//     {
//       title: 'Variant Animation',
//       description: 'Cloudinary Video ID (looping render)',
//       name: 'animation',
//       type: 'string',
//     },
//     {
//       title: 'Stone',
//       name: 'stone',
//       type: 'reference',
//       description: 'If Karat swatch, link to associated stone.',
//       weak: true,
//       to: [{type: 'stone'}],
//     },
//   ],
//   preview: {
//     select: {
//       title: 'value',
//       media: 'swatch',
//     },
//   },
// }

// export const shopifyProductDocument = {
//   fields: [
//     {
//       title: 'Hidden (deprecated)',
//       name: 'hidden',
//       type: 'boolean',
//       description:
//         'DEPRECATED: This has been split up into "Hide from Collections" and "Hide from Search"',
//     },
//     {
//       title: 'Hide from Collections',
//       name: 'hideFromCollections',
//       type: 'boolean',
//       description:
//         'Toggle this to ON to hide this product from collection pages. The product will still be viewable at its URL',
//     },
//     {
//       title: 'Show in Collection',
//       name: 'showInCollection',
//       type: 'reference',
//       description: 'Always show product in specified collection.',
//       weak: true,
//       to: [{type: 'shopifyCollection'}],
//     },
//     {
//       title: 'Show in Collections',
//       name: 'showInCollections',
//       type: 'array',
//       of: [
//         {
//           type: 'reference',
//           description: 'Always show product in specified collections.',
//           weak: true,
//           to: [{type: 'shopifyCollection'}],
//         },
//       ],
//     },
//     {
//       title: 'Initial Variant (by Collection)',
//       name: 'initialVariantSelections',
//       type: 'array',
//       description: "Choose initial variant to show based on the product's parent collection.",
//       of: [{type: 'initialVariantSelection'}],
//     },
//     {
//       title: 'Hide from Search',
//       name: 'hideFromSearch',
//       type: 'boolean',
//       description:
//         'Toggle this to ON to hide this product from search results. The product will still be viewable at its URL',
//     },
//     {
//       title: 'Inquiry Only',
//       name: 'inquiryOnly',
//       type: 'boolean',
//       description:
//         'Toggle this to ON to hide a product\'s price and show an inquiry button instead of "Add to Cart"',
//     },
//     {
//       title: 'Accordions',
//       name: 'info',
//       type: 'array',
//       description:
//         'Info accordions will appear below the product description. You can also add content accordions to multiple items in the "Product Info" section of the CMS.',
//       of: [{type: 'productInfo'}],
//     },
//     {
//       title: 'Gallery',
//       name: 'gallery',
//       type: 'array',
//       of: [{type: 'richImage'}],
//     },
//     {
//       title: 'Content Blocks',
//       name: 'contentAfter',
//       description:
//         'These blocks will appear below the product header & gallery, and above the Related Items carousel.',
//       type: 'array',
//       of: [{type: 'imageTextBlock'}],
//     },
//     {
//       title: 'Related Products Carousels',
//       description: 'The title will default to "Related Products" if left empty.',
//       name: 'related',
//       type: 'carousel',
//     },
//     {
//       name: 'variants',
//       hidden: true,
//     },
//     {
//       name: 'seo',
//       type: 'seo',
//       description:
//         'Custom SEO settings. By default, the product description and image will be used.',
//     },
//   ],
// }
