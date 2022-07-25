import { ComponentMeta } from '@storybook/react'
import React from 'react'
import MenuItem from './MenuItem'

export default {
	title: 'App/Navigation/MenuItem',
	component: MenuItem,
} as ComponentMeta<typeof MenuItem>

export const Primary = () => (
	<>
		<MenuItem
			item={{
				link: '/edit',
				title: 'Без иконки',
			}}
		/>
		<MenuItem
			item={{
				icon: 'MdDelete',
				link: '/edit',
				title: 'С иконкой',
			}}
		/>
	</>
)
