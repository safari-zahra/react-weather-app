import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay({dailyForecast}) {

    function maxTemperature() {
        let temperature = Math.round(dailyForecast.temp.max);
        return `${temperature}°`;
    }

    function minTemperature() {
        let temperature = Math.round(dailyForecast.temp.min);
        return `${temperature}°`;
    }

    function day() {
        let date = new Date(dailyForecast.dt * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }

    return (
        <div>
            <div className="WeatherForecast-day">{day()}</div>
            <WeatherIcon icon={dailyForecast.weather[0].icon} size={36} />
            <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}
        </span>
                <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
            </div>
        </div>
    );
}