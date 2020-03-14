import React,{useContext} from 'react';
import {WeatherDataContext} from '../stores/WeatherDataContext';
import '../styles/CityBar.scss'
import CityBar_CityInput from './CityBar_CityInput';
import CityBar_CountryName from './CityBar_CountryName';
import CityBar_Hour from './CityBar_Hour';
import CityBar_Temp from './CityBar_Temp';

const CityBar = (props) => {
    const {country, temperature, handleCityInputChange, city, handleCityFormSubmit} = useContext(WeatherDataContext);
    return (
        <section className = 'CityBar'>
            <CityBar_CityInput 
                Value = {city} 
                changeHandler = {handleCityInputChange}
                submitHandler = {handleCityFormSubmit}
            />
            <CityBar_CountryName countryName = {country}/>
            <CityBar_Hour/>
            <CityBar_Temp temp = {temperature}/>
        </section>
    );
}
 
export default CityBar;