'use client'

import React, { useState } from 'react'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { motion } from "framer-motion"
import { FaRegAngry } from "react-icons/fa";
import { IoMdHappy } from "react-icons/io";
import { FaRegSadTear } from "react-icons/fa";
import { TbMoodSuprised } from "react-icons/tb";
import { HiFaceSmile } from "react-icons/hi2";
import { FaHeart } from "react-icons/fa";



const page = () => {

  const[reaction, setreaction]=useState(null)
  const changereaction=(newreaction)=>{
    setreaction(reaction===newreaction ? null :newreaction )
  }

const [opendiv,setdiv]=useState(false)

 const Geratereaction=()=> {
    if (reaction=='like') {
      <button className='flex gap-2' onMouseEnter={() => setdiv(true)}><FaRegThumbsUp size={20} color='blue-600' />Like</button>
    }
    else if (reaction=='love') {
      <button className='flex gap-2' onMouseEnter={()=>setdiv(true)}><FaHeart size={20} color=' text-red-600'/>Love</button>
      };
  }




  return (

    <div className='flex items-center justify-center h-screen' >



       
      <Card  className="max-w-[400px] f">
      <CardHeader className="flex gap-3">
        <Image alt="image"  radius="sm"  src="fbreact.jpg" />
      </CardHeader>

<div>    

<Card className='mt-2 mb-2 mr-4 ml-4 p-3' onMouseLeave={()=>setdiv(false)}>
<motion.div  className='flex gap-5 justify-center items-center '>

<motion.button whileHover={{scale: 1.5}} className='flex text-blue-600' onClick={()=>changereaction('like')}><FaRegThumbsUp size={30} /></motion.button>
<motion.button whileHover={{scale: 1.5}} className='flex text-red-600' onClick={()=>changereaction('love')}><FaHeart size={30} /></motion.button>
<motion.button whileHover={{scale: 1.5}} className='flex text-orange-400' onClick={()=>changereaction('angry')} ><FaRegAngry size={30} /></motion.button>
<motion.button whileHover={{scale: 1.5}} className='flex text-yellow-300' onClick={()=>changereaction('happy')}><IoMdHappy  size={35}  /></motion.button>
<motion.button whileHover={{scale: 1.5}} className='flex  text-yellow-500' onClick={()=>changereaction('sad')}><FaRegSadTear  size={30} /></motion.button>
<motion.button whileHover={{scale: 1.5}} className='flex  text-yellow-700' onClick={()=>changereaction('sup')}><TbMoodSuprised   size={35} /></motion.button>
<motion.button whileHover={{scale: 1.5}} className='flex  text-yellow-500' onClick={()=>changereaction('smile')}><HiFaceSmile   size={35} /></motion.button>

</motion.div>
</Card>

       
        <Divider/>
      <CardBody>
        <div className='flex gap-10 items-center justify-center'>
        <Geratereaction/>
        <button className='flex gap-2' ><FaRegComment size={20}/>Comment</button>
        <button  className='flex gap-2' ><IoIosShareAlt  size={20}/>Share</button>
        </div>
      </CardBody>
      </div> 
    </Card>
  

    </div>
  )
}

export default page