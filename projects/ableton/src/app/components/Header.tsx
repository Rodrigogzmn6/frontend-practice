'use client'
import Link from 'next/link'
import { useState } from 'react'
import '../globals.css'
import { Logo } from './Icons'
import { PrimaryHeader } from './PrimaryHeader'
import { SecondaryHeader } from './SecondaryHeader'
import { ShowMenuButton } from './ShowMenuButton'
export const Header = () => {
  const [visibleMenu, setVisibleMenu] = useState(false)

  const handleShowMenuClick = () => {
    setVisibleMenu(!visibleMenu)
  }

  return (
    <header
      className={`flex flex-col font-semibold gap-5 p-5 relative text-xl
    ${visibleMenu ? 'bg-blue text-white' : 'bg-white text-black'}`}>
      <div
        className={`leading flex gap-5 z-10
      ${visibleMenu ? 'opened' : ''}`}>
        <Link href='/' className='self-center'>
          <Logo />
        </Link>
        <ShowMenuButton
          handleMenu={handleShowMenuClick}
          visibleMenu={visibleMenu}
        />
      </div>
      <div
        className={`dropdown-menu absolute bg-blue flex flex-col gap-5 left-0 text-white top-full px-5 w-full
        ${visibleMenu ? 'opened' : ''}`}>
        <PrimaryHeader />
        <SecondaryHeader />
      </div>
    </header>
  )
}
