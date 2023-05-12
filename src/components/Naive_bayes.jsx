import React from 'react'
const Naive_bayes = ({setKey,changeNaiveBayesEstimator}) => {
  return (
    <div className='flex flex-col h-72 w-44 border-2 p-2 bg-blue-200 gap-1' key={setKey}>
        Naive Bayes
        <p className='self-start'>Estimator</p>
        
        <select name="estimator" id="estimator" className='border-1' onChange={e=>changeNaiveBayesEstimator(setKey,e.target.value)}>
            <option value="BernoulliNB">BernoulliNB</option>
            <option value="GaussianNB">GaussianNB</option>
            <option value="ComplementNB">ComplementNB</option>
            <option value="MultinomialNB">MultinomialNB</option>

        </select>
    
    </div>
  )
}
export default Naive_bayes