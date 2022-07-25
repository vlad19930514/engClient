import { MaterialIcon } from '../../../ui/icons/MaterialIcon'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { IMenuItem } from './menu.types'
import Button from '../../../ui/Button/Button'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { asPath } = useRouter()

	return (
		<li>
			<Link href={item.link}>
				<a>
					<Button>
						{item.icon ? <MaterialIcon name={item.icon} /> : null}
						<span>{item.title}</span>
					</Button>
				</a>
			</Link>
		</li>
	)
}

export default MenuItem
