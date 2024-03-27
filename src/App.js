import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ImageSlider from './components/ImageSlider';
import { SliderDat } from './components/SliderDat';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ImageSlider slides={SliderDat}/>
    </div>
  );
}

export default App;
