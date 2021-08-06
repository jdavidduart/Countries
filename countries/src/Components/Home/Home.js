import React, { useEffect, useState } from 'react';
import './Home.scss';
import axios from 'axios'
import Card from '../Card/Card'
export default function Home(){
    const [allInfo, setAllInfo]=useState({
        countries:[],
        loading:true,
    });

    useEffect(()=>{
        async function getCountries(){            
            try {
                const results= await axios.get('https://restcountries.eu/rest/v2/all');
                console.log(results)
                setAllInfo(state =>({state, countries:results.data, loading:false}))
            } catch (error) {
                console.error(error)
            }
        }
        getCountries();

    },[])

    return(
        <div className='homeWrap'>
            <div className='cardsContainer'>
                {
                    allInfo.countries.map(country =>(
                        <Card country={country}/>
                    ))
                }
            </div>
        </div>
    )
}