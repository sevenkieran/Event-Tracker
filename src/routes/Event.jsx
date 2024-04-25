import React from "react";
import { useLocation } from "react-router-dom";

function Event() {
  const location = useLocation();

  const event = location.state.event;
  const image = event.images[0];
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
    </div>
  );
}

export default Event;
