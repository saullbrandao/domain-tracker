import { Button } from 'components/Button'
import { Input } from 'components/Input'
import { FormEvent, SyntheticEvent, useState } from 'react'
import { useTracker } from 'src/hooks/useTracker'

export function Form() {
  const { handleDomainChange, isLoading, isError } = useTracker()
  const [searchTerm, setSearchTerm] = useState('')

  function handleSearch(event: FormEvent<HTMLInputElement>) {
    setSearchTerm(event.currentTarget.value)
  }

  function handleSubmit(event: SyntheticEvent) {
    event.preventDefault()
    if (!isLoading && searchTerm) {
      handleDomainChange(searchTerm)
      setSearchTerm('')
    }
  }

  return (
    <form
      className="flex flex-col items-center gap-1 w-5/6 lg:w-1/3 "
      onSubmit={handleSubmit}
    >
      <div className="flex justify-between w-full h-12 shadow-md">
        <Input searchTerm={searchTerm} handleSearch={handleSearch} />
        <Button />
      </div>
      {isError && (
        <div className="bg-white px-2 py-1 rounded-lg ">
          <span className="text-red-500 font-medium text-sm">
            Something went wrong!
          </span>
        </div>
      )}
    </form>
  )
}
