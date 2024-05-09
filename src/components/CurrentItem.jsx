import React from 'react'

function CurrentItem({item}) {
  return (
    <div className='CurrentItem'>
        <h1>Current Item</h1>
    <div className="image">
        <img src = {require(`../../public/images/${item.image}`)} alt = {item.name}/>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <h3>{item.price}</h3>
    </div>
    </div>
  )
}

export default CurrentItem