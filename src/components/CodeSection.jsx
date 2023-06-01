const CodeSection=({imports,code}) =>{
       console.log(imports[0])
   return(
    
    <div className='flex flex-col border-2 background-color1 gap-1'>
        <div className='flex flex-col p-2 rounded-lg gap-1 interior'>
        <p className='self-start '>
                {imports[0].split('\n').map(str => <p>{str}</p>)}                
         </p>
         <p className='self-start'>
                {code}
         </p>
         </div>
    </div>

   )
}

export default CodeSection