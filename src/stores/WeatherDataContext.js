import React, { Component } from 'react';
import { setStorageValue, getStorageValue, checkIfValueExist } from '../helpers/storageApi';
import { getWeatherByCity, getWeatherTimestampsByCity } from '../helpers/weatherApi';
import { convertTempToCelsius } from '../helpers/converters';

export const WeatherDataContext = React.createContext();

class WeatherDataContextProvider extends Component{

    state = {
        city: checkIfValueExist('city') ? getStorageValue('city') : 'London',
        temperature: '',
        cloudness: '',
        wind: '',
        humidity: '',
        pressure: '',
        country: '',
        timestamps: [],
    }

    setWeatherData = async () => {
        const weatherData = await getWeatherByCity(this.state.city);

        if(weatherData.cod!=200)
            alert(weatherData.message);
        else{
            const tempK = weatherData.main.temp;
            const convertedTemp = convertTempToCelsius(tempK);

            this.setState({
                temperature: convertedTemp,
                cloudness:  weatherData.clouds.all,
                wind: weatherData.wind.speed,
                humidity: weatherData.main.humidity,
                pressure: weatherData.main.pressure,
                country: weatherData.sys.country,
            });
        }
    }

    setTempTimestamps = async () => {
        const timestamps = await getWeatherTimestampsByCity(this.state.city);
        
        if(timestamps.cod!=200)
            alert(timestamps.message);
        else{
                timestamps.list.forEach(timestamp => this.setState(prevState => ({
                    timestamps: [
                        ...prevState.timestamps, {
                            date: timestamp.dt_txt, 
                            temp: convertTempToCelsius(timestamp.main.temp), 
                            id:timestamp.dt,
                        }
                    ],
                })));
            }
    }

    clearTimestamps = () => {
        this.setState({ timestamps: [] });
    }

    handleCityInputChange = e => {
        this.setState({ city: e.target.value });
    }

    handleCityFormSubmit = e => {
        e.preventDefault();
        setStorageValue('city', this.state.city);
        this.clearTimestamps();
        this.setWeatherData();
        this.setTempTimestamps();
    }

    componentDidMount(){
        this.setWeatherData();
        this.setTempTimestamps();
    }

    render(){
        return(
            <WeatherDataContext.Provider 
                value = {{
                    ...this.state,
                    handleCityInputChange: this.handleCityInputChange,
                    handleCityFormSubmit: this.handleCityFormSubmit}}
            >
                { this.props.children }
            </WeatherDataContext.Provider>
        )
    }
}

export default WeatherDataContextProvider;