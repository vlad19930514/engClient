import { Hamburger } from '@/components/ui/navigation/Hamburger/Hamburger'
import { useActions } from '@/hooks/redux/useActions'
import useOnClickOutside from '@/hooks/ueOnClickOutside'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import React from 'react'
import { ReactNode, useEffect, useRef, useState } from 'react'
import Logo from '../../../assets/Logo'

import AuthItems from './MenuContainer/auth/AuthItems'

import { Container } from './styles'

interface NavigationProps {
	children?: ReactNode
}

function Navigation({ children }: NavigationProps) {
	const { hamburger } = useTypedSelector((state) => state.navigation)
	const ref = React.createRef<HTMLDivElement>()
	const { navigationSetHamburger } = useActions()

	useOnClickOutside(ref, () => navigationSetHamburger(false))
	return (
		<Container checked={hamburger}>
			<Hamburger ref={ref} />
			<Logo />
			<AuthItems />
			{children}
		</Container>
	)
}

export default Navigation
