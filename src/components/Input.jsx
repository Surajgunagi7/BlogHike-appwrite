import React, {useId} from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = '',
    labelClass='',
    ...props
}, ref) {
    const id = useId();

    return (
        <div>
            {label && (
                <label 
                    className={`text-base font-medium text-gray-900 dark:text-gray-100 ${labelClass}`}
                    htmlFor={id}>
                        {label}
                </label>
            )}
            <div className='mt-2'>
                <input 
                    type={type}
                    className={`${className} cursor-text`}
                    ref={ref}
                    id={id} 
                    {...props}
                />
            </div>
        </div>
    )
})

export default Input