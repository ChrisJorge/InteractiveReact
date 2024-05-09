import React, { useState } from 'react'
function Item({item, setSelected}) {

    const select = () => {
        setSelected(item);
    }
    
  return (
    <div className='itemContainer'>
            <div className="nameContainer">
                <p className="name">{item.name}</p>
            </div>
            <div className="button">
                <button onClick={select}>Select</button>
            </div>
    </div>
  )
}

export default Item