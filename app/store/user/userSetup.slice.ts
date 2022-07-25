import { createSlice, PayloadAction } from '@reduxjs/toolkit'
interface Isetup {
	selectedList: { _id: string }
}
const initialState: Isetup = {
	selectedList: { _id: 'mainList' },
}

export const userSetupSlice = createSlice({
	name: 'userSetup',
	initialState,
	reducers: {
		setSelectedList: (state, action: PayloadAction<string>) => {
			state.selectedList._id = action.payload
		},
	},
})
export const { setSelectedList } = userSetupSlice.actions
export default userSetupSlice.reducer
