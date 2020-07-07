import * as React from 'react'
import styled, { css } from '@xstyled/styled-components'
import { useCurrency } from '../../providers/CurrencyProvider'
import { Form, Field } from '../Forms'
import { SelectElement } from '../Forms/Fields/styled'
import { ShopifyStorefrontCurrencyCode } from '../../types/generated-shopify'

const SelectField = styled(SelectElement)`
  border: none;
  min-width: initial;
  height: auto;
`

/* prettier-ignore */
const invalidOptions = [
  "AFN","ALL","DZD","AOA","ARS","AMD","AWG","BBD","AZN","BDT","BSD","BHD","BIF","BYR","BZD","BMD","BTN","BAM","BOB","BWP","BND","MMK","KHR","CVE","KYD","XAF","CLP","COP","KMF","CDF","CRC","DOP","XCD","EGP","ETB","XPF","FJD","GMD","GHS","GTQ","GYD","GEL","HTG","HNL","IQD","JMD","JEP","JOD","KZT","KES","KWD","KGS","LAK","LVL","LBP","LSL","LRD","LTL","MGA","MKD","MOP","MWK","MVR","MUR","MDL","MAD","MNT","MZN","NAD","NPR","ANG","NIO","NGN","OMR","PAB","PKR","PGK","PYG","PEN","QAR","RWF","WST","SAR","STD","RSD","SCR","SDG","SYP","SSP","SBD","LKR","SRD","SZL","TWD","TZS","TTD","TND","TMT","UGX","UAH","AED","UYU","UZS","VUV","VEF","VND","XOF","YER","ZMW"
]

const currencyOptions = Object.values(ShopifyStorefrontCurrencyCode)
  .filter((v) => !invalidOptions.includes(v))
  .map((value) => ({ label: value, value, id: value }))

export const CurrencySelector = () => {
  const { loading, currentCurrency, updateCurrency } = useCurrency()
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target
    updateCurrency(value)
  }

  const handleSubmit = ({ currency }) => {
    updateCurrency(currency)
  }
  const initialValues = {
    currency: currentCurrency,
  }

  return (
    <div>
      <Form
        disabled={loading}
        onSubmit={handleSubmit}
        initialValues={initialValues}
      >
        <SelectField name="currency" onChange={handleChange}>
          {currencyOptions.map(({ id, value, label }) => (
            <option key={id} id={id} value={value}>
              {label}
            </option>
          ))}
        </SelectField>
      </Form>
    </div>
  )
}
