import React from 'react';
import './Navbar.scss'

import { FcAlphabeticalSortingAz, FcAlphabeticalSortingZa } from "react-icons/fc";
export default function Navbar(){
    const oncj=()=>{}
    return(
        <div className='navbarWrap'>
            <div className='titleNav'>CountriesApp</div>
            <input className='search' placeholder='Search by name'></input>
            <div className='filtersWrap'>
                <label>Order by:</label>
                <FcAlphabeticalSortingZa className='orderAlp' onClick={oncj}/>
                <FcAlphabeticalSortingAz className='orderAlp'/>
                <button>Larger</button>
                <button>Smaller</button>
            </div>
        </div>
    )
}