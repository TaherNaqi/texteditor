import React, { useState } from "react";
// import Textformat from "./Components/Textformat";
// import Textcolor from "./Components/Textcolor";
import "./App.css";

function App() {
  const styles = {
    bolded: {
      fontWeight: "bold",
    },
    italiced: {
      fontStyle: "italic",
    },
    underlined: {
      textDecoration: "underline",
    },
    red: {
      color: "red",
    },

    yellow: {
      color: "yellow",
    },

    blue: {
      color: "blue",
    },

    purple: {
      color: "purple",
    },

    green: {
      color: "green",
    },
  };
  const [currentstyle, setstyle] = useState("bolded");
  // console.log(styles[currentstyle]); for testing
  return (
    <div className="App">
      <h1>Text Editor</h1>
      <div>
        <button className="button" onClick={() => setstyle("bolded")}>
          Bold
        </button>
        <button className="button" onClick={() => setstyle("underlined")}>
          Underline
        </button>
        <button className="button" onClick={() => setstyle("italiced")}>
          Italic
        </button>
      </div>
      <input style={styles[currentstyle]} placeholder="Enter text here" />
      <div>
        <button className="green-btn" onClick={() => setstyle("green")} />
        <button className="red-btn" onClick={() => setstyle("red")} />
        <button className="yellow-btn" onClick={() => setstyle("yellow")} />
        <button className="blue-btn" onClick={() => setstyle("blue")} />
        <button className="purple-btn" onClick={() => setstyle("purple")} />
      </div>
    </div>
  );
}
export default App;
