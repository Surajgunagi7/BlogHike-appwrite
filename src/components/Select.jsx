import React, {useId} from 'react'

function SelectComp({
    options,
    label,
    labelClass,
    className,
    ...props
},ref) {
    const id = useId();

    return (
        <div >
            { label && (
                <label htmlFor={id} className={`text-base font-medium text-gray-900 ${labelClass}`}>{label}</label>
            )}
            <select  
                id={id}
                ref={ref}
                {...props}
                className={`${className} mt-2`}>
                    {
                        options?.map((option) => (
                            <option key={option} value={option}> 
                                {option}
                            </option>
                        ))
                    }
            </select>
        </div>
    )
}

const Select = React.forwardRef(SelectComp);
export default Select;