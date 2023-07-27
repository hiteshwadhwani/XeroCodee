import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{}

const Input = forwardRef<HTMLInputElement, InputProps>(({className, type, disabled, ...props}, ref) => {
    return (
        <input type={type} ref={ref} {...props} className={twMerge(className, 'flex w-fit rounded-md border border-transparent p-3 text-sm placeholder:text-neutral-200 disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none')} />
    )
})

Input.displayName = 'Input'
export default Input