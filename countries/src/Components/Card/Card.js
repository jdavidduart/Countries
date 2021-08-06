import React from 'react';
import './Card.scss';
import {FcLandscape} from "react-icons/fc";

export default function Card ({country}){
    return(
        <div className='cardWrap'>
            <div className='cardInfo'>
                <img src={country.flag} alt='flag'></img>
                <div className='cardTitle'>{country.name}</div>
                <div>
                    <div>Capital: {country.capital}</div>
                    <div><FcLandscape/> {country.area} km<sup>2</sup></div>
                </div>
            </div>
        </div>
    )
}