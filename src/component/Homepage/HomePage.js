import React from "react";
import "../../assets/styles.css";
import RightSideBar from "../RightSideBar/RightSideBar";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="rightSideBar-section">
        <RightSideBar />
      </div>
      <div className="homePage-section">
        This is Homepage Section
      </div>
    </div>
  );
};
export default HomePage;
