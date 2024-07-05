import Image from 'next/image'
import React from 'react'
import image from '@/app/asset/front-page.jpeg'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import {auth} from "@clerk/nextjs/server"
import { redirect } from 'next/navigation'


const HomePage = async () => {
  const {userId} = auth()
  if (userId){
    redirect('/dashboard')
  }
  
  return (
    <section className="py-6">
      <div className='mt-8 w-[600px] h-[800px] border rounded-xl mx-auto'>
        <div className='text-center mx-auto py-12 px-4 ms:px-4 lg:py-16 lg:px-8' >
          <h1 className='text-2xl font-extrabold text-gray-700 sm:text-xl'>Parent-Child Activity Tracker</h1>
          <p className='my-2 text-xl text-gray-500 sm:text-md'>
            Enhance family bonding by planning and tracking activities together. 
            Sign up now to start creating memorable moments with your loved ones
          </p>
        </div>

        <div>
          <Image 
            src={image}
            width={350}
            height={350}
            alt='illustration'
            loading='lazy'
            className="mx-auto"
          />
        </div>

        <div className="mt-10 px-40 grid grid-cols-2 justify-center gap-6">
          <Button className='bg-[#89CFF0] text-white font-bold text-md'>
            <Link href={'/sign-in'}>
            Log In
            </Link>
          </Button>
          <Button className='bg-[#FFD700] text-white font-bold text-md'>
          <Link href={'sign-up'}>
            Sign Up
            </Link>
          </Button>
        </div>
      </div>
      
      
    </section>
  )
}

export default HomePage
