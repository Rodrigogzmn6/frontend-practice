'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const PrimaryHeaderNavLinks = () => {
  const pathname = usePathname().split('/')[1]
  return (
    <div className='flex flex-col gap-5 lg:flex-row lg:gap-7'>
      <Link href='/live' className={`${pathname === 'live' && 'text-orange'}`}>
        Live
      </Link>
      <Link href='/push' className={`${pathname === 'push' && 'text-orange'}`}>
        Push
      </Link>
      <Link href='/note' className={`${pathname === 'note' && 'text-orange'}`}>
        Note
      </Link>
      <Link href='/link' className={`${pathname === 'link' && 'text-orange'}`}>
        Link
      </Link>
      <Link href='/shop' className={`${pathname === 'shop' && 'text-orange'}`}>
        Shop
      </Link>
      <Link
        href='/packs'
        className={`${pathname === 'packs' && 'text-orange'}`}>
        Packs
      </Link>
      <Link href='/help' className={`${pathname === 'help' && 'text-orange'}`}>
        Help
      </Link>
    </div>
  )
}
