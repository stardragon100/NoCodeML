const CodeSection=({imports,code}) =>{
   return(
    
    <div className='flex flex-col border-2 background-color1 gap-1'>
        <div className='flex flex-col p-2 rounded-lg gap-1 interior'>
        <p className='self-start '>
                {imports}                
         </p>
         <p className='self-start'>
                {code}
         </p>
         </div>
    </div>

   )
}

export default CodeSection