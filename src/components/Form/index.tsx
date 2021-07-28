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

  return (
    <form
      className="flex justify-between w-5/6 lg:w-1/3 "
      onSubmit={handleSubmit}
    >
      <Input searchTerm={searchTerm} handleSearch={handleSearch} />
      <Button />
    </form>
  )
}
