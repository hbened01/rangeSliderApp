import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { Range, Chip } from "./../../components"
import { getFixedRange } from "./../../services";
import "./index.less"

const Exercise2 = () => {
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(0)
  const [step, setStep] = useState(0)
  const [value, setValue] = useState({ min, max })
  const [range, setRange] = useState([])
  const navigate = useNavigate();
  const goToNextExercise = (e) => {
    e.preventDefault();
    navigate('/exercise1');
  };

  useEffect(() => {
    getFixedRange()
      .then((data) => {
        const range = data?.valueRanges.sort((a, b) => a - b)
        setMin(range[0]);
        setMax(range[range.length -1]);
        setStep(1);
        setRange(range);
        setValue({
          min: range[0],
          max: range[range.length -1]
        });
      });
  }, []);
      
  return (
    <div className="content-range">
      <Range min={min} max={max} step={step} value={value} range={range} onChange={setValue} />
      <Chip head={`Min`} content={`result value is: ${value.min}€`} />
      <Chip head={`Max`} content={`result value is: ${value.max}€`} />
      <button className="button-go" role="button" onClick={goToNextExercise}>Go to Exercise 1</button>
    </div>
  );
};

export default Exercise2;