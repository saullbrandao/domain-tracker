import Image from 'next/image'
import arrow from 'public/icon-arrow.svg'

export function Button() {
  return (
    <button className="bg-black px-5 py-3 rounded-r-xl hover:bg-gray-800">
      <Image src={arrow} alt="search button" />
    </button>
  )
}
