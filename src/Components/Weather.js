import React, {useState} from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import WeatherInfo from './WeatherInfo';
import WeatherForecast from './WeatherForecast';

import './Weather.css';

export default function Weather({defaultCity}) {
    const [city, setCity] = useState(defaultCity);
    const [weatherData, setWeatherData] = useState({
        ready: false
    });

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function search() {
        const apiKey = "1a6432c5ca7b6f9b0bee45c98d54ea71";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            city: response.data.name,
            humidity: response.data.main.humidity,
            coordinates: response.data.coord,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            description: response.data.weather[0].description,
            date: new Date(response.data.dt * 1000),   // Convert timestamp to milliseconds
            icon: response.data.weather[0].icon,
        });
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <a href="https://www.shecodes.io/" target="_blank" rel="noopener noreferrer">
                    <img src={require("../images/logo.png")} className="logo" alt="SheCodes Logo"/></a>

                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-9 ">
                            <input type="search" onChange={handleCityChange} placeholder="Enter a city ..."
                                   className="form-control search-input"/>
                        </div>
                        <div className="col-3 p-0">
                            <input type="submit" className="btn btn-success w-100" value="Search"/>
                        </div>
                    </div>
                </form>

                <WeatherInfo weatherData={weatherData}/>
                <WeatherForecast coordinates={weatherData.coordinates} />
                <div className="link">This project is <a href= {"https://github.com/safari-zahra/react-weather-app"} target={"_blank"} rel={"noreferrer"}>open-sourced on GitHub</a> and <a href={"https://startling-gumption-a43343.netlify.app//"} target={"_blank"} rel={"noreferrer"}>hosted on Netlify</a></div>

            </div>
        );
    }
    else {
        search();
        return (
            <div className="loading">
                <ReactLoading type="cubes" color= "#c540f1" height={600} width={200} />
            </div>
        )


    }

}