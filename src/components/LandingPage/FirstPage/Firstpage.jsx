import React from "react";
import "./firstpage.css";
import Ellipse from "../../../assets/Ellipse.png";
import GirlImage from "../../../assets/girl with basket.png";

const Firstpage = () => {
  return (
    <div className="firstPageCont">
      <div className="firstPage">
        <div className="writeUpCont">
          <h1 className="writeUp">
            Manage <span>Client's</span>track orders of your laundry operations
            all in one place
          </h1>
          <div className="buttons">
            <a href="#">Get Started</a>
            <a href="#">Learn More</a>
          </div>
        </div>
        <div className="girlImage">
          <img src={Ellipse} alt="" />
          <img src={GirlImage} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Firstpage;
