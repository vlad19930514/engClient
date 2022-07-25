import { FC } from 'react'

import { IButton } from './form.interface'

const Button: FC<IButton> = ({ children, ...rest }) => {
	return <button {...rest}>{children}</button>
}

export default Button
