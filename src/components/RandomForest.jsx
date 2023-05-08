import React from 'react'

const RandomForest = ({setKey,changeRandomChoice,changeRandomEstimators,changeRandomCriterion,changeRandomMinSample,changeRandomMaxFeatures}) => {


  return (
    <div className='flex flex-col h-72 w-44 border-2 p-2 bg-orange-200 gap-1' key={setKey}>
      Random Forest

      <p className='self-start'>Choice</p>
        <select name="choice" id="choice" className='border-1' onChange={e=>changeRandomChoice(setKey,e.target.value)}>
            <option value="classifier">Classifier</option>
            <option value="regression">Regression</option>
        </select>

      <p className='self-start'>No of estimators</p>
      <input type='number' onChange={e=>changeRandomEstimators(setKey,e.target.value)}></input>

      <p className='self-start'>Criterion</p>
        <select name="criterion" id="criterion" className='border-1' onChange={e=>changeRandomCriterion(setKey,e.target.value)}>
            <option value="gini">gini</option>
            <option value="entropy">entropy</option>
            <option value="logloss">log loss</option>
        </select>

      <p className='self-start'>Minimum samples split</p>
      <input type='number' onChange={e=>changeRandomMinSample(setKey,e.target.value)}></input>

      <p className='self-start'>Maximum features</p>
      <input type='number' onChange={e=>changeRandomMaxFeatures(setKey,e.target.value)}></input>

    </div>
  )
}

export default RandomForest