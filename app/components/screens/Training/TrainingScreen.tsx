import { Container } from './styles'
import dynamic from 'next/dynamic'
import { useAuth } from '@/hooks/useAuth'
import TrainWords from '@/components/ui/TrainWords/TrainingWords'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import ChooseList from '@/components/ui/list/Choose-list/ChooseList'

const DynamicChooseList = dynamic(
	() => import('@/components/ui/list/Choose-list/ChooseList'),
	{
		ssr: false,
	}
)

const TrainingScreen: React.FC = () => {
	const selectedList = useTypedSelector((state) => state.userSetup.selectedList)
	const { user } = useAuth()
	const list = user?.List.find((x) => x._id === selectedList._id)

	return (
		<Container>
			<h1>Training</h1>
			<ChooseList withCreate={false} />
			{list && <TrainWords list={list} />}
		</Container>
	)
}

export default TrainingScreen
