import React from 'react'
const Svm = ({setKey,changeSvmC,changeSvmKernel,changeSvmDegree,changeSvmGamma,changeSvmRandomState}) => {
    //function changeKernel(key,value)
       // {
       //     changeSvmKernel(key,value)
       // }
  return (
    <div className='flex flex-col h-72 w-44 border-2 p-2 bg-blue-200 gap-1' key={setKey}>
        SVM
        <p className='self-start'>C</p>
        <input type='float' onChange={e=>changeSvmC(setKey,e.target.value)}></input>
        <p className='self-start'>Kernel</p>
        <select name="kernel" id="kernel" className='border-1' onChange={e=>changeSvmKernel(setKey,e.target.value)}>
            <option value="rbf">rbf</option>
            <option value="Linear">linear</option>
            <option value="poly">poly</option>
            <option value="sigmoid">sigmoid</option>
            <option value="precomputed">precomputed</option>
        </select>
        <p className='self-start'>Degree</p>
        <input type='number' onChange={e=>changeSvmDegree(setKey,e.target.value)}></input>
        <p className='self-start'>Gamma</p>
        <select name="gamma" id="gamma" className='border-1' onChange={e=>changeSvmGamma(setKey,e.target.value)}>
            <option value="scale">scale</option>
            <option value="auto">auto</option>
        </select>
        <p className='self-start'>Random State</p>
        <input type='number' onChange={e=>changeSvmRandomState(setKey,e.target.value)}></input>
    </div>
  )
}

export default Svm