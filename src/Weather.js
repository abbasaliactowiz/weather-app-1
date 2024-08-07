import React, { useState } from 'react'
import axios from 'axios'

const Weather = () => {
    const [city, setCity] = useState();
    const [weather, setWeather] = useState();

    const handleCityChange = (event) => {
        setCity(event.target.value);
    }

    const fetchWeather = async () => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'031cc28d27efdfc18d05870c3c8944d8'}`)
            setWeather(response);
        }
        catch (error){
            console.log('Error fetching weather data', error)
        }
    }

    const handleClick = (event) => {
        // Add API call to fetch weather data and update the state
        // Example:
        // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`)
        //.then(response => response.json())
        //.then(data => {
        //     setWeatherData(data);
        //     console.log(data);
        // })
        //.catch(error => console.error(error));
        fetchWeather();        
    }

  return (
    <div className='weather-container'>
        <input type="text" placeholder='Enter City Name' value={city} onChange={handleCityChange} />
        <button onClick={handleClick}>Check Weather</button>

        { weather && 
        <div className='weather-data'>
            <h2>{weather.data.name}</h2>
            <h3>Temp is {weather.data.main.temp}</h3>
            <p>{weather.data.weather[0].description}</p>
        </div>
        }
    </div>
  )
}

export default Weather
