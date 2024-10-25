import React from "react";
import "./TrustedBrands.css";
import TMobile from "../../../assets/TMobile.png";
import M from "../../../assets/M.png";
import N from "../../../assets/N.png";
import orange from "../../../assets/orange.png";

const TrustedBrands = () => {
  return (
    <div>
      <div className="trustedBrands">
        <p>Trusted by:</p>
        <div className="brandImages">
          <img src={TMobile} alt="" />
          <img src={M} alt="" />
          <img src={N} alt="" />
          <img src={orange} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TrustedBrands;
