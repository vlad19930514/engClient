import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { MaterialIcon } from './MaterialIcon'
//@ts-ignore
import { IconGallery } from 'storybook-icon-gallery'
//https://github.com/gsoft-inc/storybook-icon-gallery
//https://react-md.dev/packages/material-icons/demos
export default {
	title: 'App/Material Icons',
	component: MaterialIcon,
} as ComponentMeta<typeof MaterialIcon>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MaterialIcon> = (args) => (
	<MaterialIcon {...args} />
)

export const Primary = () => {
	return (
		<IconGallery>
			<IconGallery.Variants name="удалить">
				<MaterialIcon name="MdDelete" />
			</IconGallery.Variants>
			<IconGallery.Variants name="вперед">
				<MaterialIcon name="MdForward" />
			</IconGallery.Variants>
			<IconGallery.Variants name="наушники">
				<MaterialIcon name="MdHeadset" />
			</IconGallery.Variants>
			<IconGallery.Variants name="назад">
				<MaterialIcon name="MdKeyboardBackspace" />
			</IconGallery.Variants>
			<IconGallery.Variants name="Logout">
				<MaterialIcon name="MdLogout" />
			</IconGallery.Variants>
			<IconGallery.Variants name="Login">
				<MaterialIcon name={'MdLogin'} />
			</IconGallery.Variants>
		</IconGallery>
	)
}
