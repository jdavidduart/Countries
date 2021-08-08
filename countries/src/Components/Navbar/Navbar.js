import React from 'react';
import './Navbar.scss'
import axios from 'axios'
import { FcAlphabeticalSortingAz, FcAlphabeticalSortingZa } from "react-icons/fc";
export default function Navbar({allInfo, setAllInfo}){

    //busqueda dinamica por cada letra escrita
    async function search(e){
        if(e.target.value.length > 0){
            try {
                setAllInfo({...allInfo, loading:true})
                const results= await axios.get('https://restcountries.eu/rest/v2/name/' + e.target.value);
                setAllInfo({...allInfo, currentInfo:results.data, loading:false, currentPage:1})
            } catch (error) {
                setAllInfo({...allInfo, currentInfo:[], loading:false})
            }
        }else{
            //cuando se borre restablezco la info
            setAllInfo({...allInfo, loading:true})
            const results= await axios.get('https://restcountries.eu/rest/v2/all' + e.target.value);
            setAllInfo({...allInfo, currentInfo:results.data, loading: false, currentPage:1})
        }        
    }

    // filtrados realizados a la información que se esté mostrando
    const orderZ_A=()=>{
        const ordered = allInfo.currentInfo.sort((a,b)=>{
                            if(a.name < b.name) return 1;
                            if(a.name > b.name) return -1;
                            return 0;
                        })
        setAllInfo({...allInfo, currentInfo:ordered})
    }
    
    
    const orderA_Z=()=>{
        const ordered = allInfo.currentInfo.sort((a,b)=>{
                            if(a.name < b.name) return -1;
                            if(a.name > b.name) return 1;
                            return 0;
                        })
        setAllInfo({...allInfo, currentInfo:ordered})
    }

    const orderByLarger = ()=>{
        const ordered = allInfo.currentInfo.sort((a,b)=>{
                            if(a.area < b.area) return 1;
                            if(a.area > b.area) return -1;
                            return 0;
                        })
        setAllInfo({...allInfo, currentInfo:ordered})
    }

    const orderBySmaller = ()=>{
        const ordered = allInfo.currentInfo.sort((a,b)=>{
                            if(a.area < b.area) return -1;
                            if(a.area > b.area) return 1;
                            return 0;
                        })
        setAllInfo({...allInfo, currentInfo:ordered})
    }
    return(
        <div className='navbarWrap'>
            <div className='titleNav'>CountriesApp</div>
            <input className='search' placeholder='Search by name' onKeyUp={search} ></input>
            <div className='filtersWrap'>
                <label>Order by:</label>
                <FcAlphabeticalSortingZa onClick={orderZ_A} className='orderAlp'/>
                <FcAlphabeticalSortingAz onClick={orderA_Z} className='orderAlp'/>
                <button onClick={orderByLarger}>Larger</button>
                <button onClick={orderBySmaller}>Smaller</button>
            </div>
        </div>
    )
}