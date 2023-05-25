import React from 'react'
const Preprocess = ({setKey,changePreprocess}) => {
  return (
    <div className='flex flex-col w-96 border-2 p-2 background-color1 gap-1' key={setKey}>
      <div className='background-color-blue'>
        Pre Processing
        </div>
        <div className='flex flex-col w-80 place-self-center p-2 rounded-lg gap-1 interior'>
          <p className='self-start'>Scaler</p>
          
          <select name="scaler" id="scaler" className='border-1 h-10' onChange={e=>changePreprocess(setKey,e.target.value)}>
              <option value="StandardScaler">Standard Scaler</option>
              <option value="MinMaxScaler">Min Max Scaler</option>
          </select>
        </div>
    </div>
  )
}
export default Preprocess