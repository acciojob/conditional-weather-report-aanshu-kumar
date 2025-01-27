import React from 'react'

const WeatherDisplay = ({temp,condi}) => {
  return (
    <div>
        <p style={{color:`${temp>20 ? "red" : "blue"}`}}>
        <span>Temperature: {temp}</span><br/>
        <span>Conditions: {condi}</span>

        </p>
    </div>
  )
}

export default WeatherDisplay
