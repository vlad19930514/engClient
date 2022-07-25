import ChooseList from '@/components/ui/list/Choose-list/ChooseList'
import List from '@/components/ui/list/List'
import CreateWord from '@/components/ui/list/words/CreateWord'
import dynamic from 'next/dynamic'
import styled from 'styled-components'

export const Container = styled.div`
	text-align: center;
`

const DynamicChooseList = dynamic(
	() => import('@/components/ui/list/Choose-list/ChooseList'),
	{
		ssr: false,
	}
)
const DynamicList = dynamic(() => import('@/components/ui/list/List'), {
	ssr: false,
})
const edit: React.FC = () => {
	return (
		<Container>
			<CreateWord />
			<DynamicChooseList withCreate={true} />
			<DynamicList />
		</Container>
	)
}

export default edit
