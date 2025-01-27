import React from 'react'

const WeatherDisplay = ({temp,condi}) => {
  return (
    <div >
        <p style={{color:`${temp>20 ? "red" : "blue"}`}}>Temperature: {temp}</p>
        <p style={{color:`${temp>20 ? "red" : "blue"}`}}>Conditions: {condi}</p>
      
    </div>
  )
}

export default WeatherDisplay
