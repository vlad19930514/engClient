import TrainingScreen from '@/components/screens/Training/TrainingScreen'
import dynamic from 'next/dynamic'
const DynamicTrainingScreen = dynamic(
	() => import('@/components/screens/Training/TrainingScreen'),
	{
		ssr: false,
	}
)
const Training: React.FC = () => {
	return (
		<div>
			<DynamicTrainingScreen />
		</div>
	)
}

export default Training
