import { userApi } from '@/services/api/user/user.service'
import { configureStore } from '@reduxjs/toolkit'
import { reducers } from './rootReducer'
export const store = configureStore({
	reducer: reducers,
	devTools: true,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(userApi.middleware),
})

export type TypeRootState = ReturnType<typeof store.getState>
