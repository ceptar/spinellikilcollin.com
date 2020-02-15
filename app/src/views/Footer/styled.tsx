import styled, { css, DefaultTheme } from '@xstyled/styled-components'
import { semiDark } from '../../theme/color'

export const FooterWrapper = styled.footer`
  transition: 250ms ease;
  width: 100%;
  ${({ theme }) => css`
    padding: 6 3;
    .footer-inner {
      margin: 0 auto;
      max-width: 1200px;
      > div {
        padding: 6 0;
        border-top: 2px solid ${theme.color.light};
      }
    }
    .upper-footer {
      display: grid;
      grid-template-columns: 3fr 3fr 4fr;
      ${theme.mediaQueries.mobile} {
        grid-template-columns: 2fr 2fr;
        padding: 3;
        .footer-newsletter {
          grid-column: span 2;
        }
      }
    }
    .lower-footer {
      display: grid;
      grid-template-columns: 3fr 2fr;
      ${theme.mediaQueries.mobile} {
        grid-template-columns: 1fr;
        padding: 3;
        > div {
          margin: 0 0 5 0;
        }
      }
      .copyright {
        font-size: ${theme.font.size.h6};
        letter-spacing: 1px;
        color: ${theme.color.semiDark};
      }
      .socials {
        a {
          display: inline-block;
          margin-right: 5;
          color: ${theme.color.dark};
        }
      }
    }
    ul {
      list-style: none;
      padding: 0;
      li {
        margin: 0 0 5 0;
        font-size: ${theme.font.size.h5};
      }
    }
  `}
`
