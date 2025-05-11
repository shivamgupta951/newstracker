import React, { Component } from "react";
import bannerImage from "../images/AboutImage.png";
import profileimage from "../images/ProfileImage.png";
import { FaGithubSquare } from "react-icons/fa";
export class About extends Component {
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
        <div
          className="container d-flex justify-content-between"
          style={{ height: "1200px" }}
        >
          <div className="" style={{ width: "800px" }}>
            <h2
              className="mx-5 d-flex align-items-end"
              style={{
                height: "160px",
                padding: "20px",
                textShadow: "4px 4px 20px black",
                color: "#eccbcb",
              }}
            >
              About NewsTracker
            </h2>
            <div
              className="accordion"
              id="accordionPanelsStayOpenExample"
              style={{ width: "800px" }}
            >
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    <strong>Description</strong>
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  className="accordion-collapse collapse show"
                >
                  <div className="accordion-body">
                    <div className="project-description text-start">
                      <h4>📰 NewsTracker Project Overview</h4>
                      <p>
                        <strong>NewsTracker</strong> is a dynamic, single-page
                        React application designed to deliver real-time news
                        updates across various categories. By integrating with
                        the GNews API, it fetches and displays the latest
                        headlines, ensuring users stay informed about current
                        events.
                      </p>
                      <p>
                        <strong>Created By shivamgupta951 <FaGithubSquare style={{fontSize:"30px"}}/></strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    <strong>Functions of website</strong>
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    <h4>🚀 Key Features</h4>
                    <ul>
                      <li>
                        <strong>Real-Time News Fetching:</strong> Utilizes the
                        GNews API to retrieve up-to-date news articles based on
                        selected categories.
                      </li>
                      <li>
                        <strong>Pagination:</strong> Implements a user-friendly
                        pagination system, displaying six articles per page and
                        allowing seamless navigation through multiple pages of
                        news content.
                      </li>
                      <li>
                        <strong>Responsive Design:</strong> Ensures optimal
                        viewing across devices with a responsive layout that
                        adapts to various screen sizes.
                      </li>
                      <li>
                        <strong>Source Attribution:</strong> Each news card
                        prominently displays the source name, providing users
                        with context about the origin of the information.
                      </li>
                      <li>
                        <strong>Loading Indicator:</strong> Incorporates a
                        loading spinner to enhance user experience by indicating
                        data fetching processes.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    <strong>Further Updates</strong>
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  className="accordion-collapse collapse"
                >
                  <div className="accordion-body">
                    <h4>📈 Future Enhancements</h4>
                    <ul>
                      <li>
                        <strong>Search Functionality:</strong> Allow users to
                        search for news articles using keywords.
                      </li>
                      <li>
                        <strong>User Authentication:</strong> Implement login
                        and registration features for personalized experiences.
                      </li>
                      <li>
                        <strong>Bookmark News:</strong> Add a bookmark section
                        where user can save news and can visit any time when
                        needed.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="d-flex align-items-center"
            style={{ height: "600px" }}
          >
            <img
              src={bannerImage}
              alt="About TextUtils Banner"
              className="img-fluid my-4 card-hover"
              style={{
                maxWidth: "370px",
                borderRadius: "12px",
                boxShadow: "3px 3px 20px 2px black",
              }}
            />
          </div>
        </div>
        <style>
          {`
          .card-hover {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .card-hover:hover {
            transform: scale(0.90);
            box-shadow: 8px 8px 25px rgba(0, 0, 0, 0.5);
          }
        `}
        </style>
      </>
    );
  }
}
export default About;
