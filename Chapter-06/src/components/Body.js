import {useState,useEffect} from 'react'
import RestaurantCard from "./RestaurantCard";
import RestaurantCard from "./RestaurantCard";
import Shimmer from './Shimmer';

const searchFun = (allResturants,serachKey) =>{
    return allResturants.filter( item => item?.data?.name?.toLowerCase()?.includes(serachKey?.toLowerCase() ));
}

const Body = () => {

    const [serachKey, setSearchKey] = useState("");
    const [ allResturants, setAllResturants] = useState([]);
    const [ filteredResturants, setFilteredResturants] = useState([]);
    
    useEffect(()=>{
        fetchFun();
    },[]);

    const fetchFun = async () =>{
        await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.2587531&lng=75.78041&page_type=DESKTOP_WEB_LISTING')
        .then((response) => response.json())
        .then((data) => {const restaurantsz = data ?.data?.cards[2]?.data?.data?.cards;
            setAllResturants(restaurantsz);
            setFilteredResturants(restaurantsz); 
        }).catch(error => {
            console.error('There was an error!', error);
        });
    }

    if(!allResturants) return null;
    return ( allResturants.length === 0 ) ? <Shimmer/> : (
        <>
        <div className='container'>
            <div className ="search-container">
                <input type="text" value={serachKey} className ="search-key" 
                onChange = { (e) => setSearchKey(e.target.value)} />
                <button className ="reset-btn" onClick = {() => {setFilteredResturants(allResturants); setSearchKey(""); }} >Reset
                </button>
                <button className ="search-btn" onClick = {() => {
                    const filteredList = searchFun(allResturants,serachKey); setFilteredResturants(filteredList);
                }} >Search</button>
            </div>
            <div className="restaurant-container">
                {(filteredResturants.length === 0) ? <h1>Serach a valid Restaurant..!</h1> :filteredResturants.map( ( item) =>{
                        return <RestaurantCard {...item.data } key={item.data.id} />
                    }
                )}
            </div>
        </div>    
        </>
    );    
}
export default Body;