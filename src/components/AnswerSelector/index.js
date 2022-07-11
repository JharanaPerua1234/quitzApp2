import { useEffect,useState,useRef } from "react";
import { Button } from "antd";
const AnswerSelector=({data,changeHandler})=>{
     const radiosWrapper = useRef();

     useEffect(() => {
       const findCheckedInput =
         radiosWrapper.current.querySelector("input:checked");
       if (findCheckedInput) {
         findCheckedInput.checked = false;
       }
     }, [data]);
    
    return (
      <div >
        <div className="control" ref={radiosWrapper}>
          {data.choices.map((choice, i) => (
            <label className="radio has-background-light" key={i}>
              <input
                type="radio"
                name="answer"
                value={choice}
                onChange={changeHandler}
              />
              <h2>{choice}</h2>
            </label>
          ))}
        </div>
      </div>
    );
}
export default AnswerSelector;