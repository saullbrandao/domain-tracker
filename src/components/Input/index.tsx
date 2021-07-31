import { InputHTMLAttributes } from 'react'

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="rounded-l-xl pl-5 focus:outline-none focus:ring-2 focus:ring-black focus:ring-inset flex-1 h-full"
      {...props}
    />
  )
}
