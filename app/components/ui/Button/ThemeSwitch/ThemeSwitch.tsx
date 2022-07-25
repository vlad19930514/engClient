import { Container } from './styles'
interface IThemeSwitch {
	themeSwitch: () => void
}
const ThemeSwitch = ({ themeSwitch }: IThemeSwitch) => {
	return (
		<Container>
			<input onClick={() => themeSwitch()} type="checkbox" id="switch" />
			<label htmlFor="switch"></label>
		</Container>
	)
}

export default ThemeSwitch
