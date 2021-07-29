import Image from 'next/image'
import arrow from 'public/icon-arrow.svg'

export function Button() {
  return (
    <button
      className="bg-black px-5 min-w-max h-full py-3 rounded-r-xl hover:bg-gray-dark "
      type="submit"
    >
      <Image src={arrow} alt="search button" />
    </button>
  )
}
