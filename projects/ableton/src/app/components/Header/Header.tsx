'use client'
import Link from 'next/link'
import { useState } from 'react'
import '../../globals.css'
import { Logo } from '../Core/Icons'
import { PrimaryHeader } from './PrimaryHeader'
import { PrimaryHeaderNavLinks } from './PrimaryHeaderNavLinks'
import { SecondaryHeader } from './SecondaryHeader'
import { ShowMenuButton } from './ShowMenuButton'
export const Header = () => {
  const [visibleMenu, setVisibleMenu] = useState(false)

  const handleShowMenuClick = () => {
    setVisibleMenu(!visibleMenu)
  }

  return (
    <header
      className={`flex flex-col font-semibold gap-5 p-5 relative text-xl z-50
    ${
      visibleMenu
        ? 'bg-blue text-white lg:bg-white lg:text-black'
        : 'bg-white text-black'
    }`}>
      <div
        className={`leading flex gap-5 z-10
      ${visibleMenu ? 'opened' : ''}`}>
        <Link href='/' className='self-center'>
          <Logo />
        </Link>
        <div className='hidden lg:block'>
          <PrimaryHeaderNavLinks />
        </div>
        <ShowMenuButton
          handleMenu={handleShowMenuClick}
          visibleMenu={visibleMenu}
        />
      </div>
      <div
        className={`dropdown-menu absolute bg-blue flex flex-col gap-5 left-0  text-white top-full px-5 w-full
          lg:bg-white lg:static lg:text-black
        ${visibleMenu ? 'opened' : ''}`}>
        <div className='lg:hidden'>
          <PrimaryHeader />
        </div>
        <div className={`${visibleMenu ? 'block' : 'hidden'}`}>
          <SecondaryHeader />
        </div>
      </div>
    </header>
  )
}
