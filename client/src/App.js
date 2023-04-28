import React from 'react'
import Home from './pages/Home'
import Band from './pages/Band'
import Tour from './pages/Tour'
// import Gallery from './pages/Gallery'
import Watch from './pages/Watch'
import Contact from './pages/Contact'
import { Navbar } from './Navbar'
import { Route, Routes } from "react-router-dom"
// import { Footer } from './Footer'

export default function App() {
  return (
  <>
  <Navbar />
    <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = "/band" element = {<Band />} />
      <Route path = "/tour" element = {<Tour />} />
      {/* <Route path = "/gallery" element = {<Gallery />} /> */}
      <Route path = "/watch" element = {<Watch />} />
      <Route path = "/contact" element = {<Contact />} />
    </Routes>
  {/* <Footer /> */}
  </>
  )
}
