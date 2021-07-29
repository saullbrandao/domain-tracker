import axios from 'axios'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import defaultData from 'mocks/domainData.json'

type Location = {
  region: string
  country: string
  postalCode: string
  timezone: string
  lat: number
  lng: number
}

type Data = {
  ip: string
  isp: string
  location: Location
}

type TrackerContextType = {
  domain: string
  data: Data
  isLoading: boolean
  isError: boolean
  handleDomainChange: (searchTerm: string) => void
}

type TrackerContextProviderProps = {
  children: ReactNode
}

const TrackerContext = createContext({} as TrackerContextType)

export function TrackerContextProvider(props: TrackerContextProviderProps) {
  const [data, setData] = useState<Data>(defaultData)
  const [domain, setDomain] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  function handleDomainChange(searchTerm: string) {
    setDomain(searchTerm)
  }

  useEffect(() => {
    async function test() {
      setIsError(false)
      setIsLoading(true)

      try {
        const res = await axios.get('/api/ipify', {
          params: {
            domain,
          },
        })
        if (res.status === 200) {
          setData(res.data)
        } else {
          throw new Error('error')
        }
      } catch (err) {
        setIsError(true)
      }
      setIsLoading(false)
    }
    domain && test()
  }, [domain])

  return (
    <TrackerContext.Provider
      value={{ data, domain, handleDomainChange, isLoading, isError }}
    >
      {props.children}
    </TrackerContext.Provider>
  )
}

export function useTracker() {
  const value = useContext(TrackerContext)
  return value
}
