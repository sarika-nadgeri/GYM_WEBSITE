import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkoutSession from './components/WorkoutSession';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import BMICalculator from './components/BMICalculator';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Hero></Hero>
      <WorkoutSession></WorkoutSession>
      <Gallery></Gallery>
      <Pricing></Pricing>
      <Contact></Contact>
      <BMICalculator></BMICalculator>
      <Footer></Footer>
      <ToastContainer theme='dark' position='top-center'></ToastContainer>
    </Router>
  )
}

export default App