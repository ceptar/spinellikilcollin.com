import * as React from 'react'
import { MedusaCountryCode } from './types'

interface CountryContextValue {
  country: MedusaCountryCode
  countries: Array<{
    code: MedusaCountryCode
    name: string
    label: string
  }>
  updateCountry: (code: MedusaCountryCode) => void
}

const CountryContext = React.createContext<CountryContextValue | undefined>(undefined)

export const useCountry = () => {
  const ctx = React.useContext(CountryContext)
  if (!ctx) throw new Error('useCountry must be used within CountryProvider')
  return ctx
}

const COUNTRIES = [
  { code: MedusaCountryCode.AT, name: 'Austria', label: 'AT (EUR €)' },
  { code: MedusaCountryCode.US, name: 'United States', label: 'US (USD $)' },
  { code: MedusaCountryCode.CA, name: 'Canada', label: 'CA (CAD $)' },
  { code: MedusaCountryCode.GB, name: 'United Kingdom', label: 'UK (GBP £)' },
  { code: MedusaCountryCode.DE, name: 'Germany', label: 'DE (EUR €)' },
  { code: MedusaCountryCode.FR, name: 'France', label: 'FR (EUR €)' },
]

export const CountryProvider = ({ children }: { children: React.ReactNode }) => {
  const [country, setCountry] = React.useState<MedusaCountryCode>(MedusaCountryCode.US)

  const updateCountry = (code: MedusaCountryCode) => {
    setCountry(code)
  }

  const value = {
    country,
    countries: COUNTRIES,
    updateCountry
  }

  return (
    <CountryContext.Provider value={value}>
      {children}
    </CountryContext.Provider>
  )
}

export { MedusaCountryCode }
