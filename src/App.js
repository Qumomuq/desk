import {Routes,Route,Link} from 'react-router-dom'
import './styles/App.css';
import Example from "./components/navbar/Navbar.jsx"
import Navbar from "./components/navbar/Navbar.jsx";
import Body from "./components/body/Body";
function App() {
  return (
    <div className="App">
      <Navbar/>
        <Body/>
    </div>
  );
}

export default App;
