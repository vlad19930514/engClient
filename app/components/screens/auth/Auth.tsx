import useAuthRedirect from './useAuthRedirect'
import { useAuth } from '../../../hooks/useAuth'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IAuthInput } from './auth.interface'
import Heading from '@/components/ui/heading/Heading'
import AuthFields from '@/components/ui/form-elements/AuthFields'
import { useActions } from '@/hooks/redux/useActions'

const Auth = () => {
	useAuthRedirect()
	const { isLoading } = useAuth()

	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset,
	} = useForm<IAuthInput>({
		mode: 'onChange',
	})

	const { login, register } = useActions()

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		if (type === 'login') login(data)
		else if (type === 'register') register(data)

		reset()
	}
	return (
		<section>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Heading title="Auth" />
				<AuthFields register={registerInput} formState={formState} />

				<div>
					<button
						type="submit"
						onClick={() => setType('login')}
						disabled={isLoading}
					>
						Login
					</button>
					<button
						type="submit"
						onClick={() => setType('register')}
						disabled={isLoading}
					>
						Register
					</button>
				</div>
			</form>
		</section>
	)
}

export default Auth
