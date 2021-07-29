import { Loading } from 'components/Loading'
import Image from 'next/image'
import arrow from 'public/icon-arrow.svg'
import { useTracker } from 'src/hooks/useTracker'

export function Button() {
  const { isLoading } = useTracker()
  return (
    <button
      className={`bg-black px-5 w-14 h-full py-3 rounded-r-xl hover:bg-gray-dark ${
        isLoading && 'cursor-not-allowed'
      }`}
      type="submit"
      disabled={isLoading}
    >
      {isLoading ? <Loading /> : <Image src={arrow} alt="search button" />}
    </button>
  )
}
