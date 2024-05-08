import React from 'react'
import Section from './Section'
function Menu({food, drinks, dessert, setSelected}) {
  return (
    <div className='Menu'>
        <h1>Menu</h1>
        <hr/>
        <Section title={"Food"} items = {food} setSelected = {setSelected}/>
        <hr/>
        <Section title={"Drinks"} items = {drinks} setSelected = {setSelected}/>
        <hr />
        <Section title = {"Dessert"} items = {dessert} setSelected = {setSelected}/>
    </div>
  )
}

export default Menu