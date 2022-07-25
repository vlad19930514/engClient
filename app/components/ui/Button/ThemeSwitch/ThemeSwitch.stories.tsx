import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ThemeSwitch from './ThemeSwitch'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'App/ThemeSwitch',
	component: ThemeSwitch,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ThemeSwitch>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ThemeSwitch> = (args) => (
	<ThemeSwitch {...args} />
)

/* export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	selected: false,
	label: 'Button',
} */
/* export const selected = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
selected.args = {
	selected: true,
	label: 'Button',
} */
export const Basic = () => {
	return (
		<>
			<ThemeSwitch themeSwitch={() => {}} />
		</>
	)
}
