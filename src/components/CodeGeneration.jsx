import React from 'react'
import linearRegression from './codeGeneration/LinearRegression'
//give import statements of all functions

function createCode(data){
 
  data.map(layer=>
    { 
        if(layer.type==='input')
        {
          input(layer)
        }
        else if(layer.type==='preprocess')
        {
          preprocess(layer)
        }
        else if(layer.type==='linear_regression')
        {  
          linearRegression(layer)
        }
        else if(layer.type==='logistic_regression')
        {
          logisticRegression(layer)
        }
        else if(layer.type==='knn')
        {
          knn(layer)
        }
        else if(layer.type==='kmeans')
        {
          kMeans(layer)
        }
        else if(layer.type==='randomforest')
        {
          randomForest(layer)
        }
        else if(layer.type==='decision_tree')
        {
          decisionTree(layer)
        }
        else if(layer.type==='svm')
        {
          svm(layer)
        }
        else if(layer.type==='naive_bayes')
        {
          naiveBayes(layer)
        }
        else if(layer.type==='output')
          {
            output(layer)
          }
    })
  
}
const CodeGeneration = ({data}) => {
  return (
    <div>
        <button className='w-80  m-1 background-color-blue rounded-lg' onClick={()=>createCode(data)}>Generate Code</button>
    </div>
  )
}

export default CodeGeneration