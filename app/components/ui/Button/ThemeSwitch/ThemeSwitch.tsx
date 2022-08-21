import { Container } from './styles'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useActions } from '@/hooks/redux/useActions'

const ThemeSwitch = () => {
	const theme = useTypedSelector((state) => state.settings.theme)
	const { settingsSetTheme } = useActions()

	const themeSwitch = () => {
		theme === 'Light' ? settingsSetTheme('Dark') : settingsSetTheme('Light')
	}
	return (
		<Container>
			<input onClick={() => themeSwitch()} type="checkbox" id="switch" />
			<label htmlFor="switch"></label>
		</Container>
	)
}

export default ThemeSwitch
function dispatch() {
	throw new Error('Function not implemented.')
}
