import Link from 'next/link'
import { Logo } from './Icons'
import { MenuButton } from './MenuButton'

export const LeadingHeader = ({
  handleMenu,
  visibleMenu
}: {
  handleMenu: () => void
  visibleMenu: boolean
}) => {
  const handleMenuClick = () => {
    handleMenu()
  }
  return (
    <div className='flex gap-6'>
      <Link href='/' className='self-center'>
        <Logo />
      </Link>
      <MenuButton handleMenu={handleMenuClick} visibleMenu={visibleMenu} />
    </div>
  )
}
