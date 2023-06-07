import React from 'react'
import './style.css'
const Linear_regression = ({setKey,removeLayer}) => {
  return (
    <div className='flex flex-col h-16 w-96 border background-color-blue rounded-lg p-2 text-4xl' key={setKey}>
      <div className='flex flex-row justify-between'>
        Linear Regression
        <button className='text-2xl' onClick={e => removeLayer(setKey)}>X</button>
      </div>
    </div>
  )
}

export default Linear_regression