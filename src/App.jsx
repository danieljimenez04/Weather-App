import { useState,useEffect} from 'react'
import axios from 'axios'
import './App.css'
import Loader from './components/Loader'
import Message from './components/Message'
import Weather from './components/Weather'
//https://openweathermap.org/weather-conditions

function App() {
  const [latLon, setLatLon] = useState()
  const [weather, setWeather] = useState()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const success = (pos)=>{
      const lat=pos.coords.latitude 
      const lon=pos.coords.longitude 
      setLatLon({lat,lon})
    }
    navigator.geolocation.getCurrentPosition(success)
    
      }
      
      , [])
  
  

  useEffect(() => {
    setLoading(true)
    if (latLon !== undefined){
      const API_KEY='0708af25385e696adf55d30c433f4ea9'
      const URL=`https://api.openweathermap.org/data/2.5/weather?lat=${latLon?.lat}&lon=${latLon?.lon}&appid=${API_KEY}`
      
      axios.get(URL)
      .then(res=>setWeather(res.data))
      .catch(err=>setError(err))
      setLoading(false)
    }
   
   } , [latLon])
  
  //console.log(weather)
  
  const day=weather?.weather[0].icon[((weather?.weather[0].icon).length-1)]
  const url=`url(https://source.unsplash.com/random/50×50/?${weather?.weather[0].description}+${day==='n' ? 'night':'day'})`
  let URL=url.split(" ").join("+")
  
  //console.log(URL)
  return (
    <div className="App" style={{backgroundImage:URL}}>
      {loading && <Loader/>}
      {error && <Message error={error.code}/>} 
      {latLon && !error && <Weather
      weather={weather}
      /> } 
      
    </div>
  )
}

export default App
