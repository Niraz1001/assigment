
import { Button, Card, CardBody, Image } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
    <Card className='p-8'>
      <CardBody className='flex gap-5'>
        <center><Image width={100} alt="Logo" src="jobaayo.png" /></center>
        <p className='text-lg text-center mb-4'>Register to JobAayo</p>
       <Button className='bg-blue-400 text-white text-lg '><Link href="\Account\forstudent">For Student</Link> </Button>
       <Button className='bg-blue-400 text-white text-lg '><Link href="\Account\forbussines">For Bussiness</Link></Button>
        <p className='text-sm text-center'>Already have an account? <Link href="\app" className='text-blue-500'>Login instead</Link> </p>
      </CardBody>
    </Card>
  </div>
  )
}

export default page