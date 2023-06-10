import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }, ref) => {
    return <button {...props} ref={ref}>{children}</button>
})