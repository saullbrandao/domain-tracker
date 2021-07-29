import { DomainInfoProps } from './types'

export const DomainInfo = ({ info, title }: DomainInfoProps) => {
  return (
    <article>
      <h3 className="uppercase text-gray-light font-extrabold text-xs">
        {title}
      </h3>
      <p className="text-lg text-gray-dark">{info}</p>
    </article>
  )
}
