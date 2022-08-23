import { MaterialIcon } from '@/components/ui/icons/MaterialIcon'
import { useAuth } from '@/hooks/useAuth'
import MenuItem from '../MenuItem/MenuItem'
import { Container } from './styles'
import Image from 'next/image'

export const Profile: React.FC = () => {
	const { user } = useAuth()
	return (
		<Container>
			<MenuItem
				item={{
					link: '/profile',
				}}
			>
				{user?.picture ? (
					<Image
						className="user-profile"
						src={user?.picture}
						alt="Landscape picture"
						width={50}
						height={50}
					/>
				) : (
					<MaterialIcon name={'MdAccountCircle'} />
				)}
			</MenuItem>
		</Container>
	)
}
