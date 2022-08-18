import { useRouter } from 'next/router'
import { Container } from './styles'

export const GoogleAuth: React.FC = () => {
	const { push } = useRouter()

	return (
		<Container>
			<button onClick={() => push('api/auth/google')}>
				Sign in with google
			</button>
		</Container>
	)
}
