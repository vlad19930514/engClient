import { useState } from 'react'
import { Container } from './styles'
import { useActions } from '@/hooks/redux/useActions'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import React from 'react'

export const Hamburger = React.forwardRef<HTMLDivElement>((props, ref) => {
	const { hamburger } = useTypedSelector((state) => state.navigation)
	const { navigationSetHamburger } = useActions()

	return (
		<Container ref={ref}>
			<label id="hamburger" htmlFor="checkbox" className="hamburger">
				<input
					type="checkbox"
					id="checkbox"
					checked={hamburger}
					onChange={() => navigationSetHamburger(!hamburger)}
				/>
				<span className="line line--top"></span>
				<span className="line line--middle"></span>
				<span className="line line--bottom"></span>
			</label>
		</Container>
	)
})
Hamburger.displayName = 'Search'
