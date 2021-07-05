import './App.css';


import React, { useState, useEffect } from 'react';

import Title from './components/Title';
import Loader from './components/Loader';
import Card from './components/Card';
import Geolocation from './components/Geolocation';

const Render = ({position, weather}) => {
  if(weather !== null){
    return (
      <>
        <Card weather={weather}/>
        <Geolocation position={position}/>
      </>
    )
  }
  return  <Loader />
}

function App() {


  const API_KEY_ABSTRACT = '3f40ceeedb1048759ab624c2eed5bb7b';
  const API_KEY_WEATHER = 'd5a800504eb248ecaef12157210207';

  const [position, getPosition] = useState(null);
  const [weather, getWeather] = useState(null);

  const [backgroundColor,getBackgroundColor] = useState(' #f8f9f9');

  const style = {backgroundColor: backgroundColor}

  useEffect(() => {

    const url = `https://ipgeolocation.abstractapi.com/v1/?api_key=${API_KEY_ABSTRACT}`

    const getPositionData = async () => {
      const data = await fetch(url).then(response => response.json());
      getPosition(data);
    }

    getPositionData();

  }, [])

  useEffect(() => {
    if(position){
      const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY_WEATHER}&q=${position.city}&aqi=no`;
      const getWeatherData = async () => {
          const data = await fetch(url).then(response => response.json());
          getWeather(data.current)
      }

      getWeatherData();
    }
  }, [position])

  useEffect(() => {
    if(weather) {
      console.log(weather.cloud)
      if (weather.cloud >= 0 && weather.cloud <= 10){
        getBackgroundColor('#f8f9f9')
      } else if (weather.cloud > 10 && weather.cloud <= 20){
        getBackgroundColor('#f2f3f4')
      } else if (weather.cloud > 20 && weather.cloud <= 30){
        getBackgroundColor('#e5e7e9')
      } else if (weather.cloud > 30 && weather.cloud <= 40){
        getBackgroundColor('#d7dbdd')
      } else if (weather.cloud > 40 && weather.cloud <= 50){
        getBackgroundColor('#cacfd2')
      } else if (weather.cloud > 50 && weather.cloud <= 60){
        getBackgroundColor('#bdc3c7')
      } else if (weather.cloud > 60 && weather.cloud <= 70){
        getBackgroundColor('#a6acaf')
      } else if (weather.cloud > 70 && weather.cloud <= 80){
        getBackgroundColor('#909497')
      } else if (weather.cloud > 80 && weather.cloud <= 90){
        getBackgroundColor('#797d7f')
      } else if (weather.cloud > 80 && weather.cloud <= 90){
        getBackgroundColor('#626567')
      }
    }
  }, [weather])


  return (
    <div className="App" style={style}>
      <Title/>
      <Render position={position} weather={weather}/>
    </div>
  );
}

export default App;
