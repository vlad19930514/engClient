import { FC } from 'react'
import { useEffect, useRef } from 'react'
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
interface IAuth {
	setIsChecked: () => void
	isChecked: boolean
}
const AuthItems = ({ setIsChecked, isChecked }: IAuth) => {
	const ref = useRef(null)

	useEffect(() => {
		isChecked
			? document.addEventListener('click', handleClickOutside)
			: document.removeEventListener('click', handleClickOutside)
	}, [isChecked])

	const handleClickOutside = (event: any) => {
		if (
			//@ts-ignore
			!document.querySelector('#hamburger').contains(event.target) &&
			//@ts-ignore
			!ref.current.contains(event.target)
		) {
			setIsChecked()
			document.removeEventListener('click', handleClickOutside)
		}
	}

	const { user } = useAuth()

	const clickOnMenu = () => {
		document.removeEventListener('click', handleClickOutside)
		setIsChecked()
	}

	return (
		<UlContainer ref={ref} onClick={() => clickOnMenu()}>
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
