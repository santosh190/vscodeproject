import "./App.css";
import { useEffect, useState } from "react";
import axois from "axios";

function App() {
  const apikey = "562ca29e1eb5d005d64401cdd92924c4";
  const [data, setData] = useState({});
  const [inputCity, setCity] = useState({});

  const getWeatherDetails = (cityName) => {
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=+" +
      cityName +
      "&appid=" +
      apikey;
    axois
      .get(url)
      .then((res) => {
        console.log("response", res.data);
        setData(res.data);

      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handlechangecity = (e) => {
    console.log("value", e.target.value);
    setCity(e.target.value);
  };
  const handleSearch = () => {
    getWeatherDetails(inputCity);
  };

  useEffect(() => {
    getWeatherDetails("patna");
  }, []);
  
  return (
    <div>
      <div className="upper">
        <h1>Weather App</h1>
        <input   
          type="text"
          className="t"
          value={inputCity} 
          
          onChange={handlechangecity}
        />
        <br />
        <button className="btn" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="lower">
        {/* <h5 className="city">{data.name}</h5> */}
        {/* <h6 className="temp">Temp : {(data.main.temprature - 273.15).toFixed(2)}°C</h6> */}
        <h6 className="temp">Humadity : {data.main.humadity}</h6>
      </div>
    </div>
  );
}
export default App;
