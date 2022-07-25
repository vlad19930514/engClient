import Layout from '@/components/Layout/Layout'
import { TypeComponentAuthFields } from '@/shared/types/auth.types'
import { store } from '@/store/store'
import type { AppProps } from 'next/app'
import AuthProvider from 'providers/AuthProvider/AuthProvider'
import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/GlobalStyle'
import { darkTheme, defaultTheme } from '../styles/theme'

type TypeAppProps = AppProps & TypeComponentAuthFields

function MyApp({ Component, pageProps }: TypeAppProps) {
	const [currentTheme, setCurrentTheme] = useState('Light')
	const themeSwitch = () => {
		currentTheme === 'Light'
			? setCurrentTheme('Dark')
			: setCurrentTheme('Light')
	}

	return (
		<>
			<ThemeProvider
				theme={currentTheme === 'Light' ? defaultTheme : darkTheme}
			>
				<Provider store={store}>
					<GlobalStyle />
					<AuthProvider Component={Component}>
						<Layout themeSwitch={themeSwitch}>
							<Component {...pageProps} />
						</Layout>
					</AuthProvider>
				</Provider>
			</ThemeProvider>
		</>
	)
}

export default MyApp
