import React, { useState } from 'react'
import CurrentItem from './CurrentItem';
function Item({item, setSelected}) {

    const select = () => {
        setSelected(item);
    }
  return (
    <div className='item'>
        <div className="card">
            <p className="name">{item.name}</p>
            <p>{item.price}</p>
            <div className="button">
                <button onClick={select}>Select</button>
            </div>
        </div>
    </div>
  )
}

export default Item