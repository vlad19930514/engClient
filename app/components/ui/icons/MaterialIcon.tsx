import { FC, ReactNode } from 'react'
import * as MaterialIcons from 'react-icons/md'
//https://react-md.dev/packages/material-icons/demos
import { TypeMaterialIconName } from '@/shared/types/icons.types'
import styled from 'styled-components'

const Icon = styled.div`
	svg {
		color: ${(props) => props.theme.colors.svgColor};
	}
`
export const MaterialIcon: FC<{
	name: TypeMaterialIconName
}> = ({ name }) => {
	const IconComponent = MaterialIcons[name]
	return <Icon>{<IconComponent /> || <MaterialIcons.MdDragIndicator />}</Icon>
}
