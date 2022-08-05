import React, { useState } from "react";
import Values from "values.js";
import Colors from "./Colors";

function Home() {
  const [inputValue, setInputValue] = useState('#f15025');
  const [err, setErr] = useState(false);
  const [list , setList] =useState(new Values('#f15025').all(10))

  const submitHandler = (e) => {
    e.preventDefault(e);
    try {
      const color = new Values(inputValue).all(10);
      setList(color)
      setErr(false)
    } catch (error) {
        setErr(true)
    }
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <p>Generate Colors</p>
        <div className="form-input">
        <input
          className={err ? "inp err" : "inp"}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder = '#f15025'
        />
        <button className="btn">Generate</button>
        </div>
      </form>
      <div className="container">{list.map((color , index)=>{return <Colors key={index} color = {color} />})}</div>
    </div>
  );
}

export default Home;
