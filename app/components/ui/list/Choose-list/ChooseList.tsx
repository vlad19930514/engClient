//сделать multiple select https://mui.com/material-ui/react-select/#basic-select

import { Container } from './styles'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import React, { useState } from 'react'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { IList } from '../../../../shared/types/user.types'
import { setSelectedList } from '@/store/user/userSetup.slice'
import { useDispatch } from 'react-redux'
import NativeSelect from '@mui/material/NativeSelect'
import CreateList from '../CreateList/CreateList'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

interface IChooseList {
	withCreate: boolean
}
const ChooseList = ({ withCreate = true }: IChooseList) => {
	const [list, setlist] = useState('mainList')
	const listData = useTypedSelector((state) => state.user.user?.List)
	const dispatch = useDispatch()
	const renderList = listData?.map((x: IList) => (
		<MenuItem key={x._id} value={x._id} className="menuid">
			{x.listName}
		</MenuItem>
	))

	const handleChange = (event: any) => {
		const value = event.target.value
		setlist(value)
		dispatch(setSelectedList(value))
	}
	return (
		<Container>
			<>
				<FormControl sx={{ m: 1, minWidth: 120 }}>
					<InputLabel id="demo-simple-select-standard-label">
						Выберите список
					</InputLabel>

					<Select
						sx={{ m: 1, minWidth: 170 }}
						inputProps={{
							value: list,
							id: 'demo-simple-select-standard',
						}}
						onChange={handleChange}
						label="Выберите список"
					>
						{listData ? renderList : null}
					</Select>
				</FormControl>

				{withCreate && <CreateList />}
			</>
		</Container>
	)
}

export default ChooseList
