import Image from 'next/image'
import arrow from 'public/icon-arrow.svg'
import { Props } from './types'

export function Button({ disabled, children }: Props) {
  return (
    <button
      className={`bg-black px-5 min-w-max h-full py-3 rounded-r-xl hover:bg-gray-dark ${
        disabled && 'cursor-not-allowed'
      }`}
      type="submit"
      disabled={disabled}
    >
      {/* TODO: show a loading spinner when fetching the api */}
      <Image src={arrow} alt="search button" />
    </button>
  )
}
