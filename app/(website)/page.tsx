import Image from 'next/image'
import React from 'react'
import image from '@/app/asset/front-page.jpeg'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import { auth } from "@clerk/nextjs/server"
import { redirect } from 'next/navigation'

const HomePage = async () => {
  const { userId } = auth()
  if (userId) {
    redirect('/dashboard')
  }

  return (
    <section>
      <div className='relative bg-[#ffcc99] mt-8 w-[500px] h-[650px] border rounded-xl mx-auto'>
        <Image 
          src={image}
          width={450}
          height={350}
          alt='illustration'
          loading='lazy'
          className="mx-auto object-cover rounded-xl"
        />
        <div className='absolute top-[90%] left-3/4 transform -translate-x-3/4 -translate-y-3/4  text-center w-full px-4 sm:px-8'>
          <h1 className='text-2xl font-extrabold text-gray-700 sm:text-xl'>Parent-Child Activity Tracker</h1>
          <p className='my-2 text-xl sm:text-md'>
            Enhance family bonding by planning and tracking activities together. 
            Sign up now to start creating memorable moments with your loved ones.
          </p>
          <div className="mt-2 w-full flex justify-center gap-6">
            <Button className='bg-[#89CFF0] text-white font-bold text-lg'>
              <Link href={'/sign-in'}>
                Log In
              </Link>
            </Button>
            <Button className='bg-[#FFD700] text-white font-bold text-lg'>
              <Link href={'/sign-up'}>
                Sign Up
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage
