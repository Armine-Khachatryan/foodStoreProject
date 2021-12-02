import React from 'react';
import Home from './app/pages/home/home';
import Dashboard from './app/pages/dashboard/dashboard';
import './App.css';
import {
  BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/dashboard" element={<Dashboard/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
