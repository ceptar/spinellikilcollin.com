import * as React from 'react'
import { BlockPreview } from '../components/BlockPreview'
import {
  getTypeText,
  getReferencedDocument,
  getShopifyThumbnail,
} from '../utils'

const getPreviewValues = async (values) => {
  const { document } = values

  if (!document || !document._ref) {
    return { title: '(empty)' }
  }
  const doc = await getReferencedDocument(document._ref)
  const src =
    doc && (doc._type === 'shopifyProduct' || doc._type === 'shopifyCollection')
      ? getShopifyThumbnail(doc)
      : undefined

  const subtitles = [
    `🔗 ${getTypeText(doc)}: ${doc.title}`,
    doc && doc.archived === true
      ? `🛑 This collection is archived and will not be displayed on the site.`
      : undefined,
  ].filter(Boolean)

  return {
    src,
    title: doc.title,
    subtitles,
  }
}

export const externalLink = {
  title: 'External Link',
  type: 'object',
  name: 'externalLink',
  icon: () => (
    <span role="img" aria-label="Link" style={{ fontSize: '1em' }}>
      🔗
    </span>
  ),

  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'URL',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'newTab',
      type: 'boolean',
      title: 'Open in New Tab',
    },
  ],
  preview: {
    select: {
      url: 'url',
      newTab: 'newTab',
    },
    prepare: ({ url, newTab }) => {
      return {
        title: url,
        subtitle: newTab ? '⧉ Opens in new tab' : undefined,
      }
    },
  },
}

export const queryParam = {
  type: 'object',
  name: 'queryParam',
  title: 'Query Parameter',
  description: 'e.g. "stone=am" / "{KEY}={VALUE}"',
  fields: [
    {
      name: 'key',
      type: 'string',
      title: 'KEY',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'value',
      type: 'string',
      title: 'VALUE',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      key: 'key',
      value: 'value',
    },
    prepare: ({ key, value }) => {
      return {
        title: `${key}=${value}`,
      }
    },
  },
}

export const internalLink = {
  title: 'Page, Product, or Collection',
  description: 'Link to a Page, Product, or Collection',
  name: 'internalLink',
  type: 'object',
  blockEditor: {
    icon: () => (
      <span role="img" aria-label="Link" style={{ fontSize: '1em' }}>
        🔗
      </span>
    ),
  },
  fields: [
    {
      name: 'document',
      title: 'Linked Page',
      type: 'reference',
      to: [
        { type: 'shopifyProduct' },
        { type: 'shopifyCollection' },
        { type: 'journalPage' },
        { type: 'journalEntry' },
        { type: 'teamPage' },
        { type: 'magazine' },
        { type: 'contact' },
        { type: 'faq' },
        { type: 'customize' },
        { type: 'about' },
        { type: 'page' },
      ],
    },
    {
      title: 'Route Query Parameters (optional)',
      name: 'queryParams',
      description: 'Add query parameter(s) to the link route.',
      type: 'array',
      of: [{ type: 'queryParam' }],
    },
  ],
  preview: {
    select: {
      document: 'document',
    },
    component: (props) => (
      <BlockPreview {...props} getPreviewValues={getPreviewValues} />
    ),
  },
}

export const richPageLink = {
  title: 'Page, Product, or Collection',
  description: 'Link to a Page, Product, or Collection',
  name: 'richPageLink',
  type: 'object',
  fields: [
    {
      name: 'document',
      title: 'Linked Page',
      type: 'reference',
      to: [
        { type: 'shopifyProduct' },
        { type: 'shopifyCollection' },
        { type: 'page' },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description:
        'If left empty, the title of the linked page, product, or collection will be used.',
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'array',
      description: '(captions will not appear in carousels)',
      of: [
        {
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
          },
        },
      ],
    },
    {
      name: 'image',
      title: 'Image',
      description:
        'If left empty, the image of the linked product or document will be used.',
      type: 'richImage',
    },
    {
      name: 'hoverImage',
      title: 'Hover Image',
      description:
        'If left empty, the second image of the linked product will be used.',
      type: 'richImage',
    },
  ],
  preview: {
    select: {
      document: 'document',
      title: 'title',
      image: 'image',
    },
    component: (props) => (
      <BlockPreview {...props} getPreviewValues={getPreviewValues} />
    ),
  },
}
