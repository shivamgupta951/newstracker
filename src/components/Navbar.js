import React, { Component } from "react";
import { HiOutlineHome } from "react-icons/hi";
import { IoIosInformationCircle } from "react-icons/io";
import { IoIosContacts } from "react-icons/io";
import { NavLink } from "react-router-dom"; // ✅ Imported NavLink

export class Navbar extends Component {
  render() {
    return (
      <>
        <div style={{ backgroundColor: "#8fadcb" }}>
          <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#8fadcb" }}>
            <div className="container-fluid">
              {/* ✅ Changed <a> to NavLink for brand/logo */}
              <NavLink
                className="navbar-brand"
                to="/"
                style={{ border: "2px solid black", padding: "2px", outline: "2px solid white" }}
              >
                <strong>NewsTracker</strong>
              </NavLink>

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

                  {/* ✅ Replaced <a> with NavLink for routing */}
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                      Home <HiOutlineHome style={{ marginBottom: "3px" }} />
                    </NavLink>
                  </li>

                  <li className="nav-item" style={{ marginLeft: "4px" }}>
                    <NavLink className="nav-link" to="/about">
                      About App <IoIosInformationCircle style={{ marginBottom: "3px" }} />
                    </NavLink>
                  </li>

                  <li className="nav-item" style={{ marginLeft: "4px" }}>
                    <NavLink className="nav-link" to="/contactus">
                      Contact Us <IoIosContacts style={{ marginBottom: "3px" }} />
                    </NavLink>
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
