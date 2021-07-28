import { DomainInfo } from 'components/DomainInfo'
import { useTracker } from 'src/hooks/useTracker'

export function DetailsSection() {
  const { data } = useTracker()
  return (
    <section className="bg-white shadow-md flex flex-col lg:flex-row justify-evenly py-3 gap-3 text-center w-5/6 rounded-xl font-bold absolute -bottom-32 lg:-bottom-8 lg:divide-x divide-gray-300 lg:justify-around z-40">
      {data && (
        <>
          <DomainInfo title="Ip Address" info={data.ip} />
          <DomainInfo
            title="Location"
            info={`${data.location.region}, ${data.location.country} ${data.location.postalCode}`}
          />
          <DomainInfo title="Timezone" info={`UTC ${data.location.timezone}`} />
          <DomainInfo title="ISP" info={data.isp} />
        </>
      )}
    </section>
  )
}
