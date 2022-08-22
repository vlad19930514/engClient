import { userApi } from '@/services/api/user/user.service'
import navigationSlice from './navigation/navigation.slice'
import settingsSlice from './settings/settings.slice'
import { reducer as userReducer } from './user/user.slice'
import userSetupSlice from './user/userSetup.slice'

export const reducers = {
	user: userReducer,
	userSetup: userSetupSlice,
	settings: settingsSlice,
	navigation: navigationSlice,
	[userApi.reducerPath]: userApi.reducer,
}
