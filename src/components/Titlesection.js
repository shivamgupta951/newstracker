import React, { Component } from "react";
import { AiOutlineWallet } from "react-icons/ai";
export class Titlesection extends Component {
  render() {
    return (
      <>
        <div className="d-flex justify-content-end align-items-center">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ width: "700px", backgroundColor: "#b44d5f"}}
          >
            <h1>
              NewsTracker <AiOutlineWallet style={{marginBottom: "5px"}}/>
            </h1>
          </div>
          <div
            className="d-flex justify-content-around align-items-center"
            style={{
              width: "300px",
              backgroundColor: "#564ea0",
              marginLeft: "100px",
            }}
          >
            <div
              className="border d-flex justify-content-center align-items-center"
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
              <div className="d-flex justify-content-center align-items-center" style={{height: "30px",width: "120px",paddingTop: "4px"}}>
                <button type="button" className="btn border" style={{height: "30px",width: "30px",backgroundColor: "black",borderRadius: "5px",marginLeft: "3px"}}></button>
                <button type="button" className="btn border" style={{height: "30px",width: "30px",backgroundColor: "black",borderRadius: "5px",marginLeft: "3px"}}></button>
                <button type="button" className="btn border" style={{height: "30px",width: "30px",backgroundColor: "black",borderRadius: "5px",marginLeft: "3px"}}></button>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <strong>Themes</strong>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Titlesection;
