import React,{useContext} from 'react';

const CityBar_CityInput = (props) => {
    return ( 
        <form onSubmit = {props.submitHandler}>
            <input 
                type = 'text' 
                defaultValue = {props.Value} 
                onChange = {props.changeHandler} 
                className = 'CityBar__CityInput'>
            </input>
        </form>
     );
}
 
export default CityBar_CityInput;