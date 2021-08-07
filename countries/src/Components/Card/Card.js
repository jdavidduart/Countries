import React, {useState} from 'react';
import './Card.scss';
import {FcLandscape, FcConferenceCall, FcCollapse, FcCallback} from "react-icons/fc";

export default function Card ({country}){
    const [isOpen, setIsOpen] = useState (false);
    const toggleInfo = (e) =>{
        if(!isOpen)setIsOpen(true)
        else{ setIsOpen(false)}
    }

    return(
        <div className='cardWrap'>
            <div className='cardInfo'>
                <img src={country.flag} alt='flag'></img>
                <div className='cardDetail'>
                    <div className='arrowWrap'><FcCollapse className='arrowIcon' onClick={toggleInfo} /></div>
                    <h3 className='cardTitle'>{country.name}</h3>
                    <div className='capital'>Capital: {country.capital}</div>
                    <div className='area'><FcLandscape/> {country.area} km<sup>2</sup></div>
                    <div><FcConferenceCall/> {country.population} Habitants</div>
                    <div><FcCallback/> +{country.callingCodes[0]}</div>
                    
                </div>
                
            </div>
        </div>
        )
}