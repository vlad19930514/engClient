//https://redux-toolkit.js.org/rtk-query/usage/customizing-queries#automatic-re-authorization-by-extending-fetchbasequery

import { removeTokensStorage } from '@/services/api/auth/auth.helper'
import { AuthService } from '@/services/api/auth/auth.service'
import {
	BaseQueryFn,
	FetchArgs,
	fetchBaseQuery,
	FetchBaseQueryError,
} from '@reduxjs/toolkit/dist/query'
import Cookies from 'js-cookie'
import { errorCatch } from './api.helpers'

const baseQuery = fetchBaseQuery({
	baseUrl: '/api',
	prepareHeaders: (headers, { getState }) => {
		const token = Cookies.get('accessToken')
		// If we have a token set in state, let's assume that we should be passing it.
		if (token) {
			headers.set('authorization', `Bearer ${token}`)
		}

		return headers
	},
})

export const baseQueryWithReauth: BaseQueryFn<
	string | FetchArgs,
	unknown,
	FetchBaseQueryError
> = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions)
	if (result.error && result.error.status === 401) {
		// try to get a new token
		try {
			const refreshResult = await AuthService.getNewTokens()
			if (refreshResult.data) {
				// retry the initial query
				result = await baseQuery(args, api, extraOptions)
			}
		} catch (e) {
			if (errorCatch(e) === 'jwt expired') removeTokensStorage()
		}
	}

	return result
}
