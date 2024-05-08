import React from 'react'
import Section from './Section'
function Menu({food, drinks, dessert}) {
  return (
    <div className='Menu'>
        <h1>Menu</h1>
        <hr/>
        <Section title={"Food"} items = {food}/>
        <hr/>
        <Section title={"Drinks"} items = {drinks}/>
        <hr />
        <Section title = {"Dessert"} items = {dessert} />
    </div>
  )
}

export default Menu