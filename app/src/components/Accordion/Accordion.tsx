import * as React from 'react'
import styled from '@xstyled/styled-components'
import { useMeasure } from 'react-use'
import { Label, Wrapper, Inner, Item } from './styled'
import { useEffect, useRef } from 'react'
import { PlusMinus } from '../PlusMinus'

interface AccordionProps {
  label: string
  children: React.ReactNode
}

export const Accordion = ({ label, children }: AccordionProps) => {
  const [open, setOpen] = React.useState(false)
  const toggleOpen = () => setOpen(!open)

  const [height, updateHeight] = React.useState(0)

  const refContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!refContainer.current) return
    updateHeight(refContainer.current.clientHeight)
  }, [height, children])

  useEffect(() => {
    if (open) return

    setTimeout(() => {
      if (label !== 'Description') return

      setOpen(label === 'Description')
    }, 3000)
  }, [label])

  return (
    <Wrapper>
      <Label onClick={toggleOpen}>
        {label}
        <PlusMinus open={open} />
      </Label>
      <Inner tabIndex={-1} open={open} height={height}>
        <Item ref={refContainer}>{children}</Item>
      </Inner>
    </Wrapper>
  )
}
