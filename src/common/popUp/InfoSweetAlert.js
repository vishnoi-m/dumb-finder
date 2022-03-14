import React, { useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import "./SweetAlert.css";

export default function DumbSweetAlert(props) {
  const [buttons, setButtons] = useState(null);

  const openDumbPopUp = () => {
    props.infoAlert();
  };

  const openConfirmPopUp = () => {
    props.dumbAlertConfirm();
  };

  const closePopUp = () => {
    props.handleClosePopUp();
  };

  const handleNo = () => {
    console.log(props.noBoolean);
    props.handleNo();
  };

  const handleNoMovement = () => {
    props.handleNoMovement();
  };

  const customButton = () => {
    switch (props.buttonType) {
      case "Continue":
        setButtons(
          <button className="info-button" onClick={openDumbPopUp}>
            {props.button}
          </button>
        );
        break;
      case "Confirm":
        setButtons(
          <div className="confirm-button-container">
            <div className="no">
              {props.noBoolean === true ? (
                <div className="no-separator" style={{ paddingLeft: "50%" }}>
                  <button
                    className=" confirm-button no-button"
                    onClick={handleNoMovement}
                  >
                    {props.buttonReject}
                  </button>
                </div>
              ) : (
                <div className="no-separator">
                  <button
                    className=" confirm-button no-button"
                    onClick={handleNo}
                  >
                    {props.buttonReject}
                  </button>
                </div>
              )}
            </div>
            <div className="yes">
              <div className="yes-separator">
                <button className="yes-button" onClick={openConfirmPopUp}>
                  {props.buttonConfirm}
                </button>
              </div>
            </div>
          </div>
        );
        break;
      case "Error":
      case "Close":
        setButtons(
          <button className="info-button" onClick={closePopUp}>
            {props.button}
          </button>
        );
        break;
      default:
        break;
    }
    return buttons;
  };
  return (
    <SweetAlert
      openAnim={false}
      style={{ fontSize: "15px", fontFamily: "Poppins Light" }}
      title={props.title}
      btnSize="sm"
      success={props.buttonType === "Close" ? true : false}
      error={props.buttonType === "Error" ? true : false}
      timeout={props.buttonType === "Close" ? 10000 : null}
      customButtons={
        buttons ? <React.Fragment>{buttons}</React.Fragment> : customButton()
      }
    >
      {props.message}
      <br />
      {props.message2 ? props.message2 : ""}
    </SweetAlert>
  );
}
