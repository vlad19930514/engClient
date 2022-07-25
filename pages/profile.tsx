import { NextPageAuth } from '@/shared/types/auth.types'
import { useEffect, useState } from 'react'

//@ts-ignore
const ProfilePage: NextPageAuth = () => {
	return <h1>Profile</h1>
}
ProfilePage.isOnlyUser = true

export default ProfilePage
