import React, { useState } from 'react'

const Loader = () => {
  //https://loading.io/
  
  return (
  <div className='loading'>
    
    <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div> 
    <div className='loading__content'>
      <div>
        <p>Please Wait meanwhile loading the page. If you see this description for much time maybe we can´t access your location. Please let us access your location or refresh the page</p> 
      </div>
    </div>
    
    
  </div>
  )
}

export default Loader