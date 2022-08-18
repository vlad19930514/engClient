export interface ICreateList {
	listName: string
}

export interface IListDelete {
	listId: string
}
export interface IListUpdate {
	listName: string
	listId: string
}

export interface IWords {
	listId: string
	transcription: string
	translate: string
	word: string
}
export interface IWordsDelete {
	listId: string
	wordId: string
}
export interface IWordsUpdate {
	listId: string
	transcription: string
	translate: string
	word: string
	wordId: string
}
