import { useState,useEffect } from "react";
import QuestionsData from "../data/QuestionsData";

const Quiz = () => {
  //ใช้เก็บลำดับคำถาม
  const [current , setCurrent] = useState(0) //เริ่มต้นที่ 0 คือ ให้เริ่่มคำถามจาก array index0 ใน data
  const [selectChoice , setSelectChoice] = useState('')

  useEffect(() => {
    checkAnswer()
  },[selectChoice])

  const checkAnswer = () => {
    if(selectChoice != ""){
if(selectChoice === QuestionsData[current].answer ){
alert("Woww! you right ^0^");
}else{
  alert("Oops! you wrong T_T")
}
    }
  }

  return (
    <div className="quiz">
      <h2>{QuestionsData[current].question}</h2>
      <div className="choice">
        <button onClick={()=>setSelectChoice("A")}>{QuestionsData[current].A}</button>
        <button onClick={()=>setSelectChoice("B")}>{QuestionsData[current].B}</button>
        <button onClick={()=>setSelectChoice("C")}>{QuestionsData[current].C}</button>
        <button onClick={()=>setSelectChoice("D")}>{QuestionsData[current].D}</button>

      </div>
      <p>{`${current+1} / ${QuestionsData.length}`}</p>
    </div>
  );
};

export default Quiz;
