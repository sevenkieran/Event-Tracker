import React, { Component } from "react";
import { useState } from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./routes/HomePage";
import Event from "./routes/Event";
import Home from "./routes/Home";
import { BackButton } from "./BackButton";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/HomePage" element={<HomePage />}></Route>
          <Route path="/Event/*" element={<Event />}></Route>
          <Route path="*" element={<HomePage/>} />
        </Routes>
      </Router>
    </div>
  );
  //<div className="body-background"></div>;
}

export default App;
