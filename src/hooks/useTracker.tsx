import axios from 'axios'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import defaultData from 'mocks/domainData.json'
import { ipApi } from 'services/ipApi'
import toast from 'react-hot-toast'

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

  const notify = () =>
    toast.error('Please disable ad-blocker.', {
      duration: 3000,
      position: 'top-right',
    })

  useEffect(() => {
    async function getUserIpInformation() {
      try {
        const res = await ipApi.get('https://api.ipify.org/?format=json')
        if (res.status === 200) {
          setDomain(res.data.ip)
        } else {
          throw new Error('error')
        }
      } catch (err) {
        notify()
        console.log(err)
      }
    }
    getUserIpInformation()
  }, [])

  useEffect(() => {
    async function getIpInformation() {
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
    domain && getIpInformation()
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
