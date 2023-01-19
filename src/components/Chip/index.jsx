import React from "react";
import { PropTypes } from "prop-types";
import "./index.less";

const Chip = ({ head, content }) => {
  return (
    <div className="chip">
      <div className="chip-head">{ head }</div>
      <div className="chip-content">{ content }</div>
    </div>
  );
};

Chip.propTypes = {
  head: PropTypes.string,
  content: PropTypes.string
}

export default Chip;
