import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Inavigation } from './navigationTypes'

const initialState: Inavigation = {
	hamburger: false,
}

export const navigationSlice = createSlice({
	name: 'userSetup',
	initialState,
	reducers: {
		navigationSetHamburger: (state, action: PayloadAction<boolean>) => {
			state.hamburger = action.payload
		},
	},
})

export default navigationSlice.reducer
