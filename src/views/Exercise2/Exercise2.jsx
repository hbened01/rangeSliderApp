import React, { useState, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom";
import { Range, Chip } from "../../components"
import getFixedRange from "../../services/getFixedRange";
import "./Exercise2.less"

const Exercise2 = () => {
  // SET INITIALIZATION STATES
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(0)
  const [step, setStep] = useState(0)
  const [value, setValue] = useState({ min, max })
  const [range, setRange] = useState([])
  const navigate = useNavigate();
  const location = useLocation();

  // ONCLICK TO NEXT EXERCISE:
  const handleGoToNextExercise = (e) => {
    e.preventDefault();
    console.log(location, window.location.pathname)
    // navigate('/exercise1');
  };

  useEffect(() => {
    // GET FIXED RANGE FROM API MOCKING ASYNC:
    getFixedRange()
      .then((data) => {
        // SORT VALUES OF FIXED ARRAY CASE: 
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
      {/* RANGE SLIDER COMPONENT NORMAL CASE NOT RANGE FIXED */}
      <Range min={min} max={max} step={step} value={value} range={range} onChangeValue={setValue} />
      {/* CHIP TEXT COMPONENTS */}
      <Chip head={`Min`} content={`result value is: ${value.min}€`} />
      <Chip head={`Max`} content={`result value is: ${value.max}€`} />
      {/* GO TO NEXT EXERCISE */}
      <button className="button-go" role="button" onClick={handleGoToNextExercise}>Go to Exercise 1</button>
    </div>
  );
};

export default Exercise2;