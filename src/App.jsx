import React, {useState, useEffect} from 'react'
import "./App.css";
import Quote from './components/Quote'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";


function App() {

  return (
    <div className="w-screen h-screen bg-black m-0 p-0">
    <Quote />
  </div>
  )
}

export default App;
