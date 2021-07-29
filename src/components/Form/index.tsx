import { Button } from 'components/Button'
import { Input } from 'components/Input'
import { FormEvent, SyntheticEvent, useState } from 'react'
import { useTracker } from 'src/hooks/useTracker'

export function Form() {
  const { handleDomainChange } = useTracker()
  const [searchTerm, setSearchTerm] = useState('')

  function handleSearch(event: FormEvent<HTMLInputElement>) {
    setSearchTerm(event.currentTarget.value)
  }

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault()
    searchTerm && handleDomainChange(searchTerm)
    setSearchTerm('')
  }
  // TODO: disable submit when fetching the api

  return (
    <form
      className="flex justify-between w-5/6 h-12 lg:w-1/3 shadow-md"
      onSubmit={handleSubmit}
    >
      <Input searchTerm={searchTerm} handleSearch={handleSearch} />
      <Button />
    </form>
  )
}
