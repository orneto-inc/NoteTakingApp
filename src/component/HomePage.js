import React from "react";
import "./styles.css";

import BtnGroup from "./BtnGroup";

const HomePage = () => {
  return (
    <div className="homepage">
      <BtnGroup />
      <div className="hearing-wrapper">
        <p className="heading">All Notes</p>
      </div>
    </div>
  );
};
export default HomePage;
