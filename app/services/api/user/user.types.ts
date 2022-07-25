export interface ICreateList {
	listName: string
}

export interface ICreateDelete {
	listId: string
}
export interface ICreateUpdate {
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
