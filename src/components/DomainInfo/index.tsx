import { DomainInfoProps } from './types'

export const DomainInfo = ({ info, title }: DomainInfoProps) => {
  return (
    <article>
      <h2 className="uppercase text-gray-light font-extrabold text-xs">
        {title}
      </h2>
      <p className="text-lg text-gray-dark">{info}</p>
    </article>
  )
}
