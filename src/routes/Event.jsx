import React from "react";
import { useLocation } from "react-router-dom";

function Event() {
  const location = useLocation();

  const event = location.state.event;
  const image = event.images[2];
  console.log(event);

  return (
    <div className="bg-slate-700 h-screen text-white px-5">
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
