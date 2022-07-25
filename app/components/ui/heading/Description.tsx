import parse from 'html-react-parser'
import { FC } from 'react'

const Description: FC<{ text: string }> = ({ text }) => {
	return (
		<div>
			<p>{parse(text)}</p>
		</div>
	)
}

export default Description
