import React, { ReactNode } from 'react'
import styled, { css, DefaultTheme } from '@xstyled/styled-components'
import {
  getColor,
  getBackgroundColor,
  getFlexJustification,
  getFlexAlignment,
  getTextAlignment,
} from '../../theme/utils'
import { Image } from '../Image'
import { Hero } from '../../types'
import { RichText } from '../RichText'
import { DocumentLink } from '../DocumentLink'
import { CloudinaryVideo } from '../CloudinaryVideo'
import { CTA } from '../CTA'
import { definitely } from '../../utils'
import { useMedia } from '../../hooks'
import { theme } from '../../theme'

interface HeroWrapperProps {
  hero: Hero
  ref?: React.ForwardedRef<HTMLDivElement>
}

export const HeroWrapper = styled.div<HeroWrapperProps>`
  ${({ theme, hero }) => css`
    display: ${hero.layout?.includes('flex') ? 'flex' : 'block'};
    position: relative;
    z-index: 0;
    grid-column: span 2;
    overflow: hidden;
    background-color: ${getBackgroundColor(hero.backgroundColor)};
    video {
      display: block;
    }

    ${theme.mediaQueries.mobile} {
      background-color: ${getBackgroundColor(
        hero.mobileBackgroundColor || hero.backgroundColor,
      )};
      flex-direction: column;
      overflow: hidden;
    }
  `}
`

interface HeroTextProps {
  theme: DefaultTheme
  hero: Hero
  textPosition?: string | null | undefined
  textColor?: string | null
  textPositionMobile?: string | null
  textColorMobile?: string | null
  textContainer?: string | null
}

const HeroText = styled.div`
  ${({
    theme,
    hero,
    textPosition,
    textColor,
    textPositionMobile,
    textColorMobile,
    textContainer,
  }: HeroTextProps) => css`
    pointer-events: none;
    position: ${hero.layout?.includes('flex') ? 'static' : 'absolute'};
    top: 0;
    left: 0;
    width: ${hero.layout?.includes('flex') ? '50%' : '100%'};
    height: 100%;
    padding: calc(${theme.navHeight} + ${theme.space[6]}px) 6 6;
    display: flex;
    justify-content: ${textPosition
      ? getFlexJustification(textPosition)
      : 'center'};
    align-items: ${textPosition ? getFlexAlignment(textPosition) : 'center'};
    text-align: ${textPosition ? getTextAlignment(textPosition) : 'center'};
    color: ${textColor ? getColor(textColor) : 'inherit'};

    .text-container {
      ${textContainer == 'full' ? 'max-width: 720px;' : 'max-width: 400px'};

      > * {
        pointer-events: auto;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p {
        margin-bottom: 0px;
        line-height: 1.3em;
        span {
          line-height: 1.3em;
        }
      }

      h1,
      h2 {
        line-height: 1.2em;
        span {
          line-height: 1.2em;
        }
      }

      ${!hero.cta
        ? `
        h1:first-child,
        h2:first-child,
        h3:first-child,
        h4:first-child,
        h5:first-child,
        h6:first-child,
        p:first-child {
          margin-top: 0px;
        }
        h1:last-child,
        h2:last-child,
        h3:last-child,
        h4:last-child,
        h5:last-child,
        h6:last-child,
        p:last-child {
          margin-bottom: 0px;
        }
      `
        : ''}
    }

    ${theme.mediaQueries.tablet} {
      ${textContainer == 'full'
        ? `h1 {
              font-size: ${theme.mobileFontSizes[1]};
            }
            h2 {
              font-size: ${theme.mobileFontSizes[2]};
            }
            h3 {
              font-size: ${theme.mobileFontSizes[3]};
            }
            p,
            h4 {
              font-size: ${theme.mobileFontSizes[4]};
            }
            h5 {
              font-size: ${theme.mobileFontSizes[5]};
            }
            h6 {
              font-size: ${theme.mobileFontSizes[6]};
            }`
        : ''}
    }

    ${theme.mediaQueries.mobile} {
      justify-content: ${getFlexJustification(textPositionMobile)};
      align-items: ${getFlexAlignment(textPositionMobile)};
      text-align: ${textPositionMobile
        ? getTextAlignment(textPositionMobile)
        : 'center'};
      color: ${textColorMobile ? getColor(textColorMobile) : 'inherit'};
      padding: calc(${theme.mobileNavHeight} + ${theme.space[4]}px) 4 4;
      width: 100%;
      min-height: ${hero.layout?.includes('flex') ? '40vw' : 'auto'};
    }
  `}
`

interface HeroImageWrapperProps {
  hero: Hero
  ref?: React.ForwardedRef<HTMLDivElement>
}

const HeroImageWrapper = styled.div<HeroImageWrapperProps>`
  ${({ theme, hero }) => css`
    width: ${hero.layout?.includes('flex') ? '50%' : '100%'};
    order: ${hero.layout === 'flex-left' ? '1' : '0'};

    video {
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    ${hero.layout?.includes('flex')
      ? `& > div {
      height: 100%;
      & > picture {
        height: 100%;
        & > img {
          height: 100%;
        }
      }
    }`
      : ''}

    & > *:nth-of-type(2) {
      display: none;
    }

    ${theme.mediaQueries.mobile} {
      order: 0;
      width: 100%;

      & > *:nth-of-type(1) {
        display: none;
      }
      & > *:last-child {
        display: block;
      }
    }
  `}
`

interface HeroBlockProps {
  hero: Hero
}

// eslint-disable-next-line react/display-name
export const HeroBlock = React.forwardRef(
  ({ hero }: HeroBlockProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const {
      textPosition,
      textColor,
      textContainer,
      heroLink,
      bodyRaw,
      body_mobileRaw,
      image,
      textPositionMobile,
      textColorMobile,
      cloudinaryVideo,
      cloudinaryVideoMobile,
      mobileImage,
      cta: ctas,
    } = hero
    const cta = definitely(ctas).length ? definitely(ctas)[0] : null
    const isMobile = useMedia({
      maxWidth: `${theme.breakpoints?.md || '650'}px`,
    })

    return (
      <HeroWrapper hero={hero} ref={ref}>
        <DocumentLink document={heroLink?.document ?? undefined}>
          {cloudinaryVideo?.videoId ? (
            <HeroImageWrapper hero={hero}>
              <CloudinaryVideo video={cloudinaryVideo} />
              {cloudinaryVideoMobile ? (
                <CloudinaryVideo video={cloudinaryVideoMobile} />
              ) : null}
            </HeroImageWrapper>
          ) : (
            <HeroImageWrapper hero={hero}>
              {image ? <Image image={image} /> : null}
              {mobileImage ? <Image image={mobileImage} /> : null}
            </HeroImageWrapper>
          )}
          <HeroText
            textPosition={textPosition}
            textColor={textColor}
            textPositionMobile={textPositionMobile}
            textColorMobile={textColorMobile}
            textContainer={textContainer}
            hero={hero}
          >
            <div className="text-container">
              <RichText
                body={isMobile && body_mobileRaw ? body_mobileRaw : bodyRaw}
              />
              {cta ? <CTA cta={cta} /> : null}
            </div>
          </HeroText>
        </DocumentLink>
      </HeroWrapper>
    )
  },
)
