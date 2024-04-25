import React from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

function HomePage() {
  //This is where the API call should go
  const [events, setEvents] = useState();
  setEvents([1, 2, 3, 4, 5]);
  //Events should be set using setEvents after data is fetched from the API using fetch().then()
  //Then, we'll use events.map() to dynamically generate links to each event

  return (
    <div>
      <h1>This is the homepage</h1>
      {events.map((num) => {
        return <Link to={`/event/${num}`}>{num} page</Link>;
      })}
    </div>
  );
}
export default HomePage;
