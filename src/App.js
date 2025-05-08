import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Titlesection from "./components/Titlesection";
import LoadingBar from "react-top-loading-bar";
import About from "./components/About";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/contact";
/* work on light theme and dark theme colour matches in all 3 pages.
   add a personal logo instead of colour pallets
   change the context of about.js fort this app and image 
   add NewsTracker heading same as home page in other pages
   add alert for pages shifting for 3 seconds timer
   work on css styling of other 2 pages 
*/
export default class App extends Component {
  constructor() {
    super();
    // Added state to store the selected news category
    this.state = {
      category: "business",
      progress: 0,
      apikey: process.env.REACT_APP_NEWS_API,
    };
  }
  // Function to update the category state when button is clicked
  handleCategoryChange = (newCategory) => {
    this.setState({ category: newCategory });
  };
  setprogress = (value) => {
    this.setState({ progress: value });
  };
  render() {
    return (
      <>
        <Router>
          <div style={{ backgroundColor: "#111316", height: "1300px" }}>
            <Navbar />
            <LoadingBar
              color="#f11946"
              height={3}
              progress={this.state.progress}
            />
            <Routes>
              <Route path="/about" element={<About />} />{" "}
              <Route path="/contactus" element={<Contact/>} />{" "}
              <Route
                path="/"
                element={
                  <>
                    <Titlesection
                      onCategoryChange={this.handleCategoryChange}
                    />
                    <News
                      apiKey={this.state.apikey}
                      setProgress={this.setprogress}
                      category={this.state.category}
                    />
                  </>
                }
              />{" "}
            </Routes>
          </div>
        </Router>
      </>
    );
  }
}
