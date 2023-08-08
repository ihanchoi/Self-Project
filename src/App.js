import './App.css';
import { useState } from "react";
import './App.css';

function App() {
    let time = new Date().toLocaleTimeString();
    let todaydate = new Date().toLocalDateString();
    const [currentTime, setCurrentTime] = useState(time);

    const updateTime = () => {
      let time = new Date().toLocaleTimeString();
      setCurrentTime(time);
    }

    setInterval(updateTime, 1000);
      return (
          <div className = "clock">
          <h1> {currentTime} </h1>
          <h3> {todaydate} </h3>
          </div>
      )
}

export default App;