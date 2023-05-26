import React from 'react'
import NewComp from './new_comp.js'
import CodeGenearation from './CodeGeneration.jsx'


const main_area = () => {
  return (
    <div className='flex flex-col'>
        <NewComp />
        <CodeGenearation/>
    </div>
  )
}

export default main_area
