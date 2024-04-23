import React, { Component } from "react"
import { useState } from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Event from "./routes/Event";

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/Event">This is where the event will be displayed</Link>
        </li>
      </ul>
      <Routes>
          <Route
              path="/Event"
              element={<Event />}>
          </Route>
      </Routes>
    </Router>
  );
  //<div className="body-background"></div>;
}

export default App;
