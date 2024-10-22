import { useState } from 'react';
import './country.css'
const Country = ({item ,handelMarksButton}) => {
    const {name ,flags , population , area , ccn3}= item;
    const [visited , setVisited] =useState(false);
    const handelVisited = () =>{
        setVisited(!visited)
        
    }
    
    return (
        <div className={`country ${visited ? 'visite' :'non-visite'}`}>
            <h3 style={{color: visited? 'purple' : 'black'}}>Country Name {name?.common}</h3>
            <img src={flags?.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p>Country Code : {ccn3}</p>
            <button style={{
                marginBottom :'10px'
            }} onClick={()=>handelMarksButton(item)}>Marks As Read</button>
            <br />
            <button onClick={handelVisited}>{visited? "Visited" : "Going"}</button>
            {
                visited? " I have to visited" :"I want to visite"
            }
        </div>
    );
};

export default Country;
