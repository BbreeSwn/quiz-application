import { useState } from "react";
import QuestionsData from "../data/QuestionsData";

const Quiz = () => {
  //ใช้เก็บลำดับคำถาม
  const [current , setCurrent] = useState(0) //เริ่มต้นที่ 0 คือ ให้เริ่่มคำถามจาก array index0 ใน data
  return (
    <div className="quiz">
      <h2>{QuestionsData[current].question}</h2>
      <div className="choice">
        <button>{QuestionsData[current].A}</button>
        <button>{QuestionsData[current].B}</button>
        <button>{QuestionsData[current].C}</button>
        <button>{QuestionsData[current].D}</button>

      </div>
    </div>
  );
};

export default Quiz;
