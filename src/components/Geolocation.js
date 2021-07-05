

import './Geolocation.css'
import React from 'react'



function Geolocation({position}) {

    return ( 
        <div className="Geolocation"> 
            <h3>{position.city}, {position.country}</h3>
            <i>{position.flag.emoji}</i>
        </div>
    )
}

export default Geolocation
