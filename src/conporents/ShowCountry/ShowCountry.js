import React from 'react';
import './ShowCountry.css';
import { Link } from 'react-router-dom';

const ShowCountry = (props) => {
    const {name, alpha3Code, region , population, flag ,alpha2Code} = props.country;

    return (
        <div className = 'container'>
            <div className="country-info d-flex justify-content-between">
                <div className='country_img'>
                    <h4 className='text-primary'><strong> Country: {name}</strong></h4> 
                    <img src={flag} alt=""/>
                </div>
                <div className="country_about">
                    <h5>Shot Name : {alpha3Code}</h5>
                    <h6>Region : {region}</h6>
                    <h5>Population : {population}</h5>
                </div>
                <div className="country_details d-flex justify-content-center  align-items-center">
                    <button className= 'btn btn-info details_btn' > <Link to={`/details/${alpha2Code}`}> Details </Link> </button>
              </div>
                
            </div>
        </div>
    );
};

export default ShowCountry;