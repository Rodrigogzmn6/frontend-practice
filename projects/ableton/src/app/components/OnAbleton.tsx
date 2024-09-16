import Link from 'next/link'

export const OnAbleton = () => {
  return (
    <div className='flex flex-col gap-5'>
      <p>More on Ableton.com:</p>
      <div
        className='flex flex-col font-normal gap-5 text-sm
        lg:flex-row lg:gap-7 lg:justify-between lg:text-xl lg:overflow-x-auto'>
        <Link href='/' className='lg:grow lg:whitespace-nowrap'>
          Blog
        </Link>
        <Link href='/' className='lg:grow lg:whitespace-nowrap'>
          Ableton for the Classroom
        </Link>
        <Link href='/' className='lg:grow lg:whitespace-nowrap'>
          Ableton for Colleges and Universities
        </Link>
        <Link href='/' className='lg:grow lg:whitespace-nowrap'>
          Certified Training
        </Link>
        <Link href='/' className='lg:grow lg:whitespace-nowrap'>
          About Ableton
        </Link>
        <Link href='/' className='lg:grow lg:whitespace-nowrap'>
          Jobs
        </Link>
        <Link href='/' className='lg:grow lg:whitespace-nowrap'>
          Apprenticeships
        </Link>
      </div>
    </div>
  )
}
