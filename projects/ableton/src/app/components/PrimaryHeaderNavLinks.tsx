import Link from 'next/link'

export const PrimaryHeaderNavLinks = () => {
  return (
    <div className='flex flex-col gap-5 lg:flex-row lg:gap-7'>
      <Link href='/'>Live</Link>
      <Link href='/'>Push</Link>
      <Link href='/'>Note</Link>
      <Link href='/'>Link</Link>
      <Link href='/'>Shop</Link>
      <Link href='/'>Packs</Link>
      <Link href='/'>Help</Link>
    </div>
  )
}
