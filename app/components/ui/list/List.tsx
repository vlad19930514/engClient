import { useActions } from '@/hooks/redux/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useApiListDeleteMutation } from '@/services/api/user/user.service'
import { useEffect } from 'react'
import Button from '../Button/Button'
import ListWords from './list-words/ListWords'
import { Container } from './styles'

const List: React.FC = () => {
	const { userProfile } = useActions()
	const [deleteList, { isSuccess }] = useApiListDeleteMutation()
	useEffect(() => {
		userProfile()
	}, [isSuccess])

	const data = useTypedSelector((state) => state.user.user)

	const OnDeleteList = (id: string) => {
		deleteList({ listId: id })
	}
	const listItem = data?.List.map((x) => (
		<div className="list-container" key={x._id}>
			<div className="list-name">
				Название: {x.listName} ({x.words.length}) слов
				<Button onClick={() => OnDeleteList(x._id)}>delete list</Button>
			</div>

			<ListWords words={x.words} listId={x._id} />
		</div>
	))
	return <Container>{data && listItem}</Container>
}

export default List
