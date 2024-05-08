import './App.css';
// Importing Components
import Menu from './components/Menu';
import CurrentItem from './components/CurrentItem';

// Importing Data
import food from './data/Food';
import Drinks from './data/Drinks';
import Dessert from './data/Dessert';


function App() {
  return (
    <div className="App">
      <Menu food = {food} drinks = {Drinks} dessert = {Dessert}/>
      <CurrentItem/>
    </div>
  );
}

export default App;
