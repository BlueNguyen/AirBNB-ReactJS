import React from 'react'
import { BiDollar } from 'react-icons/bi'

const InputCustom = ({ id,
    label,
    disabled,
    placeholder,
    className = "",
    name,
    formatPrice,
    onChange,
    border = true,
    value,
    onBlur,
    readOnly,
    error,
    type = "text",
    touched }) => {
    return (
        <div className='w-full relative'>
            {formatPrice && (
                <BiDollar size={24} className='text-neutral-700 absolute top-5 left-2' />
            )}
            <input
                readOnly={readOnly}
                onBlur={onBlur}
                value={value}
                onChange={onChange}
                name={name}
                type={type}
                placeholder=" "
                id={id}
                className={`
                    peer
                    w-full
                    p-4
                    pt-6
                    font-light
                    bg-white
                    rounded-md
                    border-2
                    outline-none
                    transition
                    disabled:opacity-70
                    disabled:cursor-not-allowed
                    ${formatPrice ? 'pl-9' : 'pl-4'}
                    ${border ? '' : 'border-none'}
                `}
            />
            <label className={`absolute
                text-md
                duration-150
                transform
                -translate-y-3
                top-5
                z-10
                origin-[0]
                ${formatPrice ? "left-9" : "left-4"}
                peer-placeholder-shown:scale-100
                peer-placeholder-shown:translate-y-0
                peer-focus:scale-75
                peer-focus:-translate-y-4
            `}>
                {label}
            </label>
            {error && touched ? (
                <p className="text-rose-500 text-sm">{error}</p>
            ) : null}
        </div>
    )
}

export default InputCustom