'use client'

import { useState } from 'react'
import { toast } from 'sonner'

export const SignupForm = () => {
  const [email, setEmail] = useState('')

  const handleFormOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setEmail('')
    toast.success(`Thank you for subscribing: ${email}`)
  }

  return (
    <div>
      <p className='font-semibold'>Sign up to our newsletter</p>
      <p>
        Enter your email address to stay up to date with the latest offers,
        tutorials, downloads, surveys and more.
      </p>
      <form onSubmit={handleFormOnSubmit} className='flex w-full'>
        <input
          type='email'
          placeholder='Email Address'
          className='bg-gray-200 grow px-6 py-1'
          value={email}
          onChange={event => {
            setEmail(event.target.value)
          }}
        />
        <button className='bg-blue font-semibold text-white px-6 py-1'>
          Sing Up
        </button>
      </form>
    </div>
  )
}
