import { useForm } from 'react-hook-form'
import { Container } from './styles'
import { useApiWordCreateMutation } from '@/services/api/user/user.service'
import { useState } from 'react'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useActions } from '@/hooks/redux/useActions'
import TextField from '@mui/material/TextField'
import Button from '@/components/ui/Button/Button'

const CreateWord: React.FC = () => {
	const [currentList, setCurrentList] = useState('main')
	const [CreateWordApi] = useApiWordCreateMutation()
	const { userProfile } = useActions()

	const {
		reset,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()
	const user = useTypedSelector((state) => state.user.user)

	const selectedList = useTypedSelector((state) => state.userSetup.selectedList)
	const list = user?.List.map((x) => (
		<div onClick={() => setCurrentList(x._id)} key={x._id}>
			{x.listName}
		</div>
	))

	const onSubmit = async (data: any) => {
		data.listId = selectedList._id
		await CreateWordApi(data)
		userProfile()
		reset()
	}
	return (
		<Container>
			<form onSubmit={handleSubmit(onSubmit)}>
				{/* register your input into the hook by invoking the "register" function */}
				<TextField
					className="wordInput"
					id="outlined-basic"
					/* 	label="word" */
					placeholder="word"
					variant="standard"
					{...register('word', { required: true })}
				/>

				{/* include validation with required or other standard HTML validation rules */}
				<TextField
					className="wordInput"
					id="outlined-basic"
					/* label="translate" */
					placeholder="translate"
					variant="standard"
					{...register('translate', { required: true })}
				/>
				<TextField
					className="wordInput"
					id="outlined-basic"
					/* 	label="transcription" */
					variant="standard"
					placeholder="transcription"
					{...register('transcription', { required: true })}
				/>

				{/* errors will return when field validation fails  */}
				{errors.exampleRequired && <span>This field is required</span>}

				<Button className="submit-button" type="submit">
					Создать новое слово
				</Button>
			</form>
		</Container>
	)
}

export default CreateWord
