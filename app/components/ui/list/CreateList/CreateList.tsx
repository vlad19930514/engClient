import { Container } from './styles'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { SelectChangeEvent } from '@mui/material/Select'
import { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import { useApiListCreateMutation } from '@/services/api/user/user.service'
import { useActions } from '@/hooks/redux/useActions'

const CreateList: React.FC = () => {
	const [open, setOpen] = useState(false)
	const [listName, setListName] = useState<string>('')
	const [createList] = useApiListCreateMutation()
	const { userProfile } = useActions()

	const handleChange = (event: SelectChangeEvent<typeof listName>) => {
		setListName(event.target.value)
	}

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = async (reason: string) => {
		if (reason === 'Cancel') {
			setOpen(false)
			return
		}
		await createList(listName)
		userProfile()
		setOpen(false)
	}

	return (
		<div>
			<Button onClick={handleClickOpen}>Создать</Button>
			<Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
				<DialogTitle>Введите название</DialogTitle>
				<DialogContent>
					<Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
						<TextField
							onChange={(e: any) => handleChange(e)}
							required
							id="outlined-required"
						/>
					</Box>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => handleClose('Cancel')}>Cancel</Button>
					<Button onClick={() => handleClose('Ok')}>Ok</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}

export default CreateList
