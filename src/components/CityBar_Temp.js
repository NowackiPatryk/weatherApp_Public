import React from 'react';

const CityBar_Temp = (props) => {
    return ( 
        <h1 className = 'CityBar__Temp'>
            {`${props.temp}°C`}
        </h1>
     );
}
 
export default CityBar_Temp;