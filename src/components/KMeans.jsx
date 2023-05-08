import React from 'react'

const KMeans = ({setKey,changeKMeansClusterNo,changeKMeansInit,changeKMeansInitNo,changeKMeansRandom,changeKMeansMaxIter}) => {


  return (
    <div className='flex flex-col h-72 w-44 border-2 p-2 bg-yellow-200 gap-1' key={setKey}>
      K-means

      <p className='self-start'>No of clusters</p>
      <input type='number' onChange={e=>changeKMeansClusterNo(setKey,e.target.value)}></input>

      <p className='self-start'>Initial cluster centroid</p>
        <select name="init" id="init" className='border-1' onChange={e=>changeKMeansInit(setKey,e.target.value)}>
            <option value="k-means++">k-means++</option>
            <option value="random">Random</option>
        </select>

      <p className='self-start'>Times run on cluster centroids</p>
      <input type='number' onChange={e=>changeKMeansInitNo(setKey,e.target.value)}></input>

      <p className='self-start'>Maximum iterations</p>
      <input type='number' onChange={e=>changeKMeansMaxIter(setKey,e.target.value)}></input>

      <p className='self-start'>Random state</p>
      <input type='number' onChange={e=>changeKMeansRandom(setKey,e.target.value)}></input>

    </div>
  )
}

export default KMeans