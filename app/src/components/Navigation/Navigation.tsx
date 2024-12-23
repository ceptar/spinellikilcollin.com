/* eslint-disable prettier/prettier */
import * as React from 'react'
import Link from 'next/link'
import { NextRouter } from 'next/router'
import { unwindEdges } from '@good-idea/unwind-edges'
import { useShopify } from '../../providers/ShopifyProvider'
import { useNavigation } from '../../providers/NavigationProvider'
import { useSearch } from '../../providers/SearchProvider'
import { Heading } from '../../components/Text'
import Cart from '../../svg/Cart.svg'
import Logotype from '../../svg/Logotype.svg'
import { Checkout } from '../Cart/Checkout'
import { Hamburger } from '../Hamburger'
import { SearchButton } from './SearchButton'
import {
  Wrapper,
  Inner,
  CartBadge,
  CartButtonWrapper,
  SearchButtonWrapper,
  SideNavigation,
  LogoWrapper,
  NavInnerBackground,
  BreadcrumbsWrapper,
  ToolsWrapper,
  SkipToMainContentButton,
} from './styled'
import { Backdrop } from './Backdrop'
import { NavigationInner } from './NavigationInner'
import { CurrencySelector } from './CurrencySelector'
import { CountrySelector } from './CountrySelector'
import { QuickLinks } from './QuickLinks'
import { Breadcrumbs } from '../Footer/Breadcrumbs'

import { useMedusaCheckout } from '../../providers/MedusaProvider/MedusaCheckoutProvider'

const { useEffect, useRef } = React

export const Navigation = ({ breadCrumbs }) => {
  const {
    closeAll,
    cartOpen,
    menuOpen,
    closeMenu,
    toggleMenu,
    openCart,
    router,
    colorTheme,
  } = useNavigation()
  /* Parsing */
  const { isLoading, checkout } = useMedusaCheckout()
  const lineItems = checkout ? unwindEdges(checkout.lineItems)[0] : []
  const cartCount = isLoading ? 0 : lineItems.length || 0

  const openCartHandler = () => openCart()

  const innerBorder = !/\/collections/.test(router.asPath)

  const sideNav = useRef<any>(null)
  const searchOpen = useSearch().open

  useEffect(() => {
    if (menuOpen) {
      sideNav.current.focus()
    }
  }, [menuOpen])

  const skipToMainContent = () => {
    const content = document.querySelector('main') as HTMLElement | null
    if (content != null) content.focus()
  }

  const showQuickLinks = (router) => {
    const showLinks =
      router.pathname.includes('collections') || searchOpen ? false : true
    return showLinks
  }

  return (
    <>
      <SkipToMainContentButton onClick={skipToMainContent}>
        Skip to Main Content
      </SkipToMainContentButton>
      <NavInnerBackground onClick={closeAll} open={menuOpen || cartOpen} />
      <SideNavigation open={menuOpen} ref={sideNav} tabIndex={-1}>
        <NavigationInner closeMenu={closeMenu} />
      </SideNavigation>

      <Wrapper>
        <Backdrop />
        <Inner withBorder={innerBorder} colorTheme={colorTheme}>
          <Hamburger
            onClick={toggleMenu}
            open={false}
            colorTheme={colorTheme}
          />

          <LogoWrapper colorTheme={colorTheme}>
            <Link href="/" as="/" aria-label="Link to homepage">
              <Logotype />
            </Link>
          </LogoWrapper>
          <ToolsWrapper>
            <CountrySelector colorTheme={colorTheme} />
            <SearchButtonWrapper colorTheme={colorTheme}>
              <SearchButton />
            </SearchButtonWrapper>
            <CartButtonWrapper
              isLoading={isLoading}
              onClick={openCartHandler}
              colorTheme={colorTheme}
              aria-label="open cart"
            >
              {cartCount ? (
                <CartBadge colorTheme={colorTheme}>
                  <Heading m={0} fontWeight={4} level={5}>
                    {cartCount}
                  </Heading>
                </CartBadge>
              ) : null}
              <Cart />
            </CartButtonWrapper>
          </ToolsWrapper>
        </Inner>
        <BreadcrumbsWrapper>
          {!searchOpen && (
            <Breadcrumbs paths={breadCrumbs} display={'header'} />
          )}
        </BreadcrumbsWrapper>
        {showQuickLinks(router) ? <QuickLinks colorTheme={colorTheme} /> : null}
      </Wrapper>
      <Checkout />
    </>
  )
}

interface NavigationProps {
  router: NextRouter
}
