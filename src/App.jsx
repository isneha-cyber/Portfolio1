import { useState } from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import Hero from './Components/Hero'
import Skills from './Components/Skills'
import About from './Components/About'
import Experiences from './Components/Experencies'
import ContactSection from './Components/Contact'
import Backtotop from './Components/Backtotop'
import Project1 from './Components/Project1'



function App() {
  return (
    <>
      <Navbar/>
      <Backtotop/>
      <Hero/>
      <About/>
      <Skills/>
      <Project1/>
      <Experiences/>
    <ContactSection/>
    </>
  )
}

export default App
