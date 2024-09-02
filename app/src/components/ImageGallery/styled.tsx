import * as React from 'react'
import styled, { DefaultTheme, css } from '@xstyled/styled-components'

interface ThumbnailWrapperProps {
  theme: DefaultTheme
  isActive: boolean
  isOpen: boolean
}

export const Wrapper = styled.div`
  position: relative;
  text-align: left;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 120px 64px;
  gap: 5;
`

export const ThumbnailsWrapper = styled.div`
  position: relative;
  text-align: left;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 3;

  img {
    opacity: 1 !important;
  }
`

export const SlideContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SlideWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5;
  svg {
    width: 23px;
    height: 23px;
    fill: #ffffff;
  }
`

export const SlideInner = styled.div`
  position: relative;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  pointer-events: all;
`

export const TextWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    justify-content: space-between;
    align-items: flex-start;
    display: flex;
    flex-direction: row;
    width: 100%;
    pointer-events: all;

    > span {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 3;

      > h5 {
        font-style: italic;
      }
    }

    > button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 5;

      >h5: last-child {
        font-family: sans;
      }
    }
  `}
`

export const ThumbnailWrapper = styled.div<ThumbnailWrapperProps>`
  ${({ theme, isActive, isOpen }) => css`
    position: relative;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    padding-bottom: 10px;

    ${isOpen && `cursor: pointer;`};

    &:after {
      content: '';
      margin-top: 10px;

      width: 100%;
      height: 1px;
      background-color: #999999;
      opacity: 1;
      display: none;

      ${isOpen && `background-color: #ffffff;`}

      ${isActive && `display: block;`};
    }
  `}
`

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    justify-content: center;
    align-items: center;
    width: 35vw;
    aspect-ratio: 1;
    padding-bottom: 32px;
    pointer-events: all;

    img {
      opacity: 1 !important;
    }
  `}
`
export const ActiveImageWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    justify-content: center;
    align-items: center;
    width: 400px;
    aspect-ratio: 1;
    cursor: pointer;
  `}
`
export const Navigation = styled.div`
  ${({ theme }) => css`
    position: absolute;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
  `}
`
export const NavLeft = styled.button`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    height: 100%;
    left: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    pointer-events: all;

    svg {
      transform: rotateY(180deg);
    }
  `}
`
export const NavRight = styled.button`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    pointer-events: all;

    right: 10px;
    cursor: pointer;
  `}
`
