import { ReactNode } from 'react'
import styled from 'styled-components'
import { Ibutton } from './Button'

export const Container = styled.button<Ibutton>`
	background-color: ${(props) =>
		props.selected ? props.theme.colors.button.selected : 'transparent'};
	color: ${(props) =>
		props.selected
			? props.theme.colors.button.selectedColor
			: props.theme.colors.primary};
	border: 1px solid transparent;

	border-radius: 15px;
	padding: 5px 10px;
	&:hover {
		background-color: ${(props) => props.theme.colors.button.hover};
		color: ${(props) => props.theme.colors.primary};
	}
	&:active {
		background-color: ${(props) => props.theme.colors.button.active};
		color: ${(props) => props.theme.colors.button.selectedColor};
	}
`
