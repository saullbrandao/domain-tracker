import { Button } from 'components/Button'
import { Input } from 'components/Input'
import { FormEvent, SyntheticEvent, useState } from 'react'
import { useTracker } from 'hooks/useTracker'
import { Loading } from 'components/Loading'
import Image from 'next/image'
import arrow from 'public/icon-arrow.svg'
import { ErrorMessage } from 'components/ErrorMessage'

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
        <Button
          type="submit"
          disabled={isLoading}
          className={isLoading ? 'cursor-not-allowed' : ''}
        >
          {isLoading ? <Loading /> : <Image src={arrow} alt="search button" />}
        </Button>
      </div>
      {isError && <ErrorMessage />}
    </form>
  )
}
