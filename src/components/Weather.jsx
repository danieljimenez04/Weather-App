import React from 'react'
import {useState} from 'react'

const Weather = ({weather}) => {
  const imageWheater=`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`
  const temperatureCelsius= (weather?.main.temp -273.15).toFixed(2)
  const temperatureFahrenheit = ((temperatureCelsius/5)*9+32).toFixed(2)
  const [value, setValue] = useState(true)
  const changeValue =()=>{
      setValue(!value)
  }
  //https://source.unsplash.com/random/50×50/?person
  return (
    <div className='weather__card'>
      <div>Weather App</div>
      <div>{weather?.name}, {weather?.sys.country}</div>
      <div>{weather?.weather[0].description}</div>
      <div><i class='bx bx-wind'></i> Wind Speed: {weather?.wind.speed} m/s</div>
      <div><i class='bx bx-cloud' ></i> Clouds: {weather?.clouds.all}%</div>
      <div><i class='bx bxs-thermometer' ></i> Pressure: {weather?.main.pressure} mb</div>
      <div>
        <img src={imageWheater} alt="weather" />
      </div>
      <div className='temp__card'>Temperature: {value ? temperatureCelsius: temperatureFahrenheit} {value ? '°C':'°F'}</div>
      <div className='button__card'>
        <button onClick={changeValue}>{value ? "Degrees °C to °F": "Degrees °F to °C" }</button>
      </div>
      
    </div>
  )
}

export default Weather