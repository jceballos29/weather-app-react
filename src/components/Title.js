import React from 'react'
import './Title.css'  
import logo from '../img/Circle-icons-weather.svg.png';

function Title() {
    return (
        <div className="title">
           <img src={logo} alt="Circcle"/>
           <h1>WEATHER APP</h1>
        </div>
    )
}

export default Title
