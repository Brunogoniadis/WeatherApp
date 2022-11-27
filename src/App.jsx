import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(" ");

  let getWeather = async (lat, long) => {
    let res = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
      params: {
        lat: lat,
        lon: long,
        appid: `1922ec027bc8ed5184d84213b69a2646`,
        lang: 'pt',
        units: 'metric'
      }
    });
    setWeather(res.data);
    console.log(res.data)
  }


  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true)
    })
    

  }, [])

  if (location == false) {
    return (
      <>
        Você precisa habilitar a localização no browser o/
      </>
    )
  } else if (weather == false) {
    return (
      <>
        Carregando o clima...
      </>
    )
  } else {
    return (
      <>
        <h3>({weather['name']})</h3>
        <hr/>
        <ul>
          <li>Temperatura atual: {weather['main']['temp']}°</li>
          <li>Temperatura máxima: {weather['main']['temp_max']}°</li>
          <li>Temperatura minima: {weather['main']['temp_min']}°</li>
          <li>Pressão: {weather['main']['pressure']} hpa</li>
          <li>Humidade: {weather['main']['humidity']}%</li>
        </ul>
      </>
    );
  }
    
  
};
export default App;