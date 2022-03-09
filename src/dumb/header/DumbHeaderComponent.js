import React from "react";
import "./DumbHeaderComponent.css";

export default function DumbHeaderComponent() {
  return (
    <>
      <div className="container">
        <div className="header-content">
          <div className="logo">Dumb</div>
          <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/vishnoi-m" target="blank">
                <i className="fa fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/mayank-vishnoi-503575160"
                target="blank"
              >
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://www.instagram.com/iam_vishnoi/" target="blank">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://portfolio-mayank.herokuapp.com/" target="blank">
                <i className="fa fa-user-circle-o"></i>
              </a>
              {/* <a href="#">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
