import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useAuth } from '../../../../../hooks/useAuth'
import MenuItem from '../../MenuItem/MenuItem'
import { UlContainer } from './styles'

const AuthItems = () => {
	const { user } = useAuth()
	const { hamburger } = useTypedSelector((state) => state.navigation)
	return (
		<UlContainer checked={hamburger}>
			<MenuItem
				item={{
					link: '/edit',
					title: 'Словарь',
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
					link: '/settings',
					title: 'Настройки',
				}}
			/>

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
