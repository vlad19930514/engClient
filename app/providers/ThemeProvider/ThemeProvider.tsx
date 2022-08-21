import { useTypedSelector } from '@/hooks/useTypedSelector'
import { ReactNode, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme, defaultTheme } from '../../../styles/theme'

interface ITheme {
	children: ReactNode
}
const ThemeProviderLocal = ({ children }: ITheme) => {
	const theme = useTypedSelector((state) => state.settings.theme)

	return (
		<>
			<ThemeProvider theme={theme === 'Light' ? defaultTheme : darkTheme}>
				{children}
			</ThemeProvider>
		</>
	)
}
export default ThemeProviderLocal
