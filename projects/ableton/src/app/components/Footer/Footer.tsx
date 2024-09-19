import { FinalInfo } from './FinalInfo'
import { LinksList } from './LinksList'
import { SignupForm } from './SignupForm'
import { SocialMedia } from './SocialMedia'

export const Footer = () => {
  const educationLinksList = {
    title: 'Education',
    links: [
      {
        name: 'Offer for students and teachers',
        url: '/'
      },
      {
        name: 'Ableton for the Classroom',
        url: '/'
      },
      {
        name: 'Ableton for Colleges and Universities',
        url: '/'
      }
    ]
  }

  const communityLinksList = {
    title: 'Community',
    links: [
      {
        name: 'Find Ableton User Groups',
        url: '/'
      },
      {
        name: 'Find Certified Training',
        url: '/'
      },
      {
        name: 'Become a Certified Trainer',
        url: '/'
      }
    ]
  }

  return (
    <footer
      className='border-t-2 flex flex-col gap-8 items-stretch p-14 text-sm
    lg:text-xl'>
      <h2
        className='font-semibold text-4xl
        lg:text-6xl'>
        Ableton
      </h2>
      <div
        className='flex flex-col gap-8
      lg:gap-4 lg:grid lg:grid-cols-3'>
        <div className='order-3'>
          <SignupForm />
        </div>
        <div className='order-1'>
          <SocialMedia />
        </div>
        <div className='order-2'>
          <LinksList links={educationLinksList} />
        </div>
        <div className='order-4'>
          <LinksList links={communityLinksList} />
        </div>
      </div>
      <div>
        <FinalInfo />
      </div>
    </footer>
  )
}
