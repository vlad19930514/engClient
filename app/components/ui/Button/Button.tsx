import {
	ButtonHTMLAttributes,
	DetailedHTMLProps,
	ReactNode,
	useEffect,
	useState,
} from 'react'
import { Container } from './styles'

export interface Ibutton
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	selected?: boolean
	children: ReactNode
}

const Button: React.FC<Ibutton> = ({
	selected,
	children,
	...props
}: Ibutton) => {
	const [first, setfirst] = useState('')
	useEffect(() => {
		if (selected) {
			setfirst('Selected')
		} else {
			setfirst('')
		}
	}, [selected])

	return (
		<Container
			className={props.className}
			onClick={props.onClick}
			selected={selected}
		>
			{children}
		</Container>
	)
}

export default Button
