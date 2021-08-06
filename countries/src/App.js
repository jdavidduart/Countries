import './App.scss';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
          <Route path='/'>
            <Navbar/>
          </Route>
          <Route exact path='/'>
            <Home/> 
          </Route>
      </div>
    </Router>
  );
}

export default App;
