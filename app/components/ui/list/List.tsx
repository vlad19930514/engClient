import { useTypedSelector } from '@/hooks/useTypedSelector'
import ListWords from './list-words/ListWords'
import { Container } from './styles'

const List: React.FC = () => {
	const data = useTypedSelector((state) => state.user.user)
	const listItem = data?.List.map((x) => (
		<div key={x._id}>
			<div className="list-name">
				Название: {x.listName} ({x.words.length}) слов
			</div>
			<ListWords words={x.words} listId={x._id} />
		</div>
	))
	return <Container>{data && listItem}</Container>
}

export default List
