import React,{useState} from 'react'
import { RESTAURANTS } from "../constants";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    const [serachKey, setSearchKey] = useState("");
    const [resturants, setResturants] = useState(RESTAURANTS);

    const searchFun = (serachKey) =>{
       const filteredList = RESTAURANTS.filter( item => item.data.name.includes(serachKey) );
       setResturants(filteredList);
    }
    return (
        <>
        <div className='container'>
            <div className ="search-container">
                <input type="text" value={serachKey} className ="search-key" 
                onChange = { (e) => setSearchKey(e.target.value)} />
                <button className ="reset-btn" onClick = {() => {setResturants(RESTAURANTS); setSearchKey(""); }} >Reset
                </button>
                <button className ="search-btn" onClick = {() => searchFun(serachKey)} >Search</button>
            </div>
            <div className="restaurant-container">
                {resturants && resturants.map( ( item, key) =>{
                        return <RestaurantCard {...item.data }/>
                    }
                )}
            </div>
        </div>    
        </>
    );    
}
export default Body;