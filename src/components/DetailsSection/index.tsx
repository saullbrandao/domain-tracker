import { DomainInfo } from 'components/DomainInfo'
import { useTracker } from 'src/hooks/useTracker'

export function DetailsSection() {
  const { data } = useTracker()
  return (
    <section className="bg-white shadow-md flex flex-col justify-evenly py-6 gap-4 text-center w-5/6 rounded-xl font-bold absolute -bottom-36 z-40">
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
