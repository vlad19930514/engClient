import { useAuth } from '../../../../../hooks/useAuth'
import LogoutButton from './LogoutButton'
import MenuItem from '../../MenuItem/MenuItem'
import styled from 'styled-components'

const UlContainer = styled.ul`
	display: flex;
	li {
		margin-right: 1vw;
	}
`

const AuthItems = () => {
	const { user } = useAuth()

	return (
		<UlContainer>
			<MenuItem
				item={{
					link: '/edit',
					title: 'Редактирование',
				}}
			/>
			<MenuItem
				item={{
					link: '/training ',
					title: 'Тренировка',
				}}
			/>
			<MenuItem
				item={{
					link: '/profile',
					title: 'Profile',
				}}
			/>
			<MenuItem
				item={{
					link: '/settings',
					title: 'settings',
				}}
			/>
			{user ? (
				<LogoutButton />
			) : (
				<MenuItem item={{ icon: 'MdLogin', link: '/auth', title: 'Login' }} />
			)}

			{user?.isAdmin && (
				<MenuItem
					item={{
						icon: 'MdOutlineLock',
						link: '/admin',
						title: 'Admin panel',
					}}
				/>
			)}
		</UlContainer>
	)
}

export default AuthItems
