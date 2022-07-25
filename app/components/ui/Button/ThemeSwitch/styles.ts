import styled from 'styled-components'

export const Container = styled.div`
	input[type='checkbox'] {
		height: 0;
		width: 0;
		visibility: hidden;
	}

	label {
		cursor: pointer;
		width: 100px;
		height: 50px;
		background: ${(props) => props.theme.colors.switch};
		display: block;
		border-radius: 50px;
		position: relative;
	}

	label:after {
		content: '';
		position: absolute;
		top: 2.5px;
		left: 2.5px;
		width: 45px;
		height: 45px;
		background: #f2eee3;
		border-radius: 45px;
		transition: 0.3s;
	}

	input:checked + label {
		background: ${(props) => props.theme.colors.switch};
	}

	input:checked + label:after {
		left: calc(100% - 5px);
		transform: translateX(-100%);
	}

	label:active:after {
		width: 65px;
	}
`
