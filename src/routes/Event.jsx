import {React, useState, useEffect} from "react";
import { useLocation } from "react-router-dom";

function Event() {
  const location = useLocation();
  const [weather, setWeather] = useState("No weather data for this event");

  const event = location.state.event;
  const image = event.images[2];
  console.log(event);

  function fetchWeatherData() {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const apiUrl = `https://api.tomorrow.io/v4/weather/forecast?location=${event._embedded.venues[0].city.name}&units=imperial&apikey=${apiKey}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        for (let i = 0; i < data.timelines.daily.length; i++) {
          if (data.timelines.daily[i].time.includes(event.dates.start.localDate))
            setWeather(data.timelines.daily[i].values.temperatureAvg);
        }
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }

  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <div className="bg-slate-700 h-full min-h-screen text-white px-5">
      <h1 className="text-xl p-3 font-bold">{event.name}</h1>
      <div className="flex justify-center m-5">
        <img
          src={image.url}
          alt={event.name}
          className="w-full h-full max-w-96 max-h-96 object-contain"
        />
      </div>
      <h2 className="text-lg font-bold">Description</h2>
      <p>{event.description || "No description available."}</p>
      <h2>Venue: {event._embedded.venues[0].name}</h2>
      <h2>Address: {event._embedded.venues[0].address.line1}</h2>
      <h2>City: {event._embedded.venues[0].city.name}</h2>
      <h2>Average Temperature in F: {weather}</h2>
      <h2>Price Range: ${event.priceRanges[0].min} - ${event.priceRanges[0].max}</h2>

      <h2>
        Link to Tickets:{" "}
        <a
          className="text-blue-500 hover:underline"
          href={event._embedded.venues[0].url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {event._embedded.venues[0].name}
        </a>
      </h2>
    </div>
  );
}

export default Event;
