import * as React from 'react'
import styled from '@xstyled/styled-components'
import { SelectElement } from '../Forms/Fields/styled'

export enum Sort {
  // DateAsc = 'Newest',
  PriceAsc = '$-$$$',
  PriceDesc = '$$$-$',
  Default = 'Featured',
  // AlphaAsc = 'A - Z',
  // AlphaDesc = 'Z - A',
}

const SelectField = styled(SelectElement)`
  color: body.8;
  border: none;
  min-width: unset;
  max-width: unset;
  height: auto;
  background-image: none;
  padding: 0;
  text-align: center;
`

const sortOptions = Object.values(Sort).map((value) => ({
  label: value,
  value,
  id: value,
}))

interface SortButtonProps {
  applySort: (sort: Sort) => void
}

const getSortValue = (value: string): Sort => {
  const sort = Object.values(Sort).find((v) => v === value)
  if (!sort) throw new Error(`Cannot get sort for value "${value}"`)
  return sort
}

export const SortSet = ({ applySort }: SortButtonProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target
    const sortValue = getSortValue(value)
    applySort(sortValue)
  }

  return (
    <SelectField
      name="sort"
      color="body.8"
      defaultValue="label"
      onChange={handleChange}
    >
      <option disabled hidden value="label">
        Sort
      </option>
      {sortOptions.map(({ id, value, label }) => (
        <option key={id} id={id} value={value}>
          {label}
        </option>
      ))}
    </SelectField>
  )
}
