import React, { useState, Fragment, useRef, useEffect } from "react";
import "./index.less";

const Chip = ({ head, content }) => {
  return (
    <div className="chip">
      <div className="chip-head">{ head }</div>
      <div className="chip-content">{ content }</div>
    </div>
  );
};

export default Chip;
