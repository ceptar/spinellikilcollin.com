import { useCountry, MedusaCountryCode } from './MedusaCountryProvider'

export const CountrySelector = () => {
  const { country, countries, updateCountry } = useCountry()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target
    updateCountry(value as MedusaCountryCode)
  }

  return (
    <select value={country} onChange={handleChange}>
      {countries.map(({ code, label }) => (
        <option key={code} value={code}>
          {label}
        </option>
      ))}
    </select>
  )
}