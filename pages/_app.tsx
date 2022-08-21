import Layout from '@/components/Layout/Layout'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { TypeComponentAuthFields } from '@/shared/types/auth.types'
import { setTheme } from '@/store/settings/settings.slice'
import { store } from '@/store/store'
import type { AppProps } from 'next/app'
import AuthProvider from 'providers/AuthProvider/AuthProvider'
import ThemeProviderLocal from 'providers/ThemeProvider/ThemeProvider'
import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/GlobalStyle'
import { darkTheme, defaultTheme } from '../styles/theme'

type TypeAppProps = AppProps & TypeComponentAuthFields

function MyApp({ Component, pageProps }: TypeAppProps) {
	return (
		<>
			<Provider store={store}>
				<ThemeProviderLocal>
					<GlobalStyle />
					<AuthProvider Component={Component}>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</AuthProvider>
				</ThemeProviderLocal>
			</Provider>
		</>
	)
}

export default MyApp
