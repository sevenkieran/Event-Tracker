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
    <div className="bg-slate-700">
      <Router>
        <Link
          to="/HomePage"
          className="mx-5 my-4 text-white border-input hover:bg-slate-900 hover:text-accent-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-1 ease-out duration-500"
        >
          Home
        </Link>
        <Routes>
          <Route path="/HomePage" element={<HomePage />}></Route>
          <Route path="/Event/*" element={<Event />}></Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
