import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
import '../Country.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visiteCountries, setVisiteCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handelMarksButton = countries =>{
        const newVisiteCountries = [...visiteCountries , countries]
        setVisiteCountries(newVisiteCountries)
    }
    return (
        <div>
            <h1>Countries {countries.length}</h1>
            <div style={{
                textAlign:'center'
            }}>
                <h2>Visited Country list : {visiteCountries.length}</h2>
                {
                    visiteCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }                
            </div>
            <div className="country-field">
                {
                    countries.map(country => <Country 
                        item={country}
                        handelMarksButton ={handelMarksButton}
                        key={country.cca3}></Country>)
                }
            </div>


        </div>
    );
};

export default Countries;