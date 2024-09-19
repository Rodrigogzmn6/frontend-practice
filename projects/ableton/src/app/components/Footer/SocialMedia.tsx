import Link from 'next/link'
import {
  FacebookIcon,
  RightArrow,
  TiktokIcon,
  XIcon,
  YoutubeIcon
} from '../Core/Icons'

export const SocialMedia = () => {
  return (
    <div className='flex flex-col gap-4'>
      <ul>
        <li className='flex items-center'>
          <Link href='/'>Register Live or Push</Link>
          <RightArrow />
        </li>
        <li className='flex items-center'>
          <Link href='/'>About Ableton</Link>
          <RightArrow />
        </li>
        <li className='flex items-center'>
          <Link href='/'>Jobs</Link>
          <RightArrow />
        </li>
      </ul>
      <ul className='flex gap-3'>
        <li className='h-8 w-8'>
          <Link href='/'>
            <FacebookIcon />
          </Link>
        </li>
        <li className='h-8 w-8'>
          <Link href='/'>
            <XIcon />
          </Link>
        </li>
        <li className='h-8 w-8'>
          <Link href='/'>
            <YoutubeIcon />
          </Link>
        </li>
        <li className='h-8 w-8'>
          <Link href='/'>
            <TiktokIcon />
          </Link>
        </li>
      </ul>
    </div>
  )
}
