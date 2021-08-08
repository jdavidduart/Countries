import React, {useState} from 'react';
import './Card.scss';
import {FcLandscape, FcConferenceCall, FcCollapse, FcCallback} from "react-icons/fc";

export default function Card ({country}){
    
    //Diseño cada card con información relevante


    return(
        <div className='cardWrap'>
            <div className='cardInfo'>
                <img src={country.flag} alt='flag'></img>
                <div className='cardDetail'>
                    <div className='arrowWrap'><FcCollapse /></div>
                    <h3 className='cardTitle'>{country.name}</h3>
                    <div className='capital'>Capital: {country.capital}</div>
                    <div className='area'><FcLandscape className='iconCard'/> {country.area} km<sup>2</sup></div>
                    <div><FcConferenceCall className='iconCard'/> {country.population} H</div>
                    <div><FcCallback className='iconCard'/> +{country.callingCodes[0]}</div>
                    
                </div>
                
            </div>
        </div>
        )
}