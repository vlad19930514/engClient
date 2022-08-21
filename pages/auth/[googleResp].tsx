import Auth from '@/components/screens/auth/Auth'
import { useActions } from '@/hooks/redux/useActions'
import { GoogleLogin } from '@/store/user/user.slice'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const AuthPage: NextPage = () => {
	const router = useRouter()
	const dispatch = useDispatch()
	const { googleResp } = router.query
	useEffect(() => {
		if (typeof googleResp == 'string') {
			dispatch(GoogleLogin(JSON.parse(googleResp)))
		}
	})

	return <div>Успешно </div>
}

export default AuthPage
