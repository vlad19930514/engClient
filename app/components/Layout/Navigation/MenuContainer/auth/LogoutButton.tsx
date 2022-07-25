import { FC, MouseEvent } from 'react'

import { MaterialIcon } from '@/components/ui/icons/MaterialIcon'

import { useActions } from '@/hooks/redux/useActions'
import Button from '@/components/ui/Button/Button'

const LogoutButton: FC = () => {
	const { logout } = useActions()

	const logoutHandler = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		logout()
	}

	return (
		<li>
			<a onClick={logoutHandler}>
				<Button>
					<MaterialIcon name="MdLogout" />
					<span>Logout</span>
				</Button>
			</a>
		</li>
	)
}

export default LogoutButton
