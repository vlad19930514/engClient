import styled from 'styled-components'

export const Container = styled.div``
interface IpropSpan {
	visible: boolean
}
export const Translate = styled.span<IpropSpan>`
	display: ${(props) => (props.visible ? 'block' : 'none')};
`
