import { ReactNode } from 'react'
export interface ISeo {
	children: ReactNode
	title: string
	description?: string
	image?: string
}
