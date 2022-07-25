import styled from 'styled-components'
import { device } from '../../../../../styles/media/media'

export const Container = styled.div`
	margin-bottom: 10px;
	display: flex;
	justify-content: center;
	form {
		width: 80vw;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	.wordInput {
		margin-right: 10px;

		label,
		input {
			color: ${({ theme }) => theme.colors.primary};
		}
		margin-bottom: 10px;
	}
	.submit-button {
		border: 1px solid ${({ theme }) => theme.colors.secondary};
	}
	@media ${device.tablet} {
		form {
			display: flex;
			flex-direction: row;

			align-items: center;
		}
	}
`
