import React, { useEffect } from 'react';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';
import './SearchPage.css'
import response from '../response';
import { Link } from 'react-router-dom'
import Search from './Search'
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Image'
import ImageIcon from '@mui/icons-material/Image';
import  LocalOfferIcon  from '@mui/icons-material/LocalOffer';
import  RoomIcon  from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';

function SearchPage() {
    const [{term},dispatch] = useStateValue()
    const {data} = useGoogleSearch(term)

    


   //const data = response


    console.log(data);
    return (
        <div className='searchpage'>
            <div className="searchpage__header">

           <Link to="/">
            <img className='searchpage__logo' src="http://logo-logos.com/2016/11/Google_logo_logotype.png" alt="" />
           </Link>
           <div className="searchpage__header--body">
            <Search hideButtons></Search>
           
           <div className='searchpage__options'>

            <div className="searchpage__options--left">

<div className="searchpage__option">
    <SearchIcon></SearchIcon>
    <Link to='/all'>All</Link>
</div>
<div className="searchpage__option">
<DescriptionIcon></DescriptionIcon>
    <Link to='/news'>News</Link>
</div>
<div className="searchpage__option">
<ImageIcon></ImageIcon>
    <Link to='/images'>Images</Link>
</div>
<div className="searchpage__option">
<LocalOfferIcon></LocalOfferIcon>
    <Link to='/shopping'>Shopping</Link>
</div>
<div className="searchpage__option">
<RoomIcon></RoomIcon>
    <Link to='/maps'>Maps</Link>
</div>
<div className="searchpage__option">
<MoreVertIcon></MoreVertIcon>
    <Link to='/more'>More</Link>
</div>
            </div>
            <div className="searchpage__options--right">
<div className="searchpage__option">
    <Link to='/settings'>Settings</Link>

</div>
<div className="searchpage__option">
    <Link to='/tools'>Tools</Link>
</div>
            </div>
           </div>
           </div>



            </div>
            {term && (

                    
                    <div className="searchpage__results">
                    
            <p className='searchpage__result--count'>
                About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
            </p>
                
            
            {data?.items.map(item => (
                <div className='searchpage__result'>
<a className='nounderline' href={item.link}> {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
    <img className='searchpage__result--img' src={item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src} alt="" />
    )} {item.displayLink} ▽ </a>
                <a href={item.link} className='searchpage__result--title'><h2>{item.title}</h2></a>
                <p className='searchpage__result--snippet'>{item.snippet}</p>
                </div>
            ))}
            </div>
            )} :
        </div>
    );
}

export default SearchPage;