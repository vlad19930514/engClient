import { TypeBootstrapIconName } from '@/shared/types/icons.types'
import * as BootstrapIcons from 'react-icons/bs'
const BootstrapIcon: React.FC<{ name: TypeBootstrapIconName }> = ({ name }) => {
	const IconComponent = BootstrapIcons[name]
	return <IconComponent /> || BootstrapIcons.BsArrowDown
}

export default BootstrapIcon
