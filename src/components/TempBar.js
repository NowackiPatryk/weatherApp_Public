import React,{ useContext } from 'react';
import '../styles/TempBar.scss';
import { WeatherDataContext } from '../stores/WeatherDataContext';
import TempBar_Graph from './TempBar_Graph';

const TempBar = (props) => {
    const { timestamps } = useContext(WeatherDataContext);
    return ( 
        <section className = 'TempBar'>
            {timestamps.map(timestamp => 
                <TempBar_Graph 
                    key = {timestamp.id} 
                    date = {timestamp.date} 
                    temp = {timestamp.temp}
                />
            )}
        </section>
     );
}
 
export default TempBar;