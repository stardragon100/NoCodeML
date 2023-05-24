import React from 'react'
const Naive_bayes = ({setKey,changeNaiveBayesEstimator}) => {
  return (
    <div className='flex flex-col w-96 border-2 p-2 background-color1 gap-1' key={setKey}>
      <div className='background-color-blue'>
        Naive Bayes
        </div>
        <div className='flex flex-col w-80 place-self-center p-2 rounded-lg gap-1 interior'>
          <p className='self-start'>Estimator</p>
          
          <select name="estimator" id="estimator" className='border-1 h-10' onChange={e=>changeNaiveBayesEstimator(setKey,e.target.value)}>
              <option value="BernoulliNB">BernoulliNB</option>
              <option value="GaussianNB">GaussianNB</option>
              <option value="ComplementNB">ComplementNB</option>
              <option value="MultinomialNB">MultinomialNB</option>

          </select>
        </div>
    </div>
  )
}
export default Naive_bayes