import React from 'react'
import { useState, useEffect } from 'react';

const ChangeInfo = () => {
const [algo, setAlgo] = useState([]);
const [userName,setUserName]=useState('Trial User')
const [info,setInfo]=useState('')

useEffect(() => {
  const algos = JSON.parse(localStorage.getItem('algo'));
  if (algos) {
   setAlgo(algos);
  }
  setInfo('Trial info')
}, []);
function updateInfo()
{
    setInfo('Updated info')
    //send this info to back end
    window.open("/admin",'_self');
}
function dashboard()
    {
        window.open("/admin",'_self');
    }
    function back()
    {
        window.open("/login",'_self');
    }
  return (
    <div className='flex flex-col'>
        <div className='header'>
            <h1 className='heading1'>codeio</h1>
            <h2 className='heading-right'>{userName}</h2>
        </div>
        <div className='flex flex-row'>
            <div className='flex flex-col side-strip'>
                <button className='side-strip-button rounded-3xl' onClick={back}>Back</button>
                <button className='side-strip-button rounded-3xl' onClick={dashboard}>Dashboard</button>
                <button className='side-strip-button-active rounded-3xl'>Change Info</button>
            </div>
            <div class="vl"></div>
            <div className='flex flex-col main-area'>
                <h2 className='m-10'>{algo}</h2>
                <textarea className='infoarea2' defaultValue={info}></textarea>
                <button className='button-2 w-36' onClick={updateInfo}>Update</button>
            </div>
        </div>
    </div>
  )
}

export default ChangeInfo