import React from 'react'
import Item from './Item'
function Section({title, items}) {
  return (
    <div>
        <h3>{title}</h3>
        {items.map((item, i) => {
            return <Item key = {i} item = {item}/>
        })}
    </div>
  )
}

export default Section