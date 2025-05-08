import React, { Component } from "react";
import { AiOutlineWallet } from "react-icons/ai";
import NewsSectionsNavbar from "./NewsSectionsNavbar";
import profileimage from "../images/ProfileImage.png";
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
        <div className="d-flex justify-content-end ">
          <div>
            <NewsSectionsNavbar
              onButtonCategoryChange={this.props.onCategoryChange}
            />
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
            className="d-flex justify-content-around"
            style={{
              width: "300px",
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
                marginRight: "10px",
                marginTop: "2px"
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
              <div className="d-flex justify-content-center align-items-center">
                <div
                  className="d-flex justify-content-start align-items-center"
                  style={{
                    height: "40px",
                    border: "2px solid red",
                    width: "130px",
                    marginRight: "10px",
                    borderTop: "0px",
                    borderRadius: "5px",
                  }}
                >
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                      height: "38px",
                      width: "70px",
                      fontSize: "10px",
                      color: "red",
                      fontFamily: "cursive",
                    }}
                  >
                    {" "}
                    Created By
                  </div>
                  <div
                    style={{
                      height: "30px",
                      border: "1px solid grey",
                      width: "30px",
                      marginLeft: "5px",
                      borderRadius: "50%",
                    }}
                  >
                    <img
                      src={profileimage}
                      alt="About TextUtils Banner"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "50%", // Optional: for a circular image
                      }}
                    />
                  </div>
                </div>
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
