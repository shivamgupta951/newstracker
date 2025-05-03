import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Titlesection from './components/Titlesection';
import LoadingBar from "react-top-loading-bar";
/* add symbols in the title and go for the vedio part! */
export default class App extends Component {
  constructor() {
    super();
    // Added state to store the selected news category
    this.state = {
      category: "business",
      progress: 0,
      apikey: process.env.REACT_APP_NEWS_API
    };
  }
  // Function to update the category state when button is clicked
  handleCategoryChange = (newCategory) => {
    this.setState({ category: newCategory });
  };
  setprogress = (value) =>
  {
    this.setState({progress: value});
  };
  render() {
    return (
      <>
      {/*create different sections and make the page of only 6 articles and page buttons at the bottom*/}
      <div style={{backgroundColor: "#111316",height: "1300px"}}>
      <Navbar/>
      <LoadingBar
        color="#f11946"
        height={3}
        progress={this.state.progress}
      />
      <Titlesection onCategoryChange={this.handleCategoryChange}/>
      <News apiKey={this.state.apikey} setProgress={this.setprogress} category={this.state.category}/>
      </div>
      </>
    )
  }
}
