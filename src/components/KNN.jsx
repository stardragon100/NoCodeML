import React from 'react'

const KNN = ({setKey,changeKNNAlgorithm,changeKNNChoice,changeKNNNumber,changeKNNWeights}) => {


  return (
    <div className='flex flex-col h-72 w-44 border-2 p-2 bg-green-200 gap-1' key={setKey}>
      KNN

      <p className='self-start'>Choice</p>
        <select name="choice" id="choice" className='border-1' onChange={e=>changeKNNChoice(setKey,e.target.value)}>
            <option value="classifier">Classifier</option>
            <option value="regression">Regression</option>
        </select>

      <p className='self-start'>N-neighbour</p>
      <input type='number' onChange={e=>changeKNNNumber(setKey,e.target.value)}></input>

      <p className='self-start'>Algorithm</p>
        <select name="algorithm" id="algorithm" className='border-1' onChange={e=>changeKNNAlgorithm(setKey,e.target.value)}>
            <option value="auto">balanced</option>
            <option value="ball_tree">ball_tree</option>
            <option value="kd_tree">kd_tree</option>
            <option value="brute">brute</option>
        </select>

       <p className='self-start'>Weights</p>
        <select name="weights" id="weights" className='border-1' onChange={e=>changeKNNWeights(setKey,e.target.value)}>
            <option value="uniform">uniform</option>
            <option value="distance">distance</option>
        </select>
    </div>
  )
}

export default KNN