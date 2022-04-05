import * as React from 'react'
import Link from 'next/link'
import styled from '@xstyled/styled-components'
import { Cta } from '../types'
import { Heading } from './Text'

import { useStatefulRef, getPageLinkUrl } from '../utils'
import { useBambuser, useModal } from '../providers'

const { useEffect } = React

interface CTAProps {
  cta: Cta
}

const Outer = styled.div`
  margin: 2 0 0 0;
  color: inherit;
`

const Wrapper = styled.a`
  color: inherit;
  text-decoration: none;
  padding-top: 3;
  padding-bottom: 0px;
  border-bottom: 1px solid;
  display: inline-block;
  cursor: pointer;
`

const ActionButton = styled.button`
  color: inherit;
`

const noop = () => undefined

const isBambuserTime = (cta: Cta): boolean => {
  if (cta?.action !== 'launchBambuser') return false
  const startDate = cta?.bambuser?.liveSettings?.startDate
  const endDate = cta?.bambuser?.liveSettings?.endDate
  if (!startDate || !endDate) return false
  const now = new Date()
  return now >= new Date(startDate) && now <= new Date(endDate)
}

const openHubspotChat = () => {
  // @ts-ignore
  if (typeof window !== 'undefined' && window?.HubSpotConversations?.widget) {
    // @ts-ignore
    window.HubSpotConversations.widget.open()
  }
}

const ActionCTA = ({ cta }: CTAProps) => {
  const { action, label: defaultLabel } = cta
  const buttonRef = useStatefulRef<HTMLButtonElement>(null)
  const { prepareShow } = useBambuser()

  const isLive = isBambuserTime(cta)

  useEffect(() => {
    /**
     * If it is a bambuser action, attach the event listener
     * to the button ref
     */
    if (!buttonRef.current) return
    const slug = cta?.bambuser?.slug
    if (action === 'launchBambuser' && !slug) {
      throw new Error('No bambuser slug provided')
    }
    if (action === 'launchBambuser' && slug) {
      prepareShow(slug, buttonRef.current)
    }
  }, [action, buttonRef.current, cta?.bambuser?.slug])

  useEffect(() => {
    if (!buttonRef.current) return
    const timeout = setTimeout(() => {
      buttonRef.current.dispatchEvent(new MouseEvent('click'))
    }, 1000)
    return () => clearTimeout(timeout)
  }, [isLive])

  const { openCustomizationModal, openRingSizerModal } = useModal()
  if (!action) return null
  const getActionHandler = (action: string) => {
    switch (action) {
      case 'launchBambuser':
        return noop
      case 'launchHubspot':
        return () => openHubspotChat()
      case 'launchRingSizerModal':
        return () => openRingSizerModal()
      case 'launchCustomizationModal':
        return () => openCustomizationModal()
      default:
        throw new Error(`"${action}" is not a valid CTA action`)
    }
  }
  const handler = getActionHandler(action)

  const handleClick = () => handler()

  const label = isLive
    ? cta?.bambuser?.liveSettings?.liveCTALabel || defaultLabel
    : defaultLabel

  return (
    <Outer>
      <ActionButton ref={buttonRef} onClick={handleClick}>
        <Wrapper as="div">
          <Heading level={4} my={0} fontStyle="italic">
            {label}
          </Heading>
        </Wrapper>
      </ActionButton>
    </Outer>
  )

  return null
}

export const CTA = ({ cta }: CTAProps) => {
  const { label, link, action } = cta
  if (action) return <ActionCTA cta={cta} />
  if (!link?.document) return null
  const { as, href } = getPageLinkUrl(link.document) || {}
  if (!href) {
    console.warn('No link href created for link:', link)
    return null
  }
  return (
    <Outer>
      <Link as={as} href={href}>
        <Wrapper>
          <Heading level={4} my={0} fontStyle="italic">
            {label}
          </Heading>
        </Wrapper>
      </Link>
    </Outer>
  )
}
