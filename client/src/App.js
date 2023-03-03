import React from 'react'
import Home from "./pages/Home"
import { Navbar } from './Navbar'
import { Route, Routes } from "react-router-dom"

export default function App() {
  return (
  <>
  <Navbar />
    <Routes>
      <Route path = "/" element = {<Home />} />
    </Routes>
  </>
  )
}
