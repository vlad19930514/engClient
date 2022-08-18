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
			console.log(JSON.parse(googleResp))
			dispatch(GoogleLogin(JSON.parse(googleResp)))
		}
	})

	/* 		console.log(String(router.query.id.email)) */

	return <div>Успешно </div>
}

export default AuthPage
