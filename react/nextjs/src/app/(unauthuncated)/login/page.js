
'use client'
import { Button, Card, CardBody, Image, Radio, RadioGroup } from '@nextui-org/react'
import Link from 'next/link'
import { Formik, Form, Field, RadioButtonGroup, radioGroup, RadioButton} from 'formik';
import * as Yup from 'yup';
import React from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';



const SignupSchema = Yup.object().shape({
  email: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});


 const Login = () => {
  
  const router = useRouter()

  const handleLogin = async(values)=>{
    try{
      const {data} = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`,values)
      if(data) {
        router.push('/home')
      }
    }catch(err){
      toast.error(err?.response?.data?.msg)
    }
  }

return (
  <div className='w-screen h-screen flex justify-center items-center'>
    <Card className='p-5'>
    <CardBody className='flex gap-4  w-96'>
    <center><Image width={100} alt="Logo" src='/jobaayo.png' /></center>
    <p className='text-lg text-center mb-4'>Login to JobAayo</p>
    <Formik  
      initialValues={{
        email: '',
        password:'',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        handleLogin(values);
      }}
    >
      {({ errors, touched }) => (
        <Form >

          <Field name="email" type="email" placeholder="Email Address"  className='bg-white w-full border border-slate-300 py-2 pl-5 rounded-md pr-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'/>
          <div className='h-6 text-sm text-red-900 pl-2 pt-0.5'>{errors.email && touched.email ? <div>{errors.email}</div> : null}</div>

          <Field name="password" type="password" placeholder="Enter Your Password"  className='bg-white w-full border border-slate-300 py-2 pl-5 rounded-md pr-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'/>
          <div className='h-6 text-sm text-red-900 pl-2 pt-0.5'>{errors.password && touched.password ? <div>{errors.password}</div> : null}</div>

          <Button className='bg-blue-400 text-white text-xl w-full' type="submit"> Login</Button>

        </Form>
      )}
    </Formik>
    <p className='text-sm text-center'>You Don't Have an account ?<Link href="\register" className='text-blue-500'>Create an account</Link> </p>
    </CardBody>
    </Card>
  </div>
)
 };

export default Login



