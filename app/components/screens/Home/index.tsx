import { ReactNode } from 'react'

interface HomeProps {
	children?: ReactNode
}

function Home({}: HomeProps) {
	return (
		<>
			<h1>Home page</h1>
		</>
	)
}

export default Home
