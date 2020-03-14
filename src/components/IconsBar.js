import React, { useContext } from 'react';
import { WeatherDataContext } from '../stores/WeatherDataContext';
import '../styles/IconsBar.scss';
import IconsBar_Icon from './IconsBar_Icon';
import cloudImg from '../img/icon_cloudness.png';
import humidityImg from '../img/icon_humidity.png';
import windImg from '../img/icon_wind.png';
import pressureImg from '../img/icon_pressure.png';

const IconsBar = (props) => {
    const { cloudness, wind, humidity, pressure } = useContext(WeatherDataContext);
    return ( 
        <section className = 'IconsBar'>
            <IconsBar_Icon iconSrc = {cloudImg} Value = {cloudness} unit = '%'/>
            <IconsBar_Icon iconSrc = {windImg} Value = {wind} unit = 'm/s'/>
            <IconsBar_Icon iconSrc = {humidityImg} Value = {humidity} unit = '%'/>
            <IconsBar_Icon iconSrc = {pressureImg} Value = {pressure} unit = 'hPa'/>
        </section>
     );
}
 
export default IconsBar;