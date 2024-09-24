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
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(8, 'Password must be 8 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol'),
  confirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password doesnot match'),
});


 const Register = () => {
  
  const router = useRouter()

  const handleSave = async (values)=>{
    try{
      const {data} = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/register`,values)
      toast.success(data?.msg)
      if (data) {
        router.push('/login')
      }
  
    }
  catch(err){
    toast.error(err?.response?.data?.msg)
  }
  }

return (
  <div className='w-screen h-screen flex justify-center items-center'>
    <Card className='p-5'>
    <CardBody className='flex gap-4  w-96'>
    <center><Image width={100} alt="Logo" src='/jobaayo.png' /></center>
    <p className='text-lg text-center mb-4'>Register to JobAayo</p>
    <Formik  
      initialValues={{
        name: '',
        email: '',
        password:'',
        confirm:'',
        role: 'Student',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        handleSave(values);
      }}
    >
      {({ errors, touched }) => (
        <Form >

          <Field name="name"  placeholder="Full Name" className='bg-white w-full border border-slate-300 py-2 pl-5 rounded-md pr-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'/>
         <div className='h-6 text-sm text-red-900 pl-2 pt-0.5'> {errors.name && touched.name ? (
            <div className=''>{errors.name}</div> 
          ) : null} </div>
         
          <Field name="email" type="email" placeholder="Email Address"  className='bg-white w-full border border-slate-300 py-2 pl-5 rounded-md pr-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'/>
          <div className='h-6 text-sm text-red-900 pl-2 pt-0.5'>{errors.email && touched.email ? <div>{errors.email}</div> : null}</div>

          <Field name="password" type="password" placeholder="Enter Your Password"  className='bg-white w-full border border-slate-300 py-2 pl-5 rounded-md pr-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'/>
          <div className='h-6 text-sm text-red-900 pl-2 pt-0.5'>{errors.password && touched.password ? <div>{errors.password}</div> : null}</div>

          <Field name="confirm" type="password" placeholder="Confirm Your Password"  className='bg-white w-full border border-slate-300 py-2 pl-5 rounded-md pr-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'/>
          <div className='h-6 text-sm text-red-900 pl-2 pt-0.5'>{errors.confirm && touched.confirm ? <div>{errors.confirm}</div> : null}</div>

          <Button className='bg-blue-400 text-white text-xl w-full' type="submit"> Register</Button>

        </Form>
      )}
    </Formik>
    <p className='text-sm text-center'>Already have an account? <Link href="\login" className='text-blue-500'>Login instead</Link> </p>
    </CardBody>
    </Card>
  </div>
)
 };

export default Register