import Link from 'next/link'
import { ReactNode } from 'react'
import Image from 'next/image'
import logoImage from './logo.svg'
interface LogoProps {
	children?: ReactNode
}

function Logo({ children }: LogoProps) {
	return (
		<Link className="LogoLink" href="/">
			<a>
				<Image
					src={logoImage}
					width={70}
					height={70}
					alt="logo"
					draggable="false"
				/>
			</a>
		</Link>
	)
}

export default Logo
