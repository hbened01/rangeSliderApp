import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Range, Chip } from "./../../components";
import { getNormalRange } from "./../../services";
import "./index.less";

const Exercise1 = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [step, setStep] = useState(100);
  const [value, setValue] = useState({ min, max });
  const navigate = useNavigate();
  const goToNextExercise = (e) => {
    e.preventDefault();
    navigate("/exercise2");
  };

  useEffect(() => {
    getNormalRange()
      .then((data) => {
        const {min, max, step} = data;
        setMin(min ?? 0);
        setMax(max ?? 0);
        setStep(step ?? 0);
        setValue({
          min: min ?? 0,
          max: max ?? 0
        });
      });
  }, []);

  return (
    <div className="content-range">
      <Range
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={setValue}
      />
      <Chip head={`Min`} content={`result value is: ${value.min}€`} />
      <Chip head={`Max`} content={`result value is: ${value.max}€`} />
      <button className="button-go" role="button" onClick={goToNextExercise}>
        Go to Exercise 2
      </button>
    </div>
  );
};

export default Exercise1;
