import { FromAbleton } from './FromAbleton'
import { OnAbleton } from './OnAbleton'

interface SecondaryHeaderProps {
  visibleMenu?: boolean
  visibleSecondaryMenu?: boolean
}
export const SecondaryHeader: React.FC<SecondaryHeaderProps> = ({
  visibleMenu,
  visibleSecondaryMenu
}) => {
  return (
    <div
      className={`lg:bg-white lg:border-b-2 lg:flex lg:flex-col lg:grow lg:font-semibold lg:gap-5 lg:pb-14 lg:px-10 lg:text-3xl  lg:top-full lg:w-full
        ${visibleMenu === true ? '' : 'hidden'}
      ${visibleSecondaryMenu === true ? 'lg:absolute ' : 'lg:hidden'}`}>
      <OnAbleton />
      <FromAbleton />
    </div>
  )
}
