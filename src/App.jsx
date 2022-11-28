import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ErrorBoundary } from "react-error-boundary"

import { MainContainer } from './styled.js';
import { TempsContainer } from './styled.js';
import { InfoTempContainer } from './styled.js'
import { TextHeader } from './styled.js'

function App() {

  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState("false");

  

  
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
        <MainContainer  >
          <TextHeader>

            <h2>{weather['name']} - {weather['sys']['country']}</h2>
            <h4>{weather['weather'][0]['description']}</h4>
          </TextHeader>

          <TempsContainer>

            <InfoTempContainer variant={weather['main']['temp_min']}>

              <h4>{weather['main']['temp_min']}°</h4> 
              <h3>Min</h3>
            </InfoTempContainer>
            <InfoTempContainer variant={weather['main']['temp']}>

              <h4> {weather['main']['temp']}°</h4>
              

              <h3>Atual</h3>

            </InfoTempContainer>
            <InfoTempContainer variant={weather['main']['temp_max']}>

              <h4>{weather['main']['temp_max']}°</h4>
              <h3>Max</h3>
            </InfoTempContainer>


          </TempsContainer>

        </MainContainer>

      </>

    );
  }


};
export default App;
