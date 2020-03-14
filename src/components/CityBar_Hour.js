import React from 'react';
import getFullHour from '../helpers/Hour';

const CityBar_Hour = (props) => {
    const hour = getFullHour();
    
    return ( 
        <h2 className = 'CityBar__Hour'>
            { hour }
        </h2>
     );
}
 
export default CityBar_Hour;
