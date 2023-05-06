import React from 'react'
import { useState } from 'react'
import Linear_regression from './Linear_regression.js'
import Logistic_resgression from './Logistic_resgression.jsx'
import KNN from './KNN.jsx'

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
    setLayers((currentLayers)=>{return[...currentLayers,{key:crypto.randomUUID(),type:'knn'}]})
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
  return (
    <div className='m-12 flex flex-row-reverse gap-2'>
      <div className='w-48 h-48 border-dashed border-2 gap-1'>
        <button className='w-44 border-2 m-1' onClick={()=>addLinearRegression()}>LinearRegression</button>
        <button className='w-44 border-2 m-1' onClick={()=>addLogisticRegression()}>LogisticRegression</button>
        <button className='w-44 border-2 m-1' onClick={()=>addKNN()}>KNN</button>
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
              return <KNN setKey={layer.key}  />
            }
          })}
        </ul>
    </div>

  )
}

export default NewComp