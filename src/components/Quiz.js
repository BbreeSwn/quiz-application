import { useState, useEffect, useContext } from "react";
import QuestionsData from "../data/QuestionsData";
import { DataContext } from "../App";

const Quiz = () => {
  //ใช้เก็บลำดับคำถาม
  const [current, setCurrent] = useState(0); //เริ่มต้นที่ 0 คือ ให้เริ่่มคำถามจาก array index0 ใน data
  const [selectChoice, setSelectChoice] = useState("");
  const { score, setScore, setAppState, userAnswer, setUserAnswer } =
    useContext(DataContext);

  useEffect(() => {
    checkAnswer();
  }, [selectChoice]);

  const checkAnswer = () => {
    if (selectChoice != "") {
      setUserAnswer([...userAnswer, selectChoice]);
      if (selectChoice === QuestionsData[current].answer) {
        setScore(score + 1);
        nextQuestion();
      } else {
        nextQuestion();
      }
    }
  };

  const nextQuestion = () => {
    //ก่อนไปคำถามถัดไป ให้เคลีย choice ก่่อน
    setSelectChoice("");
    //เช็คคำถามว่าถึงข้อสุดท้ายหรือยัง
    if (current === QuestionsData.length - 1) {
      setAppState("score");
    }
    setCurrent(current + 1);
  };

  return (
    <div className="quiz">
      <h2>{QuestionsData[current].question}</h2>
      <div className="choice">
        <button onClick={() => setSelectChoice("A")}>
          {QuestionsData[current].A}
        </button>
        <button onClick={() => setSelectChoice("B")}>
          {QuestionsData[current].B}
        </button>
        <button onClick={() => setSelectChoice("C")}>
          {QuestionsData[current].C}
        </button>
        <button onClick={() => setSelectChoice("D")}>
          {QuestionsData[current].D}
        </button>
      </div>
      <p>{`${current + 1} / ${QuestionsData.length}`}</p>
    </div>
  );
};

export default Quiz;
