import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ShowCountry from '../ShowCountry/ShowCountry';

const Country = () => {
    const [country , setCountry] = useState([]);
    useEffect( () =>{
      fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountry(data))
    },[])
    return (
        <div>
            {
                country.map(country => <ShowCountry key= {country.alpha3Code} country = {country}> </ShowCountry>)
            }
        </div>
    );
};

export default Country;