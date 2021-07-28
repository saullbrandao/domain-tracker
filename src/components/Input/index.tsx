import { FormEvent } from 'react'

type InputProps = {
  searchTerm: string
  handleSearch: (event: FormEvent<HTMLInputElement>) => void
}

export function Input({ searchTerm, handleSearch }: InputProps) {
  return (
    <input
      className="rounded-l-xl pl-5 focus:outline-none focus:ring-2 focus:ring-black focus:ring-inset flex-1 "
      type="text"
      placeholder="type the domain"
      value={searchTerm}
      onChange={handleSearch}
    />
  )
}
