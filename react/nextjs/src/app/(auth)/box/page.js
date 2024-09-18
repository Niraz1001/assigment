'use client'
import { changebg, changepadding, Changetocircle, Changetoleftmarginde, Changetoleftmarginin, } from '@/redux/reducerSlice/BoxSlice'
import { Button } from '@nextui-org/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Box = () => {
    const {height, width, bgcolor, leftmargin, padding, borderRadius} = useSelector((state) => state.box)
    const dispatch = useDispatch()

    const handlechange =(e)=>{
      dispatch(changebg(e.target.value))
      dispatch(changepadding(e.target.value))
    }

  return (

    <div>

<div 
style={
    {backgroundColor:bgcolor, 
    height:height, 
    width:width, 
    marginLeft:leftmargin,
    padding:padding, 
    margin:"50px",
    borderRadius:borderRadius}
    }>
</div>
<div>
  <input onChange={handlechange} placeholder='value'/>
</div>
<button onClick={()=>dispatch(Changetocircle())}>
click me to change into circle
</button>

<Button onClick={()=>dispatch(Changetoleftmarginin())}>
left
</Button>

<Button onClick={()=>dispatch(Changetoleftmarginde())}>
right
</Button>

    </div>

  )
}

export default Box