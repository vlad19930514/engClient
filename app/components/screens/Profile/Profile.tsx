import MenuItem from '@/components/Layout/Navigation/MenuItem/MenuItem'
import { useAuth } from '@/hooks/useAuth'
import { Container } from './styles'
import { useActions } from '@/hooks/redux/useActions'
import LogoutButton from '../../Layout/Navigation/MenuContainer/auth/LogoutButton'
import { useEffect } from 'react'
import Image from 'next/image'
export const Profile: React.FC = () => {
	const { userProfile } = useActions()
	const { user } = useAuth()

	return (
		<Container>
			<h1>Profile</h1>

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
		</Container>
	)
}
