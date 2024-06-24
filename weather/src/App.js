import React, { useState } from "react";
import useWeatherStore from "./store/store";

function App() {
  const { weather, city, loading, error, setCity, fetchWeather } =
    useWeatherStore();
  const [inputCity, setInputCity] = useState("");

  const handleFetchWeather = () => {
    setCity(inputCity);
    fetchWeather(inputCity);
  };

  return (
    <div className="App">
      <h1>날씨를 알려드립니다.</h1>
      <br />
      <input
        type="text"
        value={inputCity}
        onChange={(e) => setInputCity(e.target.value)}
        placeholder="도시 이름을 영어로 검색하세요."
      />
      <button onClick={handleFetchWeather}>검색</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {weather && (
        <div>
          <h1>{weather.name}</h1>
          <p>온도: {weather.main.temp}°C</p>
          <p>날씨: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
