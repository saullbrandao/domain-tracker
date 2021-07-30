import { useTracker } from 'src/hooks/useTracker'
import { InputProps } from './types'

export function Input({ searchTerm, handleSearch }: InputProps) {
  const { domain } = useTracker()

  return (
    <input
      className="rounded-l-xl pl-5 focus:outline-none focus:ring-2 focus:ring-black focus:ring-inset flex-1 h-full"
      type="text"
      placeholder={domain || 'Search for any IP address or domain'}
      value={searchTerm}
      onChange={handleSearch}
    />
  )
}
