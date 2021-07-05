
import './Card.css'
import React, { useState, useEffect } from 'react'

// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';

import uv from '../img/uv-index.png';
import barometer from '../img/barometer.png'
import humidity from '../img/humidity.png'
import precipitation from '../img/precipitation.png'
import anemometer from '../img/anemometer.png'
import wind from '../img/wind.png'
import windsock from '../img/windsock.png'

function Card({weather}) {

 

    const [deegrees, getDeegrees] = useState(true)
    const [classDeegree, setClassDeegree]  =useState('C')
    const [backgroundColor, getBackgroundColor] = useState('#ffeaa7')

    const style = {
        backgroundColor: backgroundColor
    }

    useEffect(() => {
        weather.is_day === 1 ? getBackgroundColor('#ffeaa7') : getBackgroundColor('#74b9ff')
    }, [weather.is_day])

    useEffect(() => {
        deegrees ? setClassDeegree('F') : setClassDeegree('C')
    },[deegrees])

    return (
        <div className="card" style={style}>    
            <div className="deegrees">
                {
                    deegrees ? <h2>{weather.temp_c}</h2> : <h2>{weather.temp_f}</h2>
                }
                <div className="condition">
                    <img alt={weather.condition.text} src={weather.condition.icon}></img>
                    <p>{weather.condition.text}</p>
                </div>
            </div>
            <div className="more-information">
                <div className="change-deegree">
                    <label>Change to: </label>
                    <button onClick={() => {
                        getDeegrees(!deegrees)
                    }}>{classDeegree}</button>
                </div>
                <ul>
                    <li><img src={uv} alt="UV index"/>UV Index: <b>{weather.uv}</b></li>
                    <li><img src={humidity} alt="Humidity"/>Humidity: <b>{weather.humidity} %</b></li>
                    <li><img src={barometer} alt="Barometer"/>Pressure: {deegrees ? <b>{weather.pressure_mb} mb</b> : <b>{weather.pressure_in} in</b> }</li>
                    <li><img src={precipitation} alt="Precipitation"/>Precipitation: {deegrees ? <b>{weather.precip_mm} mm</b> : <b>{weather.precip_in} in</b> }</li>
                    <li><img src={anemometer} alt="Anemometer"/>Wind speed: {deegrees ? <b>{weather.wind_kph} kph</b> : <b>{weather.wind_mph} mph</b> }</li>
                    <li><img src={wind} alt="Wind Speed"/>Wind gust: {deegrees ? <b>{weather.gust_kph} kph</b> : <b>{weather.gust_mph} mph</b> }</li>
                    <li><img src={windsock} alt="Wind Direction"/>Wind direction: <b>{weather.wind_dir}</b></li>
                </ul>
            </div>
        </div>
    )
}   

export default Card
