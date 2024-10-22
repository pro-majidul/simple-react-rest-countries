import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import '../Country.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visiteCountries, setVisiteCountries] = useState([]);
    const [visiteFlag , setVisiteFlag] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handelMarksButton = countries =>{
        const newVisiteCountries = [...visiteCountries , countries]
        setVisiteCountries(newVisiteCountries)
    }
    const handelVisiteFlag =(flags)=>{
        const newVisiteFlag = [...visiteFlag , flags];
        setVisiteFlag(newVisiteFlag)
    }
    return (
        <div>
            <h1>Countries {countries.length}</h1>
            {/* visite country name */}
            <div style={{
                textAlign:'center'
            }}>
                <h2>Visited Country list : {visiteCountries.length}</h2>
                {
                    visiteCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }                
            </div>
            {/* visite flags */}
            <div className="flag-container">
                {
                    visiteFlag.map((flags , i) => <img key={i} src={flags?.png}></img>)
                }
            </div>
            {/* display all countres */}
            <div className="country-field">
                {
                    countries.map(country => <Country 
                        item={country}
                        handelMarksButton ={handelMarksButton}
                        handelVisiteFlag={handelVisiteFlag}
                        key={country.cca3}></Country>)
                }
            </div>


        </div>
    );
};

export default Countries;