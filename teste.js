import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  
const [location, setLocation] = useState(false);
const [weather, setWeather] = useState(false);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('./sw.js').then(function(registration) {
      console.log('Worker registration successful', registration.scope);
    }, function(err) {
      console.log('Worker registration failed', err);
    }).catch(function(err) {
      console.log(err);
    });
  });
} else {
  console.log('Serviço não é aceito pelo navegador.');
}
  
window.addEventListener("beforeinstallprompt", function(e) {
  console.log(e.platforms);
  e.userChoice.then(function(choiceResult) {
    console.log(choiceResult.outcome); // "accepted" or "dismissed"
  });
});
  
/* HANDLE DATA: */

//get user geolocation
  useEffect(() => {
    const geo = navigator.geolocation;
    geo.getCurrentPosition((position) => {
      console.log(position.coords.latitude, position.coords.longitude);
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    })
  }, []);

// get API information
  let getWeather = async (lat, long) => {
    let res = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
      params: {
        lat: lat,
        lon: long,
        appid: "a1ef9cde27b16473c17b639a11f5ef65",
        lang: 'en',
        units: 'metric'
      }
    });
    console.log(res.data);
    setWeather(res.data);
  }


//notification
  Notification.requestPermission(function(status) {
    console.log('Notification permission status:', status);
  });


  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(function(reg) {
      console.log('Service Worker Registered!', reg);
  
      reg.pushManager.getSubscription().then(function(sub) {
        if (sub === null) {
          // Update UI to ask user to register for Push
          console.log('Not subscribed to push service!');
        } else {
          // We have a subscription, update the database
          console.log('Subscription object: ', sub);
        }
      });
    })
     .catch(function(err) {
      console.log('Service Worker registration failed: ', err);
    });
  }

 
  if(location === false){
    return (
      <div className="page page-loading">
        <h2 className="page-loading_title">Estamos tentando acessar a sua Localização</h2>
      </div>
    )
  } else if (weather === false) {
    return (
      <div className="page page-loading">
        <h2 className="page-loading_title">Carregando o clima</h2>
      </div>
    )
  } else {
    return (
        <div className="page sun">
          <div className="page-status"></div>
          <header className="header">
            <h1> {sys['country']['feels_like']}</h1>
          </header>
        
          <main className="main">
          <ul className="main-list">
              <li>Today: <span className="main-list_data"> {weather['weather'][0]['description']} </span></li>
              <li>Feels Like:<span className="main-list_data">   {weather['main']['feels_like']}°  </span></li>
              <li>Actual temperature: <span className="main-list_data">  {weather['main']['temp']}°  </span></li>
              <li>Max temperature: <span className="main-list_data">  {weather['main']['temp_max']}°  </span></li>
              <li>Min Temperature: <span className="main-list_data">  {weather['main']['temp_min']}°  </span></li>
              <li>Pressure: <span className="main-list_data">  {weather['main']['pressure']}   hpa</span></li>
              <li>Air humidity: <span className="main-list_data">  {weather['main']['humidity']}%  </span></li>
            </ul>
          </main>
        </div>
    );
  }
};
export default App;