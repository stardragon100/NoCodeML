import React from 'react'
import linearRegression from './codeGeneration/CGLinearRegression'
import SVM from './codeGeneration/CGSVM'
import logisticRegression from './codeGeneration/CGLogisticRegression'
import decisionTree from './codeGeneration/CGDecisionTree'
import kMeans from './codeGeneration/CGKMeans'
import kNN from './codeGeneration/CGKnn'
import randomForest from './codeGeneration/CGRandomForest'
import naiveBayes from './codeGeneration/CGNaiveBayes'
import { useState } from 'react'
import CodeSection from './CodeSection'
//import Output from './Output'


const CodeGeneration = ({data}) => {
  
  const [completed,setCompleted]=useState(false)
  const [imports,setImports]=useState('')
  const [code,setCode]=useState('')
  // var imports
  // var code
  function handleCompleted()
  {
      setCompleted(!completed)
  }
  
function createCode(data){
  data.map(layer=>
    { 
        /*if(layer.type==='input')
        {
          input(layer)
        }
        else if(layer.type==='preprocess')
        {
          preprocess(layer)
        }
        else*/ if(layer.type==='linear_regression')
        {  
          var temp=linearRegression(layer)
          setImports(temp.imports)
          setCode(temp.code)
          console.log(imports)
          console.log(code)
        }
        else if(layer.type==='logistic_regression')
        {
          var temp=logisticRegression(layer)
          setImports(temp.imports)
          setCode(temp.code)
          console.log(imports)
          console.log(code)
        }
        else if(layer.type==='knn')
        {
          var temp=kNN(layer)
          setImports(temp.imports)
          setCode(temp.code)
          console.log(imports)
          console.log(code)
        }
        else if(layer.type==='kmeans')
        {
          var temp=kMeans(layer)
          setImports(temp.imports)
          setCode(temp.code)
          console.log(imports)
          console.log(code)
        }
        else if(layer.type==='randomforest')
        {
          var temp=randomForest(layer)
          setImports(temp.imports)
          setCode(temp.code)
          console.log(imports)
          console.log(code)
        }
        else if(layer.type==='decision_tree')
        {
          var temp=decisionTree(layer)
          setImports(temp.imports)
          setCode(temp.code)
          console.log(imports)
          console.log(code)
        }
        else if(layer.type==='svm')
        {
          var temp=SVM(layer)
          setImports(temp.imports)
          setCode(temp.code)
          console.log(imports)
          console.log(code)
        }
        else if(layer.type==='naive_bayes')
        {
          var temp=naiveBayes(layer)
          setImports(temp.imports)
          setCode(temp.code)
          console.log(imports)
          console.log(code)
        }
        /*
        else if(layer.type==='output')
          {
            output(layer)
          }*/
        handleCompleted()
        })
}
  return (
    
      (completed)?
    (
    <div>
      <CodeSection imports={imports} code={code}/>
   </div>
    ):
    (
    <div>
      <button className='w-80  m-1 background-color-blue rounded-lg' onClick={()=>createCode(data)}>Generate Code</button>
    </div>
    )
  )
}

export default CodeGeneration