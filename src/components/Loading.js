import React, { Component } from 'react'
import loading from './loading.gif'

const Loading = ()=> {
  
    return (
      <div className='text-center'>
        <img src={loading} alt="spinning" />
      </div>
    )
  
}

export default Loading
