import { FromAbleton } from './FromAbleton'
import { OnAbleton } from './OnAbleton'

export const SecondaryHeader = () => {
  return (
    <div className='flex flex-col gap-5'>
      <OnAbleton />
      <FromAbleton />
    </div>
  )
}
