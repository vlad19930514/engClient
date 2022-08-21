import styled from 'styled-components'
import { device } from '../../../../styles/media/media'

interface Props {
	checked: boolean
}
export const Container = styled.div<Props>`
	display: flex;
	justify-content: flex-start;
	/* 	justify-content: space-between; */
	padding: 0 1vw;
	margin-bottom: 20px;
	ul {
		position: absolute;
		flex-direction: column;
		background-color: ${(props) => props.theme.colors.background};
		border: 1px solid ${(props) => props.theme.colors.primary};
		border-radius: 10px;
		z-index: 2;
		transform: ${(props) => (props.checked ? 'none' : 'translateX(-200px)')};
		transition: transform 0.5s ease;
	}

	#checkbox {
		display: none;
	}
	.hamburger {
		position: relative;
		padding: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		z-index: 3;
	}
	.line {
		position: absolute;
		width: 21px;
		height: 2px;
		background-color: ${(props) => props.theme.colors.primary};
		border-radius: 3px;
		transition: transform 0.25s, opacity 0.35s;
		z-index: 1;
	}
	.line--top {
		transform: translateY(-7px);
	}
	.line--bottom {
		transform: translateY(7px);
	}
	#checkbox:checked ~ .line--top {
		transform: rotate(45deg);
	}
	#checkbox:checked ~ .line--middle {
		transform: translateX(16px);
		opacity: 0;
	}
	#checkbox:checked ~ .line--bottom {
		transform: rotate(-45deg);
	}

	@media ${device.tablet} {
		.hamburger {
			display: none;
		}
		ul {
			display: flex;
			position: static;
			flex-direction: row;
			border: 0;
			transform: none;
		}
	}
`
