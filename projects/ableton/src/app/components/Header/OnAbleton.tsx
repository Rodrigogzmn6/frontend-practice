'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const OnAbleton = () => {
  const pathname = usePathname()

  return (
    <div className='flex flex-col gap-5'>
      <p>More on Ableton.com:</p>
      <div
        className='flex flex-col font-normal gap-5 text-sm
        lg:flex-row lg:gap-7 lg:justify-between lg:text-xl lg:overflow-x-auto'>
        <Link
          href='/blog'
          className={`lg:grow lg:whitespace-nowrap ${
            pathname === '/blog' && 'text-orange'
          }`}>
          Blog
        </Link>
        <Link
          href='/classroom'
          className={`lg:grow lg:whitespace-nowrap ${
            pathname === '/classromm' && 'text-orange'
          }`}>
          Ableton for the Classroom
        </Link>
        <Link
          href='/colleges'
          className={`lg:grow lg:whitespace-nowrap ${
            pathname === '/colleges' && 'text-orange'
          }`}>
          Ableton for Colleges and Universities
        </Link>
        <Link
          href='/training'
          className={`lg:grow lg:whitespace-nowrap ${
            pathname === '/training' && 'text-orange'
          }`}>
          Certified Training
        </Link>
        <Link
          href='/about'
          className={`lg:grow lg:whitespace-nowrap ${
            pathname === '/about' && 'text-orange'
          }`}>
          About Ableton
        </Link>
        <Link
          href='/jobs'
          className={`lg:grow lg:whitespace-nowrap ${
            pathname === '/jobs' && 'text-orange'
          }`}>
          Jobs
        </Link>
        <Link
          href='/apprenticeships'
          className={`lg:grow lg:whitespace-nowrap ${
            pathname === '/apprenticeships' && 'text-orange'
          }`}>
          Apprenticeships
        </Link>
      </div>
    </div>
  )
}
