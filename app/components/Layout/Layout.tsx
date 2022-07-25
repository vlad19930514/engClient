import dynamic from 'next/dynamic'
import { ReactNode } from 'react'

const DynamicNavigation = dynamic(() => import('./Navigation/Navigation'), {
	ssr: false,
})
import { Container } from './styles'

interface ILayout {
	children: ReactNode
	themeSwitch: () => void
}
function Layout({ children, themeSwitch }: ILayout) {
	return (
		<Container>
			<DynamicNavigation themeSwitch={themeSwitch} />
			<div>{children}</div>
		</Container>
	)
}

export default Layout
