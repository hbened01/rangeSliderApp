import React from "react";
import { Link } from "react-router-dom";
import { notFoundImg as img } from "../../assets";
import "./index.less"
const NotFound = () => (
  <div className="img-container">
    <img className="img-not-found" src={img} alt="404 not found page"/>
    <p style={{ textAlign: "center" }}>
      <Link to="/exercise1">Go to Exercise1 </Link>
    </p>
  </div>
);

export default NotFound;
