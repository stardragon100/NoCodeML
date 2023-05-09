import React from 'react'
import { useState } from 'react'
import Linear_regression from './Linear_regression.js'
import Logistic_resgression from './Logistic_resgression.jsx'
import KNN from './KNN.jsx'
import KMeans from './KMeans.jsx'
import RandomForest from './RandomForest.jsx'
import Decision_tree from './Decision_tree.jsx'
import Svm from './Svm.jsx'
import Naive_bayes from './Naive_bayes.jsx'


const NewComp = () => {
  const [layers,setLayers]=useState([])
  console.log(layers)
  function addLinearRegression()
  {
    setLayers((currentLayers)=>{return[...currentLayers,{key:crypto.randomUUID(),type:'linear_regression'}]})
  }
  function addLogisticRegression()
  {
    setLayers((currentLayers)=>{return[...currentLayers,{key:crypto.randomUUID(),type:'logistic_regression',class_weight:'Balanced',penalty:'l2',random_state:'none',max_iter:'default'}]})
  }
  function addKNN()
  {
    setLayers((currentLayers)=>{return[...currentLayers,{key:crypto.randomUUID(),type:'knn',choice:'Classifier',number_neighbours:'5',algorithm:'auto',weights:'uniform'}]})
  }
  function addKMeans()
  {
    setLayers((currentLayers)=>{return[...currentLayers,{key:crypto.randomUUID(),type:'kmeans',n_clusters:'8',init:'k-means++',n_init:'10',max_iter:'300',random_state:'0'}]})
  }
  function addRandomForest()
  {
    setLayers((currentLayers)=>{return[...currentLayers,{key:crypto.randomUUID(),type:'randomforest',choice:'Classifier',n_estimators:'100',criterion:'gini',min_sample_split:'2',max_features:'10'}]})
  }
  function addDecisionTree()
  {
    setLayers((currentLayers)=>{return[...currentLayers,{key:crypto.randomUUID(),type:'decision_tree',splitter:'best',min_samples_split:'2',random_state:''}]})
  }
  function addSvm()
  {
    setLayers((currentLayers)=>{return[...currentLayers,{key:crypto.randomUUID(),type:'svm',c:'1.0',kernel:'rbf',degree:'3',gamma:'scale',random_state:''}]})
  }
  function addNaiveBayes()
  {
    setLayers((currentLayers)=>{return[...currentLayers,{key:crypto.randomUUID(),type:'naive_bayes',estimator:''}]})
  }
  function changeDecisionSplitter(key,splitter)
  {
    setLayers(currentLayers => {
      return currentLayers.map(layer=>{
      if(layer.key===key){
          return {...layer,splitter}
        }
      return layer
    })
    })
  }
  function changeDecisionMinSamplesSplit(key,min_samples_split)
  {

    setLayers(currentLayers => {
      return currentLayers.map(layer=>{
      if(layer.key===key){
          return {...layer,min_samples_split}
        }
      return layer
    })
    })
  }
  function changeDecisionRandomState(key,random_state)
  {

    setLayers(currentLayers => {
      return currentLayers.map(layer=>{
      if(layer.key===key){
          return {...layer,random_state}
        }
      return layer
    })
    })
  }
  function changeSvmC(key,C)
  {
    setLayers(currentLayers => {
      return currentLayers.map(layer=>{
      if(layer.key===key){
          return {...layer,C}
        }
      return layer
    })
    })
  } 
  function changeSvmKernel(key,kernel)
  {
    setLayers(currentLayers => {
      return currentLayers.map(layer=>{
      if(layer.key===key){
          return {...layer,kernel}
        }
      return layer
    })
    })
  }
  function changeSvmDegree(key,degree)
  {
    setLayers(currentLayers => {
      return currentLayers.map(layer=>{
      if(layer.key===key){
          return {...layer,degree}
        }
      return layer
    })
    })
  }
  function changeSvmGamma(key,gamma)
  {
    setLayers(currentLayers => {
      return currentLayers.map(layer=>{
      if(layer.key===key){
          return {...layer,gamma}
        }
      return layer
    })
    })
  }
  function changeSvmRandomState(key,random_state)
  {
    setLayers(currentLayers => {
      return currentLayers.map(layer=>{
      if(layer.key===key){
          return {...layer,random_state}
        }
      return layer
    })
    })
  }
  function changeNaiveBayesEstimator(key,estimator)
  {
    setLayers(currentLayers => {
      return currentLayers.map(layer=>{
      if(layer.key===key){
          return {...layer,estimator}
        }
      return layer
    })
    })
  }
  
 
  function changeLogisticPenalty(key,penalty)
  {

    setLayers(currentLayers => {
      return currentLayers.map(layer=>{
      if(layer.key===key){
        console.log(key+'   '+layer.key)
          console.log(penalty)
          return {...layer,penalty}
        }
      return layer
    })
    })
  }
  function changeLogisticClassWeight(key,class_weight)
  {

    setLayers(currentLayers => {
      return currentLayers.map(layer=>{
      if(layer.key===key){
          return {...layer,class_weight}
        }
      return layer
    })
    })
  }
  function changeLogisticRandomState(key,random_state)
  {

    setLayers(currentLayers => {
      return currentLayers.map(layer=>{
      if(layer.key===key){
          return {...layer,random_state}
        }
      return layer
    })
    })
  }
  function changeLogisticMaxIter(key,max_iter)
  {

    setLayers(currentLayers => {
      return currentLayers.map(layer=>{
      if(layer.key===key){
          return {...layer,max_iter}
        }
      return layer
    })
    })
  }
  function changeKNNChoice(key,choice)
  {

    setLayers(currentLayers => {
      return currentLayers.map(layer=>{
      if(layer.key===key){
          return {...layer,choice}
        }
      return layer
    })
    })
  }
  function changeKNNNumber(key,number_neighbours)
  {

    setLayers(currentLayers => {
      return currentLayers.map(layer=>{
      if(layer.key===key){
          return {...layer,number_neighbours}
        }
      return layer
    })
    })
  }
  
  function changeKNNAlgorithm(key,algorithm)
  {

    setLayers(currentLayers => {
      return currentLayers.map(layer=>{
      if(layer.key===key){
          return {...layer,algorithm}
        }
      return layer
    })
    })
  }
  function changeKNNWeights(key,weights)
  {

    setLayers(currentLayers => {
      return currentLayers.map(layer=>{
      if(layer.key===key){
          return {...layer,weights}
        }
      return layer
    })
    })
  }
  function changeKMeansClusterNo(key,n_clusters)
  {

    setLayers(currentLayers => {
      return currentLayers.map(layer=>{
      if(layer.key===key){
          return {...layer,n_clusters}
        }
      return layer
    })
    })
  }
  function changeKMeansInit(key,init)
  {

    setLayers(currentLayers => {
      return currentLayers.map(layer=>{
      if(layer.key===key){
          return {...layer,init}
        }
      return layer
    })
    })
  }
  function changeKMeansInitNo(key,n_init)
  {

    setLayers(currentLayers => {
      return currentLayers.map(layer=>{
      if(layer.key===key){
          return {...layer,n_init}
        }
      return layer
    })
    })
  }
  function changeKMeansRandom(key,random_state)
  {

    setLayers(currentLayers => {
      return currentLayers.map(layer=>{
      if(layer.key===key){
          return {...layer,random_state}
        }
      return layer
    })
    })
  }
  function changeKMeansMaxIter(key,max_iter)
  {

    setLayers(currentLayers => {
      return currentLayers.map(layer=>{
      if(layer.key===key){
          return {...layer,max_iter}
        }
      return layer
    })
    })
  }

  function changeRandomChoice(key,choice)
  {

    setLayers(currentLayers => {
      return currentLayers.map(layer=>{
      if(layer.key===key){
          return {...layer,choice}
        }
      return layer
    })
    })
  }
  function changeRandomEstimators(key,n_estimators)
  {

    setLayers(currentLayers => {
      return currentLayers.map(layer=>{
      if(layer.key===key){
          return {...layer,n_estimators}
        }
      return layer
    })
    })
  }
  function changeRandomCriterion(key,criterion)
  {

    setLayers(currentLayers => {
      return currentLayers.map(layer=>{
      if(layer.key===key){
          return {...layer,criterion}
        }
      return layer
    })
    })
  }
  function changeRandomMinSample(key,min_sample_split)
  {

    setLayers(currentLayers => {
      return currentLayers.map(layer=>{
      if(layer.key===key){
          return {...layer,min_sample_split}
        }
      return layer
    })
    })
  }
  function changeRandomMaxFeatures(key,max_features)
  {

    setLayers(currentLayers => {
      return currentLayers.map(layer=>{
      if(layer.key===key){
          return {...layer,max_features}
        }
      return layer
    })
    })
  }
  return (
    <div className='m-12 flex flex-row-reverse gap-2'>
      <div className='w-48 h-48 border-dashed border-2 gap-1'>
        <button className='w-44 border-2 m-1' onClick={()=>addLinearRegression()}>LinearRegression</button>
        <button className='w-44 border-2 m-1' onClick={()=>addLogisticRegression()}>LogisticRegression</button>
        <button className='w-44 border-2 m-1' onClick={()=>addKNN()}>KNN</button>
        <button className='w-44 border-2 m-1' onClick={()=>addKMeans()}>K-means</button>
        <button className='w-44 border-2 m-1' onClick={()=>addRandomForest()}>Random Forest</button>
        <button className='w-44 border-2 m-1' onClick={()=>addDecisionTree()}>Decision Tree</button>
        <button className='w-44 border-2 m-1' onClick={()=>addSvm()}>SVM</button>
        <button className='w-44 border-2 m-1' onClick={()=>addNaiveBayes()}>Naive Bayes</button>
      </div>
        <ul className='h-48 flex flex-row gap-2 p-1'>
          {
            layers.map(layer=>
            {
              if(layer.type==='linear_regression')
            {
              return <Linear_regression setKey={layer.key} />
            }
            if(layer.type==='logistic_regression')
            {
              return <Logistic_resgression setKey={layer.key} changeLogisticPenalty={changeLogisticPenalty} changeLogisticClassWeight={changeLogisticClassWeight} changeLogisticRandomState={changeLogisticRandomState} changeLogisticMaxIter={changeLogisticMaxIter}/>
            }
            if(layer.type==='knn')
            {
              return <KNN setKey={layer.key} changeKNNChoice={changeKNNChoice} changeKNNAlgorithm={changeKNNAlgorithm} changeKNNNumber={changeKNNNumber} changeKNNWeights={changeKNNNumber} />
            }
            if(layer.type==='kmeans')
            {
              return <KMeans setKey={layer.key} changeKMeansClusterNo={changeKMeansClusterNo} changeKMeansInit={changeKMeansInit} changeKMeansInitNo={changeKMeansInitNo} changeKMeansMaxIter={changeKMeansMaxIter} changeKMeansRandom={changeKMeansRandom} />
            }
            if(layer.type==='randomforest')
            {
              return <RandomForest setKey={layer.key} changeRandomChoice={changeRandomChoice} changeRandomCriterion={changeRandomCriterion} changeRandomEstimators={changeRandomEstimators} changeRandomMaxFeatures={changeRandomMaxFeatures} changeRandomMinSample={changeRandomMinSample} />
            }
            if(layer.type==='decision_tree')
            {
              return <Decision_tree setKey={layer.key} changeDecisionSplitter={changeDecisionSplitter} changeDecisionMinSamplesSplit={changeDecisionMinSamplesSplit} changeDecisionRandomState={changeDecisionRandomState}/>
            }
            if(layer.type==='svm')
            {
              return <Svm setKey={layer.key} changeSvmC={changeSvmC} changeSvmKernel={changeSvmKernel} changeSvmDegree={changeSvmDegree} changeSvmGamma={changeSvmGamma} changeSvmRandomState={changeSvmRandomState}/>
            }
            if(layer.type==='naive_bayes')
            {
              return <Naive_bayes setKey={layer.key} changeNaiveBayesEstimator={changeNaiveBayesEstimator} />
            }
          })}
        </ul>
    </div>

  )
}

export default NewComp