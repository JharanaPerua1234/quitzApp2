import { useState,useRef } from "react";
import { Button } from "antd";
const QuestionViewer = ({
  data,
  onAnswerUpdate,
  numberOfQuestions,
  activeQuestion,
  onSetActiveQuestion,
  onSetStep,
}) => {
  const [selected, setSelected] = useState("");
  const radiosWrapper = useRef();
  const [error, setError] = useState("");
  const[currentQuestion,setCurrentQuestion]=useState(1)

  return (
    <div>
      <h2>{data.question}</h2>
      
    </div>
  );
};
export default  QuestionViewer;