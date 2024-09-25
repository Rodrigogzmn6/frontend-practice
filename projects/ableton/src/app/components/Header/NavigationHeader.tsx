import Link from 'next/link'

export const NavigationHeader = ({
  linksList,
  path
}: // selectedLink
{
  linksList?: {
    root: string
    links: Array<{
      title: string
      link: string
    }>
  }
  path: string
  // selectedLink: string
}) => {
  return (
    <div
      className='font-medium text-sm p-5
    lg:text-lg'>
      <ul className='flex gap-2'>
        {linksList?.links.map((link, index) => (
          <li key={index} className={`${link.link === path && 'text-orange'}`}>
            <Link href={`${link.link}`}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
