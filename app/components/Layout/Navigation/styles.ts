import styled from 'styled-components'
import { device } from '../../../../styles/media/media'

interface Props {
	checked: boolean
}
export const Container = styled.div<Props>`
	display: flex;
	justify-content: space-between;
	padding: 0 1vw;
	margin-bottom: 20px;
	margin-top: 20px;

	.LogoLink {
		display: none;
	}

	.profile {
		display: flex;
		justify-self: end;
	}
	@media ${device.tablet} {
		.LogoLink {
			display: block;
		}
		justify-content: space-between;
	}
`
