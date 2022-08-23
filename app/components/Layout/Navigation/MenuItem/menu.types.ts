import { TypeMaterialIconName } from '@/shared/types/icons.types'
import { ReactNode } from 'react'

export interface IMenuItem {
	icon?: TypeMaterialIconName
	title?: string
	link: string
}

export interface IMenu {
	item: IMenuItem
	children?: ReactNode
}
