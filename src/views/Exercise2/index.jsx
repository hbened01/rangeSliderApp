import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { Range, Chip } from "./../../components"
import { getFixedRange } from "./../../services";
import "./index.less"

const Exercise2 = () => {
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(10000)
  const [step, setStep] = useState(100)
  const [value, setValue] = useState({ min, max })
  const navigate = useNavigate();
  const goToNextExercise = (e) => {
    e.preventDefault();
    navigate('/exercise1');
  };

  useEffect(() => {
    getFixedRange()
      .then((data) => {
        console.log(data)
        // const {min, max, step} = data;
        // setMin(min ?? 0);
        // setMax(max ?? 0);
        // setStep(step ?? 0);
        // setValue({
        //   min: min ?? 0,
        //   max: max ?? 0
        // });
      });
  }, []);
      
  return (
    <div className="content-range">
      <Range min={min} max={max} step={step} value={value} onChange={setValue} />
      <Chip head={`Min`} content={`result value is: ${value.min}€`} />
      <Chip head={`Max`} content={`result value is: ${value.max}€`} />
      <button className="button-go" role="button" onClick={goToNextExercise}>Go to Exercise 1</button>
    </div>
  );
};

export default Exercise2;