export const Logo = () => {
  return (
    <svg
      role='img'
      aria-label='Logo Ableton'
      className='main-nav__logo__image'
      fill='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      width='60'
      height='28'
      viewBox='0 0 45 21'>
      <path d='M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z'></path>
    </svg>
  )
}

export const DownArrow = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='currentColor'
      className='size-4'>
      <path
        fillRule='evenodd'
        d='M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z'
        clipRule='evenodd'
      />
    </svg>
  )
}

export const UpArrow = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='currentColor'
      className='size-4'>
      <path
        fillRule='evenodd'
        d='M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z'
        clipRule='evenodd'
      />
    </svg>
  )
}

export const PlusIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      className='size-4'>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M12 4.5v15m7.5-7.5h-15'
      />
    </svg>
  )
}

export const MinusIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      className='size-4'>
      <path strokeLinecap='round' strokeLinejoin='round' d='M5 12h14' />
    </svg>
  )
}
