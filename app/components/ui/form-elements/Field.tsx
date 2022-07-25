import { forwardRef } from 'react'

import { IField } from './form.interface'

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, error, type = 'text', style, ...rest }, ref) => {
		return (
			<div style={style}>
				<label>
					<span>{placeholder}</span>
					<input ref={ref} type={type} {...rest} />
				</label>
				{error && <div>{error.message}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
