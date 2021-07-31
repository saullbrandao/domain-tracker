import { ButtonHTMLAttributes } from 'react'

export function Button({
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`bg-black px-5 w-14 h-full py-3 rounded-r-xl hover:bg-gray-dark`}
      {...props}
    >
      {children}
    </button>
  )
}
