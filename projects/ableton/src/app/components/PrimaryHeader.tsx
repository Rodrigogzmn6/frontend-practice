import Link from 'next/link'
import React from 'react'

interface PrimaryHeaderProps {
  handleMoreClick?: () => void
  visibleSecondaryMenu?: boolean
}

export const PrimaryHeader: React.FC<PrimaryHeaderProps> = ({
  handleMoreClick,
  visibleSecondaryMenu
}) => {
  return (
    <div className='flex flex-col gap-5 lg:flex-row lg:justify-between lg:items-center'>
      <div className='flex flex-col gap-5 lg:flex-row lg:gap-7'>
        <Link href='/'>Live</Link>
        <Link href='/'>Push</Link>
        <Link href='/'>Note</Link>
        <Link href='/'>Link</Link>
        <Link href='/'>Shop</Link>
        <Link href='/'>Packs</Link>
        <Link href='/'>Help</Link>
        <button
          className='hidden text-orange lg:block'
          onClick={handleMoreClick}>
          More {visibleSecondaryMenu === true ? '-' : '+'}
        </button>
      </div>
      <div className='flex flex-col gap-5 lg:flex-row lg:items-center'>
        <Link href='/' className='lg:text-blue'>
          Try Live 12 for free
        </Link>
        <Link href='/' className='font-normal text-sm'>
          Log in or register
        </Link>
      </div>
    </div>
  )
}
