import React from "react";
import "./Footer.css";

export default function Footer() {
  let currentYear = new Date().getFullYear();

  return (
    <>
      <div className="main-footer-content">
        <div className="main-footer-message">
          <span> Copyright @ {currentYear} | Mayank Vishnoi</span>
        </div>
      </div>
    </>
  );
}
