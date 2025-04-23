import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let {title , description , imageurl ,newsurl} = this.props;
    return (
      <>
        <div className="card card-hover" style={{width: "12rem",backgroundColor: "#763a3a"}}>
          <img className="card-img-top" src={imageurl} alt="Card cap" style={{width: "12rem",height:"80px"}}/>
          <div className="card-body">
            <h5 className="card-title" style={{fontSize: "11px"}}>{title}</h5>
            <p className="card-text" style={{fontSize: "10px"}}>
              {description}
            </p>
            <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
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
            box-shadow: 8px 8px 25px rgba(0, 0, 0, 0.5);
          }
        `}
      </style>
      </>
    );
  }
}

export default Newsitem;
