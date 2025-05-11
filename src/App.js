import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import Titlesection from "./components/Titlesection";
import LoadingBar from "react-top-loading-bar";
import About from "./components/About";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/contact";
import Alert from "./components/Alert";
export default class App extends Component {
  constructor() {
    super();
    // Added state to store the selected news category
    this.state = {
      category: "business",
      progress: 0,
      apikey: process.env.REACT_APP_NEWS_API,
      lightmode: false,
      alert: "dark",
      basealert: true,
      alerttimer: false,
    };
  }
  // Function to update the category state when button is clicked
  handleCategoryChange = (newCategory) => {
    this.setState({ category: newCategory });
  };
  handlelightmode = () => {
    this.setState(
      (prevState) => {
        const newLightMode = !prevState.lightmode;
        return {
          lightmode: newLightMode,
          alert: newLightMode ? "light" : "dark",
          basealert: false,
          alerttimer: true,
        };
      },
      () => {
        setTimeout(() => {
          this.setState({ alerttimer: false });
        }, 3000);
      }
    );
  };
  setprogress = (value) => {
    this.setState({ progress: value });
  };
  render() {
    const { lightmode } = this.state;
    const backgroundColor = lightmode ? "#2f558f" : "#111316";
    return (
      <>
        <Router>
          <div
            className="maindiv"
            style={{ backgroundColor, height: "1300px" }}
          >
            <Navbar />
            <LoadingBar
              color="#f11946"
              height={3}
              progress={this.state.progress}
            />
            {this.state.alerttimer && !this.state.basealert && (
              <Alert title={this.state.alert} />
            )}
            <Routes>
              <Route path="/about" element={<About />} />{" "}
              <Route path="/contactus" element={<Contact />} />{" "}
              <Route
                path="/"
                element={
                  <>
                    <Titlesection
                      onCategoryChange={this.handleCategoryChange}
                      modeChange={this.handlelightmode}
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
