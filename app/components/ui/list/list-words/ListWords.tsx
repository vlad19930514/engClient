import { useActions } from '@/hooks/redux/useActions'
import { useUpdateProfile } from '@/hooks/redux/useUpdateProfile'
import { useApiWordDeleteMutation } from '@/services/api/user/user.service'
import { Word } from '@/shared/types/user.types'
import { useEffect, useState } from 'react'
import Button from '../../Button/Button'
import { Container } from './styles'

interface IListWords {
	words: Word[]
	listId: string
}
const ListWords = ({ words = [], listId }: IListWords) => {
	useEffect(() => {
		setWordslist(words)
	}, [words])
	const [wordslist, setWordslist] = useState(words)
	const { userProfile } = useActions()
	const [deleteWordApi] = useApiWordDeleteMutation()

	const deleteWord = async (id: string) => {
		await deleteWordApi({ listId: listId, wordId: id })
		userProfile()
	}
	const wordsMap = wordslist.map((x: Word) => (
		<div key={x._id}>
			{x.word} - {x.transcription} - {x.translate}
			<Button onClick={() => deleteWord(x._id)}>delete</Button>
		</div>
	))
	return (
		<Container>
			<div>{wordsMap}</div>
		</Container>
	)
}

export default ListWords
