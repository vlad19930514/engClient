import Layout from '@/components/Layout/Layout'
import { TypeComponentAuthFields } from '@/shared/types/auth.types'
import { store } from '@/store/store'
import type { AppProps } from 'next/app'
import AuthProvider from 'providers/AuthProvider/AuthProvider'
import ThemeProviderLocal from 'providers/ThemeProvider/ThemeProvider'
import { Provider } from 'react-redux'
import { GlobalStyle } from '../styles/GlobalStyle'

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
