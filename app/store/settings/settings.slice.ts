import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Isetup, Itheme } from './settingsTypes'

const initialState: Isetup = {
	theme: 'Light',
}

export const settingsSlice = createSlice({
	name: 'userSetup',
	initialState,
	reducers: {
		settingsSetTheme: (state, action: PayloadAction<Itheme>) => {
			state.theme = action.payload
		},
	},
})
export const { settingsSetTheme } = settingsSlice.actions
export default settingsSlice.reducer
