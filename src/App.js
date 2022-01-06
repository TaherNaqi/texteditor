import React, { useState } from "react";
import Textformat from "./Components/Textformat";
import Textcolor from "./Components/Textcolor";
import "./App.css";

function App() {
  const [styles, setstyle] = useState("");
  return (
    <div className="App">
      <Textformat setstyle={setstyle} />
      <input style={{ styles }} placeholder="Enter text here" />
      <Textcolor setstyle={setstyle} />
    </div>
  );
}
export default App;
