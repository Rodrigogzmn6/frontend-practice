import Link from 'next/link'
import { Logo } from '../Core/Icons'

export const FinalInfo = () => {
  return (
    <div className='lg:flex lg:items-center lg:justify-between lg:text-sm'>
      <div>
        <ul
          className='flex flex-col font-medium gap-3
        lg:flex-row'>
          <li className=''>
            <Link href='/'>Contact Us</Link>
          </li>
          <li className=''>
            <Link href='/'>Press Resources</Link>
          </li>
          <li className=''>
            <Link href='/'>Legal Info</Link>
          </li>
          <li className=''>
            <Link href='/'>Privacy Policy</Link>
          </li>
          <li className=''>
            <Link href='/'>Cookie Settings</Link>
          </li>
          <li className=''>
            <Link href='/'>Imprint</Link>
          </li>
        </ul>
      </div>
      <div
        className='flex font-medium gap-4 items-center mt-16
      lg:flex-row-reverse lg:mt-0'>
        <Link href='/'>
          <Logo />
        </Link>
        <p>Made in Berlin</p>
      </div>
    </div>
  )
}
