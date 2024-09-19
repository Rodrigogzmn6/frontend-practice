import { FromAbletonArticle } from './FromAbletonArticle'

export const FromAbleton = () => {
  return (
    <div className='flex flex-col gap-5'>
      <p>More from Ableton</p>
      <div
        className='flex overflow-x-scroll gap-5
        lg:overflow-x-auto lg:justify-between'>
        <FromAbletonArticle
          title='Loop'
          description="Watch Talks, Performances and Features from Ableton's Summit for Music Makers."
        />
        <FromAbletonArticle
          title='Learning Music'
          description='Learn the fundamentals of music making right in your browser.'
        />
        <FromAbletonArticle
          title='Synths'
          description='Get started with synthesis using a web-based synth and accompanying lessons.'
        />
        <FromAbletonArticle
          title='Making Music'
          description='Some tips from 74 Creative Strategies for Electronic Producers.'
        />
      </div>
    </div>
  )
}
