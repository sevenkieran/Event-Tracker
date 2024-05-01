import { React, useState } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import "../index.css";

/*function HomePage() {
  //This is where the API call should go
  //const [events, setEvents] = useState();
  //setEvents([1, 2, 3, 4, 5]);
  //Events should be set using setEvents after data is fetched from the API using fetch().then()
  //Then, we'll use events.map() to dynamically generate links to each event
  const events = [1,2,3,4,5];

  return (
    <div>
      <h1>This is the homepage</h1>
      {events.map((num) => {
        console.log(num);
        return <Link to={`/event/${num}`}>{num} page</Link>;
      })}
    </div>
  );
}
*/

function App() {
  const [location, setLocation] = useState("");
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const API_KEY = import.meta.env.VITE_API_KEY;
    const BASE_URL = "https://app.ticketmaster.com/discovery/v2/events.json";

    try {
      const url = new URL(BASE_URL);
      url.search = new URLSearchParams({
        apikey: API_KEY,
        size: 10,
        keyword: location,
        sort: "date,asc",
      });

      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        setEvents(data._embedded.events);
      } else {
        throw new Error(data.message || "Failed to fetch events");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-700 h-screen">
      <div className="p-10">
        <h1 className="text-white p-2 text-xl font-bold">Event Tracker</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="text"
            name="msg"
            placeholder="Enter a location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="text-black"
          />
          <button
            type="submit"
            className="mx-4 text-white border-input hover:bg-white hover:text-accent-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-1 ease-out duration-500"
          >
            Submit
          </button>
        </form>
      </div>
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && events.length > 0 && (
          <ul>
            {events.map((event) => (
              <li key={event.id}>
                <Link
                  className="text-black text-3xl w-full h-40 flex justify-start m-2 border-solid border-2 border-slate-600 bg-white"
                  to={`/Event/${event.id}`}
                  state={{ event: event }}
                >
                  <img className="object-contain" src={event.images[2].url} />
                  {event.name} - {event.dates.start.localDate}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
