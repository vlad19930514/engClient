import dynamic from 'next/dynamic'
import { ReactNode } from 'react'

const DynamicNavigation = dynamic(() => import('./Navigation/Navigation'), {
	ssr: false,
})
import { Container } from './styles'

interface ILayout {
	children: ReactNode
}
function Layout({ children }: ILayout) {
	return (
		<Container>
			<DynamicNavigation />
			<div>{children}</div>
		</Container>
	)
}

export default Layout
