import React,{ useState} from 'react';
import { fetchWeather } from './api/fetchWeather';
import './App.css';
import bg from './img/bg.jpg'

const App = () =>{
  const [query, setQuery] = useState ('');
  const [weather, setWeather] = useState ({});
  
  const search = async (e) =>{
    if(e.key === 'Enter'){
      const data =await fetchWeather(query);
      setWeather(data);
      setQuery('');
    }
  }
  return(
    <div className='main-container'>
      <input type='text' className='search' placeholder='Search...' value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search}/>
      {weather.main &&(
        <div className ='city'>
          <h2 className='city-name'>
            <span>{weather.name}</span>
            <sup>{weather.sys.counrty}</sup>
          </h2>
          <div className = 'city-temp'>
            {Math.round(weather.main.temp - 273,15)}
            <sup>&deg;C</sup>
          </div>
          <div className ='info'>
            <img className='city-icon' src={bg} alt={weather.weather[0].description}/>
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
  </div>
);
}
export default App