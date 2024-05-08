import './App.css';
import { useState } from 'react';
// Importing Components
import Menu from './components/Menu';
import CurrentItem from './components/CurrentItem';

// Importing Data
import food from './data/Food';
import Drinks from './data/Drinks';
import Dessert from './data/Dessert';


function App() {
  const [selected, setSelected] = useState({name: "", price: ""});
  return (
    <div className="App">
      <Menu food = {food} drinks = {Drinks} dessert = {Dessert} setSelected = {setSelected}/>
      <CurrentItem name = {selected.name} price = {selected.price}/>
    </div>
  );
}

export default App;
