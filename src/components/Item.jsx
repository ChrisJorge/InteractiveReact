import React from 'react'

function Item({item}) {
  return (
    <div className='item'>
        <div className="card">
            <p className="name">{item.name}</p>
            <p>{item.price}</p>
        </div>
    </div>
  )
}

export default Item