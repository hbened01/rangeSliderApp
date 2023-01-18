import React, { useState, Fragment, useRef, useEffect } from 'react'
import './index.less'

const Range = ({ min, max, step, value, range, onChange }) => {
  const [minValue, setMinValue] = useState(value ? value.min : min);
  const [maxValue, setMaxValue] = useState(value ? value.max : max);

  useEffect(() => {
    if (value) {
      setMinValue(value.min);
      setMaxValue(value.max);
    }
  }, [value]);

  const handleMinChange = e => {
    e.preventDefault();
    const newMinVal = Math.min(+e.target.value, maxValue - step);
    if (!value) setMinValue(newMinVal);
    if ( range.length > 0 ) {
      if (range.indexOf(newMinVal) !== -1) {
        onChange({ min: newMinVal, max: maxValue });
      }
    } else {
      onChange({ min: newMinVal, max: maxValue });
    }
  };

  const handleMaxChange = e => {
    e.preventDefault();
    const newMaxVal = Math.max(+e.target.value, minValue + step);
    if (!value) setMaxValue(newMaxVal);
    if ( range.length > 0 ) {
      if (range.indexOf(newMaxVal) !== -1) {
        onChange({ min: minValue, max: newMaxVal });
      }
    } else {
      onChange({ min: minValue, max: newMaxVal });
    }
  };

  const minPos = ((minValue - min) / (max - min)) * 100;
  const maxPos = ((maxValue - min) / (max - min)) * 100;

  return (
    <div className="wrapper">

      <div className="input-wrapper">
        <input
          className="input"
          type="range"
          value={minValue}
          min={min}
          max={max}
          step={step}
          onChange={handleMinChange}
        />
        <input
          className="input"
          type="range"
          value={maxValue}
          min={min}
          max={max}
          step={step}
          onChange={handleMaxChange}
        />
      </div>

      <div className="control-wrapper">
        <div className="control" style={{ left: `${minPos}%` }} >
          <span>
            {value.min}€
          </span>
        </div>
        <div className="rail">
          <div
            className="inner-rail" 
            style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }}
          />
        </div>
        <div className="control" style={{ left: `${maxPos}%` }} >
          <span>
            {value.max}€
          </span>
        </div>
      </div>

    </div>
  );
};

export default Range;