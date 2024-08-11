
'use client'
import { Button, Card, CardBody, Image } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'


const page = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <Card className='p-5'>
        <CardBody className='flex gap-3'>
          <center><Image width={100} alt="Logo" src="jobaayo.png" /></center>
          <p className='text-lg text-center'>Login to JobAayo</p>
          <p className='text-xs text-gray-500 mb-7'>Now you can apply for your dream job here in jobaayo</p>
          <input type='text' placeholder='Email address 0r phone number' className='bg-white w-full border border-slate-300 py-2 pl-5 rounded-md pr-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'></input>
          <input type='password' placeholder='Password' className='bg-white w-full border border-slate-300 py-2 pl-5 rounded-md pr-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'></input>
          <Button className='bg-blue-400 text-white text-lg  font-bold'>Log in</Button>
          <p className='text-sm text-center'>You Don't Have an account ? <Link href="/Account" className='text-blue-500'>Create an account</Link> </p>
        </CardBody>
      </Card>
    </div>
  )
}

export default page