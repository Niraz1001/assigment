
import { Button, Card, CardBody, Image } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
    <Card className='p-5'>
      <CardBody className='flex gap-2'>
        <center><Image width={100} alt="Logo" src="jobaayo.png" /></center>
        <p className='text-lg text-center mb-4'>Register to JobAayo</p>
        <input type='text' placeholder='Bussiness Name' className='bg-white w-full border border-slate-300 py-2 pl-5 rounded-md pr-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'></input>
        <input type='email' placeholder='Email address' className='bg-white w-full border border-slate-300 py-2 pl-5 rounded-md pr-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'></input>
        <input type='password' placeholder='Create a password' className='bg-white w-full border border-slate-300 py-2 pl-5 rounded-md pr-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'></input>
        <input type='password' placeholder='Comfirm your password' className='bg-white w-full border border-slate-300 py-2 pl-5 rounded-md pr-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'></input>
        <Button className='bg-blue-400 text-white text-lg  font-bold'>Register</Button>
        <p className='text-sm text-center'>Already have an account? <Link href="\app" className='text-blue-500'>Login instead</Link> </p>
      </CardBody>
    </Card>
  </div>
  )
}

export default page