import * as React from 'react'
import { Link } from 'react-router-dom'
import { useSettings } from '../providers/SettingsProvider'
import { Nav, LightHeadingH1, Wrapper } from './ProductDetail/styled'

export const Navigation = () => {
	const { ready, collections } = useSettings()
	if (!ready) return null
	return (
		<Wrapper>
			<Nav id="main__navigation">
				<LightHeadingH1>Spinelli Kilcollin</LightHeadingH1>
				{collections.map((collection) => (
					<Link key={collection.id} to={`/collections/${collection.handle}`}>
						{collection.title}
					</Link>
				))}
			</Nav>
		</Wrapper>
	)
}
