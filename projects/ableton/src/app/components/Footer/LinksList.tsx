import Link from 'next/link'
import { RightArrow } from '../Core/Icons'

export const LinksList = ({
  links
}: {
  links: {
    title: string
    links: Array<{
      name: string
      url: string
    }>
  }
}) => {
  return (
    <div>
      <p className='font-semibold'>{links.title}</p>
      <ul>
        {links.links.map(link => (
          <li className='flex items-center' key={link.name}>
            <Link href={link.url}>{link.name}</Link>
            <RightArrow />
          </li>
        ))}
      </ul>
    </div>
  )
}
