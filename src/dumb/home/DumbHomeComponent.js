import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DumbHomeComponent.css";
import Header from "../header/DumbHeaderComponent";
import InfoSweetAlert from "../../common/popUp/InfoSweetAlert";
import Footer from "../footer/Footer";
import dumbIllustration from "../../assets/images/dumb0_5.png";

export default function DumbHomeComponent() {
  const [name, setName] = useState("");
  let [dumbAlert, setDumbAlert] = useState(false);
  const [infoAlert, setInfoAlert] = useState(false);
  const [confirmAlert, setConfirmAlert] = useState(false);
  let [keepOnPopUp, setKeepOnPopUp] = useState(false);
  const [error, setError] = useState(false);

  const handleStart = () => {
    if (!name) {
      setError(true);
    } else {
      setInfoAlert(true);
    }
  };

  const handleContinue = () => {
    setInfoAlert(false);
    setDumbAlert(true);
  };

  const handleConfirm = () => {
    setDumbAlert(false);
    setConfirmAlert(true);
  };

  const handleClosePopUp = () => {
    if (error) {
      setError(false);
    } else {
      setConfirmAlert(false);
      setName("");
    }
  };

  const handleNo = () => {
    setDumbAlert(false);
    setKeepOnPopUp(false);
    setKeepOnPopUp(true);
  };

  const handleNoMovement = () => {
    setKeepOnPopUp(false);
    setDumbAlert(true);
  };

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
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <button type="submit" onClick={handleStart}>
                  Start
                </button>
              </div>
            </div>
          </div>
          <div className="illustration-icon">
            <img src={dumbIllustration} alt={"No content found"} />
          </div>
        </div>
        {/* <Footer /> */}
        {infoAlert && (
          <InfoSweetAlert
            name={name}
            infoAlert={handleContinue}
            title={`Hello, ${name} 😉!!`}
            message={
              "Thank you for choosing the Assessment. Please click on continue to start the Q&A."
            }
            buttonType="Continue"
            button="Continue"
          />
        )}

        {dumbAlert && (
          <InfoSweetAlert
            dumbAlertConfirm={handleConfirm}
            title={"1."}
            message={"Do you think of youself as a Dumb person ?"}
            buttonType="Confirm"
            buttonConfirm={"Yes"}
            buttonReject={"No"}
            handleNo={handleNo}
            noBoolean={false}
          />
        )}
        {keepOnPopUp && (
          <InfoSweetAlert
            dumbAlertConfirm={handleConfirm}
            title={"1."}
            message={"Do you think of youself as a Dumb person ?"}
            buttonType="Confirm"
            buttonConfirm={"Yes"}
            buttonReject={"No"}
            handleNoMovement={handleNoMovement}
            noBoolean={true}
          />
        )}
        {confirmAlert && (
          <InfoSweetAlert
            handleClosePopUp={handleClosePopUp}
            title={"I knew it 😂"}
            message={`Congratulation ${name}!!, You actually are DUMB.`}
            message2={"But now with Certification 🏅"}
            buttonType="Close"
            button="Ok"
          />
        )}
        {error && (
          <InfoSweetAlert
            handleClosePopUp={handleClosePopUp}
            title={"Error"}
            message={`Please enter you name first!!.`}
            buttonType="Error"
            button="Ok"
          />
        )}
      </div>
    </>
  );
}
