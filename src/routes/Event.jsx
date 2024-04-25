import React from "react";
import {useLocation} from 'react-router-dom';

function Event() {
  const location = useLocation()

  console.log(location.state.event);
  return (
    <div className="bg-slate-700 h-screen">
      <h1 className="text-white">{location.state.event.name}</h1>
    </div>
  );
}
export default Event;
