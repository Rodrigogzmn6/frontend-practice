import { DownArrow, MinusIcon, PlusIcon, UpArrow } from './Icons'

export const ShowMenuButton = ({
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
      <button
        onClick={handleMenu}
        className='hidden text-orange lg:flex lg:gap-1 lg:items-center'>
        <p>More</p>
        {visibleMenu ? <MinusIcon /> : <PlusIcon />}
      </button>
    </div>
  )
}
