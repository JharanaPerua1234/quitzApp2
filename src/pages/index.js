
import AnswerSelector from "../components/AnswerSelector";
import FeedbackValue from "../components/Feedback";
import { Button } from "antd";
import QuestionViewer from "../components/QuestionViewer";
import Rating from "../components/Rating";
import SubmitButton from "../components/SubmitButton";
import quizData from "../data/quitz.json";
import { useState } from "react";
const QuestionApp = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState("");
  const [error, setError] = useState("");
  // const [rating, setRating] = useState(0);
   const [rating, setRating] = useState(null);
   const [hover, setHover] = useState(null);
  const [feedback, setFeedback] = useState("");
  const[answer,setAnswer]=useState([])

  const onChangeFeedback = (e) => {
    setFeedback(e.target.value);
  };
  // const onChangeRating = (value) => {
  //   setRating(value);
  //   console.log("rating", rating);
  // };

  const changeHandler = (e) => {
    setSelected(e.target.value);
    if (error) {
      setError("");
    }
  };
  
  const onSubmit = (selected) => {
    if (selected === "") {
      return setError("");
    } else {
      setAnswers((index) => [
        {id:quizData.data[activeQuestion].id},
        { rating: rating },
        { correctAnswer: quizData.data[activeQuestion].answer },
        { feedback: feedback },
      ]);
      console.log("answers", answers);
      
    }
  };
//   console.log('answer', answer)
  const nextClickHandler = (e) => {
    if (selected === "") {
      return setError("");
    }
        setRating("");
        setFeedback("");
        setSelected("");


    if (activeQuestion < quizData.data.length - 1) {
      setActiveQuestion(activeQuestion + 1);
      
    }
  };
  return (
    <div className="div">
      <Rating setRating={setRating}  rating={rating} hover={hover} setHover={setHover}/>
      <QuestionViewer
        data={quizData.data[activeQuestion]}
        numberOfQuestions={quizData.data.length}
        activeQuestion={activeQuestion}
        onSetActiveQuestion={setActiveQuestion}
      />
      <AnswerSelector
        data={quizData.data[activeQuestion]}
        changeHandler={changeHandler}
      />
      <FeedbackValue onChange={onChangeFeedback} />
      <SubmitButton onSubmit={onSubmit} />
      <Button type="primary" className="btn" onClick={nextClickHandler}>
        Next
      </Button>
    </div>
  );
};
export default QuestionApp;
