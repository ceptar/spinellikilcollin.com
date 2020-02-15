import styled, { css, DefaultTheme } from '@xstyled/styled-components'

interface Column {
  theme: DefaultTheme
}

export const Column = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    max-width: calc(${theme.layout.columns.xWide} - 7);
  `}
`

interface HeroBackground {
  theme: DefaultTheme
  background: string
  backgroundMobile: string
}

export const HeroBackground = styled.div`
  ${({ theme, background, backgroundMobile }: HeroBackground) => css`
    background-image: ${`url(${background})`};
    background-size: cover;
    background-position: 10%;
    padding: 6;
    height: 90vh;
    position: relative;
    z-index: 0;
    top: 0px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 'a b';
    div {
      padding: 6;
      align-self: center;
      grid-area: b;
    }
    ${theme.mediaQueries.tablet} {
      background-image: ${`url(${backgroundMobile})`};
      grid-template-columns: 1fr;
      div {
        grid-area: a;
        align-self: flex-start;
      }
    }
  `}
`

interface HeroText {
  theme: DefaultTheme
  textAlign: string
}

export const HeroText = styled.div`
  ${({ textAlign }: HeroText) => css`
    text-align: ${textAlign === 'middle-right' ? 'center' : 'left'};
    max-width: 400px;
    margin: 0 auto;
    color: body.8;
  `}
`

interface ImageTextProps {
  theme: DefaultTheme
  textAlign?: string | null | void
  background?: string
  width?: string
}

export const ImageText = styled.div`
  ${({ theme, background, width }: ImageTextProps) => css`
    width: ${width === 'fullWidth' ? '100%' : '50%'};
    display: inline-block;
    box-sizing: border-box;
    margin: 0 auto;
    color: body.8;
    padding: 0;
    background-image: ${`url(${background})`};
    background-size: cover;
    background-position: center;
    vertical-align: top;
    position: relative;
    line-height: 0;
    ${theme.mediaQueries.tablet} {
      width: 100%;
    }

    a {
      text-transform: capitalize;
      color: body.7;
      margin: 3 0;
      display: inline-block;
      font-style: italic;
      text-decoration: none;
      padding: 1 0;
      border-bottom: 1px solid body.7;
      font-size: ${theme.font.size.h4};
    }
  `}
`

interface ImageText {
  textAlign?: string | null | void
  theme: DefaultTheme
}

export const TextOverImage = styled.div`
  ${({ theme, textAlign }: ImageText) => css`
        display: block;
        position: absolute;
        width: 100%;
        padding: 6;
        line-height: initial;
        padding-top: ${textAlign === 'middle-center' ? '45%' : '5'};
        p {
          font-size: ${theme.font.size.h3};
          line-height: 32px;
          margin:1;
        }
        position: ${
          textAlign === 'middle-center'
            ? 'absolute'
            : textAlign === 'bottom-right'
            ? 'absolute'
            : 'absolute'
        };
        text-align: ${
          textAlign === 'middle-center'
            ? 'center'
            : textAlign === 'bottom-right'
            ? 'right'
            : 'left'
        };
        flex-direction: column;
        justify-content: ${
          textAlign === 'middle-center'
            ? 'center'
            : textAlign === 'bottom-right'
            ? 'flex-end'
            : 'left'
        };
        top: ${textAlign === 'bottom-right' ? 'initial' : '0'};
        bottom: ${textAlign === 'bottom-right' ? '0' : 'initial'};
        left: ${textAlign === 'middle-center' ? '0' : 'initial'};
        right: ${textAlign === 'middle-center' ? '0' : 'initial'};
      }
    `}
`

interface CarouselBlockStyledProps {
  theme: DefaultTheme
}

export const CarouselBlockStyled = styled.div`
  padding: 6;
  text-align: center;
`

export const Square = styled.div`
  padding: 50% 0 50%;
  background-color: lightgray;
  text-align: center;
`
