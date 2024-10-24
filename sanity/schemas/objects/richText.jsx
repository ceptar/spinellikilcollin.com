import * as React from 'react'

export const defaultExternalLink = {
  type: 'object',
  name: 'link',
  options: {
    modal: 'popover',
  },
  fields: [
    {
      name: 'href',
      type: 'url',
      title: 'Url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'tel', 'mailto'],
          allowRelative: true,
        }),
    },
  ],
}

const TextSpan = ({fontSize, backgroundColor, children, fontWeight}) => (
  <span style={{fontSize, fontWeight, backgroundColor}}>{children}</span>
)

const createBlockEditorConfig = ({label, fontWeight}) => ({
  icon: () => (
    <TextSpan fontSize={11} fontWeight={fontWeight}>
      {label}
    </TextSpan>
  ),
  render: ({children}) => (
    <TextSpan backgroundColor="#e5e8f7" fontWeight={fontWeight}>
      {children}
    </TextSpan>
  ),
})

import {actionTypes} from './shared'

const textActionObject = {
  name: 'textAction',
  title: 'Action',
  type: 'object',
  description: 'Have the selected text launch an action when clicked',
  blockEditor: {
    icon: () => (
      <span role="img" aria-label="Link" style={{fontSize: '1em'}}>
        🚀
      </span>
    ),
  },
  fields: [
    {
      name: 'actionType',
      title: 'Action Type',
      type: 'string',
      options: {
        list: actionTypes,
      },
    },
  ],
  preview: {
    select: {
      actionType: 'actionType',
    },
    prepare: ({actionType}) => {
      return {
        title: actionType,
        subtitle: 'Action',
      }
    },
  },
}

export const richText = {
  name: 'richText',
  label: 'Rich Text',
  type: 'array',
  of: [
    {
      type: 'block',
      marks: {
        decorators: [
          {
            title: 'Regular',
            value: 'regular',
            blockEditor: createBlockEditorConfig({
              label: 'Regular',
              fontWeight: 400,
            }),
          },

          {
            title: 'Thin',
            value: 'thin',
            blockEditor: createBlockEditorConfig({
              label: 'Thin',
              fontWeight: 100,
            }),
          },
          {
            title: 'Light',
            value: 'light',
            blockEditor: createBlockEditorConfig({
              label: 'Light',
              fontWeight: 200,
            }),
          },
          {
            title: 'Book',
            value: 'book',
            blockEditor: createBlockEditorConfig({
              label: 'Book',
              fontWeight: 300,
            }),
          },
          {
            title: 'Bold',
            value: 'bold',
            blockEditor: createBlockEditorConfig({
              label: 'Bold',
              fontWeight: 900,
            }),
          },
          {title: 'Italic', value: 'em'},
          {title: 'Underline', value: 'underline'},
        ],
        annotations: [
          {name: 'link', type: 'link', title: 'External Link'},
          {
            name: 'internalLink',
            type: 'internalLink',
            title: 'Internal Link',
          },
          textActionObject,
        ],
      },
    },
    {type: 'richImage'},
    {type: 'cloudinaryVideo'},
    {type: 'form'},
    {type: 'countdown'},
    {type: 'iframe'},
  ],
}
