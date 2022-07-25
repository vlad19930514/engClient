export interface IUser {
	_id: string
	email: string
	password: string
	createdAt: string
	isAdmin: boolean
	List: IList[]
}

export interface Word {
	word: string
	translate: string
	transcription: string
	_id: string
}

export interface IList {
	listName: string
	words: Word[]
	_id: string
}

export interface IProfile {
	_id: string
	email: string
	password: string
	isAdmin: boolean
	List: IList[]
}
