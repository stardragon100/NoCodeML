import React from 'react'
const Logistic_resgression = ({setKey,changeLogisticPenalty,changeLogisticClassWeight,changeLogisticRandomState,changeLogisticMaxIter}) => {
    function changePenalty(key,value)
        {
            changeLogisticPenalty(key,value)
        }
  return (
    <div className='flex flex-col w-96 border-2 background-color1 gap-1' key={setKey}>
        <div className='background-color-blue p-2'>
        Logistic Regression
        </div>
        
        <div className='flex flex-col w-80 place-self-center p-2 rounded-lg gap-1 interior'>
            <p className='self-start'>Penalty</p>
            <select name="penalty" id="penalty" className='border-1 h-10' onChange={e=>changeLogisticPenalty(setKey,e.target.value)}>
                <option value="L2">L2</option>
                <option value="none">none</option>
            </select>
            <p className='self-start'>Class Weight</p>
            <select name="class weight" id="class weight" className='border-1 h-10' onChange={e=>changeLogisticClassWeight(setKey,e.target.value)}>
                <option value="L2">balanced</option>
                <option value="none">none</option>
            </select>
            <p className='self-start'>Random State</p>
            <input type='number' className='rounded-lg' onChange={e=>changeLogisticRandomState(setKey,e.target.value)}></input>
            <p className='self-start'>Max Iteration</p>
            <input type='number' className='rounded-lg' onChange={e=>changeLogisticMaxIter(setKey,e.target.value)}></input>
        </div>
    </div>
  )
}

export default Logistic_resgression