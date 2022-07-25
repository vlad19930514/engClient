import cn from 'classnames'
import { FC } from 'react'
import { useQuery } from 'react-query'
import styles from '../Admin.module.scss'
//import { AdminService } from '@/services/admin.service'

const CountUsers: FC = () => {
	/* 	const { isLoading, data: response } = useQuery('Count users', () =>
		AdminService.getCountUsers()
	) */

	return (
		<div>
			нет api на сервере, клиент готов
			{/* 	<div>
				{isLoading ? (
					<div>Загрузка</div>
				) : (
					<div className={styles.number}>{response?.data}</div>
				)}
				<div className={styles.description}>users</div>
			</div> */}
		</div>
	)
}

export default CountUsers
