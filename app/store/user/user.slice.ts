import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getStoreLocal } from '@/utils/local-storage/localStorage'

import { checkAuth, login, logout, register, userProfile } from './user.actions'
import { IAuthResponse, IUserInitialState, IUserState } from './user.interface'
import { AuthService } from '@/services/api/auth/auth.service'

const initialState: IUserInitialState = {
	user: getStoreLocal('user'),
	isLoading: false,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		GoogleLogin: (state, action: PayloadAction<IAuthResponse>) => {
			AuthService.GoogleLogin(action.payload)
			state.user = action.payload.user
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(register.pending, (state) => {
				state.isLoading = true
			})
			.addCase(register.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.user
			})
			.addCase(register.rejected, (state) => {
				state.isLoading = false
				state.user = null
			})
			.addCase(login.pending, (state) => {
				state.isLoading = true
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.user
			})
			.addCase(login.rejected, (state) => {
				state.isLoading = false
				state.user = null
			})
			.addCase(logout.fulfilled, (state) => {
				state.isLoading = false
				state.user = null
			})
			.addCase(checkAuth.fulfilled, (state, { payload }) => {
				state.user = payload.user
			})
			.addCase(userProfile.pending, (state) => {
				state.isLoading = true
			})
			.addCase(userProfile.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload
			})
			.addCase(userProfile.rejected, (state) => {
				state.isLoading = false
				state.user = null
			})
	},
})
export const { GoogleLogin } = userSlice.actions
export const { reducer } = userSlice
