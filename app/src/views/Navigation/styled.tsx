import styled, { css, DefaultTheme } from '@xstyled/styled-components'
import { Header5 } from '../../components/Text'

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    display: block;
    position: relative;
    z-index: ${theme.layout.z.navigation};
    font-family: ${theme.font.family.sans};
    position: sticky;
    top: 20px;
    left: 0;
    right: 0;
    width: 100vw;
  `}
`

export const Inner = styled.nav`
  ${({ theme }) => css`
    height: ${theme.layout.navHeight};
    display: grid;
    grid-template-columns: 1fr 220px 1fr;
    align-items: center;
    padding: 0 6;
    width: 100%;
    margin: 4 0;
  `}
`

interface WithReady {
  theme: DefaultTheme
  ready: boolean
  align?: string
}

export const NavSection = styled.div`
  ${({ theme, ready, align }: WithReady) => css`
    transition: 0.3s;
    flex-grow: 1;
    display: flex;
    justify-content: ${align === 'right' ? 'flex-end' : 'flex-start'};
    align-items: stretch;
    height: 100%;
    opacity: ${ready ? '1' : '0'};

    &:last-child {
      justify-content: flex-end;
    }
  `}
`

export const Logo = styled.img`
  width: 220px;
`

interface WithActive {
  theme: DefaultTheme
  active?: boolean
}

export const NavHeader = styled(Header5)`
  ${({ theme, active }: WithActive) => css`
    border-top: 2px solid transparent;
    border-bottom: 2px solid ${active ? 'black' : 'transparent'};
    color: inherit;
    text-decoration: none;
    transition: 0.2s;
  `}
`

export const NavHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  margin: 0 1em;

  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }

  &:focus ${NavHeader}, &:hover > ${NavHeader} {
    border-bottom-color: black;
  }
`

interface WithOpen {
  theme: DefaultTheme
  open: boolean
}

export const SubmenuPane = styled.div`
  ${({ theme, open }: WithOpen) => css`
    opacity: ${open ? 1 : 0};
    pointer-events: ${open ? 'initial' : 'none'};
    position: absolute;
    z-index: calc(${theme.layout.z.navigation} - 1);
    top: 100%;
    left: 0;
    width: 100%;
    min-height: 200px;
    background-color: white;
    transition: 0.2s;
  `}
`

interface WithVisible {
  theme: DefaultTheme
  active: Boolean
}

export const SubMenuColumns = styled.div`
  ${({ theme, active }: WithVisible) => css`
    display: ${active ? 'grid' : 'none'};
    margin: 0 auto;
    max-width: ${theme.layout.columns.xWide};
    grid-template-columns: repeat(5, 1fr);
    padding: 3 5;
    grid-column-gap: 3;
  `}
`

interface ModalBackgroundProps {
  open: boolean
}

export const ModalBackground = styled.div`
  ${({ open }: ModalBackgroundProps) => css`
    height: 100vh;
    position: fixed;
    background: #0000004d;
    width: 100vw;
    top: 0;
    cursor: pointer;
    display: ${open ? 'block' : 'none'};
  `}
`

interface LoadingProps {
  theme: DefaultTheme
  isLoading?: boolean
}

export const Loading = styled.div`
  transition: 250ms ease;
  display: flex;
  ${({ theme, isLoading }: LoadingProps) => css`
    opacity: ${isLoading ? '0.5' : '1'};

    div:nth-child(1) {
      margin-right: 2;
      padding-top: 1px;
    }
  `}
`

interface SideNavigation {
  theme: DefaultTheme
  open?: boolean
}

export const SideNavigation = styled.div`
  ${({ theme, open }: SideNavigation) => css`
    transform: ${open ? 'translateX(0px)' : 'translateX(-500px)'};
    width: 500px;
    background-color: white;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    transition: 250ms ease;
  `};
`

interface Hamburger {
  theme: DefaultTheme
  open?: boolean
}

export const Hamburger = styled.div`
  ${({ open }: Hamburger) => css`
    cursor: pointer;
    transition: 250ms ease;
    position: relative;
    z-index: 3;
    &:hover {
      opacity: 0.5;
    }

    span {
      width: 30px;
      height: 1px;
      background-color: black;
      display: block;
      margin: 9px;
      transition: 50ms ease;
    }

    span:nth-child(1) {
      transform: ${open
        ? 'rotate(45deg) translateY(1px) translateX(10px)'
        : 'rotate(0) translateY(0px)'};
    }
    span:nth-child(3) {
      transform: ${open
        ? 'rotate(-45deg) translateY(3px) translateX(6px)'
        : 'rotate(0) translateY(0px)'};
    }
    span:nth-child(2) {
      display: ${open ? 'none' : 'block'};
    }
  `}
`

interface NavInner {
  theme: DefaultTheme
}

export const NavInner = styled.div`
  ${({ theme }: NavInner) => css`
    padding: 7;
    height: 100vh;
    border-right: 1px solid black;
    > div {
      margin: 6 0;
    }
    ul {
      list-style: none;
      padding: 0;
      li {
        font-family: ${theme.font.family.serif};
        margin: 3 0;
        padding: 5 0 3;
        border-top: 1px solid black;
        text-transform: uppercase;
        font-size: ${theme.font.size.h5};
      }
    }
  `};
`
export const NavItemWrapper = styled.div`
  ${({ theme }) => css`
    display: block;
    padding: 3 0;

    & + & {
      border-top: 1px solid black;
    }
  `}
`
