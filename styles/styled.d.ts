import 'styled-components'
declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			background: string
			primary: string
			secondary: string
			tertiary: string
			svgColor: string
			switch: string
			button: {
				hover: string
				active: string
				selected: string
				selectedColor: string
			}
		}
	}
}
