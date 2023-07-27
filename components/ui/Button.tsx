import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({children, className, disabled, type='button', ...props}, ref) => {
    return (
        <button
        className={twMerge(className, 'disabled:cursor-not-allowed disabled:opacity-50 hover:opacity-70 transition')} disabled={disabled} type={type} ref={ref} {...props}>{children}</button>
    )
})

Button.displayName = 'Button'
export default Button