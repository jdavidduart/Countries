import React from 'react';
import './Home.scss';
import Card from '../Card/Card';
import Loading from '../Loading/Loading'
export default function Home({allInfo}){
    if(allInfo.loading === true) return <Loading/>
    else{
        return(
            <div className='homeWrap'>
                <div className='cardsContainer'>
                    {
                        allInfo.currentInfo?.map( (country, index) =>(
                            <Card country={country} key={index}/>
                            ))
                        }
                </div>
            </div>
         )
    }
}