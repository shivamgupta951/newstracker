import React, { Component } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import profileimage from "../images/ProfileImage.png";
export class Contact extends Component {
  render() {
    return (
      <>
        <div
          className="d-flex justify-content-end align-items-center"
          style={{ height: "40px" }}
        >
          <div
            className="d-flex justify-content-start align-items-center"
            style={{
              height: "40px",
              border: "2px solid red",
              width: "130px",
              marginRight: "10px",
              borderTop: "0px",
              borderRadius: "5px"
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
        <div className="container" style={{ paddingTop: "50px" }}>
          <div
            className="d-flex justify-content-start align-items-center"
            style={{
              paddingLeft: "500px",
              textShadow: "4px 4px 20px black",
            }}
          >
            <h1 style={{ color: "#eccbcb" }}>Contact Page</h1>
          </div>

          <div className="d-flex" style={{ paddingTop: "50px" }}>
            {/* Left Section - Owner Contacts */}
            <div
              className="border border-danger"
              style={{ width: "600px", height: "600px", borderRadius: "15px" }}
            >
              <h2
                className="d-flex justify-content-around align-items-center"
                style={{
                  height: "70px",
                  marginTop: "20px",
                  textShadow: "4px 4px 10px black",
                  color: "#eccbcb",
                }}
              >
                <strong>Owner Contacts</strong>
              </h2>

              {/* Top Card Row */}
              <div
                className="d-flex justify-content-around align-items-center"
                style={{ height: "250px" }}
              >
                {/* Instagram Card */}
                <div
                  className="card card-hover" // Added card-hover class
                  style={{
                    width: "10rem",
                    color: "black",
                    height: "180px",
                    backgroundColor: "#3f8d9d",
                    border: "3px solid black",
                    boxShadow: "2px 2px 10px 2px black",
                  }}
                >
                  <div className="card-body">
                    <h1 className="d-flex justify-content-center">
                      <i
                        className="bi bi-instagram"
                        style={{ fontSize: "60px" }}
                      ></i>
                    </h1>
                    <h6 className="card-title d-flex justify-content-center my-4">
                      shivam_gupta951
                    </h6>
                  </div>
                </div>

                {/* Email Card */}
                <div
                  className="card card-hover" // Added card-hover class
                  style={{
                    width: "10rem",
                    color: "black",
                    height: "180px",
                    backgroundColor: "#3f8d9d",
                    border: "3px solid black",
                    boxShadow: "2px 2px 10px 2px black",
                  }}
                >
                  <div className="card-body">
                    <h1 className="d-flex justify-content-center">
                      <i
                        className="bi bi-envelope-at"
                        style={{ fontSize: "60px" }}
                      ></i>
                    </h1>
                    <h6
                      className="card-title d-flex justify-content-center my-4"
                      style={{ fontSize: "13px" }}
                    >
                      <strong>sg6034209@gmail.com</strong>
                    </h6>
                  </div>
                </div>
              </div>

              {/* Bottom Card Row */}
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "250px" }}
              >
                {/* Phone Card */}
                <div
                  className="card card-hover" // Added card-hover class
                  style={{
                    width: "10rem",
                    color: "black",
                    height: "180px",
                    backgroundColor: "#3f8d9d",
                    border: "3px solid black",
                    boxShadow: "2px 2px 10px 2px black",
                  }}
                >
                  <div className="card-body">
                    <h1 className="d-flex justify-content-center">
                      <i
                        className="bi bi-telephone-fill"
                        style={{ fontSize: "60px" }}
                      ></i>
                    </h1>
                    <h6 className="card-title d-flex justify-content-center my-4">
                      93680790XX
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - User Form */}
            <div
              className="border border-danger"
              style={{
                width: "700px",
                height: "600px",
                borderRadius: "15px",
                marginLeft: "30px",
              }}
            >
              <h2
                className="d-flex justify-content-around align-items-center"
                style={{
                  height: "70px",
                  marginTop: "20px",
                  textShadow: "4px 4px 10px black",
                  color: "#eccbcb",
                }}
              >
                <strong>User Contacts</strong>
              </h2>

              <form
                className="row g-3 d-flex justify-content-center align-items-center"
                style={{ height: "400px", color: "white" }}
              >
                {/* Name */}
                <div className="col-md-4">
                  <label htmlFor="validationDefault01" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefault01"
                    required
                  />
                </div>

                {/* Instagram Username */}
                <div className="col-md-4">
                  <label
                    htmlFor="validationDefaultUsername"
                    className="form-label"
                  >
                    <i
                      className="bi bi-instagram"
                      style={{ fontSize: "15px", marginRight: "5px" }}
                    ></i>
                    Username
                  </label>
                  <div className="input-group">
                    <span className="input-group-text" id="inputGroupPrepend2">
                      @
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      id="validationDefaultUsername"
                      aria-describedby="inputGroupPrepend2"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="col-md-6">
                  <label htmlFor="validationDefault03" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="validationDefault03"
                    required
                  />
                </div>

                {/* State */}
                <div className="col-md-3">
                  <label htmlFor="validationDefault04" className="form-label">
                    State
                  </label>
                  <select
                    className="form-select"
                    id="validationDefault04"
                    required
                  >
                    <option selected disabled value="">
                      Choose...
                    </option>
                    <option>Andhra Pradesh</option>
                    <option>Arunachal Pradesh</option>
                    <option>Assam</option>
                    <option>Bihar</option>
                    <option>Chhattisgarh</option>
                    <option>Goa</option>
                    <option>Gujarat</option>
                    <option>Haryana</option>
                    <option>Himachal Pradesh</option>
                    <option>Jharkhand</option>
                    <option>Karnataka</option>
                    <option>Kerala</option>
                    <option>Madhya Pradesh</option>
                    <option>Maharashtra</option>
                    <option>Manipur</option>
                    <option>Meghalaya</option>
                    <option>Mizoram</option>
                    <option>Nagaland</option>
                    <option>Odisha</option>
                    <option>Punjab</option>
                    <option>Rajasthan</option>
                    <option>Sikkim</option>
                    <option>Tamil Nadu</option>
                    <option>Telangana</option>
                    <option>Tripura</option>
                    <option>Uttar Pradesh</option>
                    <option>Uttarakhand</option>
                    <option>West Bengal</option>
                  </select>
                </div>

                {/* Checkbox */}
                <div className="col-12 d-flex justify-content-center align-items-center">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="invalidCheck2"
                      required
                    />
                    <label className="form-check-label" htmlFor="invalidCheck2">
                      Agree to share personal details with owner
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="col-12 d-flex justify-content-center align-items-center">
                  <button className="btn btn-primary" type="submit">
                    Submit form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Custom hover effects added here */}
        <style>
          {`
          .card-hover {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .card-hover:hover {
            transform: scale(1.08);
            box-shadow: 8px 8px 25px rgba(0, 0, 0, 0.5);
          }
        `}
        </style>
      </>
    );
  }
}
export default Contact;
