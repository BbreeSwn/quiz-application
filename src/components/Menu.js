import { useContext } from "react"
import { DataContext } from "../App"


const Menu = () => {
const {setAppState} = useContext(DataContext)
  return (
    <div className="menu">
      <h1>Let's play together!</h1>
      <button onClick={()=>setAppState("quiz")}>Let's start</button>
      </div>
  )
}

export default Menu
