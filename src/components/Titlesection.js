import React, { Component } from "react";
import { AiOutlineWallet } from "react-icons/ai";
import NewsSectionsNavbar from "./NewsSectionsNavbar";

class Titlesection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const { isHovered } = this.state;

    const cardStyle = {
      width: "400px",
      backgroundColor: "#b44d5f",
      border: isHovered ? "5px solid #ba7c87" : "5px solid pink",
      borderRadius: "0px",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      transform: isHovered ? "scale(1.08)" : "scale(1)",
      boxShadow: isHovered ? "8px 8px 25px rgba(0, 0, 0, 0.9)" : "none",
    };
    return (
      <>
        <div className="d-flex justify-content-end align-items-center">
          <div>
            <NewsSectionsNavbar onButtonCategoryChange={this.props.onCategoryChange} />
          </div>
          <div
            className="d-flex justify-content-center align-items-center"
            style={cardStyle}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
          >
            <h1 style={{ fontFamily: "fantasy" }}>
              News Tracker <AiOutlineWallet style={{ marginBottom: "5px" }} />
            </h1>
          </div>
          <div
            className="d-flex justify-content-around align-items-center"
            style={{
              width: "300px",
              backgroundColor: "#564ea0",
              marginLeft: "15%",
            }}
          >
            <div
              className="border d-flex justify-content-center align-items-center card-hover1"
              style={{
                width: "150px",
                height: "40px",
                fontSize: "12px",
                borderRadius: "10px",
                backgroundColor: "#b44d5f",
              }}
            >
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="switchCheckDefault"
                />
                <label
                  className="form-check-label"
                  htmlFor="switchCheckDefault"
                >
                  Enable Light Mode
                </label>
              </div>
            </div>
            <div>
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  height: "30px",
                  width: "120px",
                  paddingTop: "4px",
                }}
              >
                <button
                  type="button"
                  className="btn border"
                  style={{
                    height: "30px",
                    width: "30px",
                    backgroundColor: "black",
                    borderRadius: "5px",
                    marginLeft: "3px",
                  }}
                ></button>
                <button
                  type="button"
                  className="btn border"
                  style={{
                    height: "30px",
                    width: "30px",
                    backgroundColor: "black",
                    borderRadius: "5px",
                    marginLeft: "3px",
                  }}
                ></button>
                <button
                  type="button"
                  className="btn border"
                  style={{
                    height: "30px",
                    width: "30px",
                    backgroundColor: "black",
                    borderRadius: "5px",
                    marginLeft: "3px",
                  }}
                ></button>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <strong>Themes</strong>
              </div>
            </div>
          </div>
        </div>
        <style>
        {`
          .card-hover1 {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .card-hover1:hover {
            transform: scale(0.98);
            box-shadow: 8px 8px 25px rgba(0, 0, 0, 0.5);
          }
        `}
      </style>
      </>
    );
  }
}

export default Titlesection;
