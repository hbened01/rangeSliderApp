import React, { useState, useEffect } from 'react'
import { PropTypes } from "prop-types";
import './index.less'

const Range = ({ min, max, step, value, range, onChangeValue }) => {
  // SET STATE:
  const [minValue, setMinValue] = useState(value ? value.min : min)
  const [maxValue, setMaxValue] = useState(value ? value.max : max)

  // VERIFIC IF VALUE CHANGE:
  useEffect(() => {
    if (value) {
      setMinValue(value?.min)
      setMaxValue(value?.max)
    }
  }, [value])

  // SET NEW MIN VALUE IF ONCHANGE ACTIVATE: 
  const handleMinValueChange = e => {
    e.preventDefault()
    const newMinVal = Math.min(+e.target.value, maxValue - step)
    if (!value) setMinValue(newMinVal)
    // IF RANGE FIXED 
    if ( range.length > 0 ) {
      if (range.indexOf(newMinVal) !== -1) {
        onChangeValue({ min: newMinVal, max: maxValue })
      }
      return
    }
    onChangeValue({ min: newMinVal, max: maxValue })
  }

  // SET NEW MIN VALUE IF ONCHANGE ACTIVATE: 
  const handleMaxValueChange = e => {
    e.preventDefault()
    const newMaxVal = Math.max(+e.target.value, minValue + step)
    if (!value) setMaxValue(newMaxVal)
    // IF RANGE FIXED 
    if ( range.length > 0 ) {
      if (range.indexOf(newMaxVal) !== -1) {
        onChangeValue({ min: minValue, max: newMaxVal })
      }
      return
    }
    onChangeValue({ min: minValue, max: newMaxVal })
  }

  // CALCULATE PERCENT OF MIN AND MAX POSITION CONTROL:
  const minPos = ((minValue - min) / (max - min)) * 100
  const maxPos = ((maxValue - min) / (max - min)) * 100

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
          onChange={handleMinValueChange}
        />
        <input
          className="input"
          type="range"
          value={maxValue}
          min={min}
          max={max}
          step={step}
          onChange={handleMaxValueChange}
        />
      </div>

      {/* CONTROL CSS SLIDER REACTIVE FROM INPUTS RANGES MIN AND MAX */}
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

  )
}

Range.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.object,
  range: PropTypes.array,
  onChangeValue: PropTypes.func,
}

export default Range