import React from 'react';

const IconsBar_Icon = (props) => {
    return ( 
        <div className = 'IconsBar__Icon'>
            <img className = 'IconsBar__Icon__Img' src = {props.iconSrc} alt = ''/>
            <h2 className = 'IconsBar__Icon__Value'>{`${props.Value} ${props.unit}`}</h2>
        </div>
     );
}
 
export default IconsBar_Icon;