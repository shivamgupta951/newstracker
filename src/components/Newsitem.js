import React, { Component } from "react";
export class Newsitem extends Component {
  getdate = (value) => {
    return value.split("T")[0];
  };
  render() {
    let { title, description, imageurl, newsurl, published, author } =
      this.props;
    return (
      <>
        <div
          className="card card-hover"
          style={{
            width: "12rem",
            backgroundColor: "#763a3a",
            marginTop: "20px",
          }}
        >
          <img
            className="card-img-top"
            src={imageurl}
            alt="Card cap"
            style={{ width: "191px", height: "80px" }}
          />
          <div className="card-body">
            <span className="position-absolute top-0 start-60 translate-middle badge rounded-pill bg-danger" style={{left: "90%", zIndex: "1" , fontSize: "7px"}}>
              {author}
            </span>
            <h5 className="card-title" style={{ fontSize: "11px" }}>
              {title}
            </h5>
            <p className="card-text" style={{ fontSize: "10px" }}>
              {description}
            </p>
            <p className="card-text" style={{ marginBottom: "0px" }}>
              <small style={{ fontSize: "9px" }}>
                <strong>By {author}</strong>
              </small>
            </p>
            <p className="card-text" style={{ marginTop: "0px" }}>
              <small style={{ fontSize: "10px" }}>
                <strong>Published On {this.getdate(published)}</strong>
              </small>
            </p>
            <a
              href={newsurl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark btn-sm"
            >
              Read more
            </a>
          </div>
        </div>
        <style>
          {`
          .card-hover {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .card-hover:hover {
            transform: scale(1.08);
            box-shadow: 8px 8px 25px rgba(0, 0, 0, 0.7);
          }
        `}
        </style>
      </>
    );
  }
}

export default Newsitem;
