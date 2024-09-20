import { useContext } from "react";
import { DataContext } from "../App";
import QuestionsData from "../data/QuestionsData";

const Score = () => {
  const { score, userAnswer, setAppState , setScore } = useContext(DataContext);
  const reStartApp =()=>{
    setScore(0)
    setAppState("menu")
  }
  return (
    <div className="score">
      <h1>Final Score</h1>
      <h2>
        {score} / {QuestionsData.length}
      </h2>

      <div className="answer">
        <h3>Your Answer</h3>
        <ul>
          {QuestionsData.map((question, index) => (
            <li key={index}>
              <div>
                <strong>Question {index + 1} : </strong>
                <span>{question.question}</span>
              </div>
              <div>
                <strong>Your answer : </strong>
                <span>
                  {userAnswer[index]} :{" "}
                  {QuestionsData[index][userAnswer[index]]}
                </span>
              </div>
              <div>
                <strong>Correct answer : </strong>
                <span>{question.detail}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={reStartApp}>Do the quiz again</button>
    </div>
  );
};

export default Score;
