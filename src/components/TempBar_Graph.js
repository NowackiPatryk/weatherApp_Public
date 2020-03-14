import React from 'react';

const TempBar_Graph = (props) => {
    return ( 
        <div className = 'TempBar__Graph'>
            <h1 className = 'TempBar__Graph__Column'>{`${props.temp}°C`}</h1>
            <h2 className = 'TempBar__Graph__Date'>{props.date}</h2>
        </div> 
    );
}
 
export default TempBar_Graph;