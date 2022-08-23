import { DefaultTheme } from 'styled-components'

export const defaultTheme: DefaultTheme = {
	colors: {
		//https://colorhunt.co/palette/fcf8ecd0e8f279a3b1456268
		// https://colorhunt.co/palette/fef5edd3e4cdadc2a999a799
		background: '#f4fbff',
		primary: '#3c3c3c',
		secondary: '#ADC2A9',
		tertiary: '#D0E8F2',
		svgColor: '#3c3c3c',
		switch: '#2C394B',
		button: {
			hover: '#D0E8F2',
			active: '#79A3B1',
			selected: '#79A3B1',
			selectedColor: 'white',
		},
	},
}

export const darkTheme: DefaultTheme = {
	colors: {
		//https://colorhunt.co/palette/351f39726a95719fb0a0c1b8
		background: '#2C394B',
		primary: '#A0C1B8',
		secondary: '#719FB0',
		tertiary: '#1A374D',
		svgColor: '#8b8989',
		switch: '#f4fbff',
		button: {
			hover: '#726A95',
			active: '#719FB0',
			selected: '#719FB0',
			selectedColor: '#A0C1B8',
		},
	},
}

// для storybook, пришлось задать отдельно цвета из-за globalStyle
export const themes = [
	{
		name: 'Light',
		backgroundColor: '#f4fbff',
		textColor: '#37383c',
		color: '#37383c',
		colors: defaultTheme.colors,
	},
	{
		name: 'Dark',
		backgroundColor: '#2C394B',
		color: '#37383c',
		colors: darkTheme.colors,
	},
]
