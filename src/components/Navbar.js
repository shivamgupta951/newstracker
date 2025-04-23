import React, { Component } from "react";
import { HiOutlineHome } from "react-icons/hi";
import { IoIosInformationCircle } from "react-icons/io";
import { IoIosContacts } from "react-icons/io";
export class Navbar extends Component {
  render() {
    return (
      <>
        <div style={{ backgroundColor: "#8fadcb" }}>
          <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#8fadcb" }}>
            <div className="container-fluid">
              <a
                className="navbar-brand"
                href="/"
                style={{ border: "2px solid black", padding: "2px",outline: "2px solid white"}}
              >
                <strong>NewsTracker</strong>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">
                      Home <HiOutlineHome style={{marginBottom: "3px"}}/>
                    </a>
                  </li>
                  <li className="nav-item" style={{marginLeft: "4px"}}>
                    <a className="nav-link" href="/">
                      About App <IoIosInformationCircle style={{marginBottom: "3px"}}/>
                    </a>
                  </li>
                  <li className="nav-item" style={{marginLeft: "4px"}}>
                    <a className="nav-link" href="/">
                      Contact Us <IoIosContacts style={{marginBottom: "3px"}}/>
                    </a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  }
}

export default Navbar;
