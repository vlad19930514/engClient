import * as userActions from './user/user.actions'
import * as AllActions from './actions/allActions'

export const allActions = {
	...userActions,
	...AllActions,
}
