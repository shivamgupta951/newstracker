// NewsSectionsNavbar.js
import React, { Component } from "react";

export class NewsSectionsNavbar extends Component {
  render() {
    return (
      <>
        <div style={{backgroundColor: "black",width: "585px"}}>
          <div className="d-flex justify-content-center align-items-center">
            <h4 style={{ color: "#c84d4d" }}>News Category</h4>
          </div>
          <div className="d-flex justify-content-around align-items-center" style={{ backgroundColor: "grey", width: "585px", height: "30px", marginBottom: "0px", marginRight: "10px", fontFamily: "cursive" }}>
            <strong style={{ border: "2px solid" }}>Newsbar</strong>

            {/* Buttons calling the correct prop */}
            <button onClick={() => this.props.onButtonCategoryChange("business")} type="button" className="btn btn-sm card-hover2">business</button>
            <button onClick={() => this.props.onButtonCategoryChange("entertainment")} type="button" className="btn btn-sm card-hover2">entertainment</button>
            <button onClick={() => this.props.onButtonCategoryChange("world")} type="button" className="btn btn-sm card-hover2">world</button>
            <button onClick={() => this.props.onButtonCategoryChange("health")} type="button" className="btn btn-sm card-hover2">health</button>
            <button onClick={() => this.props.onButtonCategoryChange("science")} type="button" className="btn btn-sm card-hover2">science</button>
            <button onClick={() => this.props.onButtonCategoryChange("sports")} type="button" className="btn btn-sm card-hover2">sports</button>
            <button onClick={() => this.props.onButtonCategoryChange("technology")} type="button" className="btn btn-sm card-hover2">technology</button>

          </div>
        </div>
        <style>
          {`
            .card-hover2 {
              transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            .card-hover2:hover {
              transform: scale(1.04);
              box-shadow: 8px 8px 25px rgba(0, 0, 0, 0.5);
              border: 2px solid black;
            }
          `}
        </style>
      </>
    );
  }
}

export default NewsSectionsNavbar;
