'use client'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '@/redux/reducerSlice/counterSlice'

export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          className='m-5 p-5 bg-blue-800  text-white' aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
           className='m-5 p-5 bg-blue-800 text-white' aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}