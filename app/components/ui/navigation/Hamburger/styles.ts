import React from 'react'

import styled from 'styled-components'
import { device } from '../../../../../styles/media/media'

export const Container = styled.div`
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
		display: none;
	}
`
