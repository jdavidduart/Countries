import './App.scss';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios'
import Navbar from './Components/Navbar/Navbar';

function App() {

  const [allInfo, setAllInfo]=useState({
    countries:[],
    currentInfo:[],
    loading:true,
  
  });

  useEffect(()=>{
      async function getCountries(){            
          try {
              const results= await axios.get('https://restcountries.eu/rest/v2/all');
              setAllInfo(state => ({...state, countries:results.data, loading:false, currentInfo:results.data}))
          } catch (error) {
              console.error(error)
          }
      }
      getCountries();

  },[])

  return (
    <Router>
      <div className='App'>
          <Route exact path='/'>
            <Navbar allInfo={allInfo} setAllInfo={setAllInfo}/>
            <Home allInfo={allInfo}/>

          </Route>
      </div>
    </Router>
  );
}

export default App;
