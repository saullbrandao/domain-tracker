import { FormEvent } from 'react'

export type InputProps = {
  searchTerm: string
  handleSearch: (event: FormEvent<HTMLInputElement>) => void
}
