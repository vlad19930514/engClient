import Auth from '@/components/screens/auth/Auth'
import { useActions } from '@/hooks/redux/useActions'
import { useAuth } from '@/hooks/useAuth'
import { GoogleLogin } from '@/store/user/user.slice'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const AuthPage: NextPage = () => {
	const router = useRouter()
	const { googleResp } = router.query
	const { userProfile } = useActions()
	const dispatch = useDispatch()

	useEffect(() => {
		if (typeof googleResp == 'string') {
			dispatch(GoogleLogin(JSON.parse(googleResp)))
			userProfile()
		}
	}, [googleResp])

	return <div>Успешно </div>
}

export default AuthPage
