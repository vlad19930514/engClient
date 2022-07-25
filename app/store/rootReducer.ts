import { userApi } from '@/services/api/user/user.service'
import { reducer as userReducer } from './user/user.slice'
import userSetupSlice from './user/userSetup.slice'

export const reducers = {
	user: userReducer,
	userSetup: userSetupSlice,
	[userApi.reducerPath]: userApi.reducer,
}
