import Heading from '@/components/ui/heading/Heading'
import { Meta } from '@/utils/meta'
import Statistics from '../Statistics/Statistics'
import { Container } from './styles'

const Admin: React.FC = () => {
	return (
		<Container>
			<Meta title="Admin panel">
				<Heading title="Some statistics" />
				<Statistics />
			</Meta>
		</Container>
	)
}

export default Admin
