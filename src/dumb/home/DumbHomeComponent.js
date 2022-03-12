import React from "react";
import "./DumbHomeComponent.css";
import Header from "../header/DumbHeaderComponent";
import Footer from "../footer/Footer";
import dumbIllustration from "../../assets/images/dumb0_5.png";

export default function DumbHomeComponent() {
  return (
    <>
      <div className="main-container">
        <Header />
        <div className="home-container">
          <div className="assessment-info">
            <div className="assessment-heading">
              Dumb <br /> Assessment
            </div>
            <div className="assessment-description">
              <p>
                Usually in our life, our beloved Friends and families calls us
                Dumb based on our actions, behaviour and choices of selection.
                <br />
                This assessment will help you to figure out once in for all,
                that if you really are <span> DUMB</span> or <span>NOT</span> .
              </p>
            </div>
            <div className="assessment-option">
              Please Enter you name below and click on Start:
              <div className="assessment-input">
                <input type="text" />
                <button type="submit">Start</button>
              </div>
            </div>
          </div>
          <div className="illustration-icon">
            {/* <div className="illustration-icon-background"></div> */}
            <img src={dumbIllustration} />
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}
