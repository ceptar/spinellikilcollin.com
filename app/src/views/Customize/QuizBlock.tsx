import * as React from 'react'
import styled, { css } from '@xstyled/styled-components'
import { QuizBlock as QuizBlockType } from '../../types'
import { Heading } from '../../components/Text'
import { Image } from '../../components/Image'
import { LinkButton } from '../../components/Button'
import { ImageTextBlock } from '../../components/ContentBlock/ImageTextBlock'
import { PageLink } from '../Directory/PageLink'

const QuizBlockWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap 4;

    ${theme.mediaQueries.mobile} {
      display: block;
      text-align: center;
    }
  `}
`

const QuizBlockLeft = styled.div`
  display: none;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

interface QuizBlockProps {
  quizBlock: QuizBlockType
}

export const QuizBlock = ({ quizBlock }: QuizBlockProps) => {
  const { title, subtitle, image } = quizBlock
  const pageLink = {
    __typename: 'PageLink' as 'PageLink',
    image,
    title,
    summary: subtitle,
    ctaText: 'Launch Quiz',
  }
  return (
    <PageLink
      key="quiz-block"
      index={1}
      href="/customize/quiz"
      pageLink={pageLink}
      ctaType="button"
    />
  )

  // return (
  //   <QuizBlockWrapper>
  //     <QuizBlockLeft>
  //       <Heading mb={2} level={2}>
  //         {title}
  //       </Heading>
  //       <Heading level={4}>{subtitle}</Heading>
  //       <LinkButton mt={4} mb={{ sm: 3 }} level={2} href="/customize/quiz">
  //         Launch Quiz
  //       </LinkButton>
  //     </QuizBlockLeft>
  //     <Image image={image} ratio={1} />
  //   </QuizBlockWrapper>
  // )
}
