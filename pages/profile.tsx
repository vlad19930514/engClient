import { Profile } from '@/components/screens/Profile/Profile'
import { NextPageAuth } from '@/shared/types/auth.types'
import { useEffect, useState } from 'react'

//@ts-ignore
const ProfilePage: NextPageAuth = () => {
	return <Profile />
}
ProfilePage.isOnlyUser = true

export default ProfilePage
