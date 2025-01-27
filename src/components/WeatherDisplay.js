import React from 'react'

const WeatherDisplay = ({temp,condi}) => {
  return (
    <div>
        <p style={{color:`${temp>20 ? "red" : "blue"}`}}>
        Temperature: <span>{temp}</span><br/>
        </p>
   <p>Conditions: {condi}</p>
    </div>
  )
}

export default WeatherDisplay
