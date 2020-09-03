import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Details.css'

const Details = () => {
    const {countryDetails} = useParams()
    const [countryName , setCountryName] = useState([]);
    useEffect(() => {
        const api = `https://restcountries.eu/rest/v2/alpha/${countryDetails}`;
        fetch(api)
        .then(res => res.json())
        .then(data => setCountryName(data))
    }, [])
    const {name,region, population,nativeName,flag} = countryName;

    return (
        <div className='container'>
            <div className='d-flex justify-content-center info-img'>
                <img src={flag} alt=""/>
            </div>
            <div>
                <div className='text-center info-box '>
                    <h3> Name : {name} </h3> 
                    <h4>NativeName : {nativeName}</h4>
                    <h4>Region : {region} </h4>
                    <h4>Population : {population}</h4>
                   
                </div>
            </div>
        </div>
    );
};

export default Details;