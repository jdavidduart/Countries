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
  //Obtengo la informacíon inicial de las countries
  const [allInfo, setAllInfo]=useState({
    countries:[],
    currentInfo:[],
    loading:true,
    currentPage:1
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

  //renderizo Home y Navbar en la ruta '/' con disponibilidad de escalar aun más el proyecto

  return (
    <Router>
      <div className='App'>
          <Route exact path='/'>
            <Navbar allInfo={allInfo} setAllInfo={setAllInfo}/>
            <Home allInfo={allInfo} setAllInfo={setAllInfo}/>

          </Route>
      </div>
    </Router>
  );
}

export default App;
