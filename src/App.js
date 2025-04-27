import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Titlesection from './components/Titlesection';
/* add symbols in the title and go for the vedio part! */
export default class App extends Component {
  constructor() {
    super();
    // Added state to store the selected news category
    this.state = {
      category: "business"
    };
  }
  // Function to update the category state when button is clicked
  handleCategoryChange = (newCategory) => {
    this.setState({ category: newCategory });
  };

  render() {
    return (
      <>
      {/*create different sections and make the page of only 6 articles and page buttons at the bottom*/}
      <div style={{backgroundColor: "#111316",height: "1100px"}}>
      <Navbar/>
      <Titlesection onCategoryChange={this.handleCategoryChange}/>
      <News category={this.state.category}/>
      </div>
      </>
    )
  }
}
