import React, { useState, useEffect } from "react";
import axios from "axios";
function Weather() {
  const key = "70167ddbfb28dd308062c6aaf47151dc";
  const [city, setCity] = useState("");
  const [btnVal, setbtnVal] = useState("");
  const [weatherData, setData] = useState({ humid: "", press: "", tmp: "" });

  function handleClick() {
    setbtnVal(city);
  }
  useEffect(() => {
    axios
      .get(
        ` http://api.openweathermap.org/data/2.5/weather?q=${btnVal}&APPID=${key}`
      )
      .then(result => {
        setData({
          humid: result.data.main.humidity,
          press: result.data.main.pressure,
          tmp: result.data.main.temp
        });
      });
  }, [btnVal]);

  return (
    <div>
      <input
        type="text"
        name="city"
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <button onClick={handleClick}> Get Weather</button>

      <p>
        humidity:{weatherData.humid} pressure:{weatherData.press} temperature:
        {weatherData.tmp}
      </p>
    </div>
  );
}
export default Weather;
