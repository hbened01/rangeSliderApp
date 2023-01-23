import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Range, Chip } from "../../components";
import getNormalRange from "../../services/getNormalRange";
import "./Exercise1.less";

const Exercise1 = () => {
  // SET INITIALIZATION STATES
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [step, setStep] = useState(100);
  const [value, setValue] = useState({ min, max });
  const navigate = useNavigate();

  // ONCLICK TO NEXT EXERCISE:
  const handleGoToNextExercise = (e) => {
    e.preventDefault();
    navigate("/exercise2");
  };

  useEffect(() => {
    // GET NORMAL RANGE FROM API MOCKING ASYNC:
    getNormalRange().then((data) => {
      // SET VALUES IN PROPS:
      const { min, max, step } = data;
      setMin(min ?? 0);
      setMax(max ?? 0);
      setStep(step ?? 0);
      setValue({
        min: min ?? 0,
        max: max ?? 0,
      });
    });
  }, []);

  return (
    <div className="content-range">
      {/* RANGE SLIDER COMPONENT NORMAL CASE NOT RANGE FIXED */}
      <Range
        min={min}
        max={max}
        step={step}
        value={value}
        range={[]}
        onChangeValue={setValue}
      />
      {/* CHIP TEXT COMPONENTS */}
      <Chip head={`Min`} content={`result value is: ${value.min}€`} />
      <Chip head={`Max`} content={`result value is: ${value.max}€`} />
      {/* GO TO NEXT EXERCISE */}
      <button
        className="button-go"
        id="button-go-exercise2"
        onClick={handleGoToNextExercise}
      >
        Go to Exercise 2
      </button>
    </div>
  );
};

export default Exercise1;
