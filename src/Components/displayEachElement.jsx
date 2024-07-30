import React from 'react'

const DisplayEachElement = ({element,del}) => {

    
  return (
    <div className='flex flex-row'>
      <div>{element}</div>
      <button
        onClick={del}
      >Remove Item</button>
    </div>
  )
}

export default DisplayEachElement
