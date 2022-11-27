import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MainContainer } from './styled.js';
import { TempsContainer } from './styled.js';
import { InfoTempContainer } from './styled.js'
import { TextHeader } from './styled.js'

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
        <MainContainer>
          <TextHeader>
            <h2>{weather['name']} - {weather['sys']['country']}</h2>
            <h4>Umidade: {weather['main']['humidity']}%</h4>
          </TextHeader>

          <TempsContainer>

            <InfoTempContainer>

              {weather['main']['temp_min']}°
              <h3>Min</h3>
            </InfoTempContainer>
            <InfoTempContainer>

              {weather['main']['temp']}°
              <h3>Atual</h3>
            </InfoTempContainer>
            <InfoTempContainer>

              {weather['main']['temp_max']}°
              <h3>Max</h3>
            </InfoTempContainer>


          </TempsContainer>

        </MainContainer>

      </>
    );
  }


};
export default App;