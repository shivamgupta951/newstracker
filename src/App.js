import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Titlesection from './components/Titlesection';
/* add symbols in the title and go for the vedio part! */
export default class App extends Component {
  render() {
    return (
      <>
      <div style={{backgroundColor: "#111316",height: "1400px"}}>
      <Navbar/>
      <Titlesection/>
      <News/>
      </div>
      </>
    )
  }
}
