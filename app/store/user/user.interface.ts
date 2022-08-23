import { IList, IUser } from '@/shared/types/user.types'

export interface IUserState {
	email: string
	given_name?: string
	family_name?: string
	picture?: string
	isAdmin: boolean
	List: IList[]
}

export interface ITokens {
	accessToken: string
	refreshToken: string
}

export interface IUserInitialState {
	user: IUserState | null
	isLoading: boolean
}

export interface InterfaceEmailPassword {
	email: string
	password: string
}

export interface IAuthResponse extends ITokens {
	user: IUser & {
		isAdmin: boolean
	}
}
