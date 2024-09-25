'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import '../../globals.css'
import { navigationLinks } from '../Core/constants'
import { Logo } from '../Core/Icons'
import { NavigationHeader } from './NavigationHeader'
import { PrimaryHeader } from './PrimaryHeader'
import { PrimaryHeaderNavLinks } from './PrimaryHeaderNavLinks'
import { SecondaryHeader } from './SecondaryHeader'
import { ShowMenuButton } from './ShowMenuButton'

export const Header = () => {
  const pathname = usePathname()

  const [visibleMenu, setVisibleMenu] = useState(false)

  const handleShowMenuClick = () => {
    setVisibleMenu(!visibleMenu)
  }

  const getNavigationLink = () => {
    let navLinks: {
      root: string
      links: Array<{
        title: string
        link: string
      }>
    } = {
      root: '',
      links: []
    }

    navigationLinks.forEach(linkObject => {
      const foundLink = linkObject.links.find(
        specificLink => specificLink.link === pathname
      )
      if (foundLink !== undefined) {
        navLinks = linkObject
      }
    })

    return navLinks
  }

  return (
    <header
      className={`flex flex-col font-semibold text-xl z-50
    `}>
      <div
        className={`flex flex-col gap-5 p-5 relative 
        lg:border-b-2 lg:gap-0
    ${
      visibleMenu
        ? 'bg-blue text-white lg:bg-white lg:text-black'
        : 'bg-white border-b-2 text-black'
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
      </div>
      <NavigationHeader
        linksList={getNavigationLink()}
        path={pathname}
        // selectedLink={pathname}
      />
    </header>
  )
}
