import React from "react";
import { PropTypes } from "prop-types";
import "./ChipComponent.less";

const ChipComponent = ({ head, content }) => {
  return (
    <div className="chip">
      <div className="chip-head">{ head }</div>
      <div className="chip-content">{ content }</div>
    </div>
  );
};

ChipComponent.propTypes = {
  head: PropTypes.string,
  content: PropTypes.string
}

export default ChipComponent;
