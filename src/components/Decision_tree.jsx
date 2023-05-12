import React from 'react'
const Decision_Tree = ({setKey,changeDecisionSplitter,changeDecisionMinSamplesSplit,changeDecisionRandomState}) => {
    function changeSplitter(key,value)
        {
            changeDecisionSplitter(key,value)
        }
  return (
    <div className='flex flex-col h-72 w-44 border-2 p-2 bg-blue-200 gap-1' key={setKey}>
        Decision Tree
        <p className='self-start'>Splitter</p>
        
        <select name="splitter" id="splitter" className='border-1' onChange={e=>changeSplitter(setKey,e.target.value)}>
            <option value="best">best</option>
            <option value="random">random</option>
        </select>
        <p className='self-start'>Min Samples Split</p>
        <input type='number' onChange={e=>changeDecisionMinSamplesSplit(setKey,e.target.value)}></input>
        <p className='self-start'>Random State</p>
        <input type='number' onChange={e=>changeDecisionRandomState(setKey,e.target.value)}></input>
    
    </div>
  )
}

export default Decision_Tree