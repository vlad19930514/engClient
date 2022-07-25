import { FC } from 'react'

const Heading: FC<{
	title: string
}> = ({ title }) => {
	return <h1>{title}</h1>
}

export default Heading
