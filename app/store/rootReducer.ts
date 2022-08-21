import { userApi } from '@/services/api/user/user.service'
import settingsSlice from './settings/settings.slice'
import { reducer as userReducer } from './user/user.slice'
import userSetupSlice from './user/userSetup.slice'

export const reducers = {
	user: userReducer,
	userSetup: userSetupSlice,
	settings: settingsSlice,
	[userApi.reducerPath]: userApi.reducer,
}
