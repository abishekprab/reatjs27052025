import { useState } from 'react'
// Importing each of the mini project components
import FaqAccordion from './components/FaqAccordion'
import ImageGallery from './components/ImageGallery'
import ThemeToggle from './components/ThemeToggle'
import BmiCalculator from './components/BmiCalculator'
import CharCounter from './components/CharCounter'
import './App.css'

function App() {

  return (
    <div className="app">
      <h1>React Mini Projects</h1>

      {/* Each mini project is displayed on the same page */}
      <section>
        <h2>FAQ Accordion</h2>
        <FaqAccordion />
      </section>

      <section>
        <h2>Image Gallery</h2>
        <ImageGallery />
      </section>

      <section>
        <h2>Dark/Light Theme Toggle</h2>
        <ThemeToggle />
      </section>

      <section>
        <h2>BMI Calculator</h2>
        <BmiCalculator />
      </section>

      <section>
        <h2>Character Counter</h2>
        <CharCounter />
      </section>
    </div>
  )
}

export default App
