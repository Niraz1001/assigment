'use client'
import { Button, Card, CardBody, Image } from '@nextui-org/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'




const page = () => {

const router = useRouter()
const forstudent = ()=> {
  router.push('/Account/forstudent')
}
const forbussines = ()=>{
  router.push('/Account/forbussines')
}

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
    <Card className='p-8'>
      <CardBody className='flex gap-5'>
        <center><Image width={100} alt="Logo" src="jobaayo.png" /></center>
        <p className='text-lg text-center mb-4'>Register to JobAayo</p>
      <Button onClick={forstudent} className='bg-blue-400 text-white text-lg '>For Student</Button>
       <Button onClick={forbussines} className='bg-blue-400 text-white text-lg '>For Bussiness</Button>
        <p className='text-sm text-center'>Already have an account? <Link href="\" className='text-blue-500'>Login instead</Link> </p>
      </CardBody>
    </Card>
  </div>
  )
}

export default page