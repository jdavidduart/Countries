import React, {useState, useEffect} from 'react';
import './Navbar.scss'
import axios from 'axios'
import { FcAlphabeticalSortingAz, FcAlphabeticalSortingZa } from "react-icons/fc";
export default function Navbar({allInfo, setAllInfo}){
    
    async function search(e){
        if(e.target.value.length > 0){
            try {
                setAllInfo({...allInfo, loading:true})
                const results= await axios.get('https://restcountries.eu/rest/v2/name/' + e.target.value);
                setAllInfo({...allInfo, currentInfo:results.data, loading:false})
            } catch (error) {
                setAllInfo({...allInfo, currentInfo:[], loading:false})
            }
        }else{
            setAllInfo({...allInfo, loading:true})
            const results= await axios.get('https://restcountries.eu/rest/v2/all' + e.target.value);
            setAllInfo({...allInfo, currentInfo:results.data, loading: false})
        }        
    }

    return(
        <div className='navbarWrap'>
            <div className='titleNav'>CountriesApp</div>
            <input className='search' placeholder='Search by name' onChange={search}></input>
            <div className='filtersWrap'>
                <label>Order by:</label>
                <FcAlphabeticalSortingZa className='orderAlp'/>
                <FcAlphabeticalSortingAz className='orderAlp'/>
                <button>Larger</button>
                <button>Smaller</button>
            </div>
        </div>
    )
}