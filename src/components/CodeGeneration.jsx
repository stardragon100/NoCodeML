import React from 'react'
import linearRegression from './codeGenneartion/LinearRegression'
function createCode(data){
    console.log(data);
    linearRegression(data);
}
const CodeGeneration = ({data}) => {
  return (
    <div>
        <button className='w-80  m-1 background-color-blue rounded-lg' onClick={()=>createCode(data)}>Generate Code</button>

    </div>
  )
}

export default CodeGeneration