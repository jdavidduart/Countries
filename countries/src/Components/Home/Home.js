import React from 'react';
import './Home.scss';
import Card from '../Card/Card';
import Loading from '../Loading/Loading'
import Pagination from '../Paginate/Pagination';


export default function Home({allInfo, setAllInfo}){
    //Creo la paginación, partiendo toda la info en sectores
    const postsPerPage = 16;
    const indexOfLastPost = allInfo.currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    let currentPosts = allInfo.currentInfo.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setAllInfo({...allInfo, currentPage: pageNumber});

    //muestro un loading mientras se obtienen los datos de la API
    if(allInfo.loading === true) return <Loading/>
    
    //renderizo una Card por cada country
    else{
        return(
            <div className='homeWrap'>
                <div className='cardsContainer'>
                    {
                        currentPosts.map( (country, index) =>(
                            <Card country={country} key={index}/>
                            ))
                        }
                </div>
                {
                    allInfo.currentInfo.length === 0 ? <h1>Results not found, try again.</h1> :
                    <Pagination postsPerPage={postsPerPage} totalPosts={allInfo.currentInfo.length} paginate={paginate}/>
                }
            </div>
         )
    }
}