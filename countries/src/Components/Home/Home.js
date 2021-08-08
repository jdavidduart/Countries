import React, {useState} from 'react';
import './Home.scss';
import Card from '../Card/Card';
import Loading from '../Loading/Loading'
import Pagination from '../Paginate/Pagination';


export default function Home({allInfo}){

    const [currentPage, setCurrentPage] = useState(1)
    const postsPerPage = 16;
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    let currentPosts = allInfo.currentInfo.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);


    if(allInfo.loading === true) return <Loading/>
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
                <Pagination postsPerPage={postsPerPage} totalPosts={allInfo.currentInfo.length} paginate={paginate}/>
            </div>
         )
    }
}