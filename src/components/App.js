
import React, { useEffect } from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const [temp, setTemp] = React.useState(30);
  const [condi, setCondi] = React.useState("Sunny");

useEffect(() => {
  setTemp(25);
  setCondi("Sunny");
},[]);
  return (
    <div>
      <WeatherDisplay temp={temp} condi={condi} />
    </div>
  )
}

export default App
