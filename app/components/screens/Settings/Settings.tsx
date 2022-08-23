import ThemeSwitch from '@/components/ui/Button/ThemeSwitch/ThemeSwitch'
import { Container } from './styles'

export const Settings: React.FC = () => {
	return (
		<Container>
			<h1>Настройки</h1>
			<ThemeSwitch />
		</Container>
	)
}
