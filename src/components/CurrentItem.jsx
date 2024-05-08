import React from 'react'

function CurrentItem({name,price}) {
  return (
    <div className='CurrentItem'>
        <h1>CurrentItem</h1>
    {name}
    {price}
    </div>
  )
}

export default CurrentItem