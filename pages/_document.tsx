import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="ru">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Taviraj:ital,wght@0,200;0,400;0,500;0,700;1,200&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
