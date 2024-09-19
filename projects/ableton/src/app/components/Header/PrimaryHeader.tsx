import { PrimaryHeaderLoginLinks } from './PrimaryHeaderLoginLinks'
import { PrimaryHeaderNavLinks } from './PrimaryHeaderNavLinks'

export const PrimaryHeader = () => {
  return (
    <div className='flex flex-col gap-5 lg:flex-row lg:justify-between lg:items-center'>
      <PrimaryHeaderNavLinks />
      <PrimaryHeaderLoginLinks />
    </div>
  )
}
