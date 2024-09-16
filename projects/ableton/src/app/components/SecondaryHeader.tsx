import { FromAbleton } from './FromAbleton'
import { OnAbleton } from './OnAbleton'

interface SecondaryHeaderProps {
  visibleSecondaryMenu?: boolean
}
export const SecondaryHeader: React.FC<SecondaryHeaderProps> = ({
  visibleSecondaryMenu
}) => {
  return (
    <div
      className={`hidden lg:bg-white lg:border-b-2 lg:flex lg:flex-col lg:grow lg:font-semibold lg:gap-5 lg:pb-14 lg:px-10 lg:text-3xl  lg:top-full lg:w-full
      ${visibleSecondaryMenu === true ? 'lg:absolute ' : 'lg:hidden'}`}>
      <OnAbleton />
      <FromAbleton />
    </div>
  )
}
