import React from 'react';
import FormattedDate from './FormattedDate';
import WeatherIcon from  './WeatherIcon';

export default function WeatherInfo({weatherData}) {
    return (
        <div className="WeatherInfo">
            <div className="row ">
                <div className="col-6"><h1>{weatherData.city}</h1>
                    <ul className="d-flex">
                        <li><FormattedDate date={weatherData.date} /></li>
                        {/*<li className="text-capitalize">{weatherData.description},</li>*/}
                        <li className="text-capitalize px-1">{weatherData.description}</li>
                    </ul>
                    <ul className="d-flex">
                        <li>Humidity: <strong>{weatherData.humidity}%,</strong></li>
                        <li className="px-1">Wind: <strong>{weatherData.wind} km/h</strong></li>
                    </ul>
                </div>

                <div className="col-6">
                    <div className="d-flex justify-content-end align-items-center">
                        <div>
                            <WeatherIcon icon={weatherData.icon}  size={52}/>
                        </div>

                        <div className="temperature">
                            {weatherData.temperature} <span className="unit">°C</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}