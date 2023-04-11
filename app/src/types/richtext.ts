import {
  Form,
  Block,
  RichImage,
  CloudinaryVideo,
  Maybe,
} from './generated-sanity'

interface BlockNode<T> {
  node: T
  isInline?: boolean
  children: React.ReactNode[]
}

export interface FormBlock extends Omit<Form, '_type'> {
  formSubtitle: Maybe<string> | undefined
  formTitle: Maybe<string> | undefined
  _type: 'form'
}

interface TextBlock extends Omit<Block, '_type'> {
  _type: 'block'
}

interface ImageBlock extends Omit<RichImage, '_type'> {
  _type: 'richImage'
}

interface CloudinaryVideoBlock extends Omit<CloudinaryVideo, '_type'> {
  _type: 'cloudinaryVideo'
}

export type RichTextBlock =
  | BlockNode<FormBlock>
  | BlockNode<TextBlock>
  | BlockNode<ImageBlock>
  | BlockNode<CloudinaryVideoBlock>

export interface ListBlock {
  type: 'bullet' | 'number'
  level: number
  children: React.ReactNode[]
}
