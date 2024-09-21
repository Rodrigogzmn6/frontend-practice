import Image from 'next/image'
import Link from 'next/link'
import headerImage from '../../../public/about_header.png'
import photoOne from '../../../public/photo-1.jpg'
import photoTwo from '../../../public/photo-2.jpg'
import photoThree from '../../../public/photo-3.jpg'
import photoFour from '../../../public/photo-4.jpg'
import photoFive from '../../../public/photo-5.jpg'
import photoSix from '../../../public/photo-6.jpg'
import photoSeven from '../../../public/photo-7.jpg'
import photoEight from '../../../public/photo-8.jpg'
import poster from '../../../public/poster.jpg'
import { RightArrow } from '../components/Core/Icons'
import { HeaderTitle } from './components/HeaderTitle'
import { Text } from './components/Text'
import { VideoPlayer } from './components/VideoPlayer'

export default function About() {
  console.log(photoEight)
  const textOne = {
    main: 'Making music isn’t easy. It takes time, effort, and learning. But when you’re in the flow, it’s incredibly rewarding.',
    secondary:
      'We feel the same way about making Ableton products. The driving force behind Ableton is our passion for what we make, and the people we make it for.'
  }

  const textTwo = {
    main: 'We are more than 350 people from 30 different countries divided between our headquarters in Berlin and our offices in Los Angeles and Tokyo.',
    secondary:
      'Most of us are active musicians, producers, and DJs, and many of us use Live and Push every day. We come from a wide range of cultural and professional backgrounds. Some of us have PhDs, some are self-taught, and most of us are somewhere in between. What connects us is the shared belief that each of us has the skills and knowledge to contribute to something big: helping to shape the future of music culture.'
  }

  const textThree = {
    main: 'We believe it takes focus to create truly outstanding instruments. We only work on a few products and we strive to make them great.',
    secondary:
      'Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow. We’ve learned that achieving the best results comes from building teams that are richly diverse, and thus able to explore problems from a wider set of perspectives. We don’t always agree with each other, but opinion and debate are valued and openly encouraged.'
  }

  const textFour = {
    main: 'We’re passionate about what we do, but we’re equally passionate about improving who we are.',
    secondary:
      'We work hard to foster an environment where people can grow both personally and professionally, and we strive to create a wealth of opportunities to learn from and with each other.',
    third:
      'Alongside an internal training program, employees are actively supported in acquiring new knowledge and skills, and coached on applying these in their daily work. In addition, staff-organized development and music salons are a chance to discuss new technologies, production techniques and best practices.'
  }

  const textFive = {
    main: 'We want our employees to love it here. Since we’re looking for exceptional talent from around the world, we will do everything we can to make your transition as easy as possible.',
    secondary:
      'If you’re joining us in Berlin, we’ll help with relocation and paperwork. We’ll even provide you with free German or English lessons. Plus, working in Germany means you can expect comprehensive health insurance for you and your family, as well as generous maternity and paternity leave. Office hours are flexible, but it’s not all work; we have several company and team outings throughout the year as well as a variety of fun, informal small-group activities.'
  }

  return (
    <div
      className='flex flex-col gap-14 items-center text-xl
    lg:gap-28'>
      <section className='relative w-5/6'>
        <Image
          src={headerImage}
          alt='ableton header'
          width={3757}
          height={2200}
        />
        <div className='absolute flex justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/5'>
          <HeaderTitle />
        </div>
      </section>
      <section className='w-5/6 lg:w-1/2 lg:text-3xl'>
        <h3 className='font-semibold'>
          We make{' '}
          <Link href='/' className='text-blue'>
            Live
          </Link>
          ,{' '}
          <Link href='/' className='text-blue'>
            Push
          </Link>
          ,{' '}
          <Link href='/' className='text-blue'>
            Note
          </Link>{' '}
          and{' '}
          <Link href='/' className='text-blue'>
            Link
          </Link>{' '}
          — unique software and hardware for music creation and performance.
          With these products, our community of users creates amazing things.
        </h3>
        <p className='text-lg'>
          Ableton was founded in 1999 and released the first version of Live in
          2001. Our products are used by a community of dedicated musicians,
          sound designers, and artists from across the world.
        </p>
      </section>
      <section className='py-14 relative'>
        <div className='grid grid-cols-2 place-items-center w-5/6 mx-auto z-10'>
          <div className='aspect-square flex items-center'>
            <Image
              className='h-full object-center object-cover'
              src={photoOne}
              alt='photo'
              height={3840}
              width={3760}
            />
          </div>
          <div className='ml-14'>
            <Image src={photoTwo} alt='photo' height={3781} width={5671} />
          </div>
        </div>
        <div className='absolute flex top-0 left-0 w-full h-full -z-10'>
          <div className='w-2/5'></div>
          <div className='bg-yellow h-full w-3/5'></div>
        </div>
      </section>
      <Text text={textOne} />
      <section className='w-5/6 lg:w-1/2'>
        <VideoPlayer url='https://www.youtube.com/watch?v=9SbnhgjeyXA' />
      </section>
      <Text text={textTwo} />
      <section className='p-14 relative'>
        <div className='gap-y-14 grid grid-cols-2 grid-rows-2 place-items-center w-5/6 mx-auto z-10'>
          <div className='mr-14 order-1'>
            <Image src={photoThree} alt='photo' height={3082} width={5091} />
          </div>
          <div className='mr-14 order-3'>
            <Image src={photoFour} alt='photo' height={2693} width={3882} />
          </div>
          <div className='order-2 col-start-2 row-start-1 row-end-3 aspect-square flex items-center'>
            <Image
              className='h-full object-center object-cover'
              src={photoFive}
              alt='photo'
              height={3111}
              width={2922}
            />
          </div>
        </div>
        <div className='absolute flex top-0 left-0 w-full h-full -z-10'>
          <div className='bg-green h-full w-3/5'></div>
          <div className='w-2/5'></div>
        </div>
      </section>
      <Text text={textThree} />
      <section className='w-5/6'>
        <Image src={poster} height={1080} width={1920} alt='poster' />
      </section>
      <Text text={textFour} />
      <section className='py-14 relative'>
        <div className='gap-40 grid grid-cols-2 place-items-center z-10'>
          <div className='ml-14'>
            <Image src={photoSix} alt='photo' height={3727} width={5590} />
          </div>
          <div className='aspect-square flex items-center'>
            <Image
              className='h-full object-center object-cover'
              src={photoSeven}
              alt='photo'
              height={3731}
              width={5596}
            />
          </div>
        </div>
        <div className='absolute flex justify-center top-0 left-0 w-full h-full -z-10'>
          <div className='bg-pink h-full w-2/3'></div>
        </div>
      </section>
      <Text text={textFive} />
      <section className='mb-10 w-5/6 lg:grid lg:grid-cols-2 lg:mb-20'>
        <Image
          className='h-full object-center object-cover'
          src={photoEight}
          height={3781}
          width={5672}
          alt='Ableton'
        />
        <div
          className='bg-lightBlue flex flex-col font-semibold gap-4 p-14 lg:mb-0
        lg:p-28'>
          <p>
            We’re really proud of the work we’ve done so far. But there’s so
            much more to come. If you’d like to be a part of it, please join us.
          </p>
          <div className='flex items-center'>
            <Link className='text-blue' href='/'>
              See latest job
            </Link>
            <RightArrow />
          </div>
        </div>
      </section>
    </div>
  )
}
