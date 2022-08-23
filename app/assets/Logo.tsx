import Link from 'next/link'
import { ReactNode } from 'react'
import Image from 'next/image'
import logoImage from './logo.svg'
import styles from '../styles/logo.module.scss'
interface LogoProps {
	children?: ReactNode
}

function Logo({ children }: LogoProps) {
	return (
		<Link href="/">
			<a className="LogoLink">
				<Image
					src={logoImage}
					width={50}
					height={50}
					alt="logo"
					draggable="false"
				/>
			</a>
		</Link>
	)
}

export default Logo
