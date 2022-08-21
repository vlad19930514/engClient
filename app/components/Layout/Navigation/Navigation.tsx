import { ReactNode, useEffect, useRef, useState } from 'react'
import Logo from '../../../assets/Logo'

import AuthItems from './MenuContainer/auth/AuthItems'

import { Container } from './styles'

interface NavigationProps {
	children?: ReactNode
}

function Navigation({ children }: NavigationProps) {
	const [isChecked, setIsChecked] = useState(false)

	const onLink = () => {
		setIsChecked(false)
	}

	return (
		<Container checked={isChecked}>
			<label id="hamburger" htmlFor="checkbox" className="hamburger">
				<input
					type="checkbox"
					id="checkbox"
					checked={isChecked}
					onChange={() => setIsChecked(!isChecked)}
				/>
				<span className="line line--top"></span>
				<span className="line line--middle"></span>
				<span className="line line--bottom"></span>
			</label>

			<Logo />
			<AuthItems setIsChecked={onLink} isChecked={isChecked} />
			{children}
		</Container>
	)
}

export default Navigation
