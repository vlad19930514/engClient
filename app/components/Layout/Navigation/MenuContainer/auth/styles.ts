import styled from 'styled-components'
import { device } from '../../../../../../styles/media/media'
interface Props {
	checked: boolean
}
export const UlContainer = styled.ul<Props>`
	display: flex;
	position: absolute;

	margin-top: 0;
	margin-bottom: 0;
	padding: 30px;
	padding-top: 50px;
	padding-right: 0;

	left: 0;
	top: 0;
	bottom: 0;
	flex-direction: column;

	border-right: 1px solid ${(props) => props.theme.colors.primary};
	border-bottom: 1px solid ${(props) => props.theme.colors.primary};
	background-color: ${(props) => props.theme.colors.tertiary};
	border-bottom-right-radius: 10px;
	z-index: 2;
	transform: ${(props) => (props.checked ? 'none' : 'translateX(-600px)')};
	transition: transform 0.7s ease;
	li {
		margin-right: 1vw;
	}
	li:not(:last-child) {
		border-bottom: 1px solid ${(props) => props.theme.colors.primary};
	}

	@media ${device.tablet} {
		padding: 0;
		display: flex;
		position: static;
		flex-direction: row;
		border: 0;
		transform: none;
		background-color: transparent;
		li:not(:last-child) {
			border-bottom: none;
		}
	}
`
