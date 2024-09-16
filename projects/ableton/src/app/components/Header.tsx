'use client'
import { useState } from 'react'
import { LeadingHeader } from './LeadingHeader'
import { PrimaryHeader } from './PrimaryHeader'
import { SecondaryHeader } from './SecondaryHeader'

export const Header = () => {
  const [visibleMenu, setVisibleMenu] = useState(false)
  const [visibleSecondaryMenu, setVisibleSecondaryMenu] = useState(false)

  const handleMenuClick = () => {
    setVisibleMenu(!visibleMenu)
  }

  const handleMoreClick = () => {
    setVisibleSecondaryMenu(!visibleSecondaryMenu)
  }

  return (
    <header
      className={`lg:bg-white lg:flex lg:flex-col lg:gap-8 lg:relative lg:text-black
        ${visibleMenu ? 'bg-blue' : 'border-b-2 closed'}  `}>
      <div
        className={`leading flex flex-col font-semibold gap-6 items-start relative text-xl px-5 py-5
          lg:flex-row lg:items-center lg:px-10
          ${visibleMenu && 'text-white lg:text-black'}`}>
        <LeadingHeader handleMenu={handleMenuClick} visibleMenu={visibleMenu} />
        <div
          className={`dropdown-menu absolute bg-blue flex flex-col gap-5 left-0 px-5 text-white top-full
          lg:hidden
          ${visibleMenu ? 'opened' : 'closed'} `}>
          <PrimaryHeader />
          <SecondaryHeader />
        </div>
        <div
          className='hidden
          lg:block lg:flex-grow'>
          <PrimaryHeader
            handleMoreClick={handleMoreClick}
            visibleSecondaryMenu={visibleSecondaryMenu}
          />
        </div>
      </div>
      <SecondaryHeader visibleSecondaryMenu={visibleSecondaryMenu} />
    </header>
  )
}
