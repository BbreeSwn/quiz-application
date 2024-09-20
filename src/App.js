import { useState, createContext } from "react";
import './App.css'
import Menu from "./components/Menu";
import Quiz from "./components/Quiz";
import Score from "./components/Score";

export const DataContext = createContext();

function App() {
  const [appState, setAppState] = useState("menu");
  const [score , setScore] = useState(0)
  const [detail , setDetail] = useState("")
  const [userAnswer , setUserAnswer] = useState([])

  return (
    // ทุกๆ component จะสามารถเข้าถึง context ได้ โดยการเปลี่ยนแปลงค่า appState
    <DataContext.Provider value={{ appState, setAppState , score , setScore , detail , setDetail , userAnswer , setUserAnswer}}>
      <div className="App">
        <h1>Quiz Application</h1>
        {appState === "menu" && <Menu />}
        {appState === "quiz" && <Quiz />}
        {appState === "score" && <Score />}
      </div>
    </DataContext.Provider>
  );
}

export default App;
