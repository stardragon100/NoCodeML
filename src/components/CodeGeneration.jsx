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
import inputs from './codeGeneration/CGInput'
import preprocess from './codeGeneration/CGPreprocess'
import outPut from './codeGeneration/CGOutput'
import axios from 'axios'

const CodeGeneration = ({data,selectedOption}) => {
  
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
  var temp1=''
  var temp2=''
  data.map(layer=>
    { 
        if(layer.type==='input')
        {
          var temp=inputs(layer,selectedOption)
          console.log(temp)
          temp1=temp1+temp.imports
          temp2=temp2+temp.code
          setImports(temp1)
          setCode(temp2)
        }
        
        else if(layer.type==='preprocess')
        {
          var temp=preprocess(layer)
          temp1=temp1+temp.imports
          temp2=temp2+temp.code
          setImports(temp1)
          setCode(temp2)
        }
        else if(layer.type==='linear_regression')
        {  
          var temp=linearRegression(layer)
          temp1=temp1+temp.imports
          temp2=temp2+temp.code
          setImports(temp1)
          setCode(temp2)
        }
        else if(layer.type==='logistic_regression')
        {
          var temp=logisticRegression(layer)
          temp1=temp1+temp.imports
          temp2=temp2+temp.code
          setImports(temp1)
          setCode(temp2)
        }
        else if(layer.type==='knn')
        {
          var temp=kNN(layer)
          temp1=temp1+temp.imports
          temp2=temp2+temp.code
          setImports(temp1)
          setCode(temp2)
        }
        else if(layer.type==='kmeans')
        {
          var temp=kMeans(layer)
          temp1=temp1+temp.imports
          temp2=temp2+temp.code
          setImports(temp1)
          setCode(temp2)
        }
        else if(layer.type==='randomforest')
        {
          var temp=randomForest(layer)
          temp1=temp1+temp.imports
          temp2=temp2+temp.code
          setImports(temp1)
          setCode(temp2)
        }
        else if(layer.type==='decision_tree')
        {
          var temp=decisionTree(layer)
          temp1=temp1+temp.imports
          temp2=temp2+temp.code
          setImports(temp1)
          setCode(temp2)
        }
        else if(layer.type==='svm')
        {
          var temp=SVM(layer)
          temp1=temp1+temp.imports
          temp2=temp2+temp.code
          setImports(temp1)
          setCode(temp2)
        }
        else if(layer.type==='naive_bayes')
        {
          var temp=naiveBayes(layer)
          temp1=temp1+temp.imports
          temp2=temp2+temp.code
          setImports(temp1)
          setCode(temp2)
        }
        
        else if(layer.type==='output')
          {
            var temp=outPut(layer)
            temp1=temp1+temp.imports
            temp2=temp2+temp.code
            setImports(temp1)
            setCode(temp2)
          }
        handleCompleted()
        var temp3=temp1+'\n'+temp2 ;
        //e.preventDefault();
        console.log("hello")
        axios.defaults.withCredentials = true //since no ssl..
        const response= axios.post('http://localhost:8080/codegeneration', {
            data : {
                code:temp3,
                //password:this.state.password,
            }})
            console.log("sent?");
        })
}
async function handleDownload (e)  {
  // const downloadEndpoint = 'http://localhost:8080/download'; // Set the backend endpoint for file download
  axios.defaults.withCredentials = true
  let blob = await fetch('http://localhost:8080/download').then(r => r.blob());
  console.log(blob)
  const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'mynewfile1.py'); // Set the desired filename
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
  // const response=axios.get(
  //   "http://localhost:8080/download", //hosted with server
  //   { responseType: 'blob' }) 
  //   .then((response) => {
  //     console.log('hi');
  //     const url = window.URL.createObjectURL(new Blob([response.data]));
  //     const link = document.createElement('a');
  //     link.href = url;
  //     link.setAttribute('download', 'mynewfile1.py'); // Set the desired filename
  //     document.body.appendChild(link);
  //     link.click();
  //     link.parentNode.removeChild(link);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
};

  return (
    
      (completed)?
    (
    <div>
      <CodeSection imports={imports} code={code}/>
      <button onClick={handleDownload}>Download</button>
   </div>
    ):
    (
    <div className='center'>
      <button className='w-80  m-1 background-color-blue rounded-lg' onClick={()=>createCode(data)}>Generate Code</button>
    </div>
    )
  )
}

export default CodeGeneration