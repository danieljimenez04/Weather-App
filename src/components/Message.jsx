import React from 'react'

const Message = ({error}) => {
 
  return (
    <div className='background__error'>
      <div className='message'>
      <i class='bx bx-error'></i>{error}
      </div>
    </div>
    
  )
}

export default Message