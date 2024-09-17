import Link from 'next/link'

export const PrimaryHeaderLoginLinks = () => {
  return (
    <div className='flex flex-col gap-5 lg:flex-row lg:items-center'>
      <Link href='/' className='lg:text-blue'>
        Try Live 12 for free
      </Link>
      <Link href='/' className='font-normal text-sm'>
        Log in or register
      </Link>
    </div>
  )
}
