import { DownArrow, UpArrow } from './Icons'

export const MenuButton = ({
  handleMenu,
  visibleMenu
}: {
  handleMenu: () => void
  visibleMenu: boolean
}) => {
  return (
    <div>
      <button
        onClick={handleMenu}
        className='flex gap-1 items-center lg:hidden'>
        <p>Menu</p>
        {visibleMenu ? <UpArrow /> : <DownArrow />}
      </button>
    </div>
  )
}
