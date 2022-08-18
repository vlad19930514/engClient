import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from '../api-helpers/axiosBaseQuery'
import {
	ICreateList,
	IListDelete,
	IListUpdate,
	IWords,
	IWordsDelete,
	IWordsUpdate,
} from './user.types'

export const userApi = createApi({
	reducerPath: 'userApi',
	baseQuery: axiosBaseQuery({ baseUrl: '/' }),
	endpoints: (builder) => ({
		apiListCreate: builder.mutation<string, string>({
			query: (list) => ({
				url: 'list/create',
				data: { listName: list },
				method: 'POST',
			}),
		}),
		apiListDelete: builder.mutation<string, IListDelete>({
			query: ({ listId }) => ({
				url: 'list/delete',
				data: { listId: listId },
				method: 'POST',
			}),
		}),
		apiListUpdate: builder.mutation<string, IListUpdate>({
			query: ({ listId, listName }) => ({
				url: 'list/update',
				data: { listId: listId, listName: listName },
				method: 'POST',
			}),
		}),
		apiWordCreate: builder.mutation<IWords, IWords>({
			query: (item) => ({
				url: 'words/create',
				data: item,
				method: 'POST',
			}),
		}),
		apiWordDelete: builder.mutation<IWordsDelete, IWordsDelete>({
			query: (item) => ({
				url: 'words/delete',
				data: item,
				method: 'POST',
			}),
		}),
		apiWordUpdate: builder.mutation<IWordsUpdate, IWordsUpdate>({
			query: (item) => ({
				url: 'words/update',
				data: item,
				method: 'POST',
			}),
		}),
	}),
})

export const {
	useApiListCreateMutation,
	useApiListDeleteMutation,
	useApiListUpdateMutation,
	useApiWordCreateMutation,
	useApiWordDeleteMutation,
	useApiWordUpdateMutation,
} = userApi
