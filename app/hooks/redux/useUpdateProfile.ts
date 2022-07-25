import { useEffect } from 'react'

import { useActions } from './useActions'

export const useUpdateProfile = () => {
	const { userProfile } = useActions()
	useEffect(() => {
		userProfile()

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
}
