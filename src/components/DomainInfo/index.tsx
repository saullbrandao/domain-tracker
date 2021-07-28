type DomainInfoProps = {
  title: string
  info: string
}

export const DomainInfo = ({ info, title }: DomainInfoProps) => {
  return (
    <article className="flex-1">
      <h3 className="uppercase text-gray-400 font-extrabold text-xs">
        {title}
      </h3>
      <p className="text-lg">{info}</p>
    </article>
  )
}
