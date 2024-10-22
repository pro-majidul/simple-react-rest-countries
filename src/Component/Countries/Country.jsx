import { useState } from 'react';
import './country.css'
const Country = ({item}) => {
    const {name ,flags , population , area , ccn3}= item;
    const [visited , setVisited] =useState(false);
    const handelVisited = () =>{
        setVisited(!visited)
        
    }
    return (
        <div className={`country ${visited ? 'visite' :'non-visite'}`}>
            <h3>Country Name {name?.common}</h3>
            <img src={flags?.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p>Country Code : {ccn3}</p>
            <button onClick={handelVisited}>{visited? "Visited" : "Going"}</button>
            {
                visited? " I have to visited" :"I want to visite"
            }
        </div>
    );
};

export default Country;
