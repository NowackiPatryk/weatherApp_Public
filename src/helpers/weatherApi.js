const apiKey = ''; //type your API_Key here

const getWeatherByCity = city => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const data = fetch(url)
        .then(res => res.json())
        .catch(err => new Error(err));
        
    return data;
}

const getWeatherTimestampsByCity = city => {
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
    const data = fetch(url)
        .then(res => res.json())
        .catch(err => new Error(err));

    return data;
}

export { getWeatherByCity, getWeatherTimestampsByCity };