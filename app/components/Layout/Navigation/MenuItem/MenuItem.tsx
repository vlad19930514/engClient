import { MaterialIcon } from '../../../ui/icons/MaterialIcon'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { IMenu, IMenuItem } from './menu.types'
import Button from '../../../ui/Button/Button'

import { useActions } from '@/hooks/redux/useActions'

const MenuItem = ({ item, children }: IMenu) => {
	const { navigationSetHamburger } = useActions()
	const clickOnMenu = () => {}
	return (
		<li onClick={() => clickOnMenu()}>
			<Link href={item.link}>
				<Button>
					{item.icon ? <MaterialIcon name={item.icon} /> : null}
					<span>{item.title}</span>
					{children}
				</Button>
			</Link>
		</li>
	)
}

export default MenuItem
