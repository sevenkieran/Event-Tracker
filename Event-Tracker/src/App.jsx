import React, { Component } from "react"
import { useState } from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import HomePage from "./routes/HomePage";
import Event from "./routes/Event";

//Currently not rendering a homepage or event. need to fix!

function App() {

  return (
    <Router>
      <ul>
        <li>
          <Link to="/HomePage">This is home</Link>
        </li>
        <li>
          <Link to="/Event">Test</Link>
        </li>
      </ul>
      <Routes>
          <Route
              path="/HomePage"
              element={<HomePage />}>
          </Route>
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
