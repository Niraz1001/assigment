'use client'
import { Button } from '@nextui-org/react'
import React, { useState } from 'react'

const Calculator = () => {
    const [output, setOutput] = useState('')

  return (
    <div className='bg-black w-80 p-2 '>
        <div className='text-white'>{output}</div>
        <Button className='bg-gray-200' onClick={()=>setOutput('') }>AC</Button>
        <Button className='bg-gray-200' onClick={()=>setOutput(eval(output*-1)) }>+/-</Button>
        <Button className='bg-gray-200' onClick={()=>setOutput(output/100) }>%</Button>
        <Button className='bg-gray-200 'onClick={()=>setOutput(output+'/') }>/</Button>
        <Button onClick={()=>setOutput(output+ 9) }>9</Button>
        <Button onClick={()=>setOutput(output+ 8)}  >8</Button>
        <Button onClick={()=>setOutput(output+ 7)} >7</Button>
        <Button onClick={()=>setOutput(output+ 6)} >6</Button>
        <Button className='bg-orange-500' onClick={()=>setOutput(output+'*') }>*</Button>
        <Button onClick={()=>setOutput(output+ 5)} >5</Button>
        <Button onClick={()=>setOutput(output+ 4)} >4</Button>
        <Button className='bg-orange-500' onClick={()=>setOutput(output+'-') }>-</Button>
        <Button onClick={()=>setOutput(output+ 3)} >3</Button>
        <Button onClick={()=>setOutput(output+ 2)} >2</Button>
        <Button onClick={()=>setOutput(output+ '+') } className='bg-orange-500'>+</Button>
        <Button onClick={()=>setOutput(output+ 1)} >1</Button>
        <Button onClick={()=>setOutput(output+ 0)} >0</Button>
        <Button onClick={()=>setOutput(output+ '.')}>.</Button>
        <Button onClick={()=> setOutput(eval(output) )}>=</Button>
    </div>
  )
}

export default Calculator